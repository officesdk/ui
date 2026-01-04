# @officesdk/design

## 0.1.1

### Patch Changes

- Fix Tooltip component rendering and styled-components compatibility issues:
  - Fixed tooltip overlay not rendering by adding wrapper span for event handlers
  - Fixed tooltip arrow positioning and visibility
  - Optimized global styles to render only once in UIConfigProvider
  - Changed to static CSS class-based styling to avoid conditional render issues
  - Updated styled-components peer dependency to support >=5.2.0 for better compatibility
  - Added documentation for resolving multiple styled-components instances

## 0.1.0

### Patch Changes

- initial
