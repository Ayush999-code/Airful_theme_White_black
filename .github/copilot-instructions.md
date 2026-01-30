# Copilot Instructions for Airful.io Website

## Project Overview
This is a Next.js 16 + Sanity CMS website for Airful (airful.io), a B2B services company. The site showcases case studies, services, blog content, and careers. Currently in active migration from legacy systems — refer to `MIGRATION_PLAN.md` for incomplete features.

## Architecture & Data Flow

### Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion animations, styled-components
- **CMS**: Sanity (Content Management) with live preview support
- **Deployment**: Vercel
- **Schema Patterns**: Portable Text for rich content blocks, image hotspots, slug-based routing

### Content Structure
1. **Sanity Client Configuration** (`src/sanity/lib/client.ts`): Two clients exist:
   - Default: CDN-enabled for fast reads
   - With token/preview: `previewDrafts` perspective for authenticated content viewing
2. **Image Handling** (`src/sanity/lib/image.ts`): Uses `@sanity/image-url` builder with width/height/crop params
3. **Document Types** (`src/sanity/schemaTypes/`): `caseStudy` is primary structured type with Portable Text arrays

### Page Structure Pattern
- Dynamic routes use slug-based lookups: `*[_type=="<type>" && slug.current == $slug][0]`
- Metadata generation uses separate queries to avoid data bloat
- `force-dynamic` export prevents static generation when API token present
- Fallback to published perspective when no auth token

## Critical Developer Workflows

### Development
```bash
npm run dev          # Runs Next.js dev + Sanity Studio at /studio
npm run build        # Production build
npm run lint         # ESLint validation
```

### Content Editing
- Sanity Studio: `localhost:3000/studio` (configure at `/sanity.config.ts`)
- Case study schema: `title` → slug auto-generation, requires `challenges`/`solution`/`results` as Portable Text arrays
- Images: Use hotspot for focal point, `urlFor()` generates CDN URLs

## Project-Specific Conventions

### Naming & Slugs
- URL slugs from titles: case-studies, services, blog-posts match Sanity slug field
- Subdirectory pattern: `/case-studies/[slug]/`, `/services/[slug]/`, `/blog/[slug]/`
- Slug normalization: Decode URI-encoded params before database queries (see `normalizeSlug()` in case-study detail)

### Component Architecture
- Layout components: `components/layout/` (header, footer, breadcrumbs, CTA)
- Section components: `components/sections/` (hero, services, testimonials, case-studies)
- Reusable UI: `components/ui/` (button, badge, container, scroll-effects)
- Data fallbacks in `src/data/` (TypeScript types) for cases where Sanity isn't the source

### Portable Text Rendering
Example from case-study detail page:
```tsx
import { PortableText } from "@portabletext/react";
<PortableText value={caseStudy.challenges} /> // Renders challenge blocks
```

## Key Files & Patterns

| File | Purpose |
|------|---------|
| `sanity.config.ts` | Sanity project config, Studio basePath at `/studio` |
| `src/sanity/schemaTypes/` | Document type definitions (caseStudy.ts) |
| `src/app/case-studies/[slug]/page.tsx` | Dynamic detail page pattern: slug lookup + metadata export |
| `next.config.ts` | Remote image pattern for `cdn.sanity.io` |
| `MIGRATION_PLAN.md` | Feature inventory: missing blog posts, services, jobs, careers pages |

## Common Integration Points

### Querying Documents
- Use GROQ with `client.fetch<Type>()` for type safety
- Always destructure slug: `"slug": slug.current` (Sanity returns `.current` property)
- Limit fields in projections to reduce payload: `{title, slug, shortDescription, thumbnail}`

### Image URLs
```tsx
urlFor(thumbnail).width(1200).height(800).fit("crop").url()
```

### Dynamic Pages (Template)
1. Fetch metadata separately for `generateMetadata()` export
2. Query content with `slug` parameter
3. Use preview client if `SANITY_API_TOKEN` exists
4. Render with Portable Text for array fields

## Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` — required, non-secret
- `SANITY_API_TOKEN` — optional, enables draft preview
- API version: `2026-01-29` (see `src/sanity/env.ts`)

## Known Gaps (From MIGRATION_PLAN.md)
- **15 Service detail pages** — need schema + pages
- **6 Blog posts** — schema exists in data types, needs Sanity integration
- **Careers/Jobs** — 5 positions listed, needs schema + detail pages
- **Contact form** — reCAPTCHA required
- Newsletter form integration

When adding features, check MIGRATION_PLAN.md for exact content requirements and SEO metadata.
