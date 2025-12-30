# @officesdk/ui-icons

Built-in icon resources for OfficeSdk UI.

## Installation

This package is included in `@officesdk/ui` and doesn't need to be installed separately.

## Usage

```typescript
import { Icon, IconProvider } from '@officesdk/ui';
import { iconRegistry } from '@officesdk/ui/icons';

// Use with IconProvider
<IconProvider icons={iconRegistry}>
  <Icon name="close" size={16} />
</IconProvider>
```



