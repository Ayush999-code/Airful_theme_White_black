# About Page Revert - TODO List

## Phase 1: Revert About Page
- [x] Revert `src/app/about/page.tsx` to original dark theme layout
- [x] Remove MentalHealthHero import and component
- [x] Remove marquee strip section
- [x] Remove framer-motion animations
- [x] Remove AvatarGroup component
- [x] Simplify to match original site design

## Phase 2: Clean up CSS
- [x] Remove healthcare theme CSS from `src/app/globals.css`
- [x] Keep original dark theme styles intact

## Phase 3: Verification
- [ ] Run TypeScript check (`npx tsc --noEmit`)
- [ ] Run build (`npm run build`)

## Phase 4: Commit & Push
- [ ] Commit revert with clear message
- [ ] Push to main branch

