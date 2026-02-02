export { UIConfigProvider, useUIConfig } from './UIConfigProvider';
export type { UIConfigProviderProps } from './UIConfigProvider';

export { createUIConfig, mergeUIConfig } from './createUIConfig';

export {
  initUIConfig,
  getUIConfig,
  getGlobalIconRegistry,
  getGlobalToastConfig,
  registerComponentIcons,
  getComponentIconRegistry,
} from './configManager';

export type {
  UIConfig,
  ToastConfig,
  ToastPosition,
  ZIndexConfig,
  AnimationConfig,
  A11yConfig,
  I18nConfig,
} from './types';

