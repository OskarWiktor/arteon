---
name: arteon-ui
description: >
  Comprehensive UI/UX system for Arteon Agency - components, accessibility (WCAG 2.1 AA),
  responsive design, loading states, error handling, user flows, mobile-first.
  Combines 4 skills into one deep-dive knowledge base.
---

# Skill: arteon-ui

Kompletny system UI/UX dla Arteon Agency — komponenty, accessibility, responsive design.

**Łączy:** arteon-ai-ux-intelligence, arteon-component-intelligence, arteon-accessibility, arteon-user-intelligence

## Kiedy używać

- Projektowanie UI komponentów
- Implementacja accessibility (WCAG 2.1 AA)
- Loading states, error handling
- Mobile-first responsive design
- User flows, conversion optimization
- Code review UI

---

# CZĘŚĆ 1: COMPONENT STRUCTURE

## Folder Structure

```
components/
├── ui/                    # Reusable primitives
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Modal.tsx
├── sections/              # Page sections
│   ├── HeroBanner.tsx
│   ├── FaqPanels.tsx
│   └── tools/            # 92 tool components
├── shared/                # Shared across pages
│   ├── navigation/
│   └── Footer.tsx
├── pages/                 # Page-specific
└── systems/               # System components
    ├── FocusManager.tsx
    └── RouteAnnouncer.tsx
```

## Server Component Template

```tsx
interface FeatureProps {
  title: string;
  items: string[];
}

export function Feature({ title, items }: FeatureProps) {
  return (
    <section className='py-16'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <ul className='mt-8 space-y-4'>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
```

## Client Component Template

```tsx
'use client';

import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
```

## Props Conventions

```tsx
// Boolean: is/has prefix
interface ModalProps {
  isOpen: boolean;
  hasCloseButton?: boolean;
}

// Handlers: on* prefix
interface ButtonProps {
  onClick?: () => void;
}

// Children
interface CardProps {
  children: React.ReactNode;
}

// Defaults
export function Button({ variant = 'primary', size = 'md' }: ButtonProps) {
  // ...
}
```

---

# CZĘŚĆ 2: STYLING

## Tailwind + cn()

```tsx
import { cn } from '@/utils/cn';

<button
  className={cn(
    'px-4 py-2 rounded-md',
    variant === 'primary' && 'bg-brand text-white',
    disabled && 'opacity-50'
  )}
>
```

## Brand Colors (Tailwind v4)

```css
/* Brand colors */
--color-brand: oklch(0.65 0.24 145);
--color-brand-dark: oklch(0.55 0.24 145);

/* Semantic */
--color-success: oklch(0.72 0.19 142);
--color-error: oklch(0.63 0.24 25);
--color-warning: oklch(0.8 0.18 85);
```

## Typography Scale

| Class       | Size  | Use case         |
| ----------- | ----- | ---------------- |
| `text-xs`   | 12px  | Captions, labels |
| `text-sm`   | 14px  | Secondary text   |
| `text-base` | 16px  | Body text        |
| `text-lg`   | 18px  | Lead paragraphs  |
| `text-xl`   | 20px  | Card titles      |
| `text-2xl`  | 24px  | Section headings |
| `text-3xl+` | 30px+ | Page titles      |

---

# CZĘŚĆ 3: ICONS

## Project Standard: Remix Icons

```tsx
// ✅ Use react-icons/ri (Remix Icons)
import { RiHomeLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

// ❌ Don't use lucide-react (not project standard)
import { Home } from 'lucide-react';

// ❌ Don't use emoji as icons
<button>🔧</button>;
```

## Icon Button Pattern

```tsx
// Icon buttons MUST have aria-label
<button aria-label='Zamknij menu' className='min-h-11 min-w-11 p-3'>
  <RiCloseLine className={normalIconSizeClasses} />
</button>
```

---

# CZĘŚĆ 4: RESPONSIVE DESIGN

