import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProvider } from './index';
import {
  iconRegistry,
  createIconRegistry,
  ARROWS_ICONS,
  GENERAL_ICONS,
  IMAGE_ICONS,
  MAIN_SITE_ICONS,
  STATUS_ICONS,
  TABLE_ICONS,
  TEXT_ICONS,
  UTILITY_ICONS,
  ICON_NAMES,
  CheckIcon,
  CloseIcon,
  SearchIcon,
  allIconRegistry,
} from '@officesdk/design/icons';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 12, max: 48, step: 2 },
      description: 'Size of the icon in pixels. When not set, SVG keeps its original size.',
    },
    color: {
      control: 'color',
      description: 'Color of the icon. When not set, SVG keeps its original colors.',
    },
    name: {
      control: 'text',
      description: 'Icon name from registry (requires IconProvider)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const IconGrid: React.FC<{
  title: string;
  names: readonly string[];
  size?: number;
  color?: string;
}> = ({ title, names, size, color }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600, color: '#333' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {names.map((name) => (
        <div key={name} style={{ textAlign: 'center', width: '72px' }}>
          <Icon name={name} size={size} color={color} />
          <div
            style={{ marginTop: '6px', fontSize: '10px', color: '#888', wordBreak: 'break-all' }}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Default: SVG keeps original size and color
export const Default: Story = {
  render: () => (
    <Icon>
      <CheckIcon />
    </Icon>
  ),
};

// Override size
export const WithSizeOverride: Story = {
  args: {
    size: 32,
    color: '#5BA0E7',
  },
  render: (args) => (
    <Icon {...args}>
      <CloseIcon />
    </Icon>
  ),
};

// Using icon registry by name
export const WithIconRegistry: Story = {
  args: {
    name: 'close',
    size: 24,
  },
  render: (args) => (
    <IconProvider icons={iconRegistry}>
      <Icon {...args} />
    </IconProvider>
  ),
};

// Using image URL
export const WithImageUrl: Story = {
  args: {
    src: 'https://api.iconify.design/mdi/heart.svg',
    size: 24,
  },
  render: (args) => <Icon {...args} />,
};

// Different sizes
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {[12, 16, 20, 24, 32, 48].map((s) => (
        <div key={s} style={{ textAlign: 'center' }}>
          <Icon size={s}>
            <SearchIcon />
          </Icon>
          <div style={{ marginTop: '4px', fontSize: '11px', color: '#888' }}>{s}px</div>
        </div>
      ))}
    </div>
  ),
};

// Different colors
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {['#41464b', '#5BA0E7', '#52C41A', '#FAAD14', '#E95555'].map((c) => (
        <div key={c} style={{ textAlign: 'center' }}>
          <Icon size={24} color={c}>
            <CheckIcon />
          </Icon>
          <div style={{ marginTop: '4px', fontSize: '11px', color: '#888' }}>{c}</div>
        </div>
      ))}
    </div>
  ),
};

