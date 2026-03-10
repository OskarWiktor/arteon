# Skill: arteon-tools

Szczegóły architektury narzędzi w projekcie Arteon Agency.

## 92 Tools by Category

- **Image converters** (47): JPG/PNG/WebP/AVIF/BMP/GIF/HEIC/SVG/TIFF cross-conversions, image-to-base64, base64-to-image, PDF conversions
- **Text/data converters** (8): CSV↔JSON, JSON↔XML, JSON↔YAML, HTML↔Markdown
- **Unit converters** (17): px/em/rem/pt/vw/cm/mm/inches, bytes, DPI/PPI, Mbps/MBs, hex↔RGB, RGB↔CMYK/HSL, decimal↔binary/hex, Unix timestamp, Tailwind spacing
- **Generators & tools** (11): QR code, favicon, color palette, email signature, lorem ipsum, image color extractor, WCAG contrast checker, meta title checker, word counter, JPG/PNG-to-WebP (batch), image editor

Desktop-only tools: image editor, email signature, favicon, JPG-to-WebP, PNG-to-WebP → route group `(desktop-only)/`

## Tool Architecture Flow

```
Tool page request
  → app/{locale}/tools/{slug}/page.tsx
    → components/sections/tools/ToolPageRenderer.tsx   # layout, SEO, content blocks
      → components/sections/tools/DynamicToolRenderer.tsx  # dynamic component loader
        → Specific tool component
```

Components:

- `converters/` — 64 individual converter wrappers
- `unit-wrappers/` — 17 unit converter wrappers
- `ImageFormatConverter/`, `UnitConverter/`, `TextFormatConverter/`

## Tool Data Structure

`data/{locale}/tools/{tool}.json`:

```typescript
interface ToolPageData {
  toolKey: ToolItemKey;
  locale: Locale;
  metadata: { title, description, ogImage, path };
  hero: { title, description, backgroundImage };
  breadcrumbs: { second: {href, label}, third: {href, label} };
  schemas: {
    software: { name, description, featureList, ... };
    howTo: { name, description, steps: [{name, text}] };
  };
  contentBlocks: ToolContentBlock[];
  cta?: { title, description, btnOne, btnOneLink, ... };
}
```

## Content Block Types

`sectionInfo` | `sectionBasic` | `sectionSteps` | `sectionDemo` | `sectionTabs` | `sectionFeatureComparison` | `sectionTimeline` | `gap` | `faq` | `toolsCarousel` | `contactForm`

## Tool UI Translations

12 files per locale in `data/{locale}/tools-ui/`:
`color-palette.json`, `email-signature.json`, `favicon.json`, `image-resize-editor.json`, `image-resize.json`, `jpg-png-webp.json`, `lorem-ipsum.json`, `meta-title.json`, `palette-extractor.json`, `qr-code.json`, `wcag-contrast.json`, `word-count.json`

## Tool Registry

`lib/i18n/tool-registry.ts` — all 92 tools × 16 locales (~400KB file, do not load unnecessarily)

## Favicon Tool Note

Favicon generator = ONLY generates favicon.ico files. NOT an "icon generator". All texts must reflect this.

## Key Dependencies for Tools

- `sharp` (server) — image processing
- `heic2any`, `utif2`, `gifenc` — client converters
- `pdfjs-dist`, `jspdf` — PDF
- `qrcode` — QR codes
- `marked`, `turndown`, `turndown-plugin-gfm` — text processing
- `js-yaml` — YAML
- `zod` — validation
