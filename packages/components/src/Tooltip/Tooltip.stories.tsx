import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['black', 'white'],
      description: 'Tooltip variant',
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Tooltip size (only for white variant)',
    },
    placement: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'],
      description: 'Tooltip placement',
    },
    trigger: {
      control: 'select',
      options: [['hover'], ['click'], ['focus'], ['hover', 'click']],
      description: 'Tooltip trigger',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip text',
    variant: 'black',
    getPopupContainer: (triggerNode) => triggerNode.parentElement || document.body,
  },
  render: (args) => (
    <div style={{ padding: '50px' }} data-testid="tooltip-container">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const BlackVariant: Story = {
  render: () => {
    const getContainer = (node: HTMLElement) => node.parentElement || document.body;
    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '100px' }}>
        <Tooltip content="Simple tooltip" variant="black" getPopupContainer={getContainer}>
          <Button>Simple</Button>
        </Tooltip>

        <Tooltip content="Tooltip with title" variant="black" getPopupContainer={getContainer}>
          <Button>With Title</Button>
        </Tooltip>

        <Tooltip
          content={
            <div>
              <div style={{ fontWeight: 500, marginBottom: '4px' }}>Title</div>
              <div>Description text here</div>
            </div>
          }
          variant="black"
          getPopupContainer={getContainer}
        >
          <Button>Complex Content</Button>
        </Tooltip>

        <Tooltip
          content={
            <div>
              <div style={{ fontWeight: 500, marginBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Title</span>
                <span style={{ opacity: 0.9 }}>⌘+⇧+M</span>
              </div>
              <div>Tooltip description text</div>
              <div style={{ color: '#73b1eb', marginTop: '4px', opacity: 0.9 }}>Help - Feature name</div>
            </div>
          }
          variant="black"
          getPopupContainer={getContainer}
        >
          <Button>Full Example</Button>
        </Tooltip>
      </div>
    );
  },
};

export const WhiteSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '100px' }}>
      <Tooltip
        content={
          <div>
            <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '8px' }}>Title</div>
            <div style={{ fontSize: '13px', lineHeight: '20px' }}>
              A description text. This text has no length limit. A description text. This text has no length limit.
            </div>
          </div>
        }
        variant="white"
        size="small"
      >
        <Button>Simple Content</Button>
      </Tooltip>

      <Tooltip
        content={
          <div>
            <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '8px' }}>Title</div>
            <div style={{ fontSize: '13px', lineHeight: '20px', marginBottom: '8px' }}>
              A description text. This text has no length limit.
            </div>
            <div style={{ display: 'flex', gap: '4px', color: '#5ba0e7', fontSize: '12px', alignItems: 'center' }}>
              <span>Text link</span>
            </div>
          </div>
        }
        variant="white"
        size="small"
      >
        <Button>With Link</Button>
      </Tooltip>

      <Tooltip
        content={
          <div>
            <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '8px' }}>Title</div>
            <div style={{ fontSize: '13px', lineHeight: '20px', marginBottom: '8px' }}>
              A description text. This text has no length limit.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '4px', color: '#5ba0e7', fontSize: '12px' }}>
                <span>Text link</span>
              </div>
              <Button size="small">Action</Button>
            </div>
          </div>
        }
        variant="white"
        size="small"
      >
        <Button>With Button</Button>
      </Tooltip>
    </div>
  ),
};

export const WhiteLarge: Story = {
  render: () => {
    const getContainer = (node: HTMLElement) => node.parentElement || document.body;
    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '100px' }}>
        <Tooltip
          content={
            <div style={{ width: '320px' }}>
              <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '8px' }}>Title</div>
              <div style={{ fontSize: '13px', lineHeight: '20px', marginBottom: '8px' }}>
                A description text. This text has no length limit. A description text. This text has no length limit. A description text. This text has no length limit.
              </div>
              <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                <Button size="small">Primary</Button>
                <Button size="small" variant="outlined">Secondary</Button>
              </div>
            </div>
          }
          variant="white"
          size="large"
          getPopupContainer={getContainer}
        >
          <Button>Large Tooltip</Button>
        </Tooltip>

        <Tooltip
          content={
            <div style={{ width: '320px' }}>
              <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '8px' }}>Title</div>
              <div style={{ fontSize: '13px', lineHeight: '20px', marginBottom: '8px' }}>
                A description text. This text has no length limit.
              </div>
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '4px', fontSize: '13px', lineHeight: '24px', color: 'rgba(65, 70, 75, 0.8)' }}>
                  <span>•</span>
                  <span>List item one with more details</span>
                </div>
                <div style={{ display: 'flex', gap: '4px', fontSize: '13px', lineHeight: '24px', color: 'rgba(65, 70, 75, 0.8)' }}>
                  <span>•</span>
                  <span>List item two with more details</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#5ba0e7', fontSize: '12px' }}>
                  <span>Text link</span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <Button size="small">Primary</Button>
                  <Button size="small" variant="outlined">Secondary</Button>
                </div>
              </div>
            </div>
          }
          variant="white"
          size="large"
          getPopupContainer={getContainer}
        >
          <Button>Complex Large</Button>
        </Tooltip>
      </div>
    );
  },
};