## Breakpoints (Tailwind v4)

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Wide screens */
```

## Mobile-First Approach

```tsx
// ✅ Correct - mobile first
<div className="flex flex-col md:flex-row">
  <aside className="w-full md:w-64">Sidebar</aside>
  <main className="flex-1">Content</main>
</div>

// ❌ Wrong - desktop first
<div className="flex flex-row md:flex-col">
```

## Mobile Patterns

### Sticky Header

```tsx
<header className='sticky top-0 z-50 bg-white/80 backdrop-blur-sm'>
  <nav>...</nav>
</header>
```

### Bottom Sheet

```tsx
<div className='fixed inset-x-0 bottom-0 rounded-t-2xl bg-white p-4 shadow-lg md:hidden'>
  <div className='mx-auto mb-4 h-1 w-12 rounded-lg bg-gray-300' />
  {/* Content */}
</div>
```

### Horizontal Scroll

```tsx
<div className='snap-x snap-mandatory overflow-x-auto'>
  {items.map(item => (
    <div key={item.id} className='min-w-full snap-center'>
      {item.content}
    </div>
  ))}
</div>
```

---

# CZĘŚĆ 5: LOADING STATES

## Button Loading

```tsx
function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button disabled={pending} aria-busy={pending} className='btn'>
      {pending ? (
        <>
          <Spinner className='mr-2 animate-spin' />
          Przetwarzanie...
        </>
      ) : (
        'Wyślij'
      )}
    </button>
  );
}
```

## Skeleton Loading

```tsx
function CardSkeleton() {
  return (
    <div className='animate-pulse'>
      <div className='h-48 rounded-t-lg bg-neutral-200' />
      <div className='space-y-3 p-4'>
        <div className='h-4 w-3/4 rounded bg-neutral-200' />
        <div className='h-3 w-1/2 rounded bg-neutral-200' />
      </div>
    </div>
  );
}
```

## Page Loading (Next.js)

```tsx
// app/(pl)/narzedzia/loading.tsx
import { ToolPageSkeleton } from '@/components/ui/skeletons';

export default function Loading() {
  return <ToolPageSkeleton />;
}
```

## Progress Indicators

```tsx
// Determinate progress
<progress value={75} max={100} className="progress">
  75%
</progress>

// Indeterminate (spinner)
<div className="animate-spin h-5 w-5 border-2 border-brand border-t-transparent rounded-lg" />
```

---

# CZĘŚĆ 6: ERROR HANDLING UI

## Form Validation

```tsx
function EmailInput({ error }: { error?: string }) {
  return (
    <div>
      <label htmlFor='email' className='block text-sm font-medium'>
        Email
      </label>
      <input
        id='email'
        type='email'
        className={cn('input', error && 'border-red-500 focus:ring-red-500')}
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
      />
      {error && (
        <p id='email-error' role='alert' className='mt-1 text-sm text-red-600'>
          {error}
        </p>
      )}
    </div>
  );
}
```

## Error Boundary

```tsx
// app/(pl)/error.tsx
'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className='py-20 text-center'>
      <h1 className='text-2xl font-bold'>Coś poszło nie tak</h1>
      <p className='mt-2 text-gray-600'>{error.message}</p>
      <button onClick={reset} className='btn mt-4'>
        Spróbuj ponownie
      </button>
    </div>
  );
}
```

## Empty State

```tsx
function EmptyState({ message }: { message: string }) {
  return (
    <div className='py-12 text-center'>
      <RiFileSearchLine className='mx-auto h-12 w-12 text-gray-400' />
      <p className='mt-4 text-gray-600'>{message}</p>
    </div>
  );
}
```

---

# CZĘŚĆ 7: ACCESSIBILITY (WCAG 2.1 AA)

## Color Contrast Requirements

| Element                          | Min ratio |
| -------------------------------- | --------- |
| Normal text (<18px)              | 4.5:1     |
| Large text (≥18px or ≥14px bold) | 3:1       |
| UI components, graphics          | 3:1       |

```tsx
// Use WCAG contrast checker tool
// /narzedzia/sprawdzanie-kontrastu-kolorow-wcag
```

## Focus Indicators

```tsx
// ✅ Visible focus ring
<button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
  Click me
