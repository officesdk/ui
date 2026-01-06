---
'@officesdk/design': patch
'@officesdk/design-components': patch
---

feat: implement global toast API with automatic rendering

- Add global toast API (toast.success/info/error/warn/show/hide/hideAll/configure)
- Support automatic rendering to DOM without manual ToastContainer placement
- Compatible with React 18+ (createRoot) and React 17- (ReactDOM.render)
- Add comprehensive documentation (USAGE.md) and Storybook examples (toastApi.stories.tsx)
- Update ToastContainer to work independently for special use cases
- All 269 tests passing

