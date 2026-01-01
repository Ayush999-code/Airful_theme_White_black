# Airful Website Migration Plan

## Executive Summary

This document outlines the comprehensive migration plan to replicate the full airful.io website on the new Next.js/Vercel platform. The current preview deployment has basic pages but is missing significant content and functionality.

---

## Current State Analysis

### What's Already Migrated (Vercel Preview)
| Page | Status | Notes |
|------|--------|-------|
| `/` (Homepage) | Partial | Missing some sections from live site |
| `/about` | Partial | Needs content update |
| `/services` | Partial | Missing individual service pages |
| `/case-studies` | Complete | 4 case studies with detail pages |
| `/contact` | Partial | Different URL (`/contact` vs `/contact-us`) |

### What's Missing
| Page/Section | Priority | Complexity |
|--------------|----------|------------|
| 15 Service Detail Pages | High | Medium |
| 6 Blog Posts | High | Medium |
| Blog Listing Page | High | Low |
| Testimonials Page | High | Low |
| Careers Page | Medium | Medium |
| 5 Job Listing Pages | Medium | Medium |
| Privacy Policy | Low | Low |
| Terms and Conditions | Low | Low |
| Cookies Policy | Low | Low |
| Newsletter Form | Medium | Medium |
| Contact Form (with reCAPTCHA) | High | High |

---

## Detailed Page Inventory

### 1. Services Pages (15 pages)

Each service page has:
- Title & Category
- Description paragraph
- Bullet list of offerings
- Enquiry form (email + message)
- CTA section

| # | Service | URL Slug |
|---|---------|----------|
| 1 | Recruitment Operations | `/services/recruitment-operations` |
| 2 | Talent Acquisition | `/services/talent-acquisition` |
| 3 | Management Consulting | `/services/management-consulting` |
| 4 | Business Strategy & Process Transformation | `/services/business-strategy-process-transformation` |
| 5 | Data Research, Enrichment & Append | `/services/data-research-enrichment-append` |
| 6 | Mobile App Development | `/services/mobile-app-development` |
| 7 | Data Integrations & Automation | `/services/data-integrations-automation` |
| 8 | IT Consulting & Strategy | `/services/it-consulting-strategy` |
| 9 | Web Design & Development | `/services/web-design-development` |
| 10 | Custom Software Development | `/services/custom-software-development` |
| 11 | Branding & Corporate Identity | `/services/branding-corporate-identity` |
| 12 | Content Marketing | `/services/content-marketing` |
| 13 | Social Media Marketing | `/services/social-media-marketing` |
| 14 | Pay-Per-Click Advertising (PPC) | `/services/pay-per-click-advertising` |
| 15 | Search Engine Optimization (SEO) | `/services/search-engine-optimization-seo` |

### 2. Blog Posts (6 posts)

| # | Title | Category | URL Slug |
|---|-------|----------|----------|
| 1 | Why Agentic AI Is Becoming Essential for Modern Startup Success | AI Innovation | `/blog-posts/why-agentic-ai-essential-modern-startup-success` |
| 2 | Comparing Modern Web Development Tools: A Comprehensive Guide for 2025 | Development Insights | `/blog-posts/comparing-modern-web-development-tools-comprehensive-guide-2025` |
| 3 | Why an Integrated CRM is the Backbone of Effective Revenue Operations | RevOps Excellence | `/blog-posts/integrated-crm-backbone-effective-revenue-operations` |
| 4 | How MCP is Revolutionizing Business Productivity Through AI Integration | AI Innovation | `/blog-posts/how-mcp-is-revolutionizing-business-productivity-through-ai-integration` |
| 5 | 5 Web Design Blogs You Should Be Reading | Unleashing Creativity | `/blog-posts/5-web-design-blogs-you-should-be-reading` |
| 6 | 7 Ways To Improve Website Usability And Accessibility | E-Commerce Marvels | `/blog-posts/7-ways-to-improve-website-usability-and-accessibility` |

### 3. Careers/Jobs (5 positions)

| # | Position | Department | Location |
|---|----------|------------|----------|
| 1 | Android Developer | Development | Bangalore |
| 2 | Senior SME Operations | Operations | Hyderabad |
| 3 | Process Trainer | Training and Quality | Kolkata |
| 4 | Operations Manager | Operations | Kolkata |
| 5 | Team Leader Operations | Operations | Kolkata |

### 4. Testimonials (10 testimonials)

| # | Name | Company |
|---|------|---------|
| 1 | Adrian Bobanovic | Optika MIBO |
| 2 | Angel Hernandez | Connected Business |
| 3 | Alistair Langer | 783 Capital Partners |
| 4 | Syed Imran | ICare Security Systems |
| 5 | Ravi Mandapaka | ABCD E Learning |
| 6 | Rohan Salian | Le Roma |
| 7 | Rushil Pallavajhalla | Bandhu |
| 8 | Vasu Maganti | Zelarsoft |
| 9 | Will Ferrer | Tempest House |
| 10 | Hamza Zia | GitStart |

### 5. Legal Pages

- `/privacy-policy`
- `/terms-and-conditions`
- `/cookies-policy`

---

## Implementation Phases

