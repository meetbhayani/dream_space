export interface AccessibleFieldProps {
  id: string;
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
}

export interface AccessibleValidationMessage {
  id: string;
  message: string;
  type: 'error' | 'success' | 'info';
}

export interface FocusManagementOptions {
  selector?: string;
  focusFirst?: boolean;
  restorePreviousFocus?: boolean;
}

export interface ReducedMotionPreferences {
  prefersReducedMotion: boolean;
  shouldReduceMotion: boolean;
}

export interface ARIAAttributes {
  role?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-live'?: 'off' | 'polite' | 'assertive';
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}

export interface IScreenReaderService {
  buildFieldAriaProps(props: AccessibleFieldProps): ARIAAttributes;
  buildValidationMessage(message: AccessibleValidationMessage): ARIAAttributes;
  createSkipLink(targetId: string, label: string): { href: string; label: string };
  getReducedMotionPreferences(): ReducedMotionPreferences;
  buildKeyboardShortcutHint(keys: string[]): string;
  getSemanticTag(tag: 'section' | 'nav' | 'main' | 'aside' | 'header' | 'footer'): string;
}
