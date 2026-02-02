# Fix Navigation Bug - Client-side routing issue on Home page

## Problem
When navigating from About (or any other page) back to Home using client-side routing, the Home page hero loads, but the section below the hero appears blank. This happens ONLY on client-side navigation, not on reload.

## Root Cause
- `data-lux-reveal` CSS uses IntersectionObserver that adds `is-visible` class once elements are viewed
- `whileInView={{ once: true }}` in framer-motion prevents re-animation
- `useInView` with `once: true` in Testimonials component prevents re-animation
- Components don't re-mount on client-side navigation, retaining visibility state

## Fixes Applied

### 1. src/app/page.tsx
- [ ] Add `key={pathname}` to force re-mount on route change

### 2. src/components/sections/services.tsx
- [ ] Change `viewport={{ once: true }}` to `viewport={{ once: false }}`

### 3. src/components/sections/process.tsx
- [ ] Change `viewport={{ once: true }}` to `viewport={{ once: false }}`

### 4. src/components/sections/outcomes.tsx
- [ ] Remove `viewport={{ once: true }}` or set to `false`

### 5. src/components/sections/case-studies.tsx
- [ ] Remove `viewport={{ once: true }}` or set to `false`

### 6. src/components/sections/cta.tsx
- [ ] Change `viewport={{ once: true }}` to `viewport={{ once: false }}`

### 7. src/components/sections/testimonials.tsx
- [ ] Change `useInView` with `once: true` to not use `once: true`

## Verification
- [ ] Run TypeScript check
- [ ] Run `npm run build`
- [ ] Test navigation: About → Home (no refresh, no scroll required)
- [ ] Verify all sections render immediately

## Commit
- [ ] Commit and push to main

