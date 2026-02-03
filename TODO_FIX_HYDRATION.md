# Hydration Fix Plan

## Problem
- Home page uses client-side data fetching for Case Studies
- Initial render shows fallback static data
- Hydration causes content flash/mismatch

## Solution Steps

### Step 1: Create server-only data fetching function
- [x] Create `src/lib/case-studies-data.ts`
- [x] Implement `getCaseStudies()` with server-side Sanity fetch
- [x] Include proper error handling and fallback

### Step 2: Update Home page (page.tsx)
- [x] Import `getCaseStudies()` server function
- [x] Make page async to await data
- [x] Pass data to CaseStudies component

### Step 3: Update CaseStudies component
- [x] Accept `caseStudies` as prop
- [x] Remove internal state, useEffect, and client-side fetching
- [x] Remove staticCaseStudies fallback (keep for dev only)
- [x] Export both Server and Client component versions

### Step 4: Test the fix
- [x] Verify no hydration mismatch
- [x] Verify consistent rendering on server and client
- [x] Verify fallback only in dev mode when Sanity not configured

## Files Modified
1. `src/lib/case-studies-data.ts` (NEW)
2. `src/app/page.tsx`
3. `src/components/sections/case-studies.tsx`
4. `src/components/home-client.tsx` (NEW)

## Files NOT Modified
- UI design
- Other pages/components

## Build Status
✓ Build successful
✓ Case Studies data fetched correctly (4 case studies)
✓ No TypeScript errors
✓ No hydration mismatch issues

