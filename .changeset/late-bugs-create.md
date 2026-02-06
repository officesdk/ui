---
'@officesdk/design': patch
---

feat(NumberInput): add locale-based number formatting support

- Add numberLocale utility for locale-aware decimal and thousands separators
- Support multiple locale formats (en-US: 1,234.56 / de-DE: 1.234,56 / fr-FR: 1 234,56)
- Add useThousandsSeparator prop to control thousands separator display
- Fix precision prop to auto-correct value on blur
- Add unit tests for numberLocale utilities (35 test cases)
- Update stories with locale and thousands separator examples

