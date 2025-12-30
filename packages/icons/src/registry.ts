import {
  // General
  WorkbenchIcon,
  FormatBrushIcon,
  ClearFormatIcon,
  CopyIcon,
  PasteIcon,
  CutIcon,
  DeleteIcon,
  SelectAllIcon,
  UndoIcon,
  RedoIcon,
  SaveIcon,
  CheckIcon,
  HideIcon,
  PrintIcon,
  // Main Site
  FilterIcon,
  SortIcon,
  SettingsIcon,
  CloseIcon,
  MenuIcon,
  BackIcon,
  ListIcon,
  GridIcon,
  SearchIcon,
  EditIcon,
  ShareIcon,
  DownloadIcon,
  UploadIcon,
  // Text
  IndentIncreaseIcon,
  IndentDecreaseIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  ListBulletIcon,
  ListNumberIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  LinkIcon,
  // Image
  ImageIcon,
  RotateLeftIcon,
  RotateRightIcon,
  FlipHorizontalIcon,
  FlipVerticalIcon,
  // Table
  TableIcon,
  FreezeIcon,
  MergeCellsIcon,
  SplitCellsIcon,
  // Arrows
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  // Utility
  PlusIcon,
  MinusIcon,
  MoreIcon,
  RefreshIcon,
  FullscreenIcon,
  ExitFullscreenIcon,
  // Status
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  LoadingIcon,
} from './components.js';
import type { IconRegistry } from './types';

/**
 * Built-in icon registry
 * Maps icon names to React components
 */
export const iconRegistry: IconRegistry = {
  // General Icons
  'workbench': WorkbenchIcon,
  'format-brush': FormatBrushIcon,
  'clear-format': ClearFormatIcon,
  'copy': CopyIcon,
  'paste': PasteIcon,
  'cut': CutIcon,
  'delete': DeleteIcon,
  'select-all': SelectAllIcon,
  'undo': UndoIcon,
  'redo': RedoIcon,
  'save': SaveIcon,
  'check': CheckIcon,
  'hide': HideIcon,
  'print': PrintIcon,

  // Main Site Icons
  'filter': FilterIcon,
  'sort': SortIcon,
  'settings': SettingsIcon,
  'close': CloseIcon,
  'menu': MenuIcon,
  'back': BackIcon,
  'list': ListIcon,
  'grid': GridIcon,
  'search': SearchIcon,
  'edit': EditIcon,
  'share': ShareIcon,
  'download': DownloadIcon,
  'upload': UploadIcon,

  // Text Icons
  'indent-increase': IndentIncreaseIcon,
  'indent-decrease': IndentDecreaseIcon,
  'align-left': AlignLeftIcon,
  'align-center': AlignCenterIcon,
  'align-right': AlignRightIcon,
  'align-justify': AlignJustifyIcon,
  'list-bullet': ListBulletIcon,
  'list-number': ListNumberIcon,
  'bold': BoldIcon,
  'italic': ItalicIcon,
  'underline': UnderlineIcon,
  'strikethrough': StrikethroughIcon,
  'link': LinkIcon,

  // Image Icons
  'image': ImageIcon,
  'rotate-left': RotateLeftIcon,
  'rotate-right': RotateRightIcon,
  'flip-horizontal': FlipHorizontalIcon,
  'flip-vertical': FlipVerticalIcon,

  // Table Icons
  'table': TableIcon,
  'freeze': FreezeIcon,
  'merge-cells': MergeCellsIcon,
  'split-cells': SplitCellsIcon,

  // Arrow Icons
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,

  // Utility Icons
  'plus': PlusIcon,
  'minus': MinusIcon,
  'more': MoreIcon,
  'refresh': RefreshIcon,
  'fullscreen': FullscreenIcon,
  'exit-fullscreen': ExitFullscreenIcon,

  // Status Icons
  'success': SuccessIcon,
  'error': ErrorIcon,
  'warning': WarningIcon,
  'info': InfoIcon,
  'loading': LoadingIcon,
};

/**
 * Get icon component by name
 */
export const getIcon = (name: string) => iconRegistry[name];
