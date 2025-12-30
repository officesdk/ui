import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

type InputSize = 'small' | 'medium' | 'large' | 'extraLarge';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /**
   * Input size
   */
  size?: InputSize;
  /**
   * Whether the input has an error state
   */
  error?: boolean;
  /**
   * Whether the input is in readonly mode
   */
  readOnly?: boolean;
  /**
   * Node to display before the input
   */
  prefixNode?: React.ReactNode;
  /**
   * Node to display after the input
   */
  suffixNode?: React.ReactNode;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
}

const InputWrapper = styled.div<{
  $size: InputSize;
  $error: boolean;
  $disabled: boolean;
  $readOnly: boolean;
  $isFocused: boolean;
}>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease;

  ${({ $size, theme }) => {
    const size = $size || 'medium';
    const sizeConfig = (theme.components.input.outlined as any)[size];
    return `
      height: ${sizeConfig.height};
      border-radius: ${sizeConfig.borderRadius};
      padding: ${sizeConfig.padding};
      font-size: ${sizeConfig.fontSize};
      line-height: ${sizeConfig.lineHeight};
    `;
  }}

  ${({ $error, $disabled, $readOnly, $isFocused, theme, $size }) => {
    const stateConfig = theme.components.input.outlined.state;

    let borderColor = stateConfig.borderColor;
    let background = stateConfig.background;
    let boxShadow = 'none';

    if ($disabled) {
      borderColor = stateConfig.borderColorDisabled;
      background = stateConfig.backgroundDisabled;
    } else if ($readOnly) {
      borderColor = stateConfig.borderColorReadonly;
      background = stateConfig.backgroundReadonly;
    } else if ($error) {
      borderColor = stateConfig.borderColorError;
      background = stateConfig.backgroundActive;
    } else if ($isFocused) {
      borderColor = stateConfig.borderColorActive;
      background = stateConfig.backgroundActive;
      const size = $size || 'medium';
      boxShadow = (theme.components.input.outlined as any)[size].boxShadowActive;
    }

    return `
      border: 1px solid ${borderColor};
      background: ${background};
      box-shadow: ${boxShadow};

      &:hover:not(:disabled) {
        ${!$disabled && !$readOnly && !$isFocused ? `
          border-color: ${stateConfig.borderColorHover};
          background: ${stateConfig.backgroundHover};
        ` : ''}
      }
    `;
  }}

  ${({ $disabled }) => $disabled && `
    cursor: not-allowed;
    opacity: 1;
  `}
`;

const StyledInput = styled.input<{
  $size: InputSize;
  $disabled: boolean;
  $readOnly: boolean;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  min-width: 0;
  padding: 0;
  margin: 0;
  font-family: inherit;
  color: ${({ theme }) => theme.components.input.outlined.state.borderColorActive};

  ${({ $size, theme }) => {
    const size = $size || 'medium';
    const sizeConfig = (theme.components.input.outlined as any)[size];
    return `
      font-size: ${sizeConfig.fontSize};
      line-height: ${sizeConfig.lineHeight};
    `;
  }}

  &::placeholder {
    color: ${({ theme }) => theme.colors.palettes.transparency['30']};
  }

  ${({ $disabled, theme }) => $disabled && `
    cursor: not-allowed;
    color: ${theme.colors.palettes.transparency['30']};
  `}

  ${({ $readOnly }) => $readOnly && `
    cursor: default;
  `}
`;

const PrefixNode = styled.div<{ $size: InputSize }>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 4px;

  ${({ $size, theme }) => {
    const size = $size || 'medium';
    const sizeConfig = (theme.components.input.outlined as any)[size];
    return `
      svg, img {
        width: ${sizeConfig.iconSize.width};
        height: ${sizeConfig.iconSize.height};
      }
    `;
  }}
`;

const SuffixNode = styled.div<{ $size: InputSize }>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 4px;

  ${({ $size, theme }) => {
    const size = $size || 'medium';
    const sizeConfig = (theme.components.input.outlined as any)[size];
    return `
      svg, img {
        width: ${sizeConfig.iconSize.width};
        height: ${sizeConfig.iconSize.height};
      }
    `;
  }}
`;

/**
 * Input Component
 *
 * @example
 * // Basic input
 * <Input placeholder="Enter text" />
 *
 * @example
 * // Input with prefix and suffix
 * <Input prefixNode={<SearchIcon />} suffixNode={<CloseIcon />} />
 *
 * @example
 * // Input with error state
 * <Input error placeholder="Enter text" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      readOnly = false,
      prefixNode,
      suffixNode,
      className,
      style,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <InputWrapper
        $size={size}
        $error={error}
        $disabled={!!disabled}
        $readOnly={!!readOnly}
        $isFocused={isFocused}
        className={className}
        style={style}
      >
        {prefixNode && <PrefixNode $size={size}>{prefixNode}</PrefixNode>}
        <StyledInput
          ref={ref}
          $size={size}
          $disabled={!!disabled}
          $readOnly={!!readOnly}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {suffixNode && <SuffixNode $size={size}>{suffixNode}</SuffixNode>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

