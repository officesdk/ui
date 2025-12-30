import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    id: {
      control: 'text',
      description: 'ID attribute for the checkbox (used with htmlFor in labels)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
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

export const DisabledIndeterminate: Story = {
  args: {
    indeterminate: true,
    disabled: true,
  },
};

// Checkbox group example
export const CheckboxGroup: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems(prev => ({
        ...prev,
        [name]: e.target.checked,
      }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Checkbox
            id="checkbox-option1"
            name="option1"
            checked={checkedItems.option1}
            onChange={handleChange('option1')}
          />
          <span>Option 1</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Checkbox
            id="checkbox-option2"
            name="option2"
            checked={checkedItems.option2}
            onChange={handleChange('option2')}
          />
          <span>Option 2</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Checkbox
            id="checkbox-option3"
            name="option3"
            checked={checkedItems.option3}
            onChange={handleChange('option3')}
          />
          <span>Option 3</span>
        </label>

        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Selected: {Object.entries(checkedItems).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none'}
        </div>
      </div>
    );
  },
};

// Using htmlFor attribute
export const WithHtmlFor: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      item1: false,
      item2: true,
      item3: false,
    });

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems(prev => ({
        ...prev,
        [name]: e.target.checked,
      }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox
            id="checkbox-a"
            name="item1"
            checked={checkedItems.item1}
            onChange={handleChange('item1')}
          />
          <label htmlFor="checkbox-a" style={{ cursor: 'pointer' }}>
            Click this label to toggle Item 1
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox
            id="checkbox-b"
            name="item2"
            checked={checkedItems.item2}
            onChange={handleChange('item2')}
          />
          <label htmlFor="checkbox-b" style={{ cursor: 'pointer' }}>
            Click this label to toggle Item 2
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox
            id="checkbox-c"
            name="item3"
            checked={checkedItems.item3}
            onChange={handleChange('item3')}
          />
          <label htmlFor="checkbox-c" style={{ cursor: 'pointer' }}>
            Click this label to toggle Item 3
          </label>
        </div>

        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Selected: {Object.entries(checkedItems).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none'}
        </div>
      </div>
    );
  },
};

// Select all with indeterminate state
export const SelectAllExample: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      item1: false,
      item2: false,
      item3: false,
    });

    const allChecked = Object.values(checkedItems).every(Boolean);
    const someChecked = Object.values(checkedItems).some(Boolean) && !allChecked;

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setCheckedItems({
        item1: newValue,
        item2: newValue,
        item3: newValue,
      });
    };

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems(prev => ({
        ...prev,
        [name]: e.target.checked,
      }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}>
          <Checkbox
            id="checkbox-select-all"
            checked={allChecked}
            indeterminate={someChecked}
            onChange={handleSelectAll}
          />
          <span>Select All</span>
        </label>

        <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Checkbox
              id="checkbox-item1"
              name="item1"
              checked={checkedItems.item1}
              onChange={handleChange('item1')}
            />
            <span>Item 1</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Checkbox
              id="checkbox-item2"
              name="item2"
              checked={checkedItems.item2}
              onChange={handleChange('item2')}
            />
            <span>Item 2</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Checkbox
              id="checkbox-item3"
              name="item3"
              checked={checkedItems.item3}
              onChange={handleChange('item3')}
            />
            <span>Item 3</span>
          </label>
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
            <Checkbox defaultChecked={false} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Hover</div>
            <Checkbox defaultChecked={false} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <Checkbox defaultChecked={false} disabled />
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
            <Checkbox defaultChecked={true} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Hover</div>
            <Checkbox defaultChecked={true} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <Checkbox defaultChecked={true} disabled />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Indeterminate
        </h3>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Default</div>
            <Checkbox indeterminate />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Hover</div>
            <Checkbox indeterminate />
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Disabled</div>
            <Checkbox indeterminate disabled />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

