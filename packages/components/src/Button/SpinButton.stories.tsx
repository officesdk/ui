import type { Meta, StoryObj } from '@storybook/react';
import { SpinButton } from './SpinButton';
import { useState } from 'react';
import type { ValueMap } from '../Slider/valueMap';

const meta: Meta<typeof SpinButton> = {
  title: 'Components/SpinButton',
  component: SpinButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size of the spin button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the spin button is disabled',
    },
    alert: {
      control: 'boolean',
      description: 'Whether to show alert state (red border)',
    },
    showSlider: {
      control: 'boolean',
      description: 'Whether to show the slider',
    },
    step: {
      control: 'number',
      description: 'Step increment/decrement',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    precision: {
      control: 'number',
      description: 'Number of decimal places',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpinButton>;

// ========== Basic Usage ==========
export const Default: Story = {
  args: {
    defaultValue: 35,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    defaultValue: 35,
    size: 'large',
  },
};

// With Slider
export const WithSliderSmall: Story = {
  args: {
    defaultValue: 35,
    size: 'small',
    showSlider: true,
    min: 0,
    max: 100,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <SpinButton {...args} />
    </div>
  ),
};

export const WithSliderLarge: Story = {
  args: {
    defaultValue: 35,
    size: 'large',
    showSlider: true,
    min: 0,
    max: 100,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <SpinButton {...args} />
    </div>
  ),
};

// State
export const Disabled: Story = {
  args: {
    defaultValue: 35,
    size: 'small',
    disabled: true,
  },
};

export const Alert: Story = {
  args: {
    defaultValue: 35,
    size: 'small',
    alert: true,
  },
};

// Range limit
export const WithMinMax: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    size: 'small',
  },
};

// ========== Custom Step ==========
export const CustomStep: Story = {
  args: {
    defaultValue: 0,
    step: 5,
    size: 'small',
  },
};

export const DecimalStep: Story = {
  args: {
    defaultValue: 0,
    step: 0.1,
    precision: 1,
    size: 'small',
  },
};

// ========== Formatter ==========
export const WithPercentFormatter: Story = {
  args: {
    defaultValue: 35,
    size: 'small',
    formatter: (value) => `${value}%`,
    parser: (value) => parseFloat(value.replace('%', '')),
  },
};

export const WithCurrencyFormatter: Story = {
  args: {
    defaultValue: 100,
    size: 'small',
    formatter: (value) => `¥${value.toFixed(2)}`,
    parser: (value) => parseFloat(value.replace('¥', '')),
  },
};

// ========== Controlled Component ==========
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(35);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <SpinButton
          value={value}
          onChange={(val) => setValue(val ?? 0)}
          size="small"
        />
        <div style={{ fontSize: '14px', color: '#666' }}>
          current value: {value}
        </div>
        <button
          onClick={() => setValue(50)}
          style={{
            padding: '4px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          reset to 50
        </button>
      </div>
    );
  },
};

// ========== All States Showcase ==========
export const AllStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          24PX Small (with Slider)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <SpinButton defaultValue={35} size="small" showSlider min={0} max={100} />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Alert</div>
            <SpinButton defaultValue={35} size="small" showSlider min={0} max={100} alert />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <SpinButton defaultValue={35} size="small" showSlider min={0} max={100} disabled />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          24PX Small (without Slider)
        </h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <SpinButton defaultValue={35} size="small" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Alert</div>
            <SpinButton defaultValue={35} size="small" alert />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <SpinButton defaultValue={35} size="small" disabled />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          32PX Large (with Slider)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <SpinButton defaultValue={35} size="large" showSlider min={0} max={100} />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Alert</div>
            <SpinButton defaultValue={35} size="large" showSlider min={0} max={100} alert />
          </div>

          <div style={{ width: '400px' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <SpinButton defaultValue={35} size="large" showSlider min={0} max={100} disabled />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          32PX Large (without Slider)
        </h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <SpinButton defaultValue={35} size="large" />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Alert</div>
            <SpinButton defaultValue={35} size="large" alert />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <SpinButton defaultValue={35} size="large" disabled />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Different Use Cases
        </h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Percentage</div>
            <SpinButton
              defaultValue={35}
              size="small"
              formatter={(val) => `${val}%`}
              parser={(val) => parseFloat(val.replace('%', ''))}
              min={0}
              max={100}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Currency</div>
            <SpinButton
              defaultValue={100}
              size="small"
              formatter={(val) => `¥${val}`}
              parser={(val) => parseFloat(val.replace('¥', ''))}
              min={0}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Decimal</div>
            <SpinButton
              defaultValue={3.5}
              size="small"
              step={0.1}
              precision={1}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Large Step</div>
            <SpinButton
              defaultValue={50}
              size="small"
              step={10}
              min={0}
              max={100}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
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
 * SpinButton with valueMap for non-linear stepping (without slider).
 * The valueMap is passed through to NumberInput.
 * 10%-100%: step 5% | 100%-400%: step 25%
 */
export const WithValueMap: Story = {
  render: () => {
    const [value, setValue] = useState(100);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Zoom SpinButton (10% - 400%)
        </div>
        <div style={{ fontSize: '12px', color: '#999' }}>
          10%-100%: step 5% | 100%-400%: step 25%
        </div>
        <SpinButton
          value={value}
          valueMap={zoomValueMap}
          size="small"
          onChange={(val) => setValue(val ?? 10)}
          inputProps={{ unit: '%' }}
        />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Current value: {value}%
        </div>
      </div>
    );
  },
};

/**
 * SpinButton with valueMap and slider enabled.
 * The valueMap is passed through to both Slider and NumberInput,
 * keeping them in sync with non-linear stepping.
 */
export const WithValueMapAndSlider: Story = {
  render: () => {
    const [value, setValue] = useState(100);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Zoom SpinButton with Slider (10% - 400%)
        </div>
        <div style={{ fontSize: '12px', color: '#999' }}>
          10%-100%: step 5% | 100%-400%: step 25%
        </div>
        <div style={{ width: '400px' }}>
          <SpinButton
            value={value}
            valueMap={zoomValueMap}
            showSlider
            size="large"
            onChange={(val) => setValue(val ?? 10)}
            inputProps={{ unit: '%' }}
          />
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Current value: {value}%
        </div>
      </div>
    );
  },
};

