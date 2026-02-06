import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';
import { UIConfigProvider, createUIConfig } from '../UIConfigProvider';
import { lightTheme } from '../../../theme/src';
import type { ValueMap } from '../Slider/valueMap';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Size and style
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size variant',
      table: { type: { summary: "'small' | 'large'" } },
    },
    lineType: {
      control: 'radio',
      options: ['outlined', 'underlined', 'borderless'],
      description: 'Input line type',
      table: { type: { summary: "'outlined' | 'underlined' | 'borderless'" } },
    },

    // State
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: { type: { summary: 'boolean' } },
    },
    alert: {
      control: 'boolean',
      description: 'Whether to show alert state',
      table: { type: { summary: 'boolean' } },
    },

    // Value constraints
    min: {
      control: 'number',
      description: 'Minimum value',
      table: { type: { summary: 'number' } },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: { type: { summary: 'number' } },
    },
    step: {
      control: 'number',
      description: 'Step increment/decrement',
      table: { type: { summary: 'number' } },
    },
    precision: {
      control: 'number',
      description: 'Number of decimal places',
      table: { type: { summary: 'number' } },
    },

    // Display options
    showStepButtons: {
      control: 'boolean',
      description: 'Whether to show step buttons',
      table: { type: { summary: 'boolean' } },
    },
    showStepButtonsTrigger: {
      control: 'radio',
      options: ['normal', 'hover'],
      description: 'Trigger mode for step buttons',
      table: { type: { summary: "'hover' | 'normal'" } },
    },
    useThousandsSeparator: {
      control: 'boolean',
      description: 'Whether to use thousands separator in display',
      table: { type: { summary: 'boolean' } },
    },

    // Focus and keyboard behavior
    selectAllOnFocus: {
      control: 'boolean',
      description: 'Whether to select all text when the input receives focus',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    blurOnEscape: {
      control: 'boolean',
      description: 'Whether to blur the input when Escape key is pressed',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },

    // Event callbacks
    onChange: {
      action: 'onChange',
      description: 'Callback when value changes (on blur or step button click)',
      table: { type: { summary: '(fixedValue: number | undefined, rawValue: number | undefined) => void' } },
    },
    onInputChange: {
      action: 'onInputChange',
      description: 'Callback when input value changes during typing',
      table: { type: { summary: '(inputValue: string, parsedValue: number | undefined) => void' } },
    },
    onFocus: {
      action: 'onFocus',
      description: 'Callback when input receives focus',
      table: { type: { summary: '(e: React.FocusEvent<HTMLInputElement>) => void' } },
    },
    onBlur: {
      action: 'onBlur',
      description: 'Callback when input loses focus',
      table: { type: { summary: '(e: React.FocusEvent<HTMLInputElement>) => void' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    defaultValue: 0,
    step: 1,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    defaultValue: 50,
    size: 'small',
    step: 1,
  },
};

export const Large: Story = {
  args: {
    defaultValue: 50,
    size: 'large',
    step: 1,
  },
};

export const WithMinMax: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 'large',
  },
};

export const WithPrecision: Story = {
  args: {
    defaultValue: 3.14,
    precision: 2,
    step: 0.01,
    size: 'large',
  },
};

export const WithCustomStep: Story = {
  args: {
    defaultValue: 0,
    step: 5,
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
    size: 'large',
  },
};

export const Alert: Story = {
  args: {
    defaultValue: 150,
    max: 100,
    alert: true,
    size: 'large',
  },
};

export const WithUnit: Story = {
  args: {
    defaultValue: 100,
    unit: 'px',
    size: 'large',
  },
};

export const WithUnitPercent: Story = {
  args: {
    defaultValue: 50,
    unit: '%',
    min: 0,
    max: 100,
    size: 'large',
  },
};

export const WithFormatter: Story = {
  args: {
    defaultValue: 1000,
    formatter: (value) => `${value}px`,
    parser: (displayValue) => parseFloat(displayValue.replace('px', '')),
    size: 'large',
  },
};

