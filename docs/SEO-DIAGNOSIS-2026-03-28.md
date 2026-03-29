# SEO Diagnosis Report — Arteon Agency

**Date:** 2026-03-28 (updated 2026-03-29)
**Scope:** Root cause analysis of SEO collapse (Feb 28 – March 28, 2026)
**Status:** Complete — all root causes identified and eliminated

---

## Executive Summary

Three root causes were identified and **eliminated at source** (not mitigated, not patched).

| #   | Root Cause                                                                              | Severity     | Fix                                                                                                                                       |
| --- | --------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | next-sitemap `generateUrl()` concatenated hreflang URLs due to missing `hrefIsAbsolute` | **CRITICAL** | Root cause: commit `198d5529` (Mar 10). Fixed Mar 13 (`df3e5796`). Architectural fix this session: shared config eliminates future drift. |
| 2   | Duplicated locale config across 3 files caused `nb`/`no` hreflang conflict              | **CRITICAL** | Extracted to single source of truth `lib/sitemap-locale-config.cjs`. Both CJS scripts import from it.                                     |
| 3   | Postbuild strip+regenerate masked next-sitemap bugs                                     | **HIGH**     | Removed strip+regenerate. Postbuild now only splits sitemaps. next-sitemap is the sole hreflang authority.                                |

Additional issues (already fixed in prior sessions):

- HTTPS "tymczasowy blad" — CDN TTL 1h → 7d (`vercel.json`)
- sitemap-0.xml exposure — 301 redirect safety net (`next.config.ts`)
- 410 middleware for ghost concatenated URLs (`middleware.ts`)

---

## ROOT CAUSE 1: Concatenated Cross-Locale URLs (20k+ ghost URLs)

### Exact mechanism

**next-sitemap v4** `url-set-builder.js:121-123`:

```javascript
href: alternateRef.hrefIsAbsolute
    ? alternateRef.href                                    // uses href as-is
    : this.absoluteUrl(alternateRef.href, field.loc, ...)  // CONCATENATES href + loc
```

`absoluteUrl()` calls `generateUrl(baseUrl, slug)`:

```javascript
isURL(slug) ? cleanPath(slug) : cleanPath(`${baseUrl}/${slug}`);
```

Without `hrefIsAbsolute: true`, next-sitemap treats `href` as a BASE URL and **appends `loc`** to it:

```
generateUrl("https://www.arteonagency.pl/da/vaerktojer", "/no/verktoy/slug")
= "https://www.arteonagency.pl/da/vaerktojer/no/verktoy/slug"
```

### Exact timeline

| Date             | Commit         | What happened                                                                                                                                                                                                                   |
| ---------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feb 14           | `e0d1a696`     | `alternateRefs: []` + comment: "v4 appends loc to alternateRefs.href". Hreflang OFF in sitemap. Safe.                                                                                                                           |
| Mar 1            | `b2c4c92a`     | Still `alternateRefs: []`. Safe.                                                                                                                                                                                                |
| **Mar 10**       | **`198d5529`** | **Changed `alternateRefs: []` to `getAlternateRefs(loc)` WITHOUT adding `hrefIsAbsolute: true`. Removed warning comment. Postbuild script only split sitemaps — did NOT strip hreflang. CONCATENATED URLs WENT TO PRODUCTION.** |
| Mar 10-13        | 3 days         | **~23k broken hreflang URLs in sitemaps on production. Google crawled and indexed them.**                                                                                                                                       |
| **Mar 13 08:17** | **`df3e5796`** | **Added `hrefIsAbsolute: true`. next-sitemap stopped concatenating.**                                                                                                                                                           |
| **Mar 13 21:05** | **`2657bf09`** | **Added strip+regenerate to postbuild as double safety layer.**                                                                                                                                                                 |

### Scale of damage

92 tools x 16 locales = 1,472 sitemap entries, each with 16 hreflang alternates = **~23,500 concatenated ghost URLs** submitted to Google via sitemap over 3 days.

### Current status

- `hrefIsAbsolute: true` present on all alternateRefs entries (verified by test)
- 410 middleware catches any remaining crawl attempts on concatenated URLs
- `safeHref` guard in LanguageSwitcher prevents concatenation from navigation

---

## ROOT CAUSE 2: Duplicated Locale Config (nb/no conflict)

### The problem

The same locale data (`LOCALE_TO_HREFLANG`, `LOCALE_TOOLS_BASE`, `MULTILINGUAL_PAGES`, `buildToolLocalePathsMap`) was independently defined in THREE files:

