# Color Replacement TODO List

## Task: Replace #8fe6df with #227774 in WHITE THEME only

### Files to Update:

- [x] 1. src/components/layout/breadcrumb-strip.tsx - Replace #8fe6df with #227774
- [x] 2. src/components/sections/services.tsx - Replace #8fe6df with #227774
- [x] 3. src/components/sections/case-studies.tsx - Replace #8fe6df with #227774
- [x] 4. src/components/sections/outcomes.tsx - Replace #8fe6df with #227774
- [x] 5. src/app/globals.css - Add [data-theme="light"] overrides for blue-400 and blue-300 classes

### Dark Theme:
- [x] Confirmed: Dark theme remains unchanged (all changes scoped to [data-theme="light"])

### Verification:
- [x] All #8fe6df occurrences replaced in white theme (hardcoded inline colors)
- [x] Dark theme untouched (dark theme colors preserved, only [data-theme="light"] overrides added)
- [x] No #2563eb remains in codebase (verified: 0 results)

## Summary of Changes

### Files Updated:
1. `src/components/layout/breadcrumb-strip.tsx` - Breadcrumb gradient and separator colors
2. `src/components/sections/services.tsx` - Icon and hover text colors
3. `src/components/sections/case-studies.tsx` - Title hover and link colors
4. `src/components/sections/outcomes.tsx` - Icon and text colors
5. `src/app/globals.css` - White theme CSS overrides added
6. `src/app/globals.css` (Section 6) - Badge glow variant fix for white theme

### White Theme Style System Applied:
- bg: `rgba(34,119,116,0.10)` → `.bg-blue-500/10`
- text: `#227774` → `.text-blue-400` and `.text-blue-300`
- border: `rgba(34,119,116,0.30)` → `.border-blue-500/20` and `.border-blue-500/30`
- shadow: `0 0 20px rgba(34,119,116,0.25)` → `.shadow-blue-500/25`

### Badge Glow Variant (Fixed):
- Background: `rgba(34,119,116,0.12)`
- Text: `#227774`
- Border: `rgba(34,119,116,0.35)`
- Shadow: `0 0 16px rgba(34,119,116,0.25)`

