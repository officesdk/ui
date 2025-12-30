import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ToastProps {
  /**
   * Toast variant type
   */
  variant?: 'success' | 'info' | 'error' | 'warn';
  /**
   * Toast message content
   */
  message: string;
  /**
   * Optional action button text
   */
  actionText?: string;
  /**
   * Action button click handler
   */
  onAction?: () => void;
  /**
   * Whether to show close button
   */
  closable?: boolean;
  /**
   * Close button click handler
   */
  onClose?: () => void;
  /**
   * Auto close duration in milliseconds (0 to disable)
   */
  duration?: number;
  /**
   * Custom icon (overrides default variant icon)
   */
  icon?: React.ReactNode;
  /**
   * Whether to show icon
   */
  showIcon?: boolean;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom style
   */
  style?: React.CSSProperties;
}

const ToastContainer = styled.div<{
  $variant: 'success' | 'info' | 'error' | 'warn';
}>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

  ${({ theme }) => {
    const baseConfig = theme.components.toast;
    return `
      padding: ${baseConfig.padding};
      border-radius: ${baseConfig.borderRadius};
      font-size: ${baseConfig.fontSize};
      font-weight: ${baseConfig.fontWeight};
    `;
  }}

  ${({ $variant, theme }) => {
    const variantConfig = theme.components.toast[$variant];
    return `
      background: ${variantConfig.background};
      border-color: ${variantConfig.borderColor};
    `;
  }}
`;

const IconWrapper = styled.div<{
  $variant: 'success' | 'info' | 'error' | 'warn';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $variant, theme }) => {
    const iconConfig = theme.components.toast[$variant].icon;
    return `
      width: ${iconConfig.size.width};
      height: ${iconConfig.size.height};
    `;
  }}
`;

const Message = styled.span`
  flex: 1;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.palettes.gray['120']};
`;

const ActionButton = styled.button<{
  $variant: 'success' | 'info' | 'error' | 'warn';
}>`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;

  ${({ $variant, theme }) => {
    const buttonConfig = theme.components.toast[$variant].button;
    return `
      font-size: ${buttonConfig.fontSize};
      font-weight: ${buttonConfig.fontWeight};
      color: ${buttonConfig.color};
      margin-left: ${buttonConfig.gap};
    `;
  }}

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.palettes.gray['60']};
  flex-shrink: 0;
  outline: none;

  &:hover {
    color: ${({ theme }) => theme.colors.palettes.gray['100']};
  }

  &:active {
    color: ${({ theme }) => theme.colors.palettes.gray['120']};
  }
`;

// Default icons for each variant
const SuccessIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" fill="#4ea44b"/>
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" fill="#5ba0e7"/>
    <path d="M10 9V14M10 6H10.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" fill="#e95555"/>
    <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const WarnIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" fill="#ebe361"/>
    <path d="M10 6V11M10 14H10.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIconSvg = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/**
 * Toast Component
 *
 * A notification message component with different variants
 *
 * @example
 * <Toast variant="success" message="Operation successful!" />
 *
 * @example
 * <Toast
 *   variant="info"
 *   message="New update available"
 *   actionText="Update"
 *   onAction={() => console.log('Update clicked')}
 *   closable
 * />
 */
export const Toast: React.FC<ToastProps> = ({
  variant = 'info' as 'success' | 'info' | 'error' | 'warn',
  message,
  actionText,
  onAction,
  closable = false,
  onClose,
  duration = 0,
  icon,
  showIcon = true,
  className,
  style,
}) => {
  const [visible, setVisible] = useState(true);

  // Auto close after duration
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) {
    return null;
  }

  // Default icons based on variant
  const defaultIcons = {
    success: <SuccessIcon />,
    info: <InfoIcon />,
    error: <ErrorIcon />,
    warn: <WarnIcon />,
  };

  const iconElement = icon || defaultIcons[variant];

  return (
    <ToastContainer
      $variant={variant}
      className={className}
      style={style}
      role="alert"
      aria-live="polite"
    >
      {showIcon && (
        <IconWrapper $variant={variant}>
          {iconElement}
        </IconWrapper>
      )}

      <Message>{message}</Message>

      {actionText && onAction && (
        <ActionButton
          $variant={variant}
          onClick={onAction}
          type="button"
        >
          {actionText}
        </ActionButton>
      )}

      {closable && (
        <CloseButton
          onClick={handleClose}
          type="button"
          aria-label="Close"
        >
          <CloseIconSvg />
        </CloseButton>
      )}
    </ToastContainer>
  );
};

Toast.displayName = 'Toast';