export const WithRawValueCallback: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 'large',
    onChange: (fixedValue, rawValue) => {
      console.log('Fixed value:', fixedValue);
      console.log('Raw value:', rawValue);
      if (fixedValue !== rawValue) {
        console.warn(`Value ${rawValue} was clamped to ${fixedValue}`);
      }
    },
  },
};

export const HideStepButtons: Story = {
  args: {
    defaultValue: 50,
    showStepButtons: false,
    size: 'large',
  },
};

export const HoverStepButtons: Story = {
  args: {
    defaultValue: 50,
    showStepButtonsTrigger: 'hover',
    size: 'large',
  },
};

export const Outlined: Story = {
  args: {
    defaultValue: 50,
    lineType: 'outlined',
    size: 'large',
  },
};

export const Underlined: Story = {
  args: {
    defaultValue: 50,
    lineType: 'underlined',
    size: 'large',
  },
};

export const Borderless: Story = {
  args: {
    defaultValue: 50,
    lineType: 'borderless',
    size: 'large',
  },
};

export const Playground: Story = {
  args: {
    defaultValue: 0,
    min: -100,
    max: 100,
    step: 1,
    size: 'large',
    disabled: false,
    alert: false,
    lineType: 'outlined',
  },
};

/**
 * This story demonstrates all event callbacks.
 * Open the Actions panel to see the events being triggered.
 * - onFocus: triggered when input receives focus
 * - onBlur: triggered when input loses focus
 * - onInputChange: triggered on every keystroke during typing
 * - onChange: triggered when value is committed (on blur or step button click)
 */
export const WithEvents: Story = {
  name: 'With Events (check Actions panel)',
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 'large',
  },
};

export const FloatPrecision: Story = {
  args: {
    defaultValue: 0.01,
    step: 0.1,
    size: 'large',
  },
};

export const WithThousandsSeparator: Story = {
  name: 'With Thousands Separator (default)',
  args: {
    defaultValue: 1234567.89,
    precision: 2,
    size: 'large',
    useThousandsSeparator: true,
  },
};

export const WithoutThousandsSeparator: Story = {
  name: 'Without Thousands Separator',
  args: {
    defaultValue: 1234567.89,
    precision: 2,
    size: 'large',
    useThousandsSeparator: false,
  },
};

/**
 * Locale-specific stories demonstrating number formatting
 * Different locales use different decimal and thousands separators
 */

// Helper component to wrap NumberInput with a specific locale
const LocaleWrapper: React.FC<{
  locale: string;
  children: React.ReactNode;
}> = ({ locale, children }) => {
  const config = createUIConfig({
    theme: lightTheme,
    locale,
  });
  return <UIConfigProvider config={config}>{children}</UIConfigProvider>;
};

export const LocaleEnUS: Story = {
  name: 'Locale: en-US (1,234.56)',
  args: {
    defaultValue: 1234.56,
    precision: 2,
    size: 'large',
  },
  decorators: [
    (Story) => (
      <LocaleWrapper locale="en-US">
        <Story />
      </LocaleWrapper>
    ),
  ],
};

export const LocaleDeDE: Story = {
  name: 'Locale: de-DE (1.234,56)',
  args: {
    defaultValue: 1234.56,
    precision: 2,
    size: 'large',
  },
  decorators: [
    (Story) => (
      <LocaleWrapper locale="de-DE">
        <Story />
      </LocaleWrapper>
    ),
  ],
};

export const LocaleFrFR: Story = {
  name: 'Locale: fr-FR (1 234,56)',
  args: {
    defaultValue: 1234.56,
    precision: 2,
    size: 'large',
  },
  decorators: [
    (Story) => (
      <LocaleWrapper locale="fr-FR">
        <Story />
      </LocaleWrapper>
    ),
  ],
};

export const LocaleZhCN: Story = {
  name: 'Locale: zh-CN (1,234.56)',
  args: {
    defaultValue: 1234.56,
    precision: 2,
    size: 'large',
  },
  decorators: [
    (Story) => (
      <LocaleWrapper locale="zh-CN">
        <Story />
      </LocaleWrapper>
    ),
  ],
};

