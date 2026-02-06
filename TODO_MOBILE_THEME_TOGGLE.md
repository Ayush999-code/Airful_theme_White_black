# Mobile Theme Toggle Fix - TODO

## Problem Analysis
- The `ThemeToggle` is currently INSIDE the mobile menu drawer (lines 90-94 in header.tsx)
- This causes the theme toggle to appear inside the mobile menu instead of in the header bar

## Plan
1. **Add ThemeToggle to mobile header bar** - Place it next to the mobile menu button, outside the mobile menu drawer
2. **Remove ThemeToggle from mobile menu drawer** - Keep only navigation links and CTA buttons in the drawer
3. **Desktop layout remains unchanged** - ThemeToggle stays in the CTA Buttons section (hidden lg:flex)

## Changes Required

### File: src/components/layout/header.tsx

#### Change 1: Add ThemeToggle to mobile header bar
After the mobile menu button, add the ThemeToggle component:

```tsx
{/* Mobile Header Actions */}
<div className="flex items-center gap-2">
  <ThemeToggle />
  <button
    className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? (
      <X className="w-6 h-6" />
    ) : (
      <Menu className="w-6 h-6" />
    )}
  </button>
</div>
```

#### Change 2: Remove ThemeToggle from mobile menu drawer
In the mobile menu drawer section, remove the ThemeToggle div:
- Remove lines 90-94 that contain:
```tsx
<div className="flex items-center justify-between pb-2">
  <span className="text-sm text-zinc-400">Theme</span>
  <ThemeToggle />
</div>
```

## Verification
After changes:
- ✅ Theme toggle appears in header bar next to hamburger icon on mobile
- ✅ Mobile menu drawer contains only navigation links and CTA buttons
- ✅ Desktop layout unchanged - ThemeToggle still in CTA Buttons section

