# Next.js 15 → 16 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Arteon Agency site from Next.js 15.3.6 to 16.1.6 with zero build errors and no regressions.

**Architecture:** The project uses Next.js App Router with 16 locales, 92 static tool pages, and a custom webpack memory-cache config. The upgrade requires: bumping package versions, resolving a Turbopack/webpack conflict, migrating 3 files to async params, and pinning Node.js 20 for Vercel. The 400KB `tool-registry.ts` is NOT touched — it contains no page components.

**Tech Stack:** Next.js 16, React 19.2, TypeScript 5, Tailwind CSS 4, npm, Vercel deployment

---

## Pre-flight: What IS and IS NOT broken

### Breaking changes that affect this project

| #   | Issue                                                                    | Affected files                   |
| --- | ------------------------------------------------------------------------ | -------------------------------- |
| 1   | **Node.js 20.9+ required** (was 18+)                                     | `.nvmrc` (create), `vercel.json` |
| 2   | **`next build` fails** — webpack config + Turbopack-default = hard error | `next.config.ts`, `package.json` |
| 3   | **Sync `params` access removed** — must `await params`                   | 3 files (see Task 3)             |
| 4   | **`@next/eslint-plugin-next` version mismatch**                          | `package.json`                   |
| 5   | **`.next/dev` new output dir** needs gitignore entry                     | `.gitignore`                     |

### Confirmed NOT broken (checked)

- ✅ No `middleware.ts` — no rename to `proxy.ts` needed
- ✅ No parallel route slots (`@modal/`, etc.) — no `default.js` needed
- ✅ ESLint already uses flat config (`eslint.config.js`) — no migration needed
- ✅ `images.minimumCacheTTL`, `imageSizes` — both explicitly set in config, unaffected by default changes
- ✅ No `experimental.ppr`, `experimental.dynamicIO`, `experimental.turbopack` — nothing to remove
- ✅ Lint script already uses `eslint` directly (not `next lint`) — removed command doesn't affect project
- ✅ No `serverRuntimeConfig` / `publicRuntimeConfig` — fine
- ✅ No AMP — fine
- ✅ No `next/legacy/image` — fine
- ✅ No `images.domains` config — fine
- ✅ `tool-registry.ts` (400KB) — contains data only, no page components, no params — untouched
- ✅ No `unstable_cacheLife`/`unstable_cacheTag` imports — nothing to rename

---

## Files Modified

| File                                           | Change                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `package.json`                                 | Bump `next`, `react`, `react-dom`, `@types/react`, `@types/react-dom`, `@next/eslint-plugin-next` |
| `next.config.ts`                               | Remove `webpack()` callback (replaced by Turbopack)                                               |
| `package.json` scripts                         | Remove redundant `--turbopack` from `dev`; add `--webpack` to `build` as fallback option          |
| `.nvmrc`                                       | Create with `20`                                                                                  |
| `vercel.json`                                  | Add `"engines": { "node": "20.x" }`                                                               |
| `.gitignore`                                   | Add `.next/dev` entry                                                                             |
| `app/(pl)/realizacje/[slug]/page.tsx`          | Async `params` migration                                                                          |
| `app/(pl)/edukacja/[category]/[slug]/page.tsx` | Async `params` migration                                                                          |
| `app/(pl)/edukacja/[category]/page.tsx`        | Async `params` migration                                                                          |

---

## Chunk 1: Package Versions + Node.js Requirements

### Task 1: Run the official codemod

The codemod handles: async params, `next lint` → eslint CLI script, `experimental.turbopack` → `turbopack`, `experimental_ppr` removal. Run it first to get its automatic fixes, then apply manual fixes on top.

**Files:**

- Modify: `package.json` (versions bumped automatically)
- Modify: various (codemod auto-migrates async APIs)

- [ ] **Step 1: Run the upgrade codemod**

```bash
npx @next/codemod@canary upgrade latest
```

When prompted, confirm upgrading to the latest version. The codemod will:

- Update `next`, `react`, `react-dom`, `@types/react`, `@types/react-dom` in `package.json`
- Migrate sync `params`/`searchParams` to async in any page files it finds
- Remove `--turbopack` from scripts (redundant now)
- Migrate any `unstable_` prefix APIs

> **Note:** The codemod may not update `@next/eslint-plugin-next`. Check this in the next step.

- [ ] **Step 2: Verify package versions after codemod**

