import { ARIAAttributes, AccessibleFieldProps, AccessibleValidationMessage, FocusManagementOptions, ReducedMotionPreferences, IScreenReaderService } from '../types/accessibility';

class AccessibilityService implements IScreenReaderService {
  buildFieldAriaProps(props: AccessibleFieldProps): ARIAAttributes {
    const describedBy: string[] = [];

    if (props.description) {
      describedBy.push(`${props.id}-description`);
    }

    if (props.error) {
      describedBy.push(`${props.id}-error`);
    }

    return {
      role: 'group',
      'aria-label': props.label,
      'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
      'aria-invalid': Boolean(props.error),
      'aria-required': props.required ? true : undefined
    };
  }

  buildValidationMessage(message: AccessibleValidationMessage): ARIAAttributes {
    return {
      role: message.type === 'error' ? 'alert' : 'status',
      'aria-live': message.type === 'error' ? 'assertive' : 'polite',
      'aria-label': message.message
    };
  }

  createSkipLink(targetId: string, label: string): { href: string; label: string } {
    return {
      href: `#${targetId}`,
      label
    };
  }

  getReducedMotionPreferences(): ReducedMotionPreferences {
    return {
      prefersReducedMotion: false,
      shouldReduceMotion: false
    };
  }

  buildKeyboardShortcutHint(keys: string[]): string {
    return keys.join(' + ');
  }

  getSemanticTag(tag: 'section' | 'nav' | 'main' | 'aside' | 'header' | 'footer'): string {
    return tag;
  }
}

export const accessibilityService = new AccessibilityService();
export default accessibilityService;
