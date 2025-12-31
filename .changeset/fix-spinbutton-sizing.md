---
'@officesdk/ui': patch
---

Fix SpinButton sizing issues

- Correct small size to 24px height and 72px width (was 28px and 60px)
- Correct large size to 32px height and 80px width (was 36px and 80px)
- Fix button layout to ensure up/down buttons each occupy exactly 50% height
- Update button widths: small 28px, large 32px
- Add proper hover and active box-shadows
