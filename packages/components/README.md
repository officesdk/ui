# @officesdk/design-components

Officesdk  UI Core Components Package

## Installation

```bash
yarn add @officesdk/design styled-components@^5.2.0
# or
npm install @officesdk/design styled-components@^5.2.0
```

### Styled Components Version Compatibility

This library requires `styled-components >= 5.2.0`. If you're using an older version, please upgrade:

```bash
yarn add styled-components@^5.2.0
```

### Avoiding Multiple Instances

To prevent the `import_styled_components.default.span` error, ensure only one instance of `styled-components` is loaded. 

**For Webpack users**, add this to your `webpack.config.js`:

```js
module.exports = {
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    },
  },
};
```

**For Vite users**, add this to your `vite.config.ts`:

```ts
export default defineConfig({
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    },
  },
});
```

## Usage

```tsx
import { Button, UIConfigProvider, createUIConfig } from '@officesdk/design';
import { lightTheme } from '@officesdk/design/theme';
import { iconRegistry } from '@officesdk/design/icons';

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
```

## Components

- Button - Button component

More components coming soon...

## Documentation

View full documentation in the main repository.
