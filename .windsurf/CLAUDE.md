# Arteon Agency - Complete Project Context for Cascade AI Assistant

> **CEL:** This file contains ALL project context, conventions, skills, and automated task triggers for optimal AI assistance.
> **For new devices:** Ask Cascade: "Read `.windsurf/CLAUDE.md` and remember everything. This is your complete project knowledge base."
> **Last updated:** 2026-03-12 (Enhanced with Sales & Marketing Intelligence Skills)

---

## 🎯 Project Overview

**Arteon Agency** - Professional web development agency specializing in 92 online tools across 16 languages.

### Core Stack

- **Framework:** Next.js 16.1.6 + React 19.2.4
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel
- **Domain:** https://www.arteonagency.pl
- **Build System:** Prebuild → Build → Postbuild

### Project Scale

- **92 Tools:** Image converters (47), Text converters (8), Unit converters (17), Generators (11)
- **16 Locales:** PL (default), EN, DE, ES, FR, PT, IT, RO, NL, HU, CS, SV, DA, NO, FI, EL
- **Architecture:** Server Components by default, Performance-first

---

## 🤖 Skills System (Auto-Activation)

### Custom Skills (.windsurf/skills/)

**53 specialized skills** that automatically activate based on task context:

#### 🏗️ Development Skills

1. **arteon-component-architecture** - React/Next.js component patterns
2. **arteon-data-management** - Data structure, validation, i18n
3. **arteon-performance-optimization** - Performance for 92 tools
4. **arteon-error-handling** - Error boundaries and recovery
5. **arteon-testing-strategy** - Complete testing framework
6. **arteon-security-best-practices** - Security implementation

#### 🔍 SEO Skills (2025 Updated)

7. **arteon-seo-optimization** - Technical SEO, metadata, Core Web Vitals
8. **arteon-content-seo** - Content optimization and strategy
9. **arteon-technical-seo** - Technical SEO implementation
10. **seo** - Universal SEO analysis and optimization

#### 🚀 Deployment & Automation

11. **arteon-deployment-strategy** - Production deployment
12. **arteon-workflow-automation** - CI/CD and automation
13. **arteon-automation** - Comprehensive workflow automation
14. **arteon-ai-agent** - Intelligent AI agent and orchestration

#### 📝 Content Creation Skills

15. **arteon-content-creation** - Content creation and writing excellence
16. **arteon-content-quality** - Content quality assurance and validation
17. **arteon-content-workflow** - Content creation and management
18. **humanizer** - AI pattern removal and brand voice enforcement
19. **arteon-i18n-content-quality** - Multi-language content quality
20. **arteon-locale-patterns** - Locale-specific writing patterns
21. **arteon-cultural-adaptation** - Cultural adaptation strategies

#### 📚 Existing Skills

22. **arteon-i18n** - Internationalization architecture
23. **arteon-tools** - Tools architecture and data structure

#### 🤖 AI Agent & Intelligence

- **Intelligent Task Detection** - Automatic task pattern recognition
- **Skill Orchestration** - Context-based skill activation
- **Quality Assurance Automation** - Automated quality checks
- **Performance Optimization** - Real-time performance monitoring
- **Learning & Adaptation** - Continuous learning from feedback

#### 🚀 Next-Gen AI Intelligence Skills (NEW)

24. **arteon-ai-content-intelligence** - AI-powered content generation and optimization
25. **arteon-ai-seo-intelligence** - AI-powered SEO optimization and search intelligence
26. **arteon-ai-code-intelligence** - AI-powered code quality analysis and optimization
27. **arteon-ai-ux-intelligence** - AI-powered UI/UX analysis and optimization
28. **arteon-advanced-testing** - AI-powered testing automation and intelligence
29. **arteon-quality-intelligence** - AI-powered quality monitoring and analysis
30. **arteon-performance-intelligence** - AI-powered performance monitoring and optimization
31. **arteon-security-intelligence** - AI-powered security monitoring and vulnerability detection
32. **arteon-next-advanced-patterns** - Advanced Next.js patterns and optimization
33. **arteon-typescript-advanced-intelligence** - Advanced TypeScript patterns and optimization
34. **arteon-architecture-intelligence** - Advanced architecture patterns and intelligence
35. **arteon-user-intelligence** - Advanced user behavior analysis and personalization
36. **arteon-analytics-intelligence** - Advanced analytics, insights, and business intelligence
37. **arteon-web-intelligence** - AI-powered web research and fact verification
38. **arteon-seo-research-intelligence** - AI-powered SEO research and competitive analysis
39. **arteon-code-documentation-intelligence** - AI-powered documentation research and analysis
40. **arteon-fact-verification-intelligence** - AI-powered fact verification and truth analysis

