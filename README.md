# @officesdk/ui

> Officesdk  UI Component Library - A modern UI component library built with React and styled-components

## ✨ Features

- 🎨 **Modern Design** - Clean and beautiful design style
- 🔧 **TypeScript Support** - Full type definitions
- 💅 **Flexible Styling** - Built with styled-components, easy to customize
- 📦 **Tree Shaking** - Supports on-demand loading
- 🎯 **Ready to Use** - Complete default configuration
- 📖 **Well Documented** - Detailed component documentation and examples
- 🏗️ **Monorepo Architecture** - Clear package management structure

## 📦 Installation

```bash
# Using yarn
yarn add @officesdk/ui styled-components@^5.3.0

# Using npm
npm install @officesdk/ui styled-components@^5.3.0

# Using pnpm
pnpm add @officesdk/ui styled-components@^5.3.0
```

> **Note**: `@officesdk/ui` includes all components, themes, and utility functions. You can use different import paths for specific features.

## 🚀 Quick Start

```tsx
import React from 'react';
import { Button, UIConfigProvider, createUIConfig } from '@officesdk/ui';
import { lightTheme } from '@officesdk/ui/theme';
import { iconRegistry } from '@officesdk/ui/icons';

const config = createUIConfig({
  theme: lightTheme,
  icons: iconRegistry,
});

function App() {
  return (
    <UIConfigProvider config={config}>
      <Button variant="solid" colorType="default">
        Click Me
      </Button>
    </UIConfigProvider>       
  );
}

export default App;
```

## 📚 Documentation

For complete component documentation and examples, visit our [Storybook Documentation](https://your-storybook-url.com).

View documentation locally:

```bash
yarn dev
```

Then visit http://localhost:6006

## 📦 Usage

### Import Components and Configuration

```tsx
import { Button, UIConfigProvider, createUIConfig } from '@officesdk/ui';
import { lightTheme } from '@officesdk/ui/theme';
import { iconRegistry } from '@officesdk/ui/icons';
```

### On-Demand Import

```tsx
// Import theme only
import { theme } from '@officesdk/ui/theme';

// Import utilities only
import { classNames, debounce } from '@officesdk/ui/utils';
```

## 🏗️ Project Structure

```
officesdk-ui/
├── packages/
│   ├── components/        # UI components package
│   ├── theme/             # Theme system package
│   └── utils/             # Utilities package
├── docs/                  # Documentation
├── .storybook/            # Storybook configuration
└── package.json           # Root configuration
```

## 🔧 Development

> 💡 If you encounter installation or runtime issues, please check the [Setup Guide](./SETUP.md)

### Install Dependencies

```bash
yarn install
```

### Start Development Server

```bash
yarn dev
```

### Build All Packages

```bash
yarn build
```

### Type Check

```bash
yarn type-check
```

### Lint Code

```bash
yarn lint
```

### Clean Build Artifacts

```bash
yarn clean
```

## 📦 Packages

### @officesdk/ui-components

Core UI components package containing all reusable React components.

### @officesdk/ui-theme

Theme system package providing default theme configuration and type definitions.

### @officesdk/ui-utils

Utilities package providing common utility functions.

## 🎨 Custom Configuration

```tsx
import { UIConfigProvider, createUIConfig } from '@officesdk/ui';
import { lightTheme } from '@officesdk/ui/theme';
import { iconRegistry } from '@officesdk/ui/icons';

// Create custom configuration
const config = createUIConfig({
  theme: {
    ...lightTheme,
    colors: {
      ...lightTheme.colors,
      palettes: {
        ...lightTheme.colors.palettes,
        brand: '#ff6b6b', // Custom brand color
      },
    },
  },
  icons: iconRegistry,
  toast: {
    defaultDuration: 5000, // Custom toast duration
    maxCount: 3,
  },
  locale: 'zh-CN',
});

function App() {
  return (
    <UIConfigProvider config={config}>
      {/* Your app */}
    </UIConfigProvider>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please check the [Development Guide](./docs/Development.mdx) for more information.

## 📄 License

MIT

## 🔗 Links

- [Documentation](https://github.com/officesdk/ui)
- [Storybook](https://your-storybook-url.com)
- [GitHub](https://github.com/officesdk/ui)
- [Issues](https://github.com/officesdk/ui/issues)