</button>

// ❌ Never remove focus indicator entirely
<button className="focus:outline-none">
  Invisible focus - BAD
</button>
```

## Skip Links

```tsx
// components/shared/SkipToContent.tsx
<a
  href="#main"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
>
  Przejdź do treści
</a>

// In layout
<main id="main">
  {children}
</main>
```

## ARIA Labels

### Icon Buttons

```tsx
// ✅ Labeled
<button aria-label="Zamknij menu">
  <RiCloseLine />
</button>

// ❌ No label - screen readers can't describe
<button>
  <RiCloseLine />
</button>
```

### Form Inputs

```tsx
// ✅ Associated label
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ Or aria-label
<input aria-label="Wyszukaj" type="search" />

// ❌ No label - just placeholder is not enough
<input type="email" placeholder="Email" />
```

### Loading States

```tsx
<button aria-busy={isLoading} aria-disabled={isLoading} disabled={isLoading}>
  {isLoading ? 'Ładowanie...' : 'Wyślij'}
</button>
```

### Expandable Content

```tsx
<button
  aria-expanded={isOpen}
  aria-controls="panel-1"
  onClick={() => setIsOpen(!isOpen)}
>
  FAQ Question
</button>
<div id="panel-1" hidden={!isOpen}>
  Answer content...
</div>
```

## Keyboard Navigation

```tsx
// All interactive elements must be focusable
<button>Accessible</button>
<a href="/page">Accessible</a>
<input type="text" />

// Custom interactive elements need tabIndex + key handler
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  onClick={handleClick}
>
  Custom button
</div>
```

## Focus Management (Modals)

```tsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      tabIndex={-1}
      onKeyDown={e => e.key === 'Escape' && onClose()}
    >
      <h2 id='modal-title'>Modal Title</h2>
      {children}
    </div>
  );
}
```

## Screen Reader Support

```tsx
// Visually hidden text
<span className="sr-only">Otwórz w nowym oknie</span>

// Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {message && <p>{message}</p>}
</div>

// Urgent alerts
<div role="alert">
  Błąd: Nieprawidłowy email
</div>
```

## Touch Targets

```tsx
// ✅ Minimum 44x44px
<button className="min-h-11 min-w-11 p-3">
  <RiMenuLine className="w-6 h-6" />
</button>

// ❌ Too small
<button className="p-1">
  <RiMenuLine />
</button>
```

---

# CZĘŚĆ 8: HOVER & INTERACTION

## Cursor Pointer

```tsx
// ✅ Always add cursor-pointer to clickable elements
<div onClick={handleClick} className='cursor-pointer hover:bg-gray-50'>
  Card content
</div>
```

## Stable Hover States

```tsx
// ✅ Hover states should NOT shift layout
<button className="hover:bg-brand/10 transition-colors">
  Stable hover
</button>

// ❌ Scale transforms shift layout
<button className="hover:scale-105">
  Unstable hover - causes CLS
</button>
```

## Transitions

```tsx
// Smooth transitions (150-300ms)
<button className='hover:bg-brand/10 transition-colors duration-200'>Smooth</button>
```

## Light Mode Contrast

```tsx
// ✅ Sufficient contrast in light mode
<div className="bg-white/80 border border-gray-200">
  <p className="text-gray-900">Visible text</p>
  <p className="text-gray-600">Muted text (still readable)</p>
</div>

// ❌ Too transparent, invisible borders
<div className="bg-white/10 border border-white/10">
  <p className="text-gray-400">Too light</p>
</div>
```

---

# CZĘŚĆ 9: USER FEEDBACK

## Toast Notifications

```tsx
// Success
toast.success('Plik został przekonwertowany');

// Error
toast.error('Nie udało się przesłać pliku');