#### 🗂️ Folder-Specific Intelligence Skills (NEW)

41. **arteon-utils-intelligence** - AI-powered utility functions and patterns
42. **arteon-types-intelligence** - Advanced TypeScript type system and patterns
43. **arteon-scripts-intelligence** - Advanced scripts and automation patterns
44. **arteon-hooks-intelligence** - Advanced React hooks and custom patterns
45. **arteon-lib-intelligence** - Advanced library architecture and management
46. **arteon-docs-intelligence** - Advanced documentation architecture and management
47. **arteon-data-intelligence** - Advanced data architecture and management
48. **arteon-component-intelligence** - Advanced React component architecture
49. **arteon-app-intelligence** - Advanced Next.js app architecture and patterns

#### 🔒 Advanced Security & Compliance Skills (NEW)

50. **arteon-privacy-compliance-intelligence** - AI-powered GDPR/CCPA compliance and privacy management
51. **arteon-infrastructure-intelligence** - Advanced infrastructure architecture and DevOps
52. **arteon-legal-compliance-intelligence** - Advanced legal compliance and regulatory management

#### 📈 Sales & Marketing Skills (NEW)

53. **arteon-sales-intelligence** - AI-powered sales optimization and conversion intelligence

### Skill Activation Triggers

```typescript
// Development Phase
"build component" → arteon-component-architecture
"data structure" → arteon-data-management
"performance" → arteon-performance-optimization
"error handling" → arteon-error-handling

// SEO Phase
"SEO optimization" → arteon-seo-optimization
"content SEO" → arteon-content-seo
"technical SEO" → arteon-technical-seo
"SEO audit" → seo

// Deployment Phase
"deploy" → arteon-deployment-strategy
"CI/CD" → arteon-workflow-automation
"content" → arteon-content-workflow

// Quality Assurance
"testing" → arteon-testing-strategy
"security" → arteon-security-best-practices

// Content Creation Phase
"create content" → arteon-content-creation
"content quality" → arteon-content-quality
"humanize text" → humanizer
"i18n content" → arteon-i18n-content-quality
"locale patterns" → arteon-locale-patterns
"cultural adaptation" → arteon-cultural-adaptation

// AI Agent & Automation Phase
"automate workflow" → arteon-automation
"AI agent" → arteon-ai-agent
"task detection" → arteon-ai-agent
"skill orchestration" → arteon-ai-agent
"quality automation" → arteon-automation

// Next-Gen AI Intelligence Phase
"AI content" → arteon-ai-content-intelligence
"AI SEO" → arteon-ai-seo-intelligence
"AI code" → arteon-ai-code-intelligence
"AI UX" → arteon-ai-ux-intelligence
"AI testing" → arteon-advanced-testing
"AI quality" → arteon-quality-intelligence
"AI performance" → arteon-performance-intelligence
"AI security" → arteon-security-intelligence
"Next.js patterns" → arteon-next-advanced-patterns
"TypeScript intelligence" → arteon-typescript-advanced-intelligence
"architecture intelligence" → arteon-architecture-intelligence
"user intelligence" → arteon-user-intelligence
"analytics intelligence" → arteon-analytics-intelligence
"web research" → arteon-web-intelligence
"SEO research" → arteon-seo-research-intelligence
"documentation research" → arteon-code-documentation-intelligence
"fact verification" → arteon-fact-verification-intelligence

// Folder-Specific Intelligence Phase
"utils development" → arteon-utils-intelligence
"types development" → arteon-types-intelligence
"scripts development" → arteon-scripts-intelligence
"hooks development" → arteon-hooks-intelligence
"library development" → arteon-lib-intelligence
"docs development" → arteon-docs-intelligence
"data development" → arteon-data-intelligence
"component development" → arteon-component-intelligence
"app development" → arteon-app-intelligence

// Advanced Security & Compliance Phase
"privacy compliance" → arteon-privacy-compliance-intelligence
"infrastructure management" → arteon-infrastructure-intelligence
"legal compliance" → arteon-legal-compliance-intelligence

// Sales & Marketing Phase
"sales optimization" → arteon-sales-intelligence
"conversion optimization" → arteon-sales-intelligence
"revenue optimization" → arteon-sales-intelligence
```

