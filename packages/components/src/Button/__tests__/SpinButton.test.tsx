import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { SpinButton } from '../SpinButton';

describe('SpinButton', () => {
  describe('Rendering', () => {
    it('should render spin button', () => {
      render(<SpinButton defaultValue={35} />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('should render with different sizes', () => {
      const { rerender } = render(<SpinButton defaultValue={35} size="small" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();

      rerender(<SpinButton defaultValue={35} size="large" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should display formatted value', () => {
      render(
        <SpinButton
          defaultValue={35}
          formatter={(val) => `${val}%`}
        />
      );
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('35%');
    });

    it('should render with slider when showSlider is true', () => {
      const { container } = render(
        <SpinButton defaultValue={35} showSlider min={0} max={100} />
      );
      // Slider should be rendered
      const slider = container.querySelector('[role="slider"]');
      expect(slider).toBeInTheDocument();
    });
  });

  describe('Value Management', () => {
    it('should display initial value', () => {
      render(<SpinButton defaultValue={42} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('42');
    });

    it('should update value on input change', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<SpinButton defaultValue={10} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, '25');
      await user.tab(); // Blur to trigger change

      expect(handleChange).toHaveBeenCalledWith(25);
    });

    it('should parse formatted value correctly', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <SpinButton
          defaultValue={35}
          formatter={(val) => `${val}%`}
          parser={(val) => parseFloat(val.replace('%', ''))}
          onChange={handleChange}
        />
      );

      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, '50%');
      await user.tab();

      expect(handleChange).toHaveBeenCalledWith(50);
    });
  });

  describe('Increment/Decrement Buttons', () => {
    it('should increment value when up button clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <SpinButton defaultValue={10} step={5} onChange={handleChange} />
      );

      // Find increment button (first button in button group)
      const buttons = container.querySelectorAll('button');
      const incrementButton = buttons[0];

      await user.click(incrementButton);
      expect(handleChange).toHaveBeenCalledWith(15);
    });

    it('should decrement value when down button clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <SpinButton defaultValue={10} step={5} onChange={handleChange} />
      );

      // Find decrement button (second button in button group)
      const buttons = container.querySelectorAll('button');
      const decrementButton = buttons[1];

      await user.click(decrementButton);
      expect(handleChange).toHaveBeenCalledWith(5);
    });

    it('should not increment beyond max', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <SpinButton defaultValue={95} min={0} max={100} step={10} onChange={handleChange} />
      );

      const buttons = container.querySelectorAll('button');
      const incrementButton = buttons[0];

      await user.click(incrementButton);
      expect(handleChange).toHaveBeenCalledWith(100);
    });

    it('should not decrement below min', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <SpinButton defaultValue={5} min={0} max={100} step={10} onChange={handleChange} />
      );

      const buttons = container.querySelectorAll('button');
      const decrementButton = buttons[1];

      await user.click(decrementButton);
      expect(handleChange).toHaveBeenCalledWith(0);
    });
  });

  describe('Keyboard Interactions', () => {
    it('should increment with ArrowUp', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<SpinButton defaultValue={10} step={5} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.keyboard('{ArrowUp}');

      expect(handleChange).toHaveBeenCalledWith(15);
    });

    it('should decrement with ArrowDown', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<SpinButton defaultValue={10} step={5} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.keyboard('{ArrowDown}');

      expect(handleChange).toHaveBeenCalledWith(5);
    });

    it('should blur input on Enter key', async () => {
      const user = userEvent.setup();

      render(<SpinButton defaultValue={10} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      expect(input).toHaveFocus();

      await user.keyboard('{Enter}');
      expect(input).not.toHaveFocus();
    });
  });

  describe('Disabled State', () => {
    it('should not respond to interactions when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <SpinButton defaultValue={10} disabled onChange={handleChange} />
      );

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();

      const buttons = container.querySelectorAll('button');
      await user.click(buttons[0]);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Alert State', () => {
    it('should render alert state', () => {
      render(<SpinButton defaultValue={35} alert />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Precision', () => {
    it('should format value with precision', () => {
      render(<SpinButton defaultValue={3.14159} precision={2} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('3.14');
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <SpinButton defaultValue={10} className="custom-spin" />
      );
      expect(container.firstChild).toHaveClass('custom-spin');
    });

    it('should apply custom style', () => {
      const { container } = render(
        <SpinButton defaultValue={10} style={{ width: '200px' }} />
      );
      expect(container.firstChild).toHaveStyle({ width: '200px' });
    });
  });

  describe('Integration with Slider', () => {
    it('should sync value between slider and input', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <SpinButton
          defaultValue={35}
          showSlider
          min={0}
          max={100}
          onChange={handleChange}
        />
      );

      // Change input value
      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, '75');
      await user.tab();

      expect(handleChange).toHaveBeenCalledWith(75);
    });
  });
});