Open `package.json` and confirm these exact or newer versions:

```json
{
  "next": "^16.1.6",
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@next/eslint-plugin-next": "^16"
}
```

If `@next/eslint-plugin-next` is still `^15.x`, run:

```bash
npm install --save-dev @next/eslint-plugin-next@latest
```

- [ ] **Step 3: Run npm install to apply package changes**

```bash
npm install
```

Expected: clean install, no peer dependency errors.

- [ ] **Step 4: Commit checkpoint**

```bash
git add package.json package-lock.json
git commit -m "chore: upgrade to Next.js 16 via codemod"
```

---

### Task 2: Fix Node.js version requirements

Node.js 18 is no longer supported in Next.js 16. The project must declare Node 20+ for local dev and Vercel.

**Files:**

- Create: `.nvmrc`
- Modify: `vercel.json`
- Modify: `.gitignore`

- [ ] **Step 1: Create `.nvmrc`**

Create `.nvmrc` in the project root:

```
20
```

This tells nvm (and Vercel's automatic detection) to use Node 20.

- [ ] **Step 2: Add Node engine to `vercel.json`**

Open `vercel.json`. Add `"engines"` at the top level (alongside `"redirects"` and `"headers"`):

```json
{
  "engines": {
    "node": "20.x"
  },
  "redirects": [ ... ],
  "headers": [ ... ]
}
```

> **Vercel note:** This tells Vercel to use Node 20 runtime for the build and serverless functions. Without this, Vercel may still use Node 18 and the build will fail.

- [ ] **Step 3: Add `.next/dev` to `.gitignore`**

Open `.gitignore` and add `.next/dev` below the existing `.next` entry:

```
# Next.js
.next/
.next/dev
```

> **Why:** Next.js 16 separates dev and build output into `.next/dev` and `.next/` respectively. The dev directory shouldn't be committed.

- [ ] **Step 4: Commit**

```bash
git add .nvmrc vercel.json .gitignore
git commit -m "chore: pin Node.js 20 for Next.js 16 compatibility"
```

---

## Chunk 2: Webpack/Turbopack Conflict Resolution

### Task 3: Resolve the webpack config + Turbopack build conflict

**This is the most critical change.** Next.js 16 makes Turbopack the default for both `next dev` AND `next build`. If a project has a `webpack()` callback in `next.config.ts`, `next build` will **hard-fail** with an error like:

```
Error: You have a custom webpack configuration that is not compatible with Turbopack...
```

The current webpack config in this project only sets memory cache for production builds:

```ts
webpack(config, { dev }) {
  if (!dev && config.cache) {
    config.cache = Object.freeze({ type: 'memory' });
  }
  return config;
}
```

This was a workaround for large webpack builds. With Turbopack, this is irrelevant — Turbopack manages its own caching separately. **Safe to remove.**

**Files:**

- Modify: `next.config.ts`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Remove the `webpack` callback from `next.config.ts`**

Open `next.config.ts`. Find and remove the entire `webpack` function:

**Remove this block** (lines ~160–166):

```ts
webpack(config, { dev }) {
  if (!dev && config.cache) {
    config.cache = Object.freeze({ type: 'memory' });
  }
  return config;
},
```

Also remove the unused import at the top if the codemod left one:

```ts
// Remove if present — no longer needed:
import type { Redirect } from 'next/dist/lib/load-custom-routes';
```

> **Keep this import** (still needed for redirects):
>
> ```ts
> import type { Redirect } from 'next/dist/lib/load-custom-routes';
> ```
>
> Only remove if it becomes unused after the webpack removal. Run `npm run lint` to check.

- [ ] **Step 2: Clean up the `dev` script in `package.json`**

The `--turbopack` flag is now redundant (Turbopack is the default). Update `package.json` scripts:

**Before:**

```json
"dev": "next dev --turbopack",
"build": "next build",
```

**After:**

```json
"dev": "next dev",
"build": "next build",
```

> **Why remove `--turbopack` from dev?** It's now the default. Keeping it is harmless but misleading.
> **Why keep plain `next build`?** With webpack config removed, Turbopack will be used by default and succeed.

- [ ] **Step 3: Verify `next.config.ts` has no TypeScript errors**

```bash
npm run lint
```

Expected: zero errors. If the `Redirect` import is now unused, remove that import too.

- [ ] **Step 4: Commit**

```bash
git add next.config.ts package.json
git commit -m "fix: remove webpack config to unblock Turbopack build in Next.js 16"
```

---

## Chunk 3: Async Params Migration

### Task 4: Migrate sync params to async in dynamic route pages

Next.js 16 **fully removes** synchronous `params` access. The temporary compatibility shim from v15 is gone. Three files need manual migration (the codemod from Task 1 may have already handled some or all of these — **check before editing**).

**Affected files:**

- `app/(pl)/realizacje/[slug]/page.tsx`
- `app/(pl)/edukacja/[category]/[slug]/page.tsx`
- `app/(pl)/edukacja/[category]/page.tsx`

**Pattern to apply:**

```tsx
// ❌ Before (v15 — synchronous params)
type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps) {
  const slug = params.slug;   // sync access
  ...
}

export default function Page({ params }: PageProps) {
  const slug = params.slug;   // sync access
  ...
}

// ✅ After (v16 — async params)
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;   // async
  ...
}

export default async function Page({ params }: PageProps) {  // note: must be async
  const { slug } = await params;   // async
  ...
}
```

---

#### 4a — `app/(pl)/realizacje/[slug]/page.tsx`

- [ ] **Step 1: Check if codemod already migrated this file**

Open `app/(pl)/realizacje/[slug]/page.tsx` and look at line ~462:

```ts
type PageProps = { params: { slug: string } };
```

If it already reads `params: Promise<{ slug: string }>`, the codemod handled it — skip to Task 4b.

- [ ] **Step 2: Update the `PageProps` type**

Find:

```ts
type PageProps = { params: { slug: string } };
```

Replace with:

```ts
type PageProps = { params: Promise<{ slug: string }> };
```

- [ ] **Step 3: Update `generateMetadata` to await params**

Find:

```ts
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject(params.slug);
```

Replace with:

```ts
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
```

Also update the rest of `generateMetadata` that uses `params.slug`:

```ts
// Before:
const canonicalPath = project.seo?.canonical || toAbsoluteUrl(`/realizacje/${params.slug}`);

// After:
const canonicalPath = project.seo?.canonical || toAbsoluteUrl(`/realizacje/${slug}`);
```

- [ ] **Step 4: Update the page component to await params**

Find:

```ts
export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);
```

Replace with:

```ts
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
```

Update any remaining `params.slug` references in the function body to `slug`.

Also update the `Breadcrumbs` and other places using `params.slug` — look for every occurrence in the file below the function signature.

- [ ] **Step 5: Run TypeScript check**

```bash
npx tsc --noEmit 2>&1 | grep "realizacje"
```

Expected: no errors for this file.

---

#### 4b — `app/(pl)/edukacja/[category]/[slug]/page.tsx`

- [ ] **Step 1: Check if codemod already migrated this file**

Open `app/(pl)/edukacja/[category]/[slug]/page.tsx` and look at line ~281:

```ts
export async function generateMetadata({ params }: { params: { category: string; slug: string } });
```

If it already reads `Promise<{...}>`, the codemod handled it — skip to Task 4c.

- [ ] **Step 2: Update both function signatures and params access**

Find the `generateMetadata` signature:

```ts
export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const article = findArticleBySlug(params.slug);
```

Replace with:

```ts
export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticleBySlug(slug);
```

- [ ] **Step 3: Update the page component**

Find:

```ts
export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const article = findArticleBySlug(params.slug);
  ...
  if (params.category !== canonicalCat) {
    permanentRedirect(`/edukacja/${canonicalCat}/${article.slug}`);
  }
```

Replace with:

```ts
export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { slug, category } = await params;
  const article = findArticleBySlug(slug);
  ...
  if (category !== canonicalCat) {
    permanentRedirect(`/edukacja/${canonicalCat}/${article.slug}`);
  }
```

Update all remaining `params.slug` → `slug` and `params.category` → `category` in the function body.

- [ ] **Step 4: Run TypeScript check**

```bash
npx tsc --noEmit 2>&1 | grep "edukacja"
```

Expected: no errors for these files.

---

#### 4c — `app/(pl)/edukacja/[category]/page.tsx`

- [ ] **Step 1: Check if codemod already migrated this file**

Open `app/(pl)/edukacja/[category]/page.tsx` and look at the `generateMetadata` signature (~line 120). If it already uses `Promise<{...}>`, skip to Task 5.

- [ ] **Step 2: Update `generateMetadata`**

Find:

```ts
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cats = getCategoriesWithCount();
  const current = cats.find((c) => c.slug === params.category);
  const label = current?.label || params.category.replace(/-/g, ' ');
  const url = `${siteUrl}/edukacja/${params.category}`;
  const content = CATEGORY_CONTENT_BY_SLUG[params.category];
```

Replace with:

```ts
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cats = getCategoriesWithCount();
  const current = cats.find((c) => c.slug === category);
  const label = current?.label || category.replace(/-/g, ' ');
  const url = `${siteUrl}/edukacja/${category}`;
  const content = CATEGORY_CONTENT_BY_SLUG[category];
```

Update all remaining `params.category` → `category` in the rest of `generateMetadata`.

- [ ] **Step 3: Update the page component**

Find the page component's function signature and its use of `params.category`. Apply the same pattern: change to `async`, await params, destructure `category`, replace all `params.category` with `category`.

- [ ] **Step 4: Run full TypeScript check**

```bash
npx tsc --noEmit
```

Expected: zero type errors.

- [ ] **Step 5: Commit all async params changes**

```bash
git add "app/(pl)/realizacje/[slug]/page.tsx" "app/(pl)/edukacja/[category]/[slug]/page.tsx" "app/(pl)/edukacja/[category]/page.tsx"
git commit -m "fix: migrate params to async for Next.js 16 compatibility"
```

---

## Chunk 4: Build Verification

### Task 5: Run the build and fix any remaining errors

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: zero errors. Fix any errors before proceeding. Common issues after upgrade:

- Unused imports from removed webpack config
- Type issues from async params migration

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

Expected output (with Turbopack):

```
   ▲ Next.js 16.x (Turbopack)
 ✓ Compiled successfully
 ✓ Finished TypeScript
 ✓ Collecting page data
 ✓ Generating static pages (xxx/xxx)
 ✓ Finalizing page optimization
```

If the build fails, check the error:

- **"webpack configuration found"** → the webpack callback is still present; go back to Task 3 Step 1
- **"params is not a Promise"** type error → go back to Task 4 for the specific file
- **"Cannot find module"** → run `npm install` again
- **Node.js version error** → ensure your local Node is 20+: `node --version`

- [ ] **Step 3: Run postbuild scripts to verify sitemap generation still works**

```bash
npm run postbuild
```

Expected: next-sitemap runs, generates `public/sitemap-0.xml`, then the split script processes it. No errors.

> **Note:** The `next-sitemap.config.cjs` is a protected file — do NOT modify it. If next-sitemap fails, check that `public/` is writable and the build output is present.

- [ ] **Step 4: Commit the final verification**

```bash
git add -A
git commit -m "chore: verify Next.js 16 upgrade build passes"
```

---

## Quick Reference: Full Change Summary

### `package.json` — version bumps (Task 1)

```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.2.1",
    "react-dom": "^19.2.1"
  },
  "devDependencies": {
    "@next/eslint-plugin-next": "^16",
    "@types/react": "^19",
    "@types/react-dom": "^19"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
```

### `next.config.ts` — remove webpack callback (Task 3)

Remove the entire `webpack(config, { dev }) { ... }` block at the bottom of `nextConfig`.

### `.nvmrc` — new file (Task 2)

```
20
```

### `vercel.json` — add engines (Task 2)

```json
{ "engines": { "node": "20.x" }, ... }
```

### `.gitignore` — add dev output (Task 2)

```
.next/dev
```

### 3 dynamic route pages (Task 4)

- `params: { slug: string }` → `params: Promise<{ slug: string }>`
- `function Page({params})` → `async function Page({params})`
- `params.slug` → `const { slug } = await params; ... slug`

---

## Optionals (not required for v16 compatibility)

These are improvements Next.js 16 makes available but are **not breaking changes** — skip them for now and handle in a separate PR if desired:

| Feature                     | How to enable                                                               | Benefit                                         |
| --------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------- |
| Turbopack FS cache          | Add `experimental.turbopackFileSystemCacheForDev: true` to `next.config.ts` | Faster `next dev` restarts for large repos      |
| React Compiler              | Install `babel-plugin-react-compiler`, add `reactCompiler: true` to config  | Auto memoization — but increases build time     |
| Cache Components            | Add `cacheComponents: true` to config                                       | PPR successor — opt-in, not required            |
| `updateTag()` / `refresh()` | New server action APIs                                                      | Only relevant if Server Actions caching is used |
