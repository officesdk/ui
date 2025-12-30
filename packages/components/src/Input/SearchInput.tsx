import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Input, InputProps } from './Input';

export interface SearchInputProps extends Omit<InputProps, 'size' | 'prefixNode'> {
  /**
   * SearchInput size (only medium and large)
   */
  size?: 'extraLarge' | 'large';
  /**
   * Whether to show the clear button when input has value
   */
  clearable?: boolean;
  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void;
  /**
   * Custom search icon
   */
  searchIcon?: React.ReactNode;
}

const SearchIconWrapper = styled.div<{ $size: 'extraLarge' | 'large' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $size, theme }) => {
    const sizeConfig = theme.components.input.outlined[$size === 'extraLarge' ? 'extraLarge' : 'large'];
    return `
      width: ${sizeConfig.iconSize.width};
      height: ${sizeConfig.iconSize.height};
    `;
  }}

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.palettes.transparency['100']};
  }
`;

const ClearButton = styled.button<{ $size: 'extraLarge' | 'large' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
  transition: opacity 0.2s ease;

  ${({ $size, theme }) => {
    const sizeConfig = theme.components.input.outlined[$size === 'extraLarge' ? 'extraLarge' : 'large'];
    return `
      width: ${sizeConfig.iconSize.width};
      height: ${sizeConfig.iconSize.height};
    `;
  }}

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.palettes.transparency['100']};
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

const DefaultSearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L11.1 11.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DefaultCloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * SearchInput Component
 *
 * @example
 * // Basic search input
 * <SearchInput placeholder="Search..." />
 *
 * @example
 * // Search input with clearable
 * <SearchInput clearable onClear={() => console.log('cleared')} />
 *
 * @example
 * // Large search input
 * <SearchInput size="large" placeholder="Search..." />
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      size = 'extraLarge',
      clearable = true,
      onClear,
      searchIcon,
      value,
      defaultValue,
      onChange,
      disabled,
      readOnly,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
    };

    const prefixNode = (
      <SearchIconWrapper $size={size}>
        {searchIcon || <DefaultSearchIcon />}
      </SearchIconWrapper>
    );

    const suffixNode = clearable && currentValue && !disabled && !readOnly ? (
      <ClearButton
        $size={size}
        onClick={handleClear}
        type="button"
        tabIndex={-1}
      >
        <DefaultCloseIcon />
      </ClearButton>
    ) : null;

    return (
      <Input
        ref={ref}
        size={size}
        prefixNode={prefixNode}
        suffixNode={suffixNode}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

