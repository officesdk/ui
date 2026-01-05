import { ToolbarButtonConfig } from '@officesdk/editor-sdk-core/shared';
import { colors } from '../base';

export const toolbarButton: ToolbarButtonConfig = {
  border: {
    borderColor: 'transparent',
    borderColorHover: colors.palettes.transparency['20'],
    borderColorActive: colors.palettes.transparency['30'],
    borderColorDisabled: 'transparent',
    borderColorClick: colors.palettes.transparency['30'],
  },
  background: {
    background: 'transparent',
    backgroundHover: colors.palettes.transparency['5'],
    backgroundActive: colors.palettes.transparency['5'],
    backgroundDisabled: 'transparent',
    backgroundClick: colors.palettes.transparency['10'],
  },
  dropdownIcon: {
    url: '',
    size: {
      width: '16px',
      height: '16px',
    },
  },
  icon: {
    url: '',
    size: {
      width: '20px',
      height: '20px',
    },
  },
  layout: {
    padding: '4px',
    height: '26px',
    gap: '0px',
    content: {
      padding: '4px',
    },
  },
  typography: {
    fontSize: '12px',
    fontWeight: 400,
  },
  color: {
    color: colors.palettes.gray['120'],
    colorHover: colors.palettes.gray['120'],
    colorActive: colors.palettes.gray['120'],
    colorDisabled: colors.palettes.transparency['30'],
  },
};