### Phase 1: Core Content Pages (Priority: High)

#### 1.1 Services Infrastructure
**Files to create:**
```
src/app/services/[slug]/page.tsx    # Dynamic service detail page
src/data/services.ts                 # Service data (all 15 services)
```

**Approach:**
- Create a dynamic route similar to case studies
- Store all service data in a centralized file
- Each service has: title, category, description, features[], enquiry form

#### 1.2 Blog Infrastructure
**Files to create:**
```
src/app/blog/page.tsx               # Blog listing (rename from /blog)
src/app/blog/[slug]/page.tsx        # Blog post detail page
src/data/blog-posts.ts              # Blog post data (all 6 posts)
```

**Note:** Live site uses `/blog-posts/[slug]` but recommend `/blog/[slug]` for cleaner URLs

#### 1.3 Testimonials Page
**Files to create:**
```
src/app/testimonials/page.tsx       # Full testimonials page
src/data/testimonials.ts            # Testimonials data
```

### Phase 2: Careers & Jobs (Priority: Medium)

**Files to create:**
```
src/app/careers/page.tsx            # Careers listing (or /career to match)
src/app/careers/[slug]/page.tsx     # Individual job detail page
src/data/jobs.ts                    # Job listings data
```

### Phase 3: Forms & Interactivity (Priority: High)

#### 3.1 Contact Form
- Add reCAPTCHA integration
- Form fields: Name, Email, Phone, Subject, Message
- Backend: Consider Supabase edge function or external form handler

#### 3.2 Newsletter Subscription
- Email capture in footer
- Integration with email service (Mailchimp, ConvertKit, etc.)

#### 3.3 Service Enquiry Forms
- Simpler form: Email + Message
- Same backend as contact form

### Phase 4: Legal & Footer Pages (Priority: Low)

**Files to create:**
```
src/app/privacy-policy/page.tsx
src/app/terms-and-conditions/page.tsx
src/app/cookies-policy/page.tsx
```

---

## URL Mapping

| Live Site URL | New Site URL | Action |
|---------------|--------------|--------|
| `/contact-us` | `/contact` | Keep as `/contact` or redirect |
| `/career` | `/careers` | Standardize naming |
| `/blog` | `/blog` | Match |
| `/blog-posts/[slug]` | `/blog/[slug]` | Cleaner URL structure |
| `/services/[slug]` | `/services/[slug]` | Match |
| `/testimonials` | `/testimonials` | Match |

---

## Component Requirements

### New Components Needed

1. **ServiceCard** - For services listing grid
2. **BlogCard** - For blog listing grid
3. **JobCard** - For careers listing
4. **TestimonialCard** - Already exists, may need updates
5. **EnquiryForm** - Simple email + message form
6. **ContactForm** - Full contact form with reCAPTCHA
7. **NewsletterForm** - Email subscription in footer

### Footer Updates
Current footer needs:
- Newsletter subscription form
- Careers link
- Social media links (Facebook, Instagram, LinkedIn)
- Legal page links

---

## Data Fetching Strategy

**Recommended Approach:** Static data files

Since content doesn't change frequently:
```
src/data/
├── services.ts      # 15 services
├── blog-posts.ts    # 6 blog posts (full content)
├── testimonials.ts  # 10 testimonials
├── jobs.ts          # 5 job listings
└── case-studies.ts  # Already exists in [slug]/page.tsx
```

**Alternative:** Headless CMS (Sanity, Contentful) if frequent updates needed

---

## Estimated Effort

| Task | Pages | Effort |
|------|-------|--------|
| Services pages (15) | 2 files | 2-3 hours |
| Blog system (6 posts) | 3 files | 3-4 hours |
| Testimonials page | 2 files | 1 hour |
| Careers/Jobs (5) | 3 files | 2-3 hours |
| Contact form + reCAPTCHA | 2 files | 2-3 hours |
| Newsletter form | 1 component | 1 hour |
| Legal pages (3) | 3 files | 1-2 hours |
| Footer updates | 1 file | 1 hour |
| **Total** | ~17 files | **13-18 hours** |

---

## Screenshots Reference

Screenshots captured and saved in:
```
/Users/avi/Documents/Avi Code Projects/.playwright-mcp/
├── airful-homepage.png
├── airful-services.png
├── airful-service-detail.png
├── airful-blog.png
├── airful-blog-post.png
├── airful-testimonials.png
├── airful-about.png
├── airful-careers.png
└── airful-contact.png
```

---

## Next Steps

1. **Approve this migration plan**
2. **Phase 1:** Implement services pages (highest impact)
3. **Phase 2:** Add blog system
4. **Phase 3:** Add testimonials and update homepage
5. **Phase 4:** Add careers section
6. **Phase 5:** Implement forms with backend
7. **Phase 6:** Add legal pages
8. **Final:** QA, redirects, and production deployment

---

## Questions to Resolve

1. Should `/contact-us` redirect to `/contact` or rename?
2. Blog URL structure: `/blog/[slug]` or `/blog-posts/[slug]`?
3. Form backend: Supabase functions, Formspree, or custom?
4. Newsletter service integration preference?
5. Any content changes/updates while migrating?
