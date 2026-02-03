# Case Study Routing Fix - TODO

## Issue
- Case Study cards on Home page don't open detail page on Vercel (production)
- Routing works locally but fails on Vercel

## Plan
- [x] 1. Add `generateStaticParams` to `/case-studies/[slug]/page.tsx`
- [x] 2. Fix slug encoding in `case-studies.tsx` (remove redundant encodeURIComponent)
- [x] 3. Simplify slug handling in the detail page
- [x] 4. Add better error logging for debugging
- [ ] 5. Verify the fix works (run build)

## Files Modified
1. `src/app/case-studies/[slug]/page.tsx` - Added generateStaticParams, fixed slug handling
2. `src/components/sections/case-studies.tsx` - Removed redundant encodeURIComponent

## Summary of Changes

### Root Causes Identified:
1. **Missing `generateStaticParams`**: Vercel's build process needs explicit route definitions for dynamic routes to work properly
2. **Double encoding issue**: `encodeURIComponent` in the link + `decodeURIComponent` in the page could cause issues with special characters

### Fixes Applied:
1. Added `generateStaticParams()` function to pre-generate routes for all case study slugs at build time
2. Removed redundant `encodeURIComponent` from href (Next.js App Router already handles URL encoding)
3. Simplified `normalizeSlug` function (App Router passes already-decoded slugs)
4. Added debug logging for Vercel environment
5. Fixed typo in metadataQuery (`s  hortDescription` → `shortDescription`)
6. Added slug to "Case study not found" error message for debugging

