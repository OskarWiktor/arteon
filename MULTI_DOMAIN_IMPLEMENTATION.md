# Multi-Domain English Implementation Plan

## Current Site Structure Analysis

### Content Organization
- **Data Files**: All content is in `data/pl/` directory
  - `blog.json` - Blog articles
  - `projects.json` - Project portfolio
  - `testimonials.json` - Client testimonials
  - `calculator/` - Price calculator steps (11 TypeScript files)

### Route Structure (Polish)
- `/` - Homepage
- `/uslugi` - Services hub
  - `/uslugi/strony-internetowe` - Websites
  - `/uslugi/sklepy-internetowe` - Online stores
  - `/uslugi/blogi-internetowe` - Blogs
  - `/uslugi/projekty-graficzne` - Graphic design (15+ sub-pages)
  - `/uslugi/marketing` - Marketing (3 sub-pages)
  - `/uslugi/tworzenie-tresci` - Content creation
- `/realizacje` - Projects/Portfolio
  - `/realizacje/[slug]` - Individual project pages
- `/edukacja` - Education/Blog
  - `/edukacja/[category]` - Category pages
  - `/edukacja/[category]/[slug]` - Article pages
- `/kontakt` - Contact
- `/o-nas` - About
- `/narzedzia` - Tools (7 utility pages)
- `/mapa-strony` - Sitemap
- `/polityka-prywatnosci` - Privacy policy
- `/regulamin` - Terms

### Hardcoded Polish Text Locations
1. **Components** (all need translation):
   - `components/shared/Navigation.tsx` - Navigation menu
   - `components/shared/Footer.tsx` - Footer content
   - `components/sections/blog/FilterBar.tsx` - "Filtry artykułów", "Wszystko"
   - `components/sections/BreadCrumbs.tsx` - Breadcrumb labels
   - All page components in `app/` directory

2. **Data Files**:
   - All JSON files in `data/pl/`
   - Calculator steps in `data/pl/calculator/*.ts`

3. **SEO & Metadata**:
   - All `metadata` exports in page files
   - Schema.org structured data
   - OpenGraph tags

### Domain References Found
- `app/layout.tsx`: `SITE_URL` env variable, hardcoded `arteonagency.pl` fallback
- `components/shared/Footer.tsx`: `BASE_URL` with fallback
- `next-sitemap.config.cjs`: `NEXT_PUBLIC_SITE_URL` env variable
- Multiple page files: Hardcoded `https://www.arteonagency.pl` in metadata

### SEO Implementation
- ✅ Dynamic sitemap generation (`next-sitemap.config.cjs`)
- ✅ Schema.org structured data (Organization, WebSite, Service, etc.)
- ✅ OpenGraph metadata
- ✅ Canonical URLs
- ❌ **Missing**: hreflang tags for multi-language support
- ❌ **Missing**: Language-specific sitemaps

---

## Implementation Strategy

### Recommended Approach: **Single Codebase with Domain-Based Routing**

**Pros:**
- Single source of truth for code
- Easier maintenance
- Shared components and utilities
- Better for SEO (can implement hreflang properly)

**Cons:**
- More complex initial setup
- Need to ensure Polish site remains unchanged

**Alternative:** Separate repository (simpler but duplicate maintenance)

---

## Detailed Todo List

### Phase 1: Architecture & Setup

#### 1. Architecture Decision
- [ ] Decide: Single codebase vs separate repo
- [ ] If single codebase: Implement middleware for domain-based routing
- [ ] Create language detection utility based on domain

#### 2. Environment Variables
- [ ] Add `NEXT_PUBLIC_DOMAIN_PL=https://www.arteonagency.pl`
- [ ] Add `NEXT_PUBLIC_DOMAIN_COM=https://www.arteonagency.com`
- [ ] Update `SITE_URL` to be domain-specific at runtime
- [ ] Add `NEXT_PUBLIC_DEFAULT_LANG=pl` (for fallback)

