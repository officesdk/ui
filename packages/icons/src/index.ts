// Export all icon components for direct use
export {
  // General Icons
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
  // Main Site Icons
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
  // Text Icons
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
  // Image Icons
  ImageIcon,
  RotateLeftIcon,
  RotateRightIcon,
  FlipHorizontalIcon,
  FlipVerticalIcon,
  // Table Icons
  TableIcon,
  FreezeIcon,
  MergeCellsIcon,
  SplitCellsIcon,
  // Arrow Icons
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  // Utility Icons
  PlusIcon,
  MinusIcon,
  MoreIcon,
  RefreshIcon,
  FullscreenIcon,
  ExitFullscreenIcon,
  // Status Icons
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  LoadingIcon,
} from './components.js';

// Export registry for use with IconProvider
export { iconRegistry, getIcon } from './registry';

// Export types
export type { IconComponent, IconRegistry, IconName } from './types';
