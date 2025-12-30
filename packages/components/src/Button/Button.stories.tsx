import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Simple icon component for demo
const RedoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 8C13.5 10.7614 11.2614 13 8.5 13C5.73858 13 3.5 10.7614 3.5 8C3.5 5.23858 5.73858 3 8.5 3H13.5M13.5 3L11 5.5M13.5 3L11 0.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorType: {
      control: 'radio',
      options: ['default', 'guidance', 'alert', 'status'],
      description: 'Button color type (status only available for text variant)',
    },
    variant: {
      control: 'radio',
      options: ['solid', 'outlined', 'text', 'icon'],
      description: 'Button variant',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'extraLarge'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
    iconBordered: {
      control: 'boolean',
      description: 'Whether icon button has border (only for icon variant)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ========== Solid Button ==========
export const SolidDefault: Story = {
  args: {
    variant: 'solid',
    colorType: 'default',
    children: 'button',
  },
};

export const SolidGuidance: Story = {
  args: {
    variant: 'solid',
    colorType: 'guidance',
    children: 'button',
  },
};

export const SolidAlert: Story = {
  args: {
    variant: 'solid',
    colorType: 'alert',
    children: 'delete',
  },
};

export const SolidDisabled: Story = {
  args: {
    variant: 'solid',
    colorType: 'default',
    disabled: true,
    children: 'button',
  },
};

// ========== Outlined Button ==========
export const OutlinedDefault: Story = {
  args: {
    variant: 'outlined',
    colorType: 'default',
    children: 'secondary button',
  },
};

export const OutlinedGuidance: Story = {
  args: {
    variant: 'outlined',
    colorType: 'guidance',
    children: 'secondary button',
  },
};

export const OutlinedAlert: Story = {
  args: {
    variant: 'outlined',
    colorType: 'alert',
    children: 'secondary button',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    colorType: 'default',
    disabled: true,
    children: 'secondary button',
  },
};

// ========== Text Button ==========
export const TextDefault: Story = {
  args: {
    variant: 'text',
    colorType: 'default',
    children: 'text button',
  },
};

export const TextGuidance: Story = {
  args: {
    variant: 'text',
    colorType: 'guidance',
    children: 'text button',
  },
};

export const TextAlert: Story = {
  args: {
    variant: 'text',
    colorType: 'alert',
    children: 'delete',
  },
};

export const TextStatus: Story = {
  args: {
    variant: 'text',
    colorType: 'status',
    children: 'status button',
  },
};

export const TextDisabled: Story = {
  args: {
    variant: 'text',
    colorType: 'default',
    disabled: true,
    children: 'text button',
  },
};

// ========== Icon Button ==========
export const WithIconBefore: Story = {
  args: {
    variant: 'solid',
    colorType: 'default',
    iconBefore: <RedoIcon />,
    children: 'button',
  },
};

export const WithIconAfter: Story = {
  args: {
    variant: 'solid',
    colorType: 'default',
    iconAfter: <RedoIcon />,
    children: 'button',
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'solid',
    colorType: 'default',
    iconBefore: <RedoIcon />,
    iconAfter: <RedoIcon />,
    children: 'button',
  },
};

// ========== Icon Button ==========
export const IconButtonBordered: Story = {
  args: {
    variant: 'icon',
    iconBordered: true,
    children: <CloseIcon />,
  },
};

export const IconButtonBorderless: Story = {
  args: {
    variant: 'icon',
    iconBordered: false,
    children: <CloseIcon />,
  },
};

export const IconButtonDisabled: Story = {
  args: {
    variant: 'icon',
    iconBordered: true,
    disabled: true,
    children: <CloseIcon />,
  },
};

// ========== Size Variation ==========
export const SizeSmall: Story = {
  args: {
    size: 'small',
    children: 'small button',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
    children: 'medium button',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
    children: 'large button',
  },
};

export const SizeExtraLarge: Story = {
  args: {
    size: 'extraLarge',
      children: 'extra large button',
  },
};

// ========== Other Status ==========
export const Loading: Story = {
  args: {
    loading: true,
    children: 'loading button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'full width button',
  },
  parameters: {
    layout: 'padded',
  },
};

// ========== All Variants Showcase ==========
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>Solid Button</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="solid" colorType="default">button</Button>
          <Button variant="solid" colorType="guidance">button</Button>
          <Button variant="solid" colorType="alert">delete</Button>
          <Button variant="solid" colorType="default" disabled>button</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Outlined Button</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="outlined" colorType="default">secondary button</Button>
          <Button variant="outlined" colorType="guidance">secondary button</Button>
          <Button variant="outlined" colorType="alert">secondary button</Button>
          <Button variant="outlined" colorType="default" disabled>secondary button</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Text Button</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="text" colorType="default">text button</Button>
          <Button variant="text" colorType="guidance">text button</Button>
          <Button variant="text" colorType="alert">delete</Button>
          <Button variant="text" colorType="status">status button</Button>
          <Button variant="text" colorType="default" disabled>text button</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Icon Button</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="icon" iconBordered><CloseIcon /></Button>
          <Button variant="icon" iconBordered={false}><CloseIcon /></Button>
          <Button variant="icon" iconBordered disabled><CloseIcon /></Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Icon Button</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="solid" iconBefore={<RedoIcon />}>button</Button>
          <Button variant="solid" iconAfter={<RedoIcon />}>button</Button>
          <Button variant="outlined" iconBefore={<RedoIcon />}>secondary button</Button>
          <Button variant="text" iconBefore={<RedoIcon />}>text button</Button>
        </div>
      </div>

      <div>
          <h3 style={{ marginBottom: '12px' }}>Size</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button size="small">small button</Button>
          <Button size="medium">medium button</Button>
          <Button size="large">large button</Button>
          <Button size="extraLarge">extra large button</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

