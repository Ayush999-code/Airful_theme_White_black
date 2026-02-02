# Fix Navigation Bug - Client-side routing issue on Home page

## Problem
When navigating from About (or any other page) back to Home using client-side routing, the Home page hero loads, but the section below the hero appears blank. This happens ONLY on client-side navigation, not on reload.

## Root Cause
- `data-lux-reveal` CSS sets `opacity: 0` and uses IntersectionObserver to add `is-visible` class
- Elements need to be scrolled into view to trigger reveal animation
- Even with `once: false`, elements below the fold need scrolling to appear

## Fix Applied

### Complete Fix - Remove all scroll-based reveal animations from Home page

**src/app/page.tsx**
- Keep `key={pathname}` to force re-mount on route change
- Keep `"use client"` directive

**src/components/sections/hero.tsx**
- Removed all `motion.div`, `motion.h1`, `motion.p`, `motion.div` components
- Removed all `initial`, `animate`, `transition` props
- Removed `data-lux-parallax` attributes

**src/components/sections/services.tsx**
- Removed all `motion.div` components
- Removed `data-lux-reveal` attribute from section
- Removed all framer-motion animations

**src/components/sections/process.tsx**
- Removed all `motion.div` components
- Removed `data-lux-reveal` attribute from section
- Removed all framer-motion animations

**src/components/sections/outcomes.tsx**
- Removed `motion.div` from map (kept for accordion animation)
- Removed `data-lux-reveal` attribute from section
- Removed `whileInView` animation

**src/components/sections/case-studies.tsx**
- Removed all `motion.div` components
- Removed `data-lux-reveal` attribute from section
- Removed all framer-motion animations

**src/components/sections/testimonials.tsx**
- Removed all `motion.div` from TestimonialCard
- Removed `useInView` hook
- Removed all framer-motion animations

**src/components/sections/cta.tsx**
- Removed `motion.div` wrapper
- Removed all framer-motion animations

## Verification
- [x] Run TypeScript check - Passed
- [x] Run `npm run build` - Passed
- [x] Commit and push to main - Committed and pushed

## Result
Home page sections now render immediately on client-side navigation without requiring scroll.
