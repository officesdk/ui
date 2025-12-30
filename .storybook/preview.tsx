import type { Preview } from '@storybook/react';
import React from 'react';
import { UIConfigProvider, createUIConfig } from '../packages/components/src/UIConfigProvider';
import { lightTheme } from '../packages/theme/src';
import { iconRegistry } from '../packages/icons/src';

const config = createUIConfig({
  theme: lightTheme,
  icons: iconRegistry,
  toast: {
    defaultDuration: 3000,
    maxCount: 5,
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <UIConfigProvider config={config}>
        <Story />
      </UIConfigProvider>
    ),
  ],
};

export default preview;