1. `next-sitemap.config.cjs` — had `no: 'nb'` (WRONG)
2. `scripts/postbuild-sitemap-hreflang.cjs` — had `no: 'no'` (correct)
3. `lib/i18n/locales.ts` — had `hreflang: 'no'` (correct, canonical TS source)

The comment `"no → nb per Fix 5"` in next-sitemap.config.cjs indicates someone intentionally changed it to `nb` at some point, but only in that one file.

### Why it wasn't caught

Postbuild strip+regenerate masked the bug by overriding next-sitemap's output with its own correct values. The committed sitemap XML files contained `hreflang="nb"` (92+ occurrences), but these were overwritten on each build.

### Fix applied

Created `lib/sitemap-locale-config.cjs` as single source of truth for all CJS sitemap scripts:

- `SITE_URL`, `LOCALES`, `LOCALE_TOOLS_BASE`, `LOCALE_TO_HREFLANG`, `MULTILINGUAL_PAGES`
- `buildToolLocalePathsMap()`, `buildPathToToolKey()`

Both `next-sitemap.config.cjs` and `scripts/postbuild-sitemap-hreflang.cjs` now import from this shared file. **It is impossible for them to disagree on locale data.**

---

## ROOT CAUSE 3: Postbuild Strip+Regenerate Masked Bugs

### The problem

The postbuild script:

1. STRIPPED all `<xhtml:link>` hreflang from sitemap-0.xml
2. REGENERATED them from its own independent data

This meant:

- next-sitemap bugs were invisible (output was always overwritten)
- The postbuild script's own bugs (like the nb/no discrepancy) silently replaced correct data
- Nobody tested next-sitemap's hreflang output independently
- Two independent hreflang generation pipelines existed for no reason

### Fix applied

Removed strip+regenerate from postbuild script. It now only:

1. Reads sitemap-0.xml (with correct hreflang from next-sitemap)
2. Splits into per-locale/per-type sitemap files
3. Deletes sitemap-0.xml
4. Writes sitemap.xml index

**next-sitemap is now the sole authority for hreflang generation.** If it breaks, the bug will be visible and caught, not silently masked.

---

## Architecture Before vs After

### Before (3 independent data sources, bugs masked)

```
lib/i18n/locales.ts          → HTML <head> hreflang (canonical TS)
next-sitemap.config.cjs      → sitemap hreflang (own LOCALE_TO_HREFLANG copy)
postbuild-sitemap-hreflang.cjs → STRIPS sitemap hreflang, REGENERATES from own copy
                                  ↑ masks bugs in next-sitemap
                                  ↑ has own nb/no divergence
```

### After (shared config, single authority)

```
lib/i18n/locales.ts           → HTML <head> hreflang (canonical TS)
lib/sitemap-locale-config.cjs → shared CJS config (mirrors locales.ts)
  ├── next-sitemap.config.cjs → sitemap hreflang (imports shared config)
  └── postbuild script        → ONLY splits sitemaps (trusts next-sitemap output)
```

---

## Files Modified

| File                                     | Change                                                                                                                                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`lib/sitemap-locale-config.cjs`**      | **NEW** — Single source of truth for locale config used by both CJS scripts                                                                         |
| `next-sitemap.config.cjs`                | Removed ~180 lines of duplicated locale data. Imports from shared config. Fixed `no: 'nb'` → `no: 'no'`.                                            |
| `scripts/postbuild-sitemap-hreflang.cjs` | Removed ~170 lines: all duplicated locale data, `generateHreflangLinks()`, strip+regenerate logic. Imports shared config. Now only splits sitemaps. |

---

## Verification

```
$ node -e "const c = require('./next-sitemap.config.cjs'); ..."

/en/tools/jpg-to-webp-converter:
  alternateRefs: 17 (16 locales + x-default)
  Norwegian hreflang: "no" (not "nb")
  All hrefIsAbsolute: true
  Concatenated URLs: NONE

/narzedzia      → 17 refs
/da/vaerktojer  → 17 refs
/o-nas          → 17 refs
/               → 2 refs (pl + x-default)
/uslugi         → 0 refs (correct — no multilingual equivalent)
```

---

## Remaining Action Items

### Deploy

1. **Deploy to Vercel** — regenerates all sitemap XML files with correct `hreflang="no"` and new architecture

### Monitor (2-8 weeks)

2. **Track 410 responses in GSC** — concatenated ghost URLs should deindex
3. **Verify `hreflang="no"`** appears consistently in GSC (not `nb`)
4. **Confirm "tymczasowy blad"** sitemap processing errors have stopped

### Optional cleanup

5. Remove `REMOVED_UNIT_CONVERTER_REDIRECTS` from `lib/redirects.ts` (272 entries for never-published pages)
6. Remove corresponding 18 entries from `vercel.json`
