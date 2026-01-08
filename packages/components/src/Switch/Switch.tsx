import React, { useState, useCallback } from 'react';
import { styled } from '../utils/styled';

export interface SwitchProps {
  /**
   * Whether the switch is checked
   */
  checked?: boolean;
  /**
   * Default checked state
   */
  defaultChecked?: boolean;
  /**
   * Size variant
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Callback when checked state changes
   */
  onChange?: (checked: boolean) => void;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom style
   */
  style?: React.CSSProperties;
}

const SwitchContainer = styled.label<{
  $size: 'small' | 'medium' | 'large';
  $checked: boolean;
  $disabled: boolean;
}>`
  position: relative;
  display: inline-block;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ $size, theme }) => {
    const sizeConfig = theme.components.switch[$size];
    return `
      width: ${sizeConfig.container.width};
      height: ${sizeConfig.container.height};
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

const Track = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $checked: boolean;
  $disabled: boolean;
  $isFocused: boolean;
}>`
  position: absolute;
  inset: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${({ theme }) => theme.components.switch.transition || 'all 0.2s ease'};

  ${({ $size, theme }) => {
    const sizeConfig = theme.components.switch[$size];
    return `
      border-radius: ${sizeConfig.track.borderRadius};
      width: ${sizeConfig.track.width};
      height: ${sizeConfig.track.height};
    `;
  }}

  ${({ $checked, $disabled, theme }) => {
    const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;

    if ($disabled) {
      return `
        background: ${stateConfig.track.backgroundDisabled};
        box-shadow: ${stateConfig.track.boxShadowDisabled};
      `;
    }

    return `
      background: ${stateConfig.track.background};
      box-shadow: ${stateConfig.track.boxShadow};
    `;
  }}

  ${({ $disabled, $checked, theme }) => {
    if ($disabled) return '';

    const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;

    return `
      :hover {
        background: ${stateConfig.track.backgroundHover};
        box-shadow: ${stateConfig.track.boxShadowHover};
      }
    `;
  }}
`;

const Thumb = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $checked: boolean;
  $disabled: boolean;
  $isFocused: boolean;
}>`
  position: absolute;
  top: 50%;
  border-style: solid;
  box-sizing: border-box;
  left: 0;
  transition: ${({ theme }) => theme.components.switch.transition || 'all 0.2s ease'};

  ${({ $size, $checked, theme }) => {
    const sizeConfig = theme.components.switch[$size];
    const thumbSize = sizeConfig.thumb.size;
    const thumbOffset = sizeConfig.thumb.offset;
    const thumbBorderRadius = sizeConfig.thumb.borderRadius;
    const thumbBorderWidth = sizeConfig.thumb.borderWidth;

    // Calculate thumb position based on track width
    const trackWidth = sizeConfig.container.width;
    const thumbSizeNum = parseFloat(thumbSize);
    const offsetNum = parseFloat(thumbOffset);
    const trackWidthNum = parseFloat(trackWidth);

    // Position from left (unchecked: offset, checked: trackWidth - thumbSize - offset)
    const leftPosition = $checked
      ? `${trackWidthNum - thumbSizeNum - offsetNum}px`
      : thumbOffset;

    return `
      width: ${thumbSize};
      height: ${thumbSize};
      border-radius: ${thumbBorderRadius};
      border-width: ${thumbBorderWidth};
      transform: translate(${leftPosition}, -50%);
    `;
  }}

  ${({ $checked, $disabled, theme }) => {
    const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;

    if ($disabled) {
      return `
        background: ${stateConfig.thumb.backgroundDisabled};
        border-color: ${stateConfig.thumb.borderColorDisabled};
        box-shadow: ${stateConfig.thumb.boxShadowDisabled};
      `;
    }

    return `
      background: ${stateConfig.thumb.background};
      border-color: ${stateConfig.thumb.borderColor};
      box-shadow: ${stateConfig.thumb.boxShadow};
    `;
  }}

  ${({ $disabled, $checked, theme }) => {
    if ($disabled) return '';

    const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;

    return `
      :hover & {
        background: ${stateConfig.thumb.backgroundHover};
        border-color: ${stateConfig.thumb.borderColorHover};
        box-shadow: ${stateConfig.thumb.boxShadowHover};
      }
    `;
  }}
`;

/**
 * Switch Component
 *
 * A toggle switch for binary states
 *
 * @example
 * <Switch checked={true} onChange={(checked) => console.log(checked)} />
 */
export const Switch: React.FC<SwitchProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  size = 'large',
  disabled = false,
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

      onChange?.(newChecked);
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
    <SwitchContainer
      $size={size}
      $checked={checked}
      $disabled={disabled}
      className={className}
      style={style}
    >
      <HiddenInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <Track
        $size={size}
        $checked={checked}
        $disabled={disabled}
        $isFocused={isFocused}
      />
      <Thumb
        $size={size}
        $checked={checked}
        $disabled={disabled}
        $isFocused={isFocused}
      />
    </SwitchContainer>
  );
};

Switch.displayName = 'Switch';

