import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export interface RadioProps {
  /**
   * Whether the radio is checked
   */
  checked?: boolean;
  /**
   * Default checked state
   */
  defaultChecked?: boolean;
  /**
   * Whether the radio is disabled
   */
  disabled?: boolean;
  /**
   * Value of the radio
   */
  value?: string | number;
  /**
   * Name attribute for grouping radios
   */
  name?: string;
  /**
   * ID attribute for the radio (used with htmlFor in labels)
   */
  id?: string;
  /**
   * Callback when checked state changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom style
   */
  style?: React.CSSProperties;
}

const RadioContainer = styled.label<{
  $disabled: boolean;
}>`
  position: relative;
  display: inline-block;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ theme }) => {
    const sizeConfig = theme.components.radio.small;
    return `
      width: ${sizeConfig.size};
      height: ${sizeConfig.size};
    `;
  }}
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

const RadioOuter = styled.div<{
  $checked: boolean;
  $disabled: boolean;
  $isFocused: boolean;
}>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid;
  transition: all 0.2s ease;

  ${({ $checked, $disabled, theme }) => {
    if ($disabled) {
      const stateConfig = $checked
        ? theme.components.radio.checked
        : theme.components.radio.unchecked;
      return `
        background: ${stateConfig.backgroundDisabled};
        border-color: ${stateConfig.borderColorDisabled};
      `;
    }

    if ($checked) {
      const checkedConfig = theme.components.radio.checked;
      return `
        background: ${checkedConfig.background};
        border-color: ${checkedConfig.borderColor};
      `;
    }

    const uncheckedConfig = theme.components.radio.unchecked;
    return `
      background: ${uncheckedConfig.background};
      border-color: ${uncheckedConfig.borderColor};
    `;
  }}

  ${({ $disabled, $checked, theme }) => {
    if ($disabled) return '';

    const stateConfig = $checked
      ? theme.components.radio.checked
      : theme.components.radio.unchecked;

    return `
      ${RadioContainer}:hover & {
        background: ${stateConfig.backgroundHover};
        border-color: ${stateConfig.borderColorHover};
      }

      ${RadioContainer}:active & {
        border-color: ${stateConfig.borderColorActive};
      }
    `;
  }}
`;

const RadioInner = styled.div<{
  $checked: boolean;
  $disabled: boolean;
}>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: white;
  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  transition: opacity 0.2s ease;

  ${({ theme }) => {
    const dotSize = theme.components.radio.small.dotSize;
    return `
      width: ${dotSize};
      height: ${dotSize};
    `;
  }}
`;

/**
 * Radio Component
 *
 * A radio button for selecting one option from a group
 *
 * @example
 * <Radio checked={true} onChange={(e) => console.log(e.target.checked)} />
 */
export const Radio: React.FC<RadioProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  value,
  name,
  id,
  onChange,
  className,
  style,
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(
    controlledChecked ?? defaultChecked
  );
  const [isFocused, setIsFocused] = useState(false);

  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const newChecked = e.target.checked;

      if (controlledChecked === undefined) {
        setInternalChecked(newChecked);
      }

      onChange?.(e);
    },
    [disabled, controlledChecked, onChange]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <RadioContainer
      $disabled={disabled}
      className={className}
      style={style}
    >
      <HiddenInput
        type="radio"
        id={id}
        checked={checked}
        value={value}
        name={name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <RadioOuter
        $checked={checked}
        $disabled={disabled}
        $isFocused={isFocused}
      />
      <RadioInner
        $checked={checked}
        $disabled={disabled}
      />
    </RadioContainer>
  );
};

Radio.displayName = 'Radio';

