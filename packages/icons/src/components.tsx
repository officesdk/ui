import { SVGProps } from 'react';

// ==================== General Icons ====================

export const WorkbenchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 7H17M7 3V17" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const FormatBrushIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 12L8 17M5 9H11L13 7L11 5L9 3L7 5L5 7L5 9ZM5 9L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClearFormatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 4H14M10 4V16M3 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 3L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 6V4C6 3.44772 6.44772 3 7 3H16C16.5523 3 17 3.44772 17 4V13C17 13.5523 16.5523 14 16 14H14M4 6H13C13.5523 6 14 6.44772 14 7V16C14 16.5523 13.5523 17 13 17H4C3.44772 17 3 16.5523 3 16V7C3 6.44772 3.44772 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PasteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13 3H14C14.5523 3 15 3.44772 15 4V5M7 3H6C5.44772 3 5 3.44772 5 4V5M7 3H13M7 3V4M13 3V4M5 5H15M5 5V16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="6" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 12L10 8L14 4M14 12L10 8M10 8V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 5H16M7 5V4C7 3.44772 7.44772 3 8 3H12C12.5523 3 13 3.44772 13 4V5M8 9V14M12 9V14M5 5H15V16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SelectAllIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const UndoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4H4M4 4L6.5 6.5M4 4L6.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RedoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4H16M16 4L13.5 6.5M16 4L13.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 17H16C16.5523 17 17 16.5523 17 16V5.41421C17 5.149 16.8946 4.89464 16.7071 4.70711L14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H4C3.44772 2 3 2.44772 3 3V16C3 16.5523 3.44772 17 4 17ZM13 2V5H7V2M13 12H7V17H13V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 3L17 17M10 7C11.6569 7 13 8.34315 13 10C13 10.3506 12.9398 10.6872 12.8293 11M7.17071 7.17071C7.06015 7.48721 7 7.82355 7 8C7 9.65685 8.34315 11 10 11C10.1765 11 10.5128 10.9398 10.8293 10.8293M4 10C4 10 6.5 5 10 5C13.5 5 16 10 16 10C16 10 15 12 13 13.5M10 15C6.5 15 4 10 4 10C4 10 4.5 8.5 6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PrintIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 7V3H15V7M5 13H4C3.44772 13 3 12.5523 3 12V8C3 7.44772 3.44772 7 4 7H16C16.5523 7 17 7.44772 17 8V12C17 12.5523 16.5523 13 16 13H15M5 11H15V17H5V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ==================== Main Site Icons ====================

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 5H17L12 11V16L8 18V11L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 4L7 16M7 4L4 7M7 4L10 7M13 16V4M13 16L16 13M13 16L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 3V4M10 16V17M17 10H16M4 10H3M15.5 4.5L14.8 5.2M5.2 14.8L4.5 15.5M15.5 15.5L14.8 14.8M5.2 5.2L4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5H17M8 10H17M8 15H17M4 5H4.01M4 10H4.01M4 15H4.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GridIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="3" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="11" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 3L17 6M3 17L3.5 14L14 3.5L16.5 6L6 16.5L3 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 9L13 6M7 11L13 14" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 3V13M10 13L14 9M10 13L6 9M4 15V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 13V3M10 3L14 7M10 3L6 7M4 15V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ==================== Text Icons ====================

export const IndentIncreaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5H17M8 10H17M8 15H17M3 3H17M3 17H17M3 8L5 10L3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IndentDecreaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5H17M8 10H17M8 15H17M3 3H17M3 17H17M5 8L3 10L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AlignLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 4H17M3 8H13M3 12H17M3 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const AlignCenterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 4H17M5 8H15M3 12H17M5 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const AlignRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 4H17M7 8H17M3 12H17M7 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const AlignJustifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 4H17M3 8H17M3 12H17M3 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ListBulletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5H17M8 10H17M8 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="4" cy="5" r="1" fill="currentColor"/>
    <circle cx="4" cy="10" r="1" fill="currentColor"/>
    <circle cx="4" cy="15" r="1" fill="currentColor"/>
  </svg>
);

export const ListNumberIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5H17M8 10H17M8 15H17M3 4H4V8M4 8H3M4 8H5M3 11H5L3 13H5M3 17H5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 3H11C12.6569 3 14 4.34315 14 6C14 7.65685 12.6569 9 11 9H5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 9H12C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15H5V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ItalicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 3H7M12 17H7M11 3L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UnderlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 3V9C5 11.7614 7.23858 14 10 14C12.7614 14 15 11.7614 15 9V3M4 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StrikethroughIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 10H17M6 5C6 3.89543 6.89543 3 8 3H12C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7H8M8 13H12C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17H8C6.89543 17 6 16.1046 6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 12L12 8M10 14L8 16C6.89543 17.1046 5.10457 17.1046 4 16C2.89543 14.8954 2.89543 13.1046 4 12L6 10M14 10L16 8C17.1046 6.89543 17.1046 5.10457 16 4C14.8954 2.89543 13.1046 2.89543 12 4L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ==================== Image Icons ====================

export const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="7" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M17 13L13 9L8 14L5 11L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RotateLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4V1L6 5L10 9V6C11.6569 6 13 7.34315 13 9C13 10.6569 11.6569 12 10 12C8.34315 12 7 10.6569 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RotateRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4V1L14 5L10 9V6C8.34315 6 7 7.34315 7 9C7 10.6569 8.34315 12 10 12C11.6569 12 13 10.6569 13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FlipHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 3V17M6 6L3 10L6 14M14 6L17 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FlipVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 10H17M6 6L10 3L14 6M6 14L10 17L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ==================== Table Icons ====================

export const TableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 8H17M10 8V17" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const FreezeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 8H17M8 3V17" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 8L8 3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const MergeCellsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="6" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 10H13M7 10L9 8M7 10L9 12M13 10L11 8M13 10L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SplitCellsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="6" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 6V14M6 10H8M12 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ==================== Arrow Icons ====================

export const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 4.5L10.5 8.5H3.5L7 4.5Z" fill="currentColor"/>
  </svg>
);

export const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 9.5L3.5 5.5H10.5L7 9.5Z" fill="currentColor"/>
  </svg>
);

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 13L10 8L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ==================== Utility Icons ====================

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="1" fill="currentColor"/>
    <circle cx="15" cy="10" r="1" fill="currentColor"/>
    <circle cx="5" cy="10" r="1" fill="currentColor"/>
  </svg>
);

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C12.5 3 14.7 4.3 16 6.3M16 3V6.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FullscreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 7V4C3 3.44772 3.44772 3 4 3H7M13 3H16C16.5523 3 17 3.44772 17 4V7M17 13V16C17 16.5523 16.5523 17 16 17H13M7 17H4C3.44772 17 3 16.5523 3 16V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ExitFullscreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 3V7H3M13 3V7H17M17 13H13V17M3 13H7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ==================== Status Icons ====================

export const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="7" fill="#52C41A"/>
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ErrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="7" fill="#E95555"/>
    <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const WarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="7" fill="#FAAD14"/>
    <path d="M10 6V11M10 14H10.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="7" fill="#5BA0E7"/>
    <path d="M10 9V14M10 6H10.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 3V6M10 14V17M17 10H14M6 10H3M15.5 4.5L13.4 6.6M6.6 13.4L4.5 15.5M15.5 15.5L13.4 13.4M6.6 6.6L4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
