import { SVGProps } from 'react';

export type IconComponent = React.FC<SVGProps<SVGSVGElement>>;

export type IconRegistry = Record<string, IconComponent>;

// Icon categories based on Figma design
export type GeneralIconName =
  | 'workbench'
  | 'format-brush'
  | 'clear-format'
  | 'copy'
  | 'paste'
  | 'cut'
  | 'delete'
  | 'select-all'
  | 'undo'
  | 'redo'
  | 'save'
  | 'check'
  | 'hide'
  | 'print';

export type MainSiteIconName =
  | 'filter'
  | 'sort'
  | 'settings'
  | 'close'
  | 'menu'
  | 'back'
  | 'list'
  | 'grid'
  | 'search'
  | 'edit'
  | 'share'
  | 'download'
  | 'upload';

export type TextIconName =
  | 'indent-increase'
  | 'indent-decrease'
  | 'align-left'
  | 'align-center'
  | 'align-right'
  | 'align-justify'
  | 'list-bullet'
  | 'list-number'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'link';

export type ImageIconName =
  | 'image'
  | 'rotate-left'
  | 'rotate-right'
  | 'flip-horizontal'
  | 'flip-vertical';

export type TableIconName =
  | 'table'
  | 'freeze'
  | 'merge-cells'
  | 'split-cells';

export type ArrowIconName =
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-up'
  | 'chevron-down';

export type UtilityIconName =
  | 'plus'
  | 'minus'
  | 'more'
  | 'refresh'
  | 'fullscreen'
  | 'exit-fullscreen';

export type StatusIconName =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'loading';

export type IconName =
  | GeneralIconName
  | MainSiteIconName
  | TextIconName
  | ImageIconName
  | TableIconName
  | ArrowIconName
  | UtilityIconName
  | StatusIconName;