// Info
toast.info('Przetwarzanie może potrwać kilka sekund');
```

## Copy to Clipboard

```tsx
function ButtonCopy({ text }: { text: string }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button onClick={() => copy(text)} className='btn-icon'>
      {copied ? <RiCheckLine className='text-green-500' /> : <RiFileCopyLine />}
    </button>
  );
}
```

---

# CZĘŚĆ 10: USER FLOWS

## Tool Usage Flow

```
1. User lands on tool page
   ↓
2. Sees hero + tool description
   ↓
3. Uses tool (upload, input, generate)
   ↓
4. Gets result (preview, download)
   ↓
5. Optional: explores related tools (carousel)
   ↓
6. Optional: contacts for services (CTA)
```

## Key Pages

| Page                | Purpose     | Goal                      |
| ------------------- | ----------- | ------------------------- |
| `/`                 | Landing     | Showcase tools + services |
| `/narzedzia`        | Tools index | Tool discovery            |
| `/narzedzia/{tool}` | Tool page   | Tool usage                |
| `/uslugi/*`         | Services    | Lead generation           |
| `/kontakt`          | Contact     | Conversion                |
| `/edukacja`         | Blog        | SEO, trust                |

## UX Principles

### Tool Pages

1. **Immediate value** - Tool usable without scrolling
2. **Clear instructions** - HowTo schema steps
3. **Fast feedback** - Loading states, progress
4. **Easy export** - Download/copy buttons
5. **Related tools** - Carousel for discovery

### Service Pages

1. **Benefit-first** - What client gets
2. **Process clarity** - How we work
3. **Social proof** - Testimonials, cases
4. **Easy contact** - Multiple CTAs

---

# CZĘŚĆ 11: ANALYTICS EVENTS

```typescript
// Tool usage
trackEvent('tool_used', {
  tool_name: 'color-palette-generator',
  locale: 'pl',
});

// Conversion
trackEvent('form_submit', {
  form_type: 'contact',
  source: 'tool_page',
});

// Engagement
trackEvent('cta_click', {
  cta_text: 'Skontaktuj się',
  page: '/narzedzia/generator-palety',
});
```

---

# CZĘŚĆ 12: CHECKLISTS

## Component Checklist

- [ ] TypeScript interface for props
- [ ] Default values where sensible
- [ ] `'use client'` only if needed
- [ ] React Icons (ri) for icons
- [ ] Accessible (ARIA, keyboard)
- [ ] Responsive (mobile-first)

## Visual Quality Checklist

- [ ] No emoji used as icons (use react-icons/ri)
- [ ] All icons from Remix Icons (ri)
- [ ] Hover states don't cause layout shift
- [ ] Transitions are smooth (150-300ms)

## Interaction Checklist

- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide visual feedback
- [ ] Focus states visible for keyboard nav
- [ ] Touch targets ≥44x44px

## Accessibility Checklist

- [ ] Color contrast 4.5:1 minimum for text
- [ ] ARIA labels on icon-only buttons
- [ ] Form inputs have labels
- [ ] `prefers-reduced-motion` respected
- [ ] Skip link to main content
- [ ] Logical heading hierarchy (h1 → h2 → h3)

## Performance UX Checklist

- [ ] LCP image preloaded
- [ ] Skeleton loading for slow content
- [ ] No layout shift (CLS < 0.1)
- [ ] Loading states for async operations

---

# QUICK REFERENCE

## Testing Accessibility

```bash
# Axe DevTools (Chrome extension)
# VoiceOver (Mac): Cmd+F5
# NVDA (Windows): Free screen reader
# Keyboard only: Tab through page
```

## System Components

| File                                    | Purpose          |
| --------------------------------------- | ---------------- |
| `components/shared/SkipToContent.tsx`   | Skip link        |
| `components/systems/FocusManager.tsx`   | Focus management |
| `components/systems/RouteAnnouncer.tsx` | Route changes    |

## Color Contrast

| Element       | Min ratio |
| ------------- | --------- |
| Normal text   | 4.5:1     |
| Large text    | 3:1       |
| UI components | 3:1       |
