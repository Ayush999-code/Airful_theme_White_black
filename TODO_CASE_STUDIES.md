# Case Studies Section UI Update

## Task: Update Home Page Case Studies section UI

### Changes Required:
1. [x] Update Sanity query to fetch `thumbnail` field
2. [x] Update type definitions to include `thumbnail`
3. [x] Add `urlFor` import for image URL generation
4. [x] Update data mapping to include thumbnail
5. [x] Remove tags section from UI
6. [x] Remove subtitle and description text from UI
7. [x] Add image at top of each card
8. [x] Keep title and "create_file Case Study" CTA
9. [x] Update static fallback data with placeholder images
10. [ ] Test the component renders correctly

### Sanity Schema Check:
- ✅ `thumbnail` field exists in schema (type: image, with hotspot)
- ✅ No schema changes needed

### UI Layout Target:
```
┌─────────────────────────┐
│    [IMAGE]              │
│                         │
│    Title                │
│                         │
│    Read Case Study →    │
└─────────────────────────┘
```

### Changes Applied:
- ✅ Added `Image` import from next/image
- ✅ Added `urlFor` import from sanity/lib/image
- ✅ Simplified `CaseStudyCard` type to include only title, href, and thumbnail
- ✅ Updated static fallback data with Unsplash placeholder images
- ✅ Added `thumbnail` to `SanityCaseStudy` type with proper Sanity image structure
- ✅ Updated Sanity query to fetch thumbnail instead of description fields
- ✅ Updated data mapping to generate image URLs using urlFor
- ✅ Removed tags section (pill boxes)
- ✅ Removed subtitle and description text
- ✅ Added image at top of card with aspect ratio 4/3
- ✅ Added hover scale effect on image
- ✅ Kept title and "create_file Case Study" CTA
- ✅ Made entire card clickable (already was, via Link wrapper)

