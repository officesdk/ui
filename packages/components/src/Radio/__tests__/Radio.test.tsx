import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { Radio } from '../Radio';

describe('Radio', () => {
  describe('Rendering', () => {
    it('should render radio button', () => {
      render(<Radio />);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('should render with label using htmlFor', () => {
      render(
        <>
          <Radio id="test-radio" />
          <label htmlFor="test-radio">Test Label</label>
        </>
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('should render checked state', () => {
      render(<Radio checked={true} />);
      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('should render unchecked state', () => {
      render(<Radio checked={false} />);
      expect(screen.getByRole('radio')).not.toBeChecked();
    });
  });

  describe('Radio Group', () => {
    it('should work in a radio group', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <>
          <Radio name="group" value="option1" onChange={handleChange} />
          <Radio name="group" value="option2" onChange={handleChange} />
          <Radio name="group" value="option3" onChange={handleChange} />
        </>
      );

      const radios = screen.getAllByRole('radio');
      expect(radios).toHaveLength(3);

      const label = radios[0].parentElement as HTMLElement;
      await user.click(label);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Controlled Mode', () => {
    it('should work in controlled mode', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <Radio checked={false} onChange={handleChange} />
      );

      const radio = screen.getByRole('radio');
      const label = radio.parentElement as HTMLElement;
      expect(radio).not.toBeChecked();

      await user.click(label);
      expect(handleChange).toHaveBeenCalled();

      // Simulate parent updating state
      rerender(<Radio checked={true} onChange={handleChange} />);
      expect(radio).toBeChecked();
    });
  });

  describe('Interactions', () => {
    it('should call onChange when clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio onChange={handleChange} />);

      const radio = screen.getByRole('radio');
      const label = radio.parentElement as HTMLElement;
      await user.click(label);
      expect(handleChange).toHaveBeenCalled();
    });

    it('should not call onChange when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio disabled onChange={handleChange} />);

      const radio = screen.getByRole('radio');
      const label = radio.parentElement as HTMLElement;
      expect(radio).toBeDisabled();

      await user.click(label);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should be keyboard accessible', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Radio onChange={handleChange} />);

      const radio = screen.getByRole('radio');
      radio.focus();
      expect(radio).toHaveFocus();

      await user.keyboard(' ');
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      render(<Radio className="custom-class" />);
      const label = screen.getByRole('radio').parentElement;
      expect(label).toHaveClass('custom-class');
    });

    it('should apply id attribute', () => {
      render(<Radio id="my-radio" />);
      expect(screen.getByRole('radio')).toHaveAttribute('id', 'my-radio');
    });

    it('should work with form', () => {
      render(
        <form>
          <Radio name="test" value="test-value" />
        </form>
      );

      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.name).toBe('test');
      expect(radio.value).toBe('test-value');
    });
  });
});

