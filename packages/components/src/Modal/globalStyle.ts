import { createGlobalStyle } from 'styled-components';

export const ModalGlobalStyles = createGlobalStyle`
  .osd-modal {
    position: relative;
    width: auto;
    max-height: 100%;
  }

  .osd-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
    height: 100%;
    z-index: 1000;
  }

  .osd-modal-mask-hidden {
    display: none;
  }

  .osd-modal-wrap {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }

  .osd-modal-content {
    position: relative;
    padding: 24px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-sizing: border-box;
  }

  .osd-modal-close {
    position: absolute;
    right: 16px;
    top: 16px;
    z-index: 10;
    padding: 4px;
    line-height: 1;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .osd-modal-close:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  .osd-modal-close:active {
    background: rgba(0, 0, 0, 0.08);
  }

  .osd-modal-close-x {
    display: block;
    width: 20px;
    height: 20px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.348 3.465a.625.625 0 1 0-.884.883L7.116 8l-3.651 3.652a.625.625 0 1 0 .883.884L8 8.884l3.652 3.652a.625.625 0 1 0 .883-.884L8.884 8l3.652-3.652a.625.625 0 1 0-.884-.883L8 7.116 4.348 3.465z' fill='%23141414'/%3E%3C/svg%3E");
  }

  .osd-modal-header {
    margin-bottom: 16px;
    padding-right: 24px;
  }

  .osd-modal-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #141414;
  }

  .osd-modal-body {
    font-size: 14px;
    line-height: 22px;
    color: #333;
  }

  .osd-modal-footer {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .osd-modal.zoom-enter,
  .osd-modal.zoom-appear {
    animation-duration: 0.3s;
    transform: none;
    opacity: 0;
  }

  .osd-modal-open {
    overflow: hidden;
  }
`;
