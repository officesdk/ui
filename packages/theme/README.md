# @officesdk/ui-theme

Officesdk  UI Theme System

## Installation

```bash
yarn add @officesdk/ui styled-components@^5.3.0
```

## Usage

```tsx
import { theme } from '@officesdk/ui';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## Custom Theme

```tsx
import { theme } from '@officesdk/ui';
import { deepMerge } from '@officesdk/ui/utils';

const customTheme = deepMerge(theme, {
  colors: {
    brand: '#your-color',
  },
});
```

## Documentation

View full documentation in the main repository.
