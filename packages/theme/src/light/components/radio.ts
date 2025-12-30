import { colors } from '../base';
import { RadioConfig } from '@officesdk/editor-sdk-core/shared';

export const radio: RadioConfig = {
  unchecked: {
    borderColor: colors.palettes.transparency['30'],
    borderColorHover: colors.palettes.brand,
    borderColorActive: colors.palettes.brand,
    borderColorDisabled: colors.palettes.transparency['10'],
    background: colors.palettes.gray['0'],
    backgroundHover: colors.palettes.gray['0'],
    backgroundDisabled: colors.palettes.gray['5'],
  },
  checked: {
    borderColor: colors.palettes.brand,
    borderColorHover: colors.palettes.brand,
    borderColorActive: colors.palettes.brand,
    borderColorDisabled: colors.palettes.transparency['10'],
    background: colors.palettes.brand,
    backgroundHover: colors.palettes.brand,
    backgroundDisabled: colors.palettes.gray['5'],
  },
  small: {
    size: '16px',
    dotSize: '8px',
    fontSize: '14px',
    gap: '8px',
  },
};

