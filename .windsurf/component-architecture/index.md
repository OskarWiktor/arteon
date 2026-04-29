# Skill: arteon-component-architecture

Architektura komponentów React/Next.js w projekcie Arteon Agency.

## Component Structure

```
components/
├── ui/                    # Reusable UI components (design system)
├── sections/tools/        # Tool components + ToolPageRenderer + DynamicToolRenderer
├── shared/                # Nav, Footer, Breadcrumbs
└── sections/[section]/   # Landing page sections (hero, features, etc.)
```

## UI Components (Design System)

**Location:** `components/ui/`

**Design tokens:**

```css
--primary: #1b2632; /* Deep navy */
--accent: #ffb162; /* Gold */
--background: #f5f5f5;
```

**Usage rules:**

- Text colors: `.text-light`, `.text-mid`, `.text-dark` (NEVER `text-gray-*` or raw hex)
- Icon color: always `text-[#1b2632]`
- Content hierarchy: `<h2 class="h3">` for title, `<h3 class="h5">` for subtitle
- Badge component: unified pill component (no Tag component)
- Icons: ONLY `react-icons/ri` (never `lucide-react`)

**Key components:**

- `Button` - Primary/secondary/outline variants
- `Input` - Form inputs with validation states
- `Card` - Content cards with consistent padding/spacing
- `Badge` - Unified pill component
- `Modal` - Overlay dialogs
- `LoadingSpinner` - Loading states
- `Breadcrumbs` - Navigation breadcrumbs

## Tool Components Architecture

**Flow:** `page.tsx` → `ToolPageRenderer` → `DynamicToolRenderer` → specific component

**Core files:**

- `ToolPageRenderer.tsx` - Layout, SEO, content blocks
- `DynamicToolRenderer.tsx` - Dynamic component loader
- `FormatPicker/` - Tool-specific format selection
- `converters/` - 64 individual converter wrappers
- `unit-wrappers/` - 17 unit converter wrappers

**Tool data flow:**

```typescript
Tool page request
  → app/{locale}/tools/{slug}/page.tsx
    → ToolPageRenderer (layout, SEO, content blocks)
      → DynamicToolRenderer (dynamic component loader)
        → Specific tool component
```

## Shared Components

**Location:** `components/shared/`

**Key components:**

- `Navigation.tsx` - Main navigation with locale switching
- `Footer.tsx` - Site footer with links
- `LanguageSwitcher.tsx` - Locale selector
- `Breadcrumbs.tsx` - Navigation breadcrumbs
- `ContactForm.tsx` - Contact form component

## Component Best Practices

### File Naming

- React components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Data services: `camelCaseDataService.ts`
- Utilities: `camelCase.ts`

### Type Safety

```typescript
// Props interfaces
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

// Generic components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}
```

### Server vs Client Components (Next.js 16.1.6)

- **Server Components:** Data fetching, SEO, static content (default pattern)
- **Client Components:** Interactivity, state, browser APIs (use `'use client'` sparingly)
- **React 19.2.4:** No more `forwardRef` needed for ref forwarding
- **Async patterns:** All `params`, `searchParams` must be awaited
- **Cache Components:** Use `'use cache'` directive for data caching (Next.js 16)

```typescript
// ✅ Server Component - No client JS (Next.js 16)
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Must await in Next.js 16
  const tool = await getToolData('pl', slug);

  return (
    <div>
      <h1>{tool.metadata.title}</h1>
      <ToolComponent tool={tool} />
    </div>
  );
}

// ✅ Client Component with React 19 ref forwarding
function Button({ children, ref, ...props }: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  return <button ref={ref} {...props}>{children}</button>;
}

// ❌ Avoid unnecessary client components
'use client'; // Only when truly needed
```

### Performance Patterns (Next.js 16.1.6 + React 19.2.4)

- **React Compiler:** Auto-optimizations enabled in next.config.ts
- **Dynamic imports:** For heavy components with `React.lazy()` + `Suspense`
- **React.cache:** For data deduplication (replaces manual memoization)
- **Cache Components:** New `'use cache'` directive for data caching
- **Parallel fetching:** Use `Promise.all()` to avoid waterfalls
- **Proper key props:** For list rendering optimization

```typescript
// ✅ React 19 + Next.js 16 patterns
import { cache } from 'react';

// Data deduplication with React.cache
export const getToolData = cache(async (locale: string, slug: string) => {
  const response = await fetch(`${API_BASE}/tools/${locale}/${slug}`);
  return response.json();
});

// Cache Components for data caching
async function getPopularTools() {
  'use cache';
  cacheLife('hours');

  const tools = await db.tool.findMany({
    where: { isPopular: true },
    orderBy: { usage: 'desc' },
    take: 10,
  });

  return tools;
}

// Dynamic imports with React 19
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

// Parallel fetching
const [user, tools, analytics] = await Promise.all([
  getUser(),
  getTools(),
  getAnalytics()
]);
```

## Tool-Specific Patterns

### Converter Components

```typescript
interface ConverterProps {
  inputFormat: string;
  outputFormat: string;
  onConvert: (input: string) => string;
}

// Example: ImageFormatConverter
const ImageFormatConverter = ({ inputFormat, outputFormat, onConvert }: ConverterProps) => {
  // Component logic
};
```

### Format Picker

```typescript
interface FormatPickerProps {
  availableFormats: string[];
  selectedFormat: string;
  onFormatChange: (format: string) => void;
}
```

## Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints
- Fluid typography
- Container queries where appropriate

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Testing Strategy

- Unit tests for utility functions
- Integration tests for components
- Visual regression testing for UI
- Accessibility testing with axe-core

## Icon Management

**ONLY use `react-icons/ri`:**

```typescript
import { RiArrowRightSLine, RiDownloadLine } from 'react-icons/ri';
```

**NEVER use `lucide-react`** - forbidden in project.

## State Management

- Local state with `useState`/`useReducer`
- Server state with Server Components
- Form state with controlled components
- Global state only when necessary

## Error Handling

- Error boundaries for component trees
- Graceful fallbacks
- User-friendly error messages
- Proper logging for debugging

## Component Documentation

Each component should include:

- Props interface with JSDoc
- Usage examples
- Accessibility notes
- Performance considerations
