# @officesdk/ui

> OfficeSdk UI Component Library - A modern UI component library built with React and styled-components

## Installation

```bash
npm install @officesdk/ui styled-components@^5.3.0
```

## Quick Start

```tsx
import { Button, UIConfigProvider, createUIConfig } from '@officesdk/ui';
import { lightTheme } from '@officesdk/ui/theme';

const config = createUIConfig({
  theme: lightTheme,
});

function App() {
  return (
    <UIConfigProvider config={config}>
      <Button>Click Me</Button>
    </UIConfigProvider>
  );
}
```

## Importing Modules

```tsx
// Components
import { Button, Input, Tooltip } from '@officesdk/ui';

// Theme
import { lightTheme } from '@officesdk/ui/theme';

// Icons
import { Search, Close } from '@officesdk/ui/icons';

// Utils
import { deepMerge } from '@officesdk/ui/utils';
```

## Documentation

- [Full Documentation](https://github.com/officesdk/ui#readme)
- [Storybook](https://officesdk.github.io/ui)
- [Changelog](https://github.com/officesdk/ui/blob/main/CHANGELOG.md)

## License

MIT © OfficeSdk Team
