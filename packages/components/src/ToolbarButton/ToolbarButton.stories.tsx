import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToolbarButton } from './ToolbarButton';

const FormatPaintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M14.2099 5.37879V4H5V7.84089L14.2099 7.84091V6.46212H14.9051V9.12121L9.43182 9.1212V11.3864H8.47594V17H11.2567V11.3864H10.4167V10.2045L16 10.2045V5.37879H14.2099Z"
      fill="#41464B"
    />
  </svg>
);

const meta: Meta<typeof ToolbarButton> = {
  title: 'Components/ToolbarButton',
  component: ToolbarButton,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the button is in active state',
    },
    hasDropdown: {
      control: 'boolean',
      description: 'Whether to show dropdown arrow',
    },
    splitDropdown: {
      control: 'boolean',
      description: 'Whether the dropdown section is clickable separately',
    },
    onClick: {
      action: 'clicked',
    },
    onDoubleClick: {
      action: 'double clicked',
    },
    onDropdownClick: {
      action: 'dropdown clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToolbarButton>;

export const Default: Story = {
  args: {
    icon: <FormatPaintIcon />,
  },
};

export const DoubleClickArea: Story = {
  name: 'Double Click Area (Icon + Label + Dropdown)',
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', padding: '20px', background: '#f9f9f9' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Default</div>
          <ToolbarButton
            icon={<FormatPaintIcon />}
            label="Dropdown"
            hasDropdown
            splitDropdown
            onClick={args.onClick}
            onDropdownClick={args.onDropdownClick}
          />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Hover</div>
          <ToolbarButton
            icon={<FormatPaintIcon />}
            label="Dropdown"
            hasDropdown
            splitDropdown
            onClick={args.onClick}
            onDropdownClick={args.onDropdownClick}
          />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Active</div>
        <ToolbarButton
          icon={<FormatPaintIcon />}
          label="Dropdown"
          hasDropdown
          splitDropdown
          isActive
          onClick={args.onClick}
          onDropdownClick={args.onDropdownClick}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Click</div>
          <ToolbarButton
            icon={<FormatPaintIcon />}
            label="Dropdown"
            hasDropdown
            splitDropdown
            onClick={args.onClick}
            onDropdownClick={args.onDropdownClick}
          />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Disabled</div>
        <ToolbarButton
          icon={<FormatPaintIcon />}
          label="Dropdown"
          hasDropdown
          splitDropdown
          disabled
          onClick={args.onClick}
          onDropdownClick={args.onDropdownClick}
        />
      </div>
    </div>
  ),
};

export const SingleClickArea: Story = {
  name: 'Single Click Area (Icon Only + Dropdown)',
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', padding: '20px', background: '#f9f9f9' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Default</div>
        <ToolbarButton icon={<FormatPaintIcon />} hasDropdown onClick={args.onClick} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Hover</div>
        <ToolbarButton icon={<FormatPaintIcon />} hasDropdown onClick={args.onClick} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Active</div>
        <ToolbarButton icon={<FormatPaintIcon />} hasDropdown isActive onClick={args.onClick} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Click</div>
        <ToolbarButton icon={<FormatPaintIcon />} hasDropdown onClick={args.onClick} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Disabled</div>
        <ToolbarButton icon={<FormatPaintIcon />} hasDropdown disabled onClick={args.onClick} />
      </div>
    </div>
  ),
};


export const IconOnly: Story = {
  args: {
    icon: <FormatPaintIcon />,
  },
};

export const WithLabel: Story = {
  args: {
    icon: <FormatPaintIcon />,
    label: 'Format',
  },
};

export const WithDropdown: Story = {
  args: {
    icon: <FormatPaintIcon />,
    label: 'Format',
    hasDropdown: true,
  },
};

export const Playground: Story = {
  args: {
    icon: <FormatPaintIcon />,
    label: 'Format',
    hasDropdown: true,
    splitDropdown: false,
    disabled: false,
    isActive: false,
  },
};

export const StringIcon: Story = {
  name: 'String Icon (Image URL)',
  args: {
    icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    label: 'Format',
  },
};

export const StringLabel: Story = {
  name: 'String Label',
  args: {
    icon: <FormatPaintIcon />,
    label: 'Format',
  },
};

export const CustomLabelNode: Story = {
  name: 'Custom Label Node',
  args: {
    icon: <FormatPaintIcon />,
    label: (
      <span style={{ color: '#1890ff', fontWeight: 'bold' }}>
        Custom
      </span>
    ),
  },
};

export const StringIconAndLabel: Story = {
  name: 'String Icon and Label',
  args: {
    icon: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png',
    label: 'Edit',
    hasDropdown: true,
  },
};

export const WithInputLabel: Story = {
  name: 'Label as Input Field',
  render: () => {
    const [value, setValue] = useState('12');

    const inputElement = (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: '40px',
          height: '20px',
          padding: '0 4px',
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontSize: '12px',
          fontFamily: 'PingFang SC, sans-serif',
          color: '#41464B',
          textAlign: 'center',
        }}
        onClick={(e) => {
          e.stopPropagation();
          (e.target as HTMLInputElement).select();
        }}
      />
    );

    return (
      <div style={{ display: 'flex', gap: '16px', padding: '20px', background: '#f9f9f9', alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Font Size Selector</div>
          <ToolbarButton
            icon={<FormatPaintIcon />}
            label={inputElement}
            hasDropdown
            splitDropdown
            onDropdownClick={() => console.log('Dropdown clicked')}
          />
        </div>

        <div>
          <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Input Only</div>
          <ToolbarButton
            label={inputElement}
          />
        </div>

        <div>
          <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>With Suffix</div>
          <ToolbarButton
            label={
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                {inputElement}
                <span style={{ fontSize: '12px', color: '#999' }}>px</span>
              </div>
            }
            hasDropdown
          />
        </div>
      </div>
    );
  },
};

export const WithDoubleClick: Story = {
  name: 'With Double Click',
  render: () => {
    const [clickCount, setClickCount] = useState(0);
    const [doubleClickCount, setDoubleClickCount] = useState(0);

    return (
      <div style={{ padding: '20px', background: '#f9f9f9' }}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Click or Double Click the Button
          </div>
          <ToolbarButton
            icon={<FormatPaintIcon />}
            label="Format"
            onClick={() => setClickCount(prev => prev + 1)}
            onDoubleClick={() => setDoubleClickCount(prev => prev + 1)}
          />
        </div>

        <div style={{ fontSize: '14px', color: '#666' }}>
          <div>Single Clicks: {clickCount}</div>
          <div>Double Clicks: {doubleClickCount}</div>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
            Note: Double click will also trigger single click events
          </div>
        </div>
      </div>
    );
  },
};
