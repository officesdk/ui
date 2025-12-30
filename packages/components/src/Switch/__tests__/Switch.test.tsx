import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { Switch } from '../Switch';

describe('Switch', () => {
  describe('Rendering', () => {
    it('should render switch component', () => {
      render(<Switch />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('should render with different sizes', () => {
      const { rerender } = render(<Switch size="small" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();

      rerender(<Switch size="medium" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();

      rerender(<Switch size="large" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should render checked state', () => {
      render(<Switch checked={true} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should render unchecked state', () => {
      render(<Switch checked={false} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('Controlled Mode', () => {
    it('should work in controlled mode', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <Switch checked={false} onChange={handleChange} />
      );

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;
      expect(checkbox).not.toBeChecked();

      await user.click(label);
      expect(handleChange).toHaveBeenCalledWith(true);

      // Simulate parent component updating state
      rerender(<Switch checked={true} onChange={handleChange} />);
      expect(checkbox).toBeChecked();
    });
  });

  describe('Uncontrolled Mode', () => {
    it('should work in uncontrolled mode', async () => {
      const user = userEvent.setup();

      render(<Switch defaultChecked={false} />);

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;
      expect(checkbox).not.toBeChecked();

      await user.click(label);
      expect(checkbox).toBeChecked();

      await user.click(label);
      expect(checkbox).not.toBeChecked();
    });

    it('should use defaultChecked as initial value', () => {
      render(<Switch defaultChecked={true} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });

  describe('Interactions', () => {
    it('should toggle on click', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;
      await user.click(label);

      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('should not toggle when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch disabled onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      const label = checkbox.parentElement as HTMLElement;
      expect(checkbox).toBeDisabled();

      await user.click(label);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should be keyboard accessible', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      expect(checkbox).toHaveFocus();

      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      render(<Switch className="custom-class" />);
      const label = screen.getByRole('checkbox').parentElement;
      expect(label).toHaveClass('custom-class');
    });

    it('should apply custom style', () => {
      render(<Switch style={{ margin: '10px' }} />);
      const label = screen.getByRole('checkbox').parentElement;
      expect(label).toHaveStyle({ margin: '10px' });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<Switch checked={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('type', 'checkbox');
    });
  });
});

