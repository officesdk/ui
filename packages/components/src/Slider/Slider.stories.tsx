import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import type { ValueMap } from './valueMap';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Slider direction',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Basic usage
export const Default: Story = {
  args: {
    defaultValue: 35,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Slider {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 35,
    disabled: true,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Slider {...args} />
    </div>
  ),
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(35);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Slider
          value={value}
          onChange={(val) => setValue(val)}
        />
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Value: {value}%
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
          Reset to 50%
        </button>
      </div>
    );
  },
};

// Different ranges
export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState(50);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Slider
          value={value}
          min={0}
          max={200}
          onChange={(val) => setValue(val)}
        />
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Value: {value} (Range: 0-200)
        </div>
      </div>
    );
  },
};

// Custom step
export const CustomStep: Story = {
  render: () => {
    const [value, setValue] = useState(50);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Slider
          value={value}
          step={10}
          onChange={(val) => setValue(val)}
        />
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Value: {value}% (Step: 10)
        </div>
      </div>
    );
  },
};

// All states showcase
export const AllStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Default State
        </h3>
        <Slider defaultValue={35} />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Different Values
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>0%</div>
            <Slider defaultValue={0} />
          </div>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>25%</div>
            <Slider defaultValue={25} />
          </div>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>50%</div>
            <Slider defaultValue={50} />
          </div>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>75%</div>
            <Slider defaultValue={75} />
          </div>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>100%</div>
            <Slider defaultValue={100} />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Disabled State
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled at 35%</div>
            <Slider defaultValue={35} disabled />
          </div>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled at 70%</div>
            <Slider defaultValue={70} disabled />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Vertical slider
export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(35);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '200px' }}>
        <Slider
          direction="vertical"
          value={value}
          onChange={(val) => setValue(val)}
        />
        <div style={{ fontSize: '14px', color: '#666',width: '100px' }}>
          Value: {value}%
        </div>
      </div>
    );
  },
};

// Vertical disabled
export const VerticalDisabled: Story = {
  args: {
    defaultValue: 50,
    direction: 'vertical',
    disabled: true,
  },
  render: (args) => (
    <div style={{ height: '200px' }}>
      <Slider {...args} />
    </div>
  ),
};

// Vertical showcase
export const VerticalShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Vertical Sliders - Different Values
        </h3>
        <div style={{ display: 'flex', gap: '32px', height: '200px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={0} />
            <div style={{ fontSize: '12px', color: '#666' }}>0%</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={25} />
            <div style={{ fontSize: '12px', color: '#666' }}>25%</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={50} />
            <div style={{ fontSize: '12px', color: '#666' }}>50%</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={75} />
            <div style={{ fontSize: '12px', color: '#666' }}>75%</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={100} />
            <div style={{ fontSize: '12px', color: '#666' }}>100%</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Vertical Disabled
        </h3>
        <div style={{ display: 'flex', gap: '32px', height: '200px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={35} disabled />
            <div style={{ fontSize: '12px', color: '#666' }}>Disabled 35%</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%' }}>
            <Slider direction="vertical" defaultValue={70} disabled />
            <div style={{ fontSize: '12px', color: '#666' }}>Disabled 70%</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Piecewise slider (non-linear)
const zoomValueMap: ValueMap = {
  type: 'piecewise',
  start: 10,
  pieces: [
    { size: 90, step: 5, visualSize: 50 },   // 10%-100%, step 5%, takes 50% of visual width
    { size: 300, step: 25, visualSize: 50 }, // 100%-400%, step 25%, takes 50% of visual width
  ],
};

export const ZoomSlider: Story = {
  render: () => {
    const [value, setValue] = useState(100);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Zoom Slider (10% - 400%)
        </div>
        <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
          10%-100%: step 5% | 100%-400%: step 25%
        </div>
        <Slider
          valueMap={zoomValueMap}
          value={value}
          onChange={(val) => setValue(val)}
        />
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Zoom: {value}%
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={() => setValue(10)}
            style={{
              padding: '4px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            10%
          </button>
          <button
            onClick={() => setValue(100)}
            style={{
              padding: '4px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            100%
          </button>
          <button
            onClick={() => setValue(200)}
            style={{
              padding: '4px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            200%
          </button>
          <button
            onClick={() => setValue(400)}
            style={{
              padding: '4px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            400%
          </button>
        </div>
      </div>
    );
  },
};

// Custom piecewise example
const customPiecewiseMap: ValueMap = {
  type: 'piecewise',
  start: 0,
  pieces: [
    { size: 10, step: 1, visualSize: 30 },   // 0-10, step 1, 30% width
    { size: 40, step: 5, visualSize: 40 },   // 10-50, step 5, 40% width
    { size: 50, step: 10, visualSize: 30 },  // 50-100, step 10, 30% width
  ],
};

export const PiecewiseSlider: Story = {
  render: () => {
    const [value, setValue] = useState(25);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Piecewise Slider (0 - 100)
        </div>
        <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
          0-10: step 1 | 10-50: step 5 | 50-100: step 10
        </div>
        <Slider
          valueMap={customPiecewiseMap}
          value={value}
          onChange={(val) => setValue(val)}
        />
        <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Value: {value}
        </div>
      </div>
    );
  },
};

// Vertical zoom slider
export const VerticalZoomSlider: Story = {
  render: () => {
    const [value, setValue] = useState(100);

    return (
      <div style={{ display: 'flex', gap: '24px', height: '300px', alignItems: 'center' }}>
        <Slider
          direction="vertical"
          valueMap={zoomValueMap}
          value={value}
          onChange={(val) => setValue(val)}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '14px', color: '#666' }}>
            Vertical Zoom Slider
          </div>
          <div style={{ fontSize: '12px', color: '#999' }}>
            10%-100%: step 5%
          </div>
          <div style={{ fontSize: '12px', color: '#999' }}>
            100%-400%: step 25%
          </div>
          <div style={{ fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>
            Zoom: {value}%
          </div>
        </div>
      </div>
    );
  },
};