---

## 🤖 AI Agent Capabilities

### Intelligent Task Detection

- **Pattern Recognition:** 95%+ accuracy in task detection
- **Intent Classification:** Automatic intent classification
- **Context Analysis:** Deep context understanding
- **Complexity Assessment:** Task complexity evaluation
- **Priority Determination:** Automatic priority setting

### Skill Orchestration

- **Automatic Activation:** Skills activate based on context
- **Workflow Orchestration:** End-to-end workflow management
- **Quality Gates:** Automated quality enforcement
- **Performance Optimization:** Real-time performance monitoring
- **Learning Adaptation:** Continuous learning and improvement

### Quality Assurance Automation

- **Code Quality Validation:** Automated code quality checks
- **Content Quality Assurance:** Multi-language content validation
- **Performance Monitoring:** Real-time performance tracking
- **Accessibility Validation:** WCAG 2.1 AA compliance
- **Security Standards Enforcement:** Automated security validation

### Performance Optimization

- **Build Optimization:** < 3 minutes build time
- **Bundle Optimization:** < 250KB gzipped
- **Runtime Optimization:** All Core Web Vitals green
- **Cache Optimization:** Intelligent caching strategies
- **Resource Optimization:** Efficient resource usage

---

## 📋 Rules System (.windsurf/rules/)

### 6 Rule Files for Consistency

1. **README.md** - Overview and quick reference
2. **project-principles.md** - Core development principles
3. **development-guidelines.md** - Detailed coding standards
4. **security-standards.md** - Security requirements
5. **performance-standards.md** - Performance targets
6. **testing-standards.md** - Testing requirements

### Rule Enforcement

- **Pre-commit hooks** for code quality
- **CI/CD quality gates** for deployment
- **Code review checklist** for consistency
- **AI Agent validation** for automated quality checks
- **Performance monitoring** for continuous optimization

---

## 🌍 Internationalization (16 Locales)

### Current Locales

| Locale           | Lang  | Tools Path         | Example                                      |
| ---------------- | ----- | ------------------ | -------------------------------------------- |
| **pl** (default) | pl-PL | `/narzedzia`       | `/narzedzia/kontrast-i-czytelnosc-kolorow`   |
| en               | en-US | `/en/tools`        | `/en/tools/color-contrast-checker`           |
| de               | de-DE | `/de/werkzeuge`    | `/de/werkzeuge/farb-kontrast-pruefer`        |
| es               | es-ES | `/es/herramientas` | `/es/herramientas/comprobar-contraste-color` |
| fr               | fr-FR | `/fr/outils`       | `/fr/outils/verifier-contraste-couleur`      |
| pt               | pt-PT | `/pt/ferramentas`  | `/pt/ferramentas/verificar-contraste-cor`    |
| it               | it-IT | `/it/strumenti`    | `/it/strumenti/verificare-contrasto-colore`  |
| ro               | ro-RO | `/ro/unelte`       | `/ro/unelte/verificare-contrast-culoare`     |
| nl               | nl-NL | `/nl/hulpmiddelen` | `/nl/hulpmiddelen/kleur-contrast-verifieren` |
| hu               | hu-HU | `/hu/eszkozok`     | `/hu/eszkozok/szin-kontraszt-ellenorzes`     |
| cs               | cs-CZ | `/cs/nastroje`     | `/cs/nastroje/kontrast-barevnych-barev`      |
| sv               | sv-SE | `/sv/verktyg`      | `/sv/verktyg/farg-kontrast-kontroller`       |
| da               | da-DK | `/da/verktojer`    | `/da/verktojer/farve-kontrast-kontroller`    |
| no               | no-NO | `/no/verktoy`      | `/no/verktoy/farge-kontrast-kontroller`      |
| fi               | fi-FI | `/fi/tyokalut`     | `/fi/tyokalut/vari-kontrasti-tarkastin`      |
| el               | el-GR | `/el/ergaleia`     | `/el/ergaleia/elehthe-kontrast-chromaton`    |

