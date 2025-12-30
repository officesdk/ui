import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
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



