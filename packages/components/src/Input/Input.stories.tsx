import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { useState } from 'react';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L11.1 11.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    lineType: {
      control: 'radio',
      options: ['outlined', 'underlined'],
      description: 'Input line type',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'large'],
      description: 'Input size',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is readonly',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show clear button when input has value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Default placeholder',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Input {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    placeholder: 'Default placeholder',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Small (20px)</div>
        <Input {...args} size="mini" placeholder="Mini input" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Medium (24px)</div>
        <Input {...args} size="small" placeholder="Small input" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Large (32px)</div>
        <Input {...args} size="medium" placeholder="Medium input" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          large (40px)
        </div>
        <Input {...args} size="large" placeholder="large input" />
      </div>
    </div>
  ),
};

export const States: Story = {
  args: {
    placeholder: 'Default placeholder',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Default</div>
        <Input {...args} placeholder="Default state" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Hover (hover over input)
        </div>
        <Input {...args} placeholder="Hover state" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Active (click to focus)
        </div>
        <Input {...args} placeholder="Active state" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Error</div>
        <Input {...args} error placeholder="Error state" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Disabled</div>
        <Input {...args} disabled placeholder="Disabled state" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>ReadOnly</div>
        <Input {...args} readOnly value="ReadOnly value" />
      </div>
    </div>
  ),
};

const WithValueComponent = (args: Story['args']) => {
  const [value, setValue] = useState('Input content');
  return (
    <div style={{ width: '300px' }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export const WithValue: Story = {
  args: {
  },
  render: (args) => <WithValueComponent {...args} />,
};

export const WithPrefixNode: Story = {

  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>With search icon</div>
        <Input {...args} prefixNode={<SearchIcon />} placeholder="Search..." />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>With text prefix</div>
        <Input {...args} prefixNode={<span style={{ color: '#999' }}>Type:</span>} placeholder="Enter type" />
      </div>
    </div>
  ),
};

const WithSuffixNodeComponent = (args: Story['args']) => {
  const [value, setValue] = useState('Some content');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          With clear button
        </div>
        <Input {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          suffixNode={
            value ? (
              <button
                onClick={() => setValue('')}
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CloseIcon />
              </button>
            ) : null
          }
          placeholder="Type something..."
        />
      </div>
    </div>
  );
};

export const WithSuffixNode: Story = {
  args: {
    placeholder: 'Default placeholder',
    clearable: false,
  },
  render: (args) => <WithSuffixNodeComponent {...args} />,
};

const WithBothNodesComponent = (args: Story['args']) => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: '300px' }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        prefixNode={<SearchIcon />}
        suffixNode={
          value ? (
            <button
              onClick={() => setValue('')}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CloseIcon />
            </button>
          ) : null
        }
        placeholder="Search with clear..."
      />
    </div>
  );
};

export const WithBothNodes: Story = {
  render: (args) => <WithBothNodesComponent {...args} />,
};

export const AllSizesWithStates: Story = {
  args: {
    placeholder: 'Default placeholder',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>small (20px)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input {...args} defaultValue="Default" size="small" placeholder="Default" style={{ width: '180px' }} />
          <Input {...args} size="small" placeholder="Active" style={{ width: '180px' }} />
          <Input {...args} size="small" error placeholder="Error" style={{ width: '180px' }} />
          <Input {...args} size="small" disabled placeholder="Disabled" style={{ width: '180px' }} />
          <Input {...args} size="small" readOnly value="ReadOnly" style={{ width: '180px' }} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>medium (24px)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input {...args} size="medium" placeholder="Default" style={{ width: '180px' }} />
          <Input {...args} size="medium" placeholder="Active" style={{ width: '180px' }} />
          <Input {...args} size="medium" error placeholder="Error" style={{ width: '180px' }} />
          <Input {...args} size="medium" disabled placeholder="Disabled" style={{ width: '180px' }} />
          <Input {...args} size="medium" readOnly value="ReadOnly" style={{ width: '180px' }} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>large (32px)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input {...args} size="large" placeholder="Default" style={{ width: '180px' }} />
          <Input {...args} size="large" placeholder="Active" style={{ width: '180px' }} />
          <Input {...args} size="large" error placeholder="Error" style={{ width: '180px' }} />
          <Input {...args} size="large" disabled placeholder="Disabled" style={{ width: '180px' }} />
          <Input {...args} size="large" readOnly value="ReadOnly" style={{ width: '180px' }} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          large (40px)
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input {...args} size="large" placeholder="Default" style={{ width: '180px' }} />
          <Input {...args} size="large" placeholder="Active" style={{ width: '180px' }} />
          <Input {...args} size="large" error placeholder="Error" style={{ width: '180px' }} />
          <Input {...args} size="large" disabled placeholder="Disabled" style={{ width: '180px' }} />
          <Input {...args} size="large" readOnly value="ReadOnly" style={{ width: '180px' }} />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    placeholder: 'Playground input',
    size: 'medium',
    error: false,
    disabled: false,
    readOnly: false,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Input {...args} />
    </div>
  ),
};

/**
 * Underlined input type
 */