// All icons showcase grouped by category
export const AllIcons: Story = {
  render: () => (
    <IconProvider icons={allIconRegistry}>
      <div style={{ padding: '24px', maxWidth: '900px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: 600 }}>
          All Icons ({Object.keys(allIconRegistry).length} total)
        </h2>
        <IconGrid title={`Arrows (${ARROWS_ICONS.length})`} names={ARROWS_ICONS} size={20} />
        <IconGrid title={`General (${GENERAL_ICONS.length})`} names={GENERAL_ICONS} size={20} />
        <IconGrid title={`Image (${IMAGE_ICONS.length})`} names={IMAGE_ICONS} size={20} />
        <IconGrid title={`Main Site (${MAIN_SITE_ICONS.length})`} names={MAIN_SITE_ICONS} size={20} />
        <IconGrid title={`Status (${STATUS_ICONS.length})`} names={STATUS_ICONS} size={20} />
        <IconGrid title={`Table (${TABLE_ICONS.length})`} names={TABLE_ICONS} size={20} />
        <IconGrid title={`Text (${TEXT_ICONS.length})`} names={TEXT_ICONS} size={20} />
        <IconGrid title={`Utility (${UTILITY_ICONS.length})`} names={UTILITY_ICONS} size={20} />
      </div>
    </IconProvider>
  ),
  parameters: { layout: 'fullscreen' },
};

// Show SVG default sizes (no size override)
export const OriginalSvgSizes: Story = {
  name: 'Original SVG Sizes (No Override)',
  render: () => (
    <IconProvider icons={allIconRegistry}>
      <div style={{ padding: '24px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          When no size prop is passed, icons render at their original SVG dimensions.
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {['check', 'close', 'bold', 'arrow-down', 'success', 'table'].map((name) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <Icon name={name} />
              <div style={{ marginTop: '8px', fontSize: '11px', color: '#888' }}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </IconProvider>
  ),
  parameters: { layout: 'fullscreen' },
};

// Interactive icon search and picker
const IconPicker = () => {
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredIcons = ICON_NAMES.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (name: string) => {
    const importText = `import { ${name
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join('')}Icon } from '@officesdk/design/icons';`;
    navigator.clipboard.writeText(importText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <IconProvider icons={allIconRegistry}>
      <div style={{ padding: '24px', maxWidth: '1000px' }}>
        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {filteredIcons.map((name) => (
            <button
              key={name}
              onClick={() => {
                setSelectedIcon(name);
                copyToClipboard(name);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                padding: '8px',
                border: selectedIcon === name ? '2px solid #5BA0E7' : '1px solid #e8e8e8',
                borderRadius: '8px',
                background: selectedIcon === name ? '#f0f7ff' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Icon name={name} size={24} />
              <span
                style={{
                  marginTop: '6px',
                  fontSize: '10px',
                  color: '#666',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                }}
              >
                {name}
              </span>
            </button>
          ))}
        </div>

        {selectedIcon && (
          <div
            style={{
              marginTop: '24px',
              padding: '16px',
              background: '#f5f5f5',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
            }}
          >
            <div style={{ marginBottom: '8px', color: '#666' }}>
              {copied ? 'Copied!' : 'Click icon to copy import:'}
            </div>
            <code>
              {`import { ${selectedIcon
                .split('-')
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join('')}Icon } from '@officesdk/design/icons';`}
            </code>
          </div>
        )}

        <div style={{ marginTop: '16px', fontSize: '13px', color: '#888' }}>
          Showing {filteredIcons.length} of {ICON_NAMES.length} icons
        </div>
      </div>
    </IconProvider>
  );
};

export const IconSearch: Story = {
  name: 'Icon Search & Picker',
  render: () => <IconPicker />,
  parameters: { layout: 'fullscreen' },
};

// Tree-shakeable custom registry example
const myIcons = createIconRegistry(allIconRegistry);

export const TreeShakeable: Story = {
  name: 'Tree-Shakeable Registry',
  render: () => (
    <IconProvider icons={myIcons}>
      <div style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
          Tree-Shakeable Custom Registry
        </h3>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
          Use <code>createIconRegistry</code> to build a custom registry with only the icons you
          need. This enables tree-shaking — only the icons you import will be included in your
          bundle.
        </p>

        <div
          style={{
            marginBottom: '24px',
            padding: '16px',
            background: '#f5f5f5',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '12px',
          }}
        >
          <pre
            style={{ margin: 0, whiteSpace: 'pre-wrap' }}
          >{`import { createIconRegistry, CheckIcon, CloseIcon, SearchIcon, SaveIcon, EditIcon } from '@officesdk/design/icons';

const myIcons = createIconRegistry({
  check: CheckIcon,
  close: CloseIcon,
  search: SearchIcon,
  save: SaveIcon,
  edit: EditIcon,
});

// Use with IconProvider or initUIConfig
<IconProvider icons={myIcons}>
  <Icon name="check" size={20} />
</IconProvider>`}</pre>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {(['check', 'close', 'search', 'save', 'edit'] as const).map((name) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <Icon name={name} size={24} />
              <div style={{ marginTop: '6px', fontSize: '11px', color: '#888' }}>{name}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '12px',
            background: '#e6f7ff',
            borderRadius: '6px',
            fontSize: '13px',
            color: '#1890ff',
          }}
        >
          <strong>Tip:</strong> Compare with <code>iconRegistry</code> which includes all 66 icons
          (~32KB). With <code>createIconRegistry</code>, you only bundle the icons you actually use.
        </div>
      </div>
    </IconProvider>
  ),
  parameters: { layout: 'fullscreen' },
};
