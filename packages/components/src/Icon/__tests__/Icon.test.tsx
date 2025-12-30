import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../__tests__/test-utils';
import { Icon } from '../Icon';
import { IconProvider } from '../IconProvider';

const TestIcon = () => (
  <svg data-testid="test-icon">
    <path d="M0 0" />
  </svg>
);

describe('Icon', () => {
  describe('Rendering', () => {
    it('should render with children', () => {
      render(
        <Icon>
          <TestIcon />
        </Icon>
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should render with src', () => {
      render(<Icon src="/test-icon.svg" alt="Test Icon" />);
      const img = screen.getByAltText('Test Icon');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/test-icon.svg');
    });

    it('should render with name from registry', () => {
      const mockRegistry = {
        'test': TestIcon,
      };

      render(
        <IconProvider icons={mockRegistry}>
          <Icon name="test" />
        </IconProvider>
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should prioritize children over src', () => {
      render(
        <Icon src="/test-icon.svg">
          <TestIcon />
        </Icon>
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.queryByAltText('icon')).not.toBeInTheDocument();
    });

    it('should prioritize src over name', () => {
      const mockRegistry = {
        'test': TestIcon,
      };

      render(
        <IconProvider icons={mockRegistry}>
          <Icon name="test" src="/test-icon.svg" alt="Test" />
        </IconProvider>
      );
      expect(screen.getByAltText('Test')).toBeInTheDocument();
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('should apply custom size', () => {
      const { container } = render(
        <Icon size={32}>
          <TestIcon />
        </Icon>
      );
      const iconContainer = container.firstChild as HTMLElement;
      expect(iconContainer).toHaveStyle({ width: '32px', height: '32px' });
    });

    it('should apply custom color', () => {
      const { container } = render(
        <Icon color="#ff0000">
          <TestIcon />
        </Icon>
      );
      const iconContainer = container.firstChild as HTMLElement;
      expect(iconContainer).toHaveStyle({ color: '#ff0000' });
    });

    it('should apply custom className', () => {
      const { container } = render(
        <Icon className="custom-icon">
          <TestIcon />
        </Icon>
      );
      expect(container.firstChild).toHaveClass('custom-icon');
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <Icon onClick={handleClick}>
          <TestIcon />
        </Icon>
      );

      await user.click(container.firstChild as HTMLElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Error Handling', () => {
    it('should warn when icon not found in registry', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(
        <IconProvider icons={{}}>
          <Icon name="non-existent" />
        </IconProvider>
      );

      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    // it('should return null when no icon provided', () => {
    //   const { container } = render(<Icon />);
    //   expect(container.firstChild).toBeNull();
    // });
  });
});