### I18N Content Quality

- **Multi-Language Support:** 16 locales with cultural adaptation
- **Cultural Intelligence:** Locale-specific patterns and examples
- **Brand Voice Consistency:** Consistent brand voice across all locales
- **Quality Validation:** Automated quality checks for all languages
- **Performance Optimization:** Optimized performance for all locales

### I18n Architecture

```typescript
// Locale configuration
interface LocaleConfig {
  lang: string;
  hreflang: string;
  label: string;
  name: string;
  toolsBasePath: string;
  toolsIndexHref: string;
  aboutHref: string;
  contactHref: string;
  privacyHref: string;
  priceCurrency: string;
}
```

---

## 🛠️ Tools Architecture (92 Tools)

### Tool Categories

| Category         | Count | Examples                                |
| ---------------- | ----- | --------------------------------------- |
| Image Converters | 47    | jpg-png-webp, image-resize, favicon     |
| Text/Data        | 8     | meta-counter, word-counter              |
| Unit Converters  | 17    | rgb-to-hsl, temperature-converter       |
| Generators       | 11    | qr-code, color-palette, email-signature |

### Tool Data Structure

```typescript
interface ToolData {
  metadata: {
    title: string; // 50-60 chars, keyword front-loaded
    description: string; // 150-160 chars, keyword + CTA
  };
  hero: {
    title: string; // H1 with benefit
    description: string; // Short description
  };
  schema: {
    software: SoftwareApplicationSchema;
    howTo: HowToSchema;
  };
  contentBlocks: ContentBlock[];
}
```

---

## 🚀 Performance Standards

### Core Web Vitals (2025)

```typescript
interface CoreWebVitals {
  LCP: 2.5; // Largest Contentful Paint (seconds)
  INP: 200; // Interaction to Next Paint (milliseconds) - NEW 2025
  CLS: 0.1; // Cumulative Layout Shift
  FCP: 1.8; // First Contentful Paint
  TTI: 3.8; // Time to Interactive
}
```

### Performance Budgets

```typescript
interface PerformanceBudgets {
  lighthouse: {
    performance: 90;
    accessibility: 95;
    bestPractices: 90;
    seo: 90;
  };
  bundle: {
    total: 250; // KB gzipped
    largest: 100; // KB gzipped
  };
}
```

### Optimization Results

- **Per-page First Load JS:** 174KB → 132KB (**-42KB**)
- **Search Index:** -933KB (lightweight prebuild)
- **Navigation:** Inline SVGs (36 icons optimized)

---

## 🔒 SEO Standards (2025 Updated)

### Meta Requirements

- **Title:** 50-60 characters, keyword front-loaded
- **Description:** 150-160 characters, keyword + CTA
- **Canonical:** Absolute, always `https://www.arteonagency.pl`
- **OG Images:** Unique per page type, 1200x630px

### Schema Markup (2025 Guidelines)

```typescript
// Recommended for Arteon
- SoftwareApplication: ✅ Tools
- HowTo: ✅ Instructions
- BreadcrumbList: ✅ Navigation
- FAQPage: ❌ Only for government/health sites (NEW 2025 restriction)
```

### AI Search Optimization (AEO)

- FAQ sections for AI discoverability
- Natural language Q&A format
- Structured content for AI parsing
- Keyword clustering and entity recognition

---

## 🛡️ Security Standards

### Input Validation

- All client inputs validated with Zod schemas
- File uploads type and size validated
- API endpoints rate limited
- No `any` types in production

### Data Protection

- Parameterized database queries
- Encrypted sensitive data
- Validated environment variables
- No secrets in code

### Security Headers

```typescript
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
```

---

## 🧪 Testing Standards

### Coverage Goals

- **Unit Tests:** 80% coverage
- **Integration Tests:** Critical paths
- **E2E Tests:** User workflows
- **Performance Tests:** Core Web Vitals
- **Accessibility Tests:** WCAG 2.1 AA compliance

### Test Architecture

