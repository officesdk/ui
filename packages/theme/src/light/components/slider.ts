import { colors } from '../base';
import { SliderConfig } from '@officesdk/editor-sdk-core/shared';

export const slider: SliderConfig = {
  thumb: {
    background: colors.palettes.gray['0'],
    backgroundHover: colors.palettes.gray['0'],
    backgroundActive: colors.palettes.gray['0'],
    backgroundDisabled: colors.palettes.gray['0'],
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
    boxShadowHover: '0 2px 6px rgba(0, 0, 0, 0.2)',
    boxShadowActive: '0 2px 6px rgba(0, 0, 0, 0.2)',
    boxShadowDisabled: 'none',
    borderColor: colors.palettes.brand,
    borderColorHover: colors.palettes.brand,
    borderColorActive: colors.palettes.brand,
    borderColorDisabled: colors.palettes.transparency['20'],
  },
  track: {
    background: colors.palettes.transparency['10'],
    backgroundDisabled: colors.palettes.transparency['5'],
    filledBackground: colors.palettes.brand,
    height: '4px',
    width: '100%',
    borderRadius: '2px',
  },
  large: {
    height: '20px',
    thumbSize: '16px',
    thumbOffset: '0',
  },
};

