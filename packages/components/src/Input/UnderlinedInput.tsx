import { forwardRef } from 'react';
import { Input, InputProps } from './Input';

/**
 * UnderlinedInput Component
 *
 * @deprecated Use <Input lineType="underlined" /> instead
 *
 * This component is a simple alias for Input with lineType="underlined"
 * and will be removed in a future version.
 *
 * @example
 * // Old way (deprecated)
 * <UnderlinedInput placeholder="Search..." />
 *
 * // New way (recommended)
 * <Input lineType="underlined" placeholder="Search..." />
 */
export const UnderlinedInput = forwardRef<HTMLInputElement, Omit<InputProps, 'lineType'>>(
  (props, ref) => {
    return <Input {...props} lineType="underlined" ref={ref} />;
  }
);

UnderlinedInput.displayName = 'UnderlinedInput';

export type { InputProps as UnderlinedInputProps };