#### 3. Language Detection System
- [ ] Create `lib/locale.ts` utility:
  ```typescript
  export function getLocale(domain: string): 'pl' | 'en'
  export function getDomain(locale: 'pl' | 'en'): string
  export function getAlternateUrl(path: string, locale: 'pl' | 'en'): string
  ```
- [ ] Create middleware.ts for domain-based routing
- [ ] Ensure Polish routes stay on .pl domain
- [ ] Ensure English routes stay on .com domain

---

### Phase 2: Content Structure

#### 4. English Data Files
- [ ] Create `data/en/` directory structure
- [ ] Create `data/en/blog.json` (translate all articles)
- [ ] Create `data/en/projects.json` (translate all projects)
- [ ] Create `data/en/testimonials.json` (translate or create English testimonials)
- [ ] Create `data/en/calculator/` directory
- [ ] Translate all 11 calculator step files:
  - `baseSteps.ts`
  - `blogSteps.ts`
  - `contentSteps.ts`
  - `expansionSteps.ts`
  - `graphicsSteps.ts`
  - `includedPerPath.ts`
  - `marketingSteps.ts`
  - `redesignSteps.ts`
  - `shopSteps.ts`
  - `websiteSteps.ts`
  - `index.ts`

#### 5. Route Mapping
- [ ] Create route mapping utility:
  ```typescript
  const ROUTE_MAP = {
    pl: {
      '/': '/',
      '/uslugi': '/uslugi',
      '/realizacje': '/realizacje',
      '/edukacja': '/edukacja',
      '/kontakt': '/kontakt',
      // ... all routes
    },
    en: {
      '/': '/',
      '/uslugi': '/services',
      '/realizacje': '/projects',
      '/edukacja': '/education',
      '/kontakt': '/contact',
      // ... all routes
    }
  }
  ```

---

### Phase 3: Translation System

#### 6. Translation Infrastructure
- [ ] Create `lib/i18n.ts` or use a library (next-intl, react-i18next)
- [ ] Create translation files structure:
  ```
  translations/
    pl.json
    en.json
  ```
- [ ] Extract all hardcoded strings to translation files
- [ ] Create `useTranslation()` hook or similar

#### 7. Component Translations
- [ ] Translate `components/shared/Navigation.tsx`
- [ ] Translate `components/shared/Footer.tsx`
- [ ] Translate `components/sections/blog/FilterBar.tsx`
- [ ] Translate `components/sections/BreadCrumbs.tsx`
- [ ] Translate `components/shared/CookieConsent.tsx`
- [ ] Translate all UI components with hardcoded text

#### 8. Page Translations
- [ ] Translate `app/page.tsx` (homepage)
- [ ] Translate all service pages (`app/uslugi/**`)
- [ ] Translate project pages (`app/realizacje/**`)
- [ ] Translate blog pages (`app/edukacja/**`)
- [ ] Translate `app/kontakt/page.tsx`
- [ ] Translate `app/o-nas/page.tsx`
- [ ] Translate tool pages (`app/narzedzia/**`)
- [ ] Translate `app/not-found.tsx`
- [ ] Translate `app/error.tsx`
- [ ] Translate `app/polityka-prywatnosci/page.tsx`
- [ ] Translate `app/regulamin/page.tsx`
- [ ] Translate `app/mapa-strony/page.tsx`

---

### Phase 4: SEO Implementation

#### 9. Hreflang Tags
- [ ] Update `app/layout.tsx` to include hreflang in `<head>`
- [ ] Add hreflang to all page metadata exports
- [ ] Ensure each page links to its alternate language version
- [ ] Test hreflang implementation

#### 10. Schema.org Updates
- [ ] Update Organization schema to include both languages
- [ ] Update WebSite schema with `inLanguage` array
- [ ] Update Service schemas to include `availableLanguage`
- [ ] Update all structured data to be language-aware

#### 11. Metadata Updates
- [ ] Update all page `metadata` exports to use translations
- [ ] Ensure canonical URLs point to correct domain
- [ ] Update OpenGraph tags for each language
- [ ] Add `lang` attribute to `<html>` tag based on locale

