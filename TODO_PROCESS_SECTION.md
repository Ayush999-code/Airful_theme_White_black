# TODO: Update "How we work / Our Process" Section Layout

## Task: Update Home Page "How we work (Our Process)" section layout

### Changes to make:
- [x] Plan the implementation
- [x] Add Image import from next/image
- [x] Create two-column layout grid
- [x] Place image on left column
- [x] Place process steps on right column with center vertical alignment
- [x] Ensure mobile responsiveness (stacked layout)
- [x] Verify no other sections are affected

### File modified:
- `src/components/sections/process.tsx`

### Implementation Summary:
- ✅ Added `next/image` import
- ✅ Created responsive grid layout (`grid-cols-1 md:grid-cols-2`)
- ✅ Left column: Image with responsive sizing (max-w-[400px] to max-w-[500px])
- ✅ Right column: Process steps with center vertical alignment via `items-center`
- ✅ Mobile: Stacked layout (image first, text below)
- ✅ Desktop: Two-column layout (image left, steps right)
- ✅ All existing text content, styling, and order preserved
- ✅ Header section (badge + h2) unchanged

### Status: ✅ COMPLETED

