import { FocusManagementOptions, AccessibleValidationMessage } from '../types/accessibility';

export const createValidationMessage = (id: string, message: string, type: AccessibleValidationMessage['type'] = 'error'): AccessibleValidationMessage => ({
  id: `${id}-message`,
  message,
  type
});

export const focusFirstInvalidField = (selector = '[data-invalid="true"]'): void => {
  const element = document.querySelector<HTMLElement>(selector);
  if (element) {
    element.focus();
  }
};

export const manageFocus = ({ selector, focusFirst = true, restorePreviousFocus = false }: FocusManagementOptions = {}): void => {
  const previousActiveElement = document.activeElement as HTMLElement | null;
  const target = selector ? document.querySelector<HTMLElement>(selector) : null;

  if (target && focusFirst) {
    target.focus();
  }

  if (restorePreviousFocus && previousActiveElement && previousActiveElement !== document.body) {
    previousActiveElement.focus();
  }
};

export const getAccessibleLabel = (label: string, required = false): string => `${label}${required ? ' (required)' : ''}`;

export const buildFormA11ySummary = (fields: Array<{ id: string; label: string; error?: string }>): string => fields
  .map((field) => `${field.label}: ${field.error ?? 'valid'}`)
  .join('. ');
