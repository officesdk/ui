import React, { forwardRef } from 'react';
import { styled } from '../utils/styled';
import { Input, InputProps } from './Input';
import { Icon } from '../Icon';
import { getGlobalTheme } from '../utils/context';

export interface SearchInputProps extends Omit<InputProps, 'prefixNode' | 'suffixNode'> {
  /**
   * Line type (outlined or underlined)
   */
  lineType?: 'outlined' | 'underlined';
  /**
   * SearchInput size
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
  /**
   * Whether to show the clear button when input has value
   */
  clearable?: boolean;
  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void;
  /**
   * Custom search icon (URL string or React node)
   */
  searchIcon?: string | React.ReactNode;
}

const SearchIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors?.palettes?.transparency?.['100'] || '#41464b'};
  }
`;

const DefaultSearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.92359 14.0468C9.40656 14.0468 10.7664 13.5197 11.826 12.6426L13.0034 13.8199C12.8604 14.2604 12.9638 14.7635 13.3138 15.1134L14.4012 16.2008C14.8981 16.6977 15.7036 16.6977 16.2004 16.2008C16.6973 15.704 16.6973 14.8985 16.2004 14.4017L15.113 13.3143C14.7549 12.9562 14.2364 12.8562 13.7887 13.0143L12.6234 11.849C13.5122 10.7862 14.0471 9.41727 14.0471 7.92343C14.0471 4.54158 11.3055 1.80005 7.92359 1.80005C4.54165 1.80005 1.80005 4.54158 1.80005 7.92343C1.80005 11.3053 4.54165 14.0468 7.92359 14.0468ZM7.92359 12.6968C10.56 12.6968 12.6971 10.5597 12.6971 7.92343C12.6971 5.2872 10.56 3.15005 7.92359 3.15005C5.2872 3.15005 3.15005 5.2872 3.15005 7.92343C3.15005 10.5597 5.2872 12.6968 7.92359 12.6968Z" fill="#41464B"/>
  </svg>
);


/**
 * SearchInput Component
 *
 * A wrapper around Input component with search icon and clear functionality
 *
 * @example
 * // Basic search input
 * <SearchInput placeholder="Search..." />
 *
 * @example
 * // Underlined search input
 * <SearchInput lineType="underlined" placeholder="Search..." />
 *
 * @example
 * // Search input without clearable
 * <SearchInput clearable={false} placeholder="Search..." />
 *
 * @example
 * // Different sizes
 * <SearchInput size="small" placeholder="Search..." />
 * <SearchInput size="medium" placeholder="Search..." />
 * <SearchInput size="large" placeholder="Search..." />
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      lineType = 'outlined',
      size = 'medium',
      clearable = true,
      onClear,
      searchIcon,
      ...rest
    },
    ref
  ) => {
    // Render search icon by priority:
    // 1. props.searchIcon (string or ReactNode)
    // 2. theme.components.inputSearch.searchIcon.url
    // 3. DefaultSearchIcon
    const getSearchIconElement = () => {
      // Priority 1: props.searchIcon
      if (searchIcon !== undefined) {
        if (typeof searchIcon === 'string') {
          return <Icon src={searchIcon} />;
        }
        return searchIcon;
      }

      // Priority 2: theme icon
      const theme = getGlobalTheme();
      const themeIconUrl = theme?.components?.inputSearch?.searchIcon?.url;
      if (themeIconUrl) {
        return <Icon src={themeIconUrl} />;
      }

      // Priority 3: default icon
      return <DefaultSearchIcon />;
    };

    const prefixNode = (
      <SearchIconWrapper>
        {getSearchIconElement()}
      </SearchIconWrapper>
    );

    return (
      <Input
        ref={ref}
        lineType={lineType}
        size={size}
        prefixNode={prefixNode}
        clearable={clearable}
        onClear={onClear}
        {...rest}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

