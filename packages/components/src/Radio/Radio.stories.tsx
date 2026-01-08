import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
    },
    id: {
      control: 'text',
      description: 'ID attribute for the radio (used with htmlFor in labels)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

// Basic usage
export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const ClickPreventDefault: Story = {
  args: {
    clickPreventDefault: true,
  },
};

// Radio group example
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Radio
            id="radio-option1"
            name="group1"
            value="option1"
            checked={selected === 'option1'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Option 1</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Radio
            id="radio-option2"
            name="group1"
            value="option2"
            checked={selected === 'option2'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Option 2</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Radio
            id="radio-option3"
            name="group1"
            value="option3"
            checked={selected === 'option3'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Option 3</span>
        </label>

        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Selected: {selected}
        </div>
      </div>
    );
  },
};

// Using htmlFor attribute
export const WithHtmlFor: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio
            id="radio-a"
            name="group2"
            value="option1"
            checked={selected === 'option1'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor="radio-a" style={{ cursor: 'pointer' }}>
            Click this label to select Option 1
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio
            id="radio-b"
            name="group2"
            value="option2"
            checked={selected === 'option2'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor="radio-b" style={{ cursor: 'pointer' }}>
            Click this label to select Option 2
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio
            id="radio-c"
            name="group2"
            value="option3"
            checked={selected === 'option3'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor="radio-c" style={{ cursor: 'pointer' }}>
            Click this label to select Option 3
          </label>
        </div>

        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Selected: {selected}
        </div>
      </div>
    );
  },
};

// All states showcase
export const AllStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Normal
        </h3>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <Radio defaultChecked={false} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Hover</div>
            <Radio defaultChecked={false} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <Radio defaultChecked={false} disabled />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Selected
        </h3>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <Radio defaultChecked={true} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Hover</div>
            <Radio defaultChecked={true} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <Radio defaultChecked={true} disabled />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