export const LocaleWithLargeNumber: Story = {
  name: 'Locale: Large Numbers',
  args: {
    defaultValue: 1234567.89,
    precision: 2,
    size: 'large',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ marginBottom: '4px', fontSize: '12px', color: '#666' }}>en-US: 1,234,567.89</div>
        <LocaleWrapper locale="en-US">
          <NumberInput {...args} />
        </LocaleWrapper>
      </div>
      <div>
        <div style={{ marginBottom: '4px', fontSize: '12px', color: '#666' }}>de-DE: 1.234.567,89</div>
        <LocaleWrapper locale="de-DE">
          <NumberInput {...args} />
        </LocaleWrapper>
      </div>
      <div>
        <div style={{ marginBottom: '4px', fontSize: '12px', color: '#666' }}>fr-FR: 1 234 567,89</div>
        <LocaleWrapper locale="fr-FR">
          <NumberInput {...args} />
        </LocaleWrapper>
      </div>
    </div>
  ),
};

// ========== ValueMap (Non-linear Stepping) ==========

const zoomValueMap: ValueMap = {
  type: 'piecewise',
  start: 10,
  pieces: [
    { size: 90, step: 5, visualSize: 50 },   // 10%-100%, step 5%
    { size: 300, step: 25, visualSize: 50 },  // 100%-400%, step 25%
  ],
};

/**
 * NumberInput with valueMap for non-linear stepping.
 * 10%-100%: step 5% | 100%-400%: step 25%
 * When valueMap is provided, min/max/step props are ignored.
 */
export const WithValueMap: Story = {
  render: () => {
    const [value, setValue] = useState(100);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Zoom Input (10% - 400%)
        </div>
        <div style={{ fontSize: '12px', color: '#999' }}>
          10%-100%: step 5% | 100%-400%: step 25%
        </div>
        <NumberInput
          value={value}
          valueMap={zoomValueMap}
          unit="%"
          size="large"
          onChange={(fixedValue) => setValue(fixedValue ?? 10)}
        />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Current value: {value}%
        </div>
      </div>
    );
  },
};

const customPiecewiseMap: ValueMap = {
  type: 'piecewise',
  start: 0,
  pieces: [
    { size: 10, step: 1, visualSize: 30 },   // 0-10, step 1
    { size: 40, step: 5, visualSize: 40 },   // 10-50, step 5
    { size: 50, step: 10, visualSize: 30 },  // 50-100, step 10
  ],
};

/**
 * NumberInput with a three-segment piecewise valueMap.
 * 0-10: step 1 | 10-50: step 5 | 50-100: step 10
 * User-typed values are snapped to the nearest valid step on blur.
 */
export const WithPiecewiseValueMap: Story = {
  render: () => {
    const [value, setValue] = useState(25);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Piecewise Input (0 - 100)
        </div>
        <div style={{ fontSize: '12px', color: '#999' }}>
          0-10: step 1 | 10-50: step 5 | 50-100: step 10
        </div>
        <NumberInput
          value={value}
          valueMap={customPiecewiseMap}
          size="large"
          onChange={(fixedValue) => setValue(fixedValue ?? 0)}
        />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Current value: {value}
        </div>
      </div>
    );
  },
};

// ========== Focus & Keyboard Behavior ==========

/**
 * When selectAllOnFocus is true, all text in the input is selected on focus.
 * Click on the input to see the text get selected automatically.
 */
export const SelectAllOnFocus: Story = {
  args: {
    defaultValue: 12345,
    size: 'large',
    selectAllOnFocus: true,
  },
};

/**
 * When blurOnEscape is false, pressing Escape will NOT blur the input.
 * By default (true), pressing Escape blurs the input just like Enter.
 */
export const NoBlurOnEscape: Story = {
  args: {
    defaultValue: 50,
    size: 'large',
    blurOnEscape: false,
  },
};

