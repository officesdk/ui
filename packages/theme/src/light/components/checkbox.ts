import { colors } from '../base';
import { CheckboxConfig } from '@officesdk/editor-sdk-core/shared';

export const checkbox: CheckboxConfig = {
  icons: {
    checked: '',
    indeterminate: '',
  },
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
  indeterminate: {
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
    borderRadius: '4px',
    iconSize: { width: '12px', height: '12px' },
    fontSize: '14px',
    gap: '8px',
  },
};

