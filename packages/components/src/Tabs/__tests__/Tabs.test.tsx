import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { Tabs } from '../Tabs';
import React from 'react';

const defaultItems = [
  { key: '1', label: 'Tab 1' },
  { key: '2', label: 'Tab 2' },
  { key: '3', label: 'Tab 3' },
];

describe('Tab', () => {
  describe('Rendering', () => {
    it('should render all tab items', () => {
      render(<Tabs items={defaultItems} />);

      expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
    });

    it('should render with line variant', () => {
      render(<Tabs items={defaultItems} variant="line" />);
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('should render with card variant', () => {
      render(<Tabs items={defaultItems} variant="card" />);
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('should set first tab as active by default', () => {
      render(<Tabs items={defaultItems} />);
      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      expect(firstTab).toHaveAttribute('aria-selected', 'true');
    });

    it('should set defaultActiveKey as active', () => {
      render(<Tabs items={defaultItems} defaultActiveKey="2" />);
      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
      expect(secondTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Interactions', () => {
    it('should switch tab on click', async () => {
      const user = userEvent.setup();

      render(<Tabs items={defaultItems} defaultActiveKey="1" />);

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      expect(firstTab).toHaveAttribute('aria-selected', 'true');
      expect(secondTab).toHaveAttribute('aria-selected', 'false');

      await user.click(secondTab);

      expect(firstTab).toHaveAttribute('aria-selected', 'false');
      expect(secondTab).toHaveAttribute('aria-selected', 'true');
    });

    it('should call onChange when tab clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Tabs items={defaultItems} onChange={handleChange} />);

      await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

      expect(handleChange).toHaveBeenCalledWith('2');
    });

    it('should not switch to disabled tab', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const items = [
        { key: '1', label: 'Tab 1' },
        { key: '2', label: 'Tab 2', disabled: true },
        { key: '3', label: 'Tab 3' },
      ];

      render(<Tabs items={items} defaultActiveKey="1" onChange={handleChange} />);

      const disabledTab = screen.getByRole('tab', { name: 'Tab 2' });
      expect(disabledTab).toHaveAttribute('aria-disabled', 'true');

      await user.click(disabledTab);

      expect(handleChange).not.toHaveBeenCalled();
      expect(disabledTab).toHaveAttribute('aria-selected', 'false');
    });
  });

  describe('Controlled Mode', () => {
    it('should work in controlled mode', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <Tabs items={defaultItems} activeKey="1" onChange={handleChange} />
      );

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      expect(firstTab).toHaveAttribute('aria-selected', 'true');

      await user.click(secondTab);
      expect(handleChange).toHaveBeenCalledWith('2');

      // Simulate parent updating state
      rerender(<Tabs items={defaultItems} activeKey="2" onChange={handleChange} />);
      expect(secondTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Uncontrolled Mode', () => {
    it('should work in uncontrolled mode', async () => {
      const user = userEvent.setup();

      render(<Tabs items={defaultItems} defaultActiveKey="1" />);

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const thirdTab = screen.getByRole('tab', { name: 'Tab 3' });

      expect(firstTab).toHaveAttribute('aria-selected', 'true');

      await user.click(thirdTab);

      expect(firstTab).toHaveAttribute('aria-selected', 'false');
      expect(thirdTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Props', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <Tabs items={defaultItems} className="custom-tab" />
      );
      expect(container.firstChild).toHaveClass('custom-tab');
    });

    it('should apply custom style', () => {
      const { container } = render(
        <Tabs items={defaultItems} style={{ margin: '20px' }} />
      );
      expect(container.firstChild).toHaveStyle({ margin: '20px' });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<Tabs items={defaultItems} defaultActiveKey="1" />);

      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();

      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(3);

      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    });

    it('should mark disabled tabs properly', () => {
      const items = [
        { key: '1', label: 'Tab 1' },
        { key: '2', label: 'Tab 2', disabled: true },
      ];

      render(<Tabs items={items} />);

      const disabledTab = screen.getByRole('tab', { name: 'Tab 2' });
      expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
      expect(disabledTab).toBeDisabled();
    });
  });
});

