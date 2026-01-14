import React, { useCallback } from 'react';
import RcDialog from 'rc-dialog';
import type { DialogProps } from 'rc-dialog';
import { Button } from '../Button';

export interface ModalProps extends Omit<DialogProps, 'onClose'> {
  /**
   * Whether the modal is visible
   */
  visible?: boolean;
  /**
   * Modal title
   */
  title?: React.ReactNode;
  /**
   * Modal width
   */
  width?: string | number;
  /**
   * Modal height
   */
  height?: string | number;
  /**
   * Whether to show mask
   */
  mask?: boolean;
  /**
   * Whether to close modal when clicking mask
   */
  maskClosable?: boolean;
  /**
   * Whether to show close button
   */
  closable?: boolean;
  /**
   * OK button text, set to null to hide
   */
  okText?: string | null;
  /**
   * Cancel button text, set to null to hide
   */
  cancelText?: string | null;
  /**
   * Whether OK button is disabled
   */
  disabledOkButton?: boolean;
  /**
   * Custom footer, set to null to hide footer
   */
  footer?: React.ReactNode;
  /**
   * Callback when OK button is clicked
   */
  onOk?: (e: React.MouseEvent) => void;
  /**
   * Callback when Cancel button is clicked or modal is closed
   */
  onCancel?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * Modal content
   */
  children?: React.ReactNode;
  /**
   * CSS class prefix
   */
  prefixCls?: string;
  /**
   * Custom className
   */
  className?: string;
  /**
   * Custom style
   */
  style?: React.CSSProperties;
  /**
   * z-index of the modal
   */
  zIndex?: number;
  /**
   * Whether to destroy modal on close
   */
  destroyOnClose?: boolean;
  /**
   * Whether to focus on modal when opened
   */
  focusTriggerAfterClose?: boolean;
  /**
   * Return the mount node for Modal
   */
  getContainer?: () => HTMLElement;
}

/**
 * Modal Component
 *
 * A dialog component for displaying content in a layer above the page.
 *
 * @example
 * // Basic usage
 * <Modal
 *   visible={visible}
 *   title="Modal Title"
 *   onOk={handleOk}
 *   onCancel={handleCancel}
 * >
 *   Modal content
 * </Modal>
 *
 * @example
 * // Custom footer
 * <Modal
 *   visible={visible}
 *   title="Custom Footer"
 *   footer={<Button onClick={handleClose}>Close</Button>}
 *   onCancel={handleCancel}
 * >
 *   Modal content
 * </Modal>
 *
 * @example
 * // No footer
 * <Modal
 *   visible={visible}
 *   title="No Footer"
 *   footer={null}
 *   onCancel={handleCancel}
 * >
 *   Modal content
 * </Modal>
 */
export const Modal: React.FC<ModalProps> = ({
  visible = false,
  title,
  width = 460,
  okText,
  cancelText,
  footer,
  onOk,
  onCancel,
  disabledOkButton = false,
  prefixCls = 'osd-modal',
  closable = true,
  mask = true,
  maskClosable = true,
  children,
  ...restProps
}) => {
  const handleClose = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      onCancel?.(e as React.MouseEvent);
    },
    [onCancel]
  );

  // Build default footer
  let defaultFooter: React.ReactNode = null;
  if (footer === undefined) {
    const okButton =
      okText === null ? null : (
        <Button
          key="confirm"
          variant="solid"
          colorType="primary"
          onClick={onOk}
          disabled={disabledOkButton}
        >
          {okText ?? 'OK'}
        </Button>
      );

    const cancelButton =
      cancelText === null ? null : (
        <Button key="cancel" variant="outline" colorType="default" onClick={onCancel}>
          {cancelText ?? 'Cancel'}
        </Button>
      );

    defaultFooter = (
      <>
        {cancelButton}
        {okButton}
      </>
    );
  }

  return (
    <RcDialog
      {...restProps}
      visible={visible}
      title={title}
      width={width}
      prefixCls={prefixCls}
      closable={closable}
      mask={mask}
      maskClosable={maskClosable}
      onClose={handleClose}
      footer={footer === undefined ? defaultFooter : footer}
    >
      {children}
    </RcDialog>
  );
};

Modal.displayName = 'Modal';
