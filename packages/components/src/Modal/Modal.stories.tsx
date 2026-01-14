import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalGlobalStyles } from './index';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <ModalGlobalStyles />
        <Story />
      </>
    ),
  ],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Whether the modal is visible',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    width: {
      control: 'number',
      description: 'Modal width',
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show close button',
    },
    mask: {
      control: 'boolean',
      description: 'Whether to show mask',
    },
    maskClosable: {
      control: 'boolean',
      description: 'Whether to close modal when clicking mask',
    },
    okText: {
      control: 'text',
      description: 'OK button text',
    },
    cancelText: {
      control: 'text',
      description: 'Cancel button text',
    },
    disabledOkButton: {
      control: 'boolean',
      description: 'Whether OK button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Interactive wrapper component
const ModalDemo = (props: React.ComponentProps<typeof Modal>) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal
        {...props}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Modal Title',
    children: 'This is the modal content. You can put any content here.',
  },
};

export const WithCustomFooter: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Custom Footer',
    children: 'This modal has a custom footer.',
    footer: (
      <Button variant="solid" colorType="primary">
        Custom Button
      </Button>
    ),
  },
};

export const NoFooter: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'No Footer',
    children: 'This modal has no footer.',
    footer: null,
  },
};

export const CustomWidth: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Wide Modal',
    width: 800,
    children: 'This modal has a custom width of 800px.',
  },
};

export const DisabledOkButton: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Disabled OK Button',
    children: 'The OK button is disabled.',
    disabledOkButton: true,
  },
};

export const NoCloseButton: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'No Close Button',
    children: 'This modal has no close button.',
    closable: false,
  },
};

export const CustomButtonText: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Custom Button Text',
    children: 'This modal has custom button text.',
    okText: 'Confirm',
    cancelText: 'Dismiss',
  },
};

export const OnlyOkButton: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Only OK Button',
    children: 'This modal only has an OK button.',
    cancelText: null,
  },
};

export const OnlyCancelButton: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: 'Only Cancel Button',
    children: 'This modal only has a Cancel button.',
    okText: null,
  },
};
