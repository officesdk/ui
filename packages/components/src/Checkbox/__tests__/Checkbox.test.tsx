import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  describe('Rendering', () => {
    it('should render checkbox', () => {
      render(<Checkbox />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should render with label using htmlFor', () => {
      render(
        <>
          <Checkbox id="test-checkbox" />
          <label htmlFor="test-checkbox">Test Label</label>
        </>
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('should render checked state', () => {
      render(<Checkbox checked={true} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should render unchecked state', () => {
      render(<Checkbox checked={false} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('States', () => {
    it('should handle checked state', async () => {
      const user = userEvent.setup();

      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;

      expect(checkbox).not.toBeChecked();
      await user.click(label);
      expect(checkbox).toBeChecked();
    });

    it('should handle indeterminate state', () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });

    it('should handle disabled state', () => {
      render(<Checkbox disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('should not toggle when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox disabled onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;

      expect(checkbox).toBeDisabled();
      await user.click(label);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Controlled Mode', () => {
    it('should work in controlled mode', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <Checkbox checked={false} onChange={handleChange} />
      );

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;
      expect(checkbox).not.toBeChecked();

      await user.click(label);
      expect(handleChange).toHaveBeenCalled();

      // Simulate parent updating state
      rerender(<Checkbox checked={true} onChange={handleChange} />);
      expect(checkbox).toBeChecked();
    });
  });

  describe('Interactions', () => {
    it('should call onChange with event', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;

      await user.click(label);
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange.mock.calls[0][0].target.checked).toBe(true);
    });

    it('should work with form', () => {
      render(
        <form>
          <Checkbox name="test" value="test-value" />
        </form>
      );

      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.name).toBe('test');
      expect(checkbox.value).toBe('test-value');
    });

    it('should be keyboard accessible', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      expect(checkbox).toHaveFocus();

      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      render(<Checkbox className="custom-class" />);
      const label = screen.getByRole('checkbox').parentElement;
      expect(label).toHaveClass('custom-class');
    });

    it('should apply id attribute', () => {
      render(<Checkbox id="my-checkbox" />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'my-checkbox');
    });
  });
});