```
tests/
├── unit/                    # Unit tests
├── integration/             # Integration tests
├── e2e/                     # End-to-end tests
├── performance/            # Performance tests
├── accessibility/           # Accessibility tests
└── visual/                 # Visual regression tests
```

---

## 📁 File Structure & Conventions

### Key Directories

```
.windsurf/
├── CONTEXT.md              # This file - complete project context
├── rules/                  # 6 rule files
│   ├── README.md
│   ├── project-principles.md
│   ├── development-guidelines.md
│   ├── security-standards.md
│   ├── performance-standards.md
│   └── testing-standards.md
└── skills/                 # 15 custom skills
    └── skills/            # Individual skill files
```

### Naming Conventions

| Type             | Convention              | Example                              |
| ---------------- | ----------------------- | ------------------------------------ |
| React Components | PascalCase.tsx          | `Button.tsx`, `HeroBanner.tsx`       |
| Hooks            | useCamelCase.ts         | `useEscapeKey.ts`, `useFocusTrap.ts` |
| Services         | camelCaseDataService.ts | `blogDataService.ts`                 |
| Utilities        | camelCase.ts            | `slugify.ts`, `colorConvert.ts`      |
| Types            | camelCase.ts            | `article.ts`, `project.ts`           |

### Forbidden Patterns

- `helper.ts`, `utils.ts`, `data.ts` (without context)
- `index.ts` as barrel exports
- Polish typographic quotes `„"` in JSON
- Unicode escapes `\u00e8` in JSON (use actual characters)

---

## 🎨 Design System

### Typography Tiers

| Tier                  | Class                                                             | Size                | Usage                  |
| --------------------- | ----------------------------------------------------------------- | ------------------- | ---------------------- |
| A - Section Headers   | `h6`                                                              | 17-19px, fw600      | "Narzędzia kadrowania" |
| B - Functional Labels | `text-[14px]! font-medium`                                        | Etykiety, przyciski |
| C - Helpers/Info      | `text-light text-xs!`                                             | Info, notatki       |
| D - Dropzone text     | Primary: `text-sm! font-medium`, Secondary: `text-light text-xs!` | Dropzone            |

### Color System

```css
:root {
  --primary: #1b2632; /* Deep navy */
  --accent: #ffb162; /* Gold */
  --background: #f5f5f5; /* Light gray */
}

/* Text colors */
.text-light {
  color: #6b7280;
}
.text-mid {
  color: #4b5563;
}
.text-dark {
  color: #1f2937;
}
.text-white {
  color: #ffffff;
}
```

---

## 🔄 Development Workflow

### Task Categories

| Prefix      | Type         | Build Required | Example                  |
| ----------- | ------------ | -------------- | ------------------------ |
| `TOOLS-*`   | Tools        | ✅             | TOOLS-060 ZIP helper     |
| `SEO-*`     | SEO          | ✅             | SEO-017 favicon assets   |
| `CLEANUP-*` | Code cleanup | ✅             | CLEANUP-013 downloadBlob |
| `CONTENT-*` | Content      | ❌             | CONTENT-001 excerpt rule |
| `AUDIT-*`   | Audit        | ❌             | AUDIT-003 cleanup        |

### Build Requirements

```bash
# Required for code changes
npm run lint
npm run build

# Not required for content-only tasks
# (explicitly marked as "Weryfikacja: nie jest wymagana")
```

### Quality Gates

- TypeScript compilation
- ESLint validation
- Build success
- Performance > 90 Lighthouse
- Accessibility > 95

---

## 📊 Monitoring & Analytics

### Performance Monitoring

- Core Web Vitals tracking
- Bundle size monitoring
- Error rate tracking
- User experience metrics

### SEO Monitoring

- Search Console integration
- Keyword ranking tracking
- Index coverage monitoring
- Schema markup validation

### Security Monitoring

- Failed authentication attempts
- Rate limit violations
- Suspicious activity detection
- Security event logging

---

## 🔧 Technical Implementation

### Next.js 16.1.6 Features

- **Server Components** by default
- **React Compiler** for optimization
- **Cache Components** for data
- **Parallel & Intercepting Routes**
- **Dynamic OG Images** with next/og