export const Placements: Story = {
  render: () => {
    const getContainer = (node: HTMLElement) => node.parentElement || document.body;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', padding: '100px', alignItems: 'center' }}>
        {/* Top placements */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Tooltip content="topLeft placement" placement="topLeft" getPopupContainer={getContainer}>
            <Button>topLeft</Button>
          </Tooltip>
          <Tooltip content="top placement" placement="top" getPopupContainer={getContainer}>
            <Button>top</Button>
          </Tooltip>
          <Tooltip content="topRight placement" placement="topRight" getPopupContainer={getContainer}>
            <Button>topRight</Button>
          </Tooltip>
        </div>

        {/* Left and Right placements */}
        <div style={{ display: 'flex', gap: '200px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Tooltip content="leftTop placement" placement="leftTop" getPopupContainer={getContainer}>
              <Button>leftTop</Button>
            </Tooltip>
            <Tooltip content="left placement" placement="left" getPopupContainer={getContainer}>
              <Button>left</Button>
            </Tooltip>
            <Tooltip content="leftBottom placement" placement="leftBottom" getPopupContainer={getContainer}>
              <Button>leftBottom</Button>
            </Tooltip>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Tooltip content="rightTop placement" placement="rightTop" getPopupContainer={getContainer}>
              <Button>rightTop</Button>
            </Tooltip>
            <Tooltip content="right placement" placement="right" getPopupContainer={getContainer}>
              <Button>right</Button>
            </Tooltip>
            <Tooltip content="rightBottom placement" placement="rightBottom" getPopupContainer={getContainer}>
              <Button>rightBottom</Button>
            </Tooltip>
          </div>
        </div>

        {/* Bottom placements */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Tooltip content="bottomLeft placement" placement="bottomLeft" getPopupContainer={getContainer}>
            <Button>bottomLeft</Button>
          </Tooltip>
          <Tooltip content="bottom placement" placement="bottom" getPopupContainer={getContainer}>
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip content="bottomRight placement" placement="bottomRight" getPopupContainer={getContainer}>
            <Button>bottomRight</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
};

export const Triggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '100px' }}>
      <Tooltip content="Hover to show" trigger={['hover']}>
        <Button>Hover</Button>
      </Tooltip>

      <Tooltip content="Click to show" trigger={['click']}>
        <Button>Click</Button>
      </Tooltip>

      <Tooltip content="Focus to show" trigger={['focus']}>
        <Button>Focus</Button>
      </Tooltip>
    </div>
  ),
};

export const EdgePositions: Story = {
  render: () => {
    const getContainer = (node: HTMLElement) => node.parentElement || document.body;
    return (
      <div style={{ width: '100vw', height: '100vh', position: 'relative', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
          <Tooltip
            content="This tooltip is positioned at the right edge of the window to test boundary handling"
            variant="black"
            placement="right"
            getPopupContainer={getContainer}
          >
            <Button>Right Edge</Button>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', right: '20px', top: '120px' }}>
          <Tooltip
            content="Top right corner tooltip"
            variant="black"
            size="small"
            placement="topRight"
            getPopupContainer={getContainer}
          >
            <Button>Top Right</Button>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <Tooltip
            content="Bottom right corner tooltip with long text to test boundary handling when content is wide"
            variant="black"
            placement="bottomRight"
            getPopupContainer={getContainer}
          >
            <Button>Bottom Right</Button>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }}>
          <Tooltip
            content="This tooltip is positioned at the left edge of the window"
            variant="black"
            placement="left"
            getPopupContainer={getContainer}
          >
            <Button>Left Edge</Button>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <Tooltip
            content="Top edge tooltip"
            variant="white"
            size="small"
            placement="top"
            getPopupContainer={getContainer}
          >
            <Button>Top Edge</Button>
          </Tooltip>
        </div>

        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <Tooltip
            content="Bottom edge tooltip"
            variant="black"
            placement="bottom"
            getPopupContainer={getContainer}
          >
            <Button>Bottom Edge</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Playground: Story = {
  args: {
    content: 'Tooltip content',
    variant: 'black',
    size: 'small',
    placement: 'top',
    trigger: ['hover'],
  },
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