export const Underlined: Story = {
  args: {
    lineType: 'underlined',
    placeholder: 'Enter text...',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Input {...args} />
    </div>
  ),
};

/**
 * Underlined with clearable
 */
export const UnderlinedWithClearable: Story = {
  args: {
    lineType: 'underlined',
    placeholder: 'Search...',
    clearable: true,
    defaultValue: 'content',
    prefixNode: <SearchIcon />,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Input {...args} />
    </div>
  ),
};

/**
 * Comparison of outlined vs underlined
 */
export const LineTypeComparison: Story = {
  args: {
    placeholder: 'Default placeholder',
    size: 'medium',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <div style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Outlined (Default)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input {...args} placeholder="Default state" />
          <Input {...args} placeholder="With prefix" prefixNode={<SearchIcon />} />
          <Input {...args} placeholder="With clearable" clearable defaultValue="content" />
          <Input {...args} placeholder="Error state" error defaultValue="error content" />
          <Input {...args} placeholder="Disabled" disabled defaultValue="disabled" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Underlined
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input {...args} lineType="underlined" placeholder="Default state" />
          <Input {...args} lineType="underlined" placeholder="With prefix" prefixNode={<SearchIcon />} />
          <Input {...args} lineType="underlined" placeholder="With clearable" clearable defaultValue="content" />
          <Input {...args} lineType="underlined" placeholder="Error state" error defaultValue="error content" />
          <Input {...args} lineType="underlined" placeholder="Disabled" disabled defaultValue="disabled" />
        </div>
      </div>
    </div>
  ),
};

/**
 * With clearable functionality
 */
export const WithClearable: Story = {
  args: {
    placeholder: 'Default placeholder',
    size: 'medium',
  },
  render: (args: Story['args']) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
        <div>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Outlined with Clearable
          </div>
          <Input
            {...args}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            onClear={() => setValue1('')}
            placeholder="Type something..."
            clearable
          />
        </div>
        <div>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Underlined with Clearable
          </div>
          <Input
            {...args}
            lineType="underlined"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            onClear={() => setValue2('')}
            placeholder="Type something..."
            clearable
            prefixNode={<SearchIcon />}
          />
        </div>
      </div>
    );
  },
};

/**
 * Custom className and style props demonstration
 */
export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Understanding className vs inputClassName
        </h3>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#5ba0e7' }}>
            1. className (applies to InputWrapper)
          </div>
          <Input
            placeholder="Custom wrapper border..."
            className="custom-wrapper"
            prefixNode={<SearchIcon />}
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            Blue dashed border on InputWrapper (outer container with prefix/suffix)
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#e95555' }}>
            2. inputClassName (applies to input element)
          </div>
          <Input
            placeholder="Custom input text..."
            inputClassName="custom-input"
            prefixNode={<SearchIcon />}
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            Green bold text on input element only
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#4ea44b' }}>
            3. Both className + inputClassName
          </div>
          <Input
            placeholder="Type here..."
            className="wrapper-style"
            inputClassName="input-style"
            prefixNode={<SearchIcon />}
            clearable
            defaultValue="Combined styling"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            Wrapper has purple background, input has yellow background
          </div>
        </div>

        <div>
          <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#764ba2' }}>
            4. style + inputStyle (inline styles)
          </div>
          <Input
            placeholder="Inline styles..."
            style={{ border: '2px solid #667eea', borderRadius: '8px' }}
            inputStyle={{ fontWeight: 'bold', color: '#764ba2', fontSize: '16px' }}
            prefixNode={<SearchIcon />}
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            style for wrapper, inputStyle for input element
          </div>
        </div>
      </div>

      <div style={{
        background: '#f9f9f9',
        padding: '24px',
        borderRadius: '8px',
        border: '1px dashed #ccc'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Practical Example: Form Field with Custom Styling
        </h3>
        <Input
          placeholder="Enter your email..."
          className="form-field-wrapper"
          inputClassName="form-field-input"
          prefixNode={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 5L8 9L14 5" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="2" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          }
          clearable
        />
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
          <strong>Use cases:</strong><br/>
          • className - Control wrapper appearance (borders, shadows, layout)<br/>
          • inputClassName - Control input text styling (font, color, alignment)<br/>
          • style - Inline wrapper styles (width, padding, etc.)<br/>
          • inputStyle - Inline input styles (text-transform, letter-spacing, etc.)
        </div>
      </div>

      <style>{`
        .custom-wrapper {
          border: 2px dashed #5ba0e7 !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
        }

        .custom-input {
          color: #4ea44b !important;
          font-weight: bold !important;
          font-size: 15px !important;
        }

        .wrapper-style {
          background: rgba(118, 75, 162, 0.1) !important;
          border: 2px solid #764ba2 !important;
          border-radius: 12px !important;
        }

        .input-style {
          background: rgba(235, 227, 97, 0.2) !important;
          border-radius: 4px;
          padding: 4px 8px;
        }

        .form-field-wrapper {
          border: 1px solid #5ba0e7 !important;
          box-shadow: 0 2px 4px rgba(91, 160, 231, 0.2) !important;
        }

        .form-field-input {
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  ),
};