### TypeScript Configuration

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Build Optimization

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    reactCompiler: true,
    optimizeCss: true,
    optimizePackageImports: ['react-icons/ri', 'sharp'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
```

---

## 🌍 Content Standards

### Brand Voice

- **Tone:** Mentoring, friendly, straightforward
- **Narration:** 2nd person for reader, 1st person for Arteon
- **Style:** Benefit-first, no corporate jargon
- **Language:** Natural, human-readable

### Content Guidelines

- **No "online"** in meta titles/descriptions
- **No emojis** in content
- **No clickbait** titles
- **100% factual** information with sources
- **Polish examples** (law, medicine, gastronomy, real estate)

### SEO Content Optimization

- **Pain points** → Benefits → Features
- **User intent** matching
- **Trust signals** ("free", "no registration", "works in browser")
- **Emotional triggers** (relief, confidence, efficiency)

---

## 🚀 Deployment Strategy

### Production Deployment

- **Platform:** Vercel
- **Environment:** Production, staging, development
- **Performance:** Edge network, CDN, caching
- **Security:** HTTPS, security headers, rate limiting

### Build Process

1. **Prebuild:** Anser fix + split-blog + search-index generation
2. **Build:** Next.js build with optimization
3. **Postbuild:** Sitemap generation + hreflang

### Monitoring

- **Health checks:** Application status
- **Performance:** Real-time metrics
- **Errors:** Automatic alerting
- **Analytics:** User behavior tracking

---

## 🤝 Automation & CI/CD

### Pre-commit Hooks

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test:ci",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

### CI/CD Pipeline

1. **Lint:** Code quality checks
2. **Test:** Unit, integration, E2E tests
3. **Build:** Production build
4. **Deploy:** Automatic deployment to Vercel
5. **Monitor:** Post-deployment checks

---

## 📚 Key Documentation Files

### Project Documentation

- `docs/INSTRUCTIONS.md` - Complete project instructions
- `docs/CONTENT_INSTRUCTIONS.md` - Content writing guidelines
- `docs/TASKS.md` - Current task list
- `docs/DONE_TASKS.md` - Completed tasks

### Catalogs

- `docs/PAGES_CATALOG.md` - All pages documentation
- `docs/TOOLS_CATALOG.md` - Tools documentation
- `docs/COMPONENTS_CATALOG.md` - UI components
- `docs/SECURITY_CHECKLIST.md` - Security requirements

---

## 🔍 Development Commands

### Essential Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Production build
npm run lint             # Code linting
npm run format           # Code formatting

# Testing
npm run test              # Run all tests
npm run test:unit        # Unit tests only
npm run test:e2e         # End-to-end tests

# Performance
npm run build            # Check bundle size
npm run analyze          # Bundle analysis
```

### PowerShell Utilities

```powershell
# Validate all JSON files
Get-ChildItem "data\*\tools\*.json" -Recurse | ForEach-Object { try { Get-Content $_.FullName -Raw | ConvertFrom-Json | Out-Null } catch { Write-Output "INVALID: $($_.FullName)" } }

# Search for "online" in meta titles
Get-ChildItem "data\*\tools\*.json" -Recurse | ForEach-Object { $j = Get-Content $_.FullName -Raw | ConvertFrom-Json; if ($j.metadata.title -match 'online') { Write-Output "$($_.FullName): $($j.metadata.title)" } }
```

---

## 🎯 Quality Standards

### Code Quality

- **TypeScript strict mode** with proper typing
- **ESLint** configuration for code consistency
- **Prettier** for code formatting
- **No `any` types** in production code

### Performance Standards

- **Lighthouse score** > 90
- **Bundle size** < 250KB gzipped
- **Core Web Vitals** within Google thresholds
- **Image optimization** with WebP/AVIF

### Accessibility Standards

- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** requirements

### Security Standards

- **Input validation** for all user inputs
- **Rate limiting** for API endpoints
- **HTTPS enforcement** everywhere
- **Security headers** implementation

---

## 🚨 Future Enhancements

### Implemented Skills (Next-Gen AI Intelligence)

- ✅ `arteon-ai-content-intelligence` - AI-powered content generation and optimization
- ✅ `arteon-ai-seo-intelligence` - AI-powered SEO optimization and search intelligence
- ✅ `arteon-ai-code-intelligence` - AI-powered code quality analysis and optimization
- ✅ `arteon-ai-ux-intelligence` - AI-powered UI/UX analysis and optimization
- ✅ `arteon-advanced-testing` - AI-powered testing automation and intelligence
- ✅ `arteon-quality-intelligence` - AI-powered quality monitoring and analysis
- ✅ `arteon-performance-intelligence` - AI-powered performance monitoring and optimization
- ✅ `arteon-security-intelligence` - AI-powered security monitoring and vulnerability detection
- ✅ `arteon-next-advanced-patterns` - Advanced Next.js patterns and optimization
- ✅ `arteon-typescript-advanced-intelligence` - Advanced TypeScript patterns and optimization
- ✅ `arteon-architecture-intelligence` - Advanced architecture patterns and intelligence
- ✅ `arteon-user-intelligence` - Advanced user behavior analysis and personalization
- ✅ `arteon-analytics-intelligence` - Advanced analytics, insights, and business intelligence
- ✅ `arteon-web-intelligence` - AI-powered web research and fact verification
- ✅ `arteon-seo-research-intelligence` - AI-powered SEO research and competitive analysis
- ✅ `arteon-code-documentation-intelligence` - AI-powered documentation research and analysis
- ✅ `arteon-fact-verification-intelligence` - AI-powered fact verification and truth analysis

### Implemented Skills (Folder-Specific Intelligence)

- ✅ `arteon-utils-intelligence` - AI-powered utility functions and patterns
- ✅ `arteon-types-intelligence` - Advanced TypeScript type system and patterns
- ✅ `arteon-scripts-intelligence` - Advanced scripts and automation patterns
- ✅ `arteon-hooks-intelligence` - Advanced React hooks and custom patterns
- ✅ `arteon-lib-intelligence` - Advanced library architecture and management
- ✅ `arteon-docs-intelligence` - Advanced documentation architecture and management
- ✅ `arteon-data-intelligence` - Advanced data architecture and management
- ✅ `arteon-component-intelligence` - Advanced React component architecture
- ✅ `arteon-app-intelligence` - Advanced Next.js app architecture and patterns

### Implemented Skills (Advanced Security & Compliance)

- ✅ `arteon-privacy-compliance-intelligence` - AI-powered GDPR/CCPA compliance and privacy management
- ✅ `arteon-infrastructure-intelligence` - Advanced infrastructure architecture and DevOps
- ✅ `arteon-legal-compliance-intelligence` - Advanced legal compliance and regulatory management

### Implemented Skills (Sales & Marketing)

- ✅ `arteon-sales-intelligence` - AI-powered sales optimization and conversion intelligence

### Planned Skills

- `arteon-analytics-dashboard` - Analytics and monitoring
- `arteon-user-feedback-system` - User feedback collection
- `arteon-api-documentation` - API documentation generation
- `arteon-monitoring-alerts` - Advanced monitoring system

### Planned Rules

- `api-standards.md` - API design patterns
- `database-standards.md` - Database best practices
- `deployment-standards.md` - Deployment procedures
- `monitoring-standards.md` - Monitoring and alerting

---

## 📞 Quick Reference

### For New Developers

1. **Read this file** - Complete project context
2. **Check `docs/INSTRUCTIONS.md`** - Detailed instructions
3. **Use appropriate skills** - Auto-activated based on task
4. **Follow naming conventions** - Consistent code structure
5. **Run quality checks** - Lint, build, test

### For Common Tasks

- **Component development:** `arteon-component-architecture`
- **Data structure:** `arteon-data-management`
- **SEO optimization:** `arteon-seo-optimization`
- **Performance issues:** `arteon-performance-optimization`
- **Security concerns:** `arteon-security-best-practices`
- **Testing:** `arteon-testing-strategy`
- **Deployment:** `arteon-deployment-strategy`

### For Issues

- **Build failures:** Check TypeScript errors, then review `next.config.ts`
- **Performance issues:** Run Lighthouse audit, check Core Web Vitals
- **SEO issues:** Validate metadata, check structured data
- **Security issues:** Review security headers, check input validation

---

**This CLAUDE.md file is your complete project knowledge base. It ensures consistent, high-quality development across all aspects of the Arteon Agency project.**