#### 12. Sitemap Configuration
- [ ] Update `next-sitemap.config.cjs` to:
  - Generate separate sitemaps per domain
  - Include hreflang in sitemap entries
  - Set correct `alternateRefs` for each URL
- [ ] Test sitemap generation for both domains

#### 13. Robots.txt
- [ ] Ensure robots.txt is domain-specific
- [ ] Don't block cross-domain crawling
- [ ] Add sitemap references for both domains

---

### Phase 5: Routing & Navigation

#### 14. Route Structure
- [ ] Create English route structure:
  - `/services` (instead of `/uslugi`)
  - `/projects` (instead of `/realizacje`)
  - `/education` (instead of `/edukacja`)
  - `/contact` (instead of `/kontakt`)
  - `/about` (instead of `/o-nas`)
  - `/tools` (instead of `/narzedzia`)
  - `/sitemap` (instead of `/mapa-strony`)
  - `/privacy-policy` (instead of `/polityka-prywatnosci`)
  - `/terms` (instead of `/regulamin`)

#### 15. Navigation Updates
- [ ] Update `DesktopNavigation.tsx` to use translated routes
- [ ] Update `MobileNavigation.tsx` to use translated routes
- [ ] Ensure navigation links work for both languages
- [ ] Consider adding language switcher (optional)

#### 16. Redirects
- [ ] Update `next.config.ts` redirects:
  - Keep existing Polish redirects
  - Add English-to-Polish redirects for old URLs
  - Handle cross-domain redirects if needed

#### 17. Breadcrumbs
- [ ] Update `BreadCrumbs.tsx` to:
  - Use translated labels
  - Use correct domain URLs
  - Include hreflang in JSON-LD

---

### Phase 6: Content Translation

#### 18. Blog Articles
- [ ] Translate all articles in `data/en/blog.json`
- [ ] Maintain same slug structure OR create slug mapping
- [ ] Translate article titles, excerpts, content
- [ ] Update article metadata (SEO titles, descriptions)
- [ ] Ensure images/alt text are appropriate

#### 19. Projects
- [ ] Translate all projects in `data/en/projects.json`
- [ ] Translate project titles, descriptions, content
- [ ] Maintain same slug structure OR create slug mapping
- [ ] Update project metadata

#### 20. Testimonials
- [ ] Translate testimonials OR create English-specific ones
- [ ] Update `data/en/testimonials.json`

#### 21. Calculator
- [ ] Translate all calculator step files
- [ ] Translate all option labels, tooltips
- [ ] Ensure pricing/calculations remain consistent

---

### Phase 7: Forms & Interactions

#### 22. Contact Form
- [ ] Update `ContactForm.tsx` to use translated labels
- [ ] Translate validation messages
- [ ] Translate success/error messages
- [ ] Ensure form submissions work for both domains

#### 23. Cookie Consent
- [ ] Translate cookie consent banner
- [ ] Translate GDPR text
- [ ] Ensure analytics work for both domains

---

### Phase 8: Analytics & Tracking

#### 24. Google Analytics
- [ ] Decide: Separate GA4 property for .com or same property
- [ ] Update GA configuration to handle both domains
- [ ] Ensure consent works for both domains
- [ ] Test tracking on both domains

#### 25. Other Analytics
- [ ] Update Metricool hash if separate tracking needed
- [ ] Update any other tracking scripts

---

### Phase 9: Testing & Validation

#### 26. Functionality Testing
- [ ] Test all routes on .pl domain (ensure unchanged)
- [ ] Test all routes on .com domain
- [ ] Test navigation between pages
- [ ] Test forms and interactions
- [ ] Test calculator functionality

#### 27. SEO Testing
- [ ] Validate hreflang tags (Google Search Console)
- [ ] Test sitemap generation for both domains
- [ ] Verify canonical URLs
- [ ] Check Schema.org structured data
- [ ] Test OpenGraph tags

