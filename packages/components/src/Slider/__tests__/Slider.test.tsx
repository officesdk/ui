import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { Slider } from '../Slider';

describe('Slider', () => {
  describe('Rendering', () => {
    it('should render slider component', () => {
      render(<Slider defaultValue={50} />);
      const slider = screen.getByRole('slider');
      expect(slider).toBeInTheDocument();
    });

    it('should render with correct initial value', () => {
      render(<Slider defaultValue={75} />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuenow', '75');
    });

    it('should render with min and max attributes', () => {
      render(<Slider defaultValue={50} min={0} max={100} />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuemin', '0');
      expect(slider).toHaveAttribute('aria-valuemax', '100');
    });
  });

  describe('Controlled Mode', () => {
    it('should work in controlled mode', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <Slider value={25} onChange={handleChange} />
      );

      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuenow', '25');

      // Simulate value change by clicking
      await user.click(slider);
      expect(handleChange).toHaveBeenCalled();

      // Simulate parent updating state
      rerender(<Slider value={75} onChange={handleChange} />);
      expect(slider).toHaveAttribute('aria-valuenow', '75');
    });
  });

  describe('Uncontrolled Mode', () => {
    it('should work in uncontrolled mode', () => {
      render(<Slider defaultValue={30} />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuenow', '30');
    });
  });

  describe('Keyboard Interactions', () => {
    it('should increase value with ArrowRight', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} step={10} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowRight}');
      expect(handleChange).toHaveBeenCalledWith(60);
    });

    it('should decrease value with ArrowLeft', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} step={10} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowLeft}');
      expect(handleChange).toHaveBeenCalledWith(40);
    });

    it('should increase value with ArrowUp', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} step={5} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowUp}');
      expect(handleChange).toHaveBeenCalledWith(55);
    });

    it('should decrease value with ArrowDown', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} step={5} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowDown}');
      expect(handleChange).toHaveBeenCalledWith(45);
    });

    it('should jump to min with Home key', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} min={0} max={100} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{Home}');
      expect(handleChange).toHaveBeenCalledWith(0);
    });

    it('should jump to max with End key', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} min={0} max={100} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{End}');
      expect(handleChange).toHaveBeenCalledWith(100);
    });
  });

  describe('Value Constraints', () => {
    it('should respect min value', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={5} min={10} max={100} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowLeft}');
      // Should not go below min
      expect(handleChange).toHaveBeenCalledWith(10);
    });

    it('should respect max value', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={95} min={0} max={100} step={10} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowRight}');
      // Should not go above max
      expect(handleChange).toHaveBeenCalledWith(100);
    });

    it('should apply step correctly', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} step={25} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      slider.focus();

      await user.keyboard('{ArrowRight}');
      expect(handleChange).toHaveBeenCalledWith(75);
    });
  });

  describe('Disabled State', () => {
    it('should not respond to interactions when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} disabled onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-disabled', 'true');

      slider.focus();
      await user.keyboard('{ArrowRight}');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Callbacks', () => {
    it('should call onDragStart when dragging starts', async () => {
      const handleDragStart = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} onDragStart={handleDragStart} />);

      const slider = screen.getByRole('slider');
      await user.pointer({ target: slider, keys: '[MouseLeft>]' });

      expect(handleDragStart).toHaveBeenCalled();
    });

    it('should call onDragEnd when dragging ends', async () => {
      const handleDragEnd = vi.fn();
      const user = userEvent.setup();

      render(<Slider defaultValue={50} onDragEnd={handleDragEnd} />);

      const slider = screen.getByRole('slider');
      await user.pointer([
        { target: slider, keys: '[MouseLeft>]' },
        { keys: '[/MouseLeft]' },
      ]);

      expect(handleDragEnd).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      render(<Slider defaultValue={50} className="custom-slider" />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveClass('custom-slider');
    });

    it('should apply custom style', () => {
      render(<Slider defaultValue={50} style={{ width: '300px' }} />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveStyle({ width: '300px' });
    });
  });
});

