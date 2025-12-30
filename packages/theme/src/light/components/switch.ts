import { colors } from '../base';
import { SwitchConfig } from '@officesdk/editor-sdk-core/shared';

/**
 * Switch Component Theme Configuration
 * Based on Figma Design: Classic Shimo Design System
 *
 * Design Specifications:
 * - Off state: Gray track with white thumb
 * - On state: Blue track with white thumb
 * - Track: Inner shadow for depth
 * - Thumb: Outer shadow for elevation
 * - Hover: Enhanced shadow on thumb
 * - Disabled: Reduced opacity with gray colors
 */
export const switchComponent: SwitchConfig = {
  off: {
    track: {
      background: colors.palettes.transparency['20'],
      backgroundHover: colors.palettes.transparency['30'],
      backgroundDisabled: colors.palettes.transparency['30'],

      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.10) inset',
      boxShadowHover: '0 0 2px 0 rgba(0, 0, 0, 0.10) inset',
      boxShadowDisabled: '0 0 2px 0 rgba(0, 0, 0, 0.10) inset',
    },
    thumb: {

      background: colors.palettes.gray['8'],
      backgroundHover: colors.palettes.gray['0'],
      backgroundDisabled: colors.palettes.gray['8'],

      borderColor: colors.palettes.transparency['10'],
      borderColorHover: colors.palettes.transparency['10'],
      borderColorActive: colors.palettes.transparency['10'],
      borderColorDisabled: colors.palettes.transparency['10'],

      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      boxShadowHover: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      boxShadowDisabled: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    },
  },
  on: {
    track: {
      background: colors.base.notice,
      backgroundHover: colors.base.notice,
      backgroundDisabled: colors.palettes.transparency['10'],

      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.10) inset',
      boxShadowHover: '0 0 2px 0 rgba(0, 0, 0, 0.10) inset',
      boxShadowDisabled: '0 0 2px 0 rgba(0, 0, 0, 0.10) inset',
    },
    thumb: {
      background: colors.palettes.gray['0'],
      backgroundHover: colors.palettes.gray['0'],
      backgroundDisabled: colors.palettes.gray['0'],
      borderColor: colors.palettes.transparency['10'],

      borderColorHover: colors.palettes.transparency['10'],
      borderColorActive: colors.palettes.transparency['10'],
      borderColorDisabled: colors.palettes.transparency['10'],

      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      boxShadowHover: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      boxShadowDisabled: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    },
  },
  // Smooth transition animation
  transition: 'all 0.5s ease',

  small: {
    container: {
      width: '28px',
      height: '16px'
    },
    track: {
      width: '24px',
      height: '10px',
      borderRadius: '8px',
      boxShadow: 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
    },
    thumb: {
      size: '14px',
      borderRadius: '50%',
      borderWidth: '1px',
      offset: '1px',
    },
  },
  medium: {
    container: {
      width: '42px',
      height: '24px'
    },
    track: {
      width: '38px',
      height: '16px',
      borderRadius: '10px',

      boxShadow: 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
    },
    thumb: {
      size: '22px',
      borderRadius: '50%',
      borderWidth: '1px',
      offset: '1px',
    },
  },
  large: {
    container: {
      width: '56px',
      height: '32px',
    },
    track: {
      width: '48px',
      height: '20px',
      borderRadius: '12px',
      boxShadow: 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
    },
    thumb: {
      size: '28px',
      borderRadius: '50%',
      borderWidth: '1px',
      offset: '2px',
    },
  },
};
