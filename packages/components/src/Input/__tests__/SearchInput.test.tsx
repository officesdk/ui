import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { SearchInput } from '../SearchInput';

describe('SearchInput', () => {
  describe('Rendering', () => {
    it('should render search input with placeholder', () => {
      render(<SearchInput placeholder="Search..." />);
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('should render with search icon by default', () => {
      const { container } = render(<SearchInput placeholder="Search" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render with custom search icon', () => {
      render(
        <SearchInput
          searchIcon={<span data-testid="custom-icon">🔍</span>}
          placeholder="Search"
        />
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('should render with medium size by default', () => {
      render(<SearchInput placeholder="Search" />);
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

    it('should render with large size', () => {
      render(<SearchInput size="large" placeholder="Large search" />);
      expect(screen.getByPlaceholderText('Large search')).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      const { container } = render(
        <SearchInput className="custom-search" placeholder="Test" />
      );
      expect(container.querySelector('.custom-search')).toBeInTheDocument();
    });

    it('should render with custom style', () => {
      const { container } = render(
        <SearchInput style={{ width: '500px' }} placeholder="Test" />
      );
      const wrapper = container.querySelector('div');
      expect(wrapper).toHaveStyle({ width: '500px' });
    });
  });

  describe('Clear Button', () => {
    it('should show clear button when input has value and clearable is true', async () => {
      const user = userEvent.setup();

      render(<SearchInput clearable placeholder="Search" />);
      const input = screen.getByPlaceholderText('Search');

      await user.type(input, 'test');

      const clearButtons = screen.getAllByRole('button');
      expect(clearButtons.length).toBeGreaterThan(0);
    });

    it('should not show clear button when input is empty', () => {
      render(<SearchInput clearable placeholder="Search" />);

      const buttons = screen.queryAllByRole('button');
      expect(buttons.length).toBe(0);
    });

    it('should not show clear button when clearable is false', async () => {
      const user = userEvent.setup();

      render(<SearchInput clearable={false} placeholder="Search" />);
      const input = screen.getByPlaceholderText('Search');

      await user.type(input, 'test');

      const buttons = screen.queryAllByRole('button');
      expect(buttons.length).toBe(0);
    });

    it('should clear input when clear button is clicked', async () => {
      const user = userEvent.setup();

      render(<SearchInput clearable placeholder="Search" />);
      const input = screen.getByPlaceholderText('Search') as HTMLInputElement;

      await user.type(input, 'test');
      expect(input.value).toBe('test');

      const clearButton = screen.getByRole('button');
      await user.click(clearButton);

      expect(input.value).toBe('');
    });

    it('should call onClear callback when clear button is clicked', async () => {
      const user = userEvent.setup();
      const handleClear = vi.fn();

      render(<SearchInput clearable onClear={handleClear} placeholder="Search" />);
      const input = screen.getByPlaceholderText('Search');

      await user.type(input, 'test');

      const clearButton = screen.getByRole('button');
      await user.click(clearButton);

      expect(handleClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('States', () => {
    it('should render in error state', () => {
      render(<SearchInput error placeholder="Error search" />);
      expect(screen.getByPlaceholderText('Error search')).toBeInTheDocument();
    });

    it('should render in disabled state', () => {
      render(<SearchInput disabled placeholder="Disabled search" />);
      const input = screen.getByPlaceholderText('Disabled search');
      expect(input).toBeDisabled();
    });

    it('should render in readonly state', () => {
      render(<SearchInput readOnly value="Readonly value" />);
      const input = screen.getByDisplayValue('Readonly value');
      expect(input).toHaveAttribute('readonly');
    });

    it('should not show clear button when disabled', () => {
      render(<SearchInput disabled clearable defaultValue="test" />);

      const buttons = screen.queryAllByRole('button');
      expect(buttons.length).toBe(0);
    });
  });

  describe('Interactions', () => {
    it('should handle value changes', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<SearchInput onChange={handleChange} placeholder="Type here" />);
      const input = screen.getByPlaceholderText('Type here');

      await user.type(input, 'search query');

      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('search query');
    });

    it('should handle focus events', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(<SearchInput onFocus={handleFocus} placeholder="Focus test" />);
      const input = screen.getByPlaceholderText('Focus test');

      await user.click(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('should handle blur events', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(<SearchInput onBlur={handleBlur} placeholder="Blur test" />);
      const input = screen.getByPlaceholderText('Blur test');

      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('should handle keyboard events', async () => {
      const user = userEvent.setup();
      const handleKeyDown = vi.fn();

      render(<SearchInput onKeyDown={handleKeyDown} placeholder="Keyboard test" />);
      const input = screen.getByPlaceholderText('Keyboard test');

      await user.type(input, '{Enter}');

      expect(handleKeyDown).toHaveBeenCalled();
    });

    it('should not trigger onChange when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(<SearchInput disabled onChange={handleChange} placeholder="Disabled" />);
      const input = screen.getByPlaceholderText('Disabled');

      await user.type(input, 'test');

      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('');
    });
  });

  describe('Controlled vs Uncontrolled', () => {
    it('should work as uncontrolled component', async () => {
      const user = userEvent.setup();

      render(<SearchInput defaultValue="Initial" placeholder="Uncontrolled" />);
      const input = screen.getByDisplayValue('Initial');

      await user.clear(input);
      await user.type(input, 'New search');

      expect(input).toHaveValue('New search');
    });

    it('should work as controlled component', async () => {
      const user = userEvent.setup();
      const TestComponent = () => {
        const [value, setValue] = React.useState('Initial');
        return (
          <SearchInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled"
          />
        );
      };

      render(<TestComponent />);
      const input = screen.getByDisplayValue('Initial');

      await user.clear(input);
      await user.type(input, 'New search');

      expect(input).toHaveValue('New search');
    });

    it('should handle controlled clear', async () => {
      const user = userEvent.setup();
      const TestComponent = () => {
        const [value, setValue] = React.useState('test value');
        return (
          <SearchInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClear={() => setValue('')}
            clearable
            placeholder="Controlled clear"
          />
        );
      };

      render(<TestComponent />);
      const input = screen.getByDisplayValue('test value') as HTMLInputElement;

      const clearButton = screen.getByRole('button');
      await user.click(clearButton);

      expect(input.value).toBe('');
    });
  });

  describe('Size Restrictions', () => {
    it('should only accept large and extraLarge sizes', () => {
      const { rerender } = render(<SearchInput size="large" placeholder="Large" />);
      expect(screen.getByPlaceholderText('Large')).toBeInTheDocument();

      rerender(<SearchInput size="extraLarge" placeholder="ExtraLarge" />);
      expect(screen.getByPlaceholderText('ExtraLarge')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper input role', () => {
      render(<SearchInput placeholder="Accessible search" />);
      const input = screen.getByPlaceholderText('Accessible search');
      expect(input.tagName).toBe('INPUT');
    });

    it('should support aria-label', () => {
      render(<SearchInput aria-label="Search field" placeholder="Search" />);
      expect(screen.getByLabelText('Search field')).toBeInTheDocument();
    });

    it('should support aria-describedby', () => {
      render(
        <>
          <SearchInput aria-describedby="search-helper" placeholder="Search" />
          <span id="search-helper">Enter search terms</span>
        </>
      );
      const input = screen.getByPlaceholderText('Search');
      expect(input).toHaveAttribute('aria-describedby', 'search-helper');
    });

    it('should be keyboard navigable', async () => {
      const user = userEvent.setup();

      render(
        <>
          <SearchInput placeholder="First" />
          <SearchInput placeholder="Second" />
        </>
      );

      const firstInput = screen.getByPlaceholderText('First');
      const secondInput = screen.getByPlaceholderText('Second');

      firstInput.focus();
      expect(firstInput).toHaveFocus();

      await user.tab();
      expect(secondInput).toHaveFocus();
    });

    it('should have clear button not in tab order', async () => {
      const user = userEvent.setup();

      render(<SearchInput clearable defaultValue="test" placeholder="Search" />);

      const input = screen.getByPlaceholderText('Search');
      const clearButton = screen.getByRole('button');

      expect(clearButton).toHaveAttribute('tabindex', '-1');

      input.focus();
      await user.tab();

      expect(clearButton).not.toHaveFocus();
    });
  });

  describe('ForwardRef', () => {
    it('should forward ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();

      render(<SearchInput ref={ref} placeholder="Ref test" />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.placeholder).toBe('Ref test');
    });

    it('should allow calling focus via ref', () => {
      const ref = React.createRef<HTMLInputElement>();

      render(<SearchInput ref={ref} placeholder="Focus via ref" />);

      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });
});