#### 28. Cross-Domain Testing
- [ ] Ensure Polish site (.pl) remains completely unchanged
- [ ] Test that English site (.com) works independently
- [ ] Verify hreflang links work correctly
- [ ] Test redirects

---

### Phase 10: Deployment

#### 29. Vercel Configuration
- [ ] Configure both domains in Vercel project
- [ ] Set environment variables per domain:
  - `.pl` domain: `NEXT_PUBLIC_SITE_URL=https://www.arteonagency.pl`
  - `.com` domain: `NEXT_PUBLIC_SITE_URL=https://www.arteonagency.com`
- [ ] Configure domain routing if needed

#### 30. DNS & Domain Setup
- [ ] Point `.com` domain to Vercel
- [ ] Configure SSL certificates
- [ ] Test domain accessibility

#### 31. Final Checks
- [ ] Verify both sites are live
- [ ] Test all functionality on production
- [ ] Monitor for errors
- [ ] Submit sitemaps to Google Search Console for both domains

---

## Critical Considerations

### 1. Polish Site Must Remain Unchanged
- All Polish routes must stay on `.pl` domain
- All Polish content must remain in Polish
- No breaking changes to existing Polish URLs
- Polish users should not see any English content

### 2. SEO Best Practices
- Implement proper hreflang tags
- Use correct canonical URLs per domain
- Ensure no duplicate content penalties
- Proper language declarations in HTML

### 3. Content Strategy
- Decide if blog articles should have same slugs or different
- Decide if projects should have same slugs or different
- Consider if some content should be English-only or Polish-only

### 4. Maintenance
- Future content updates need to be done in both languages
- Consider content management workflow
- Document translation process

---

## Estimated Complexity

**High Complexity** - This is a significant undertaking requiring:
- ~30-40 hours for initial setup and translation infrastructure
- ~60-80 hours for content translation (depending on volume)
- ~20-30 hours for SEO implementation and testing
- **Total: ~110-150 hours**

**Recommendation**: Consider phased rollout:
1. Phase 1-3: Setup and infrastructure (2-3 weeks)
2. Phase 4-6: Core pages translation (3-4 weeks)
3. Phase 7-10: Content translation and deployment (4-6 weeks)

---

## Files That Need Translation

### Critical Files (Must Translate)
1. `app/layout.tsx` - Root layout with language detection
2. `app/page.tsx` - Homepage
3. `components/shared/Navigation.tsx` - Main navigation
4. `components/shared/Footer.tsx` - Footer
5. All service pages in `app/uslugi/**`
6. All project pages in `app/realizacje/**`
7. All blog pages in `app/edukacja/**`
8. `app/kontakt/page.tsx` - Contact page
9. `app/o-nas/page.tsx` - About page

### Data Files (Must Translate)
1. `data/pl/blog.json` → `data/en/blog.json`
2. `data/pl/projects.json` → `data/en/projects.json`
3. `data/pl/testimonials.json` → `data/en/testimonials.json`
4. All files in `data/pl/calculator/` → `data/en/calculator/`

### Supporting Files
- All tool pages in `app/narzedzia/**`
- Error pages (`app/not-found.tsx`, `app/error.tsx`)
- Legal pages (`app/polityka-prywatnosci/`, `app/regulamin/`)
- Sitemap page (`app/mapa-strony/`)

---

## Next Steps

1. **Review this plan** and decide on approach (single codebase vs separate repo)
2. **Prioritize** which pages/content to translate first
3. **Set up** development environment for testing
4. **Begin** with Phase 1 (Architecture & Setup)
5. **Iterate** through phases systematically

---

## Questions to Answer Before Starting

1. Should blog articles have the same slugs in both languages?
2. Should projects have the same slugs in both languages?
3. Do you want a language switcher on the site?
4. Should the English site have the same structure or can it be simplified?
5. How will you handle future content updates (translate immediately or batch)?
6. Do you need separate Google Analytics properties?
7. Should contact forms go to the same email or different?
