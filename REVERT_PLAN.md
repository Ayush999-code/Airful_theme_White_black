# About Page Revert Plan

## Information Gathered

### Current State of About Page (`src/app/about/page.tsx`)
- Uses `MentalHealthHero` component with healthcare/mental-health themed layout
- Contains marquee strip with specific colors
- Heavy use of `framer-motion` animations
- AvatarGroup component with trust cards
- Healthcare-specific CSS styling (blob backgrounds, warm beige colors)

### Related Files Affected
1. `src/app/about/page.tsx` - Main About page with new healthcare layout
2. `src/app/globals.css` - Contains healthcare theme CSS (lines ~500+)
3. `src/components/sections/mental-health-hero.tsx` - New healthcare hero component
4. `src/components/ui/avatar-group.tsx` - New trust card component

### Original Site Design Patterns (from Services page)
- Dark theme with black background
- Clean, simple section structure
- Minimal animations (framer-motion used sparingly)
- Consistent typography with Poppins/Raleway fonts
- No blob backgrounds or special color schemes

## Plan

### Step 1: Revert `src/app/about/page.tsx`
Remove all healthcare/mental-health elements:
- Remove `MentalHealthHero` import and usage
- Remove marquee strip section
- Remove complex motion.div animations
- Remove AvatarGroup component
- Create simple, clean layout matching original site design

### Step 2: Clean up `src/app/globals.css`
Remove healthcare theme CSS additions:
- Remove all healthcare CSS variables
- Remove healthcare blob animations
- Remove healthcare pill, button, card styles
- Keep original dark theme styles intact

### Step 3: Remove unused components (optional)
- `src/components/sections/mental-health-hero.tsx` - no longer needed
- `src/components/ui/avatar-group.tsx` - only used by healthcare theme

### Step 4: Run TypeScript check
- Run `npx tsc --noEmit` to verify no type errors

### Step 5: Run build
- Run `npm run build` to ensure successful build

### Step 6: Commit and push
- Create commit with clear revert message
- Push to main branch

## Dependent Files to be Edited
- `src/app/about/page.tsx`
- `src/app/globals.css`

## Files to Consider Removing (after verification)
- `src/components/sections/mental-health-hero.tsx`
- `src/components/ui/avatar-group.tsx`

## Followup Steps
1. TypeScript type check
2. Build verification
3. Git commit and push

