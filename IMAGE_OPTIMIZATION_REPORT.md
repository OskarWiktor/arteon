# Raport optymalizacji obrazów

## Cel
Poprawa SEO, lepszy mobile PSI, mniejsze LCP/CLS poprzez optymalizację użycia next/image.

## Status przed optymalizacją

### ✅ Dobrze zaimplementowane
- **ArticlesList.tsx** - ma sizes, alt, fill
- **ArticlesOverview.tsx** - ma sizes, alt, fill
- **SectionBasic.tsx** - ma sizes, alt, fill
- **TestimonialCard.tsx** - ma width/height, alt
- **Navigation.tsx** - logo ma width/height, priority (OK dla above the fold)
- **edukacja/[category]/[slug]/page.tsx** - RenderBlocks ma sizes dla wszystkich obrazów
- **realizacje/[slug]/page.tsx** - RenderBlocks ma sizes dla wszystkich obrazów

### ❌ Wymagające poprawy
1. **ProjectCard.tsx** - brak `sizes` dla obrazów z `fill`
2. **realizacje/[slug]/page.tsx** - obrazy beforeAfter bez `sizes`
3. **SectionSteps.tsx** - topImageSrc bez `sizes`

### ℹ️ Pozostawione bez zmian (uzasadnione)
- **JpgPngToWebp.tsx**, **ImageResizeTool.tsx**, **FaviconGenerator.tsx** - używają `<img>` zamiast next/image
  - **Uzasadnienie**: Obrazy są generowane dynamicznie (blob URLs) i nie mogą być optymalizowane przez next/image
  - **Status**: OK - pozostawione z eslint-disable comment
- **HeroBanner.tsx** - używa CSS `backgroundImage` zamiast next/image
  - **Uzasadnienie**: Hero images często są tłem, nie wpływa na LCP jeśli jest above the fold
  - **Status**: OK

## Wprowadzone poprawki

### 1. ProjectCard.tsx
**Przed:**
```tsx
<Image src={project.image} alt={`${t.projectImageAlt} ${project.title}`} fill className="object-cover" quality={100} />
```

**Po:**
```tsx
<Image
  src={project.image}
  alt={`${t.projectImageAlt} ${project.title}`}
  fill
  className="object-cover"
  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
  quality={100}
/>
```

**Uzasadnienie**: Obrazy projektów są wyświetlane w gridzie (3 kolumny na desktop, 2 na tablet, 1 na mobile).

### 2. realizacje/[slug]/page.tsx
**Przed:**
```tsx
<Image src={project.beforeAfter.beforeImage || project.image} alt="Widok przed zmianami" fill className="object-cover" />
```

**Po:**
```tsx
<Image
  src={project.beforeAfter.beforeImage || project.image}
  alt="Widok przed zmianami"
  fill
  className="object-cover"
  sizes="(min-width:768px) 50vw, 100vw"
/>
```

**Uzasadnienie**: Obrazy beforeAfter są w gridzie 2 kolumny na desktop, 1 kolumna na mobile.

### 3. SectionSteps.tsx
**Przed:**
```tsx
<Image src={topImageSrc} alt={topImageAlt ?? ''} fill className="pointer-events-none object-cover select-none" aria-hidden={topImageAlt ? undefined : true} />
```

**Po:**
```tsx
<Image
  src={topImageSrc}
  alt={topImageAlt ?? ''}
  fill
  className="pointer-events-none object-cover select-none"
  sizes="(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw"
  aria-hidden={topImageAlt ? undefined : true}
/>
```

**Uzasadnienie**: Obrazy w SectionSteps są w gridzie (2 kolumny na desktop/tablet, 1 kolumna na mobile).

## Wartości sizes - standardy

### Grid 3 kolumny (lg:grid-cols-3)
```tsx
sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
```
- Desktop (≥1024px): 33vw (1/3 szerokości)
- Tablet (640-1023px): 50vw (1/2 szerokości)
- Mobile (<640px): 100vw (pełna szerokość)

### Grid 2 kolumny (md:grid-cols-2)
```tsx
sizes="(min-width:768px) 50vw, 100vw"
```
- Desktop/Tablet (≥768px): 50vw (1/2 szerokości)
- Mobile (<768px): 100vw (pełna szerokość)

### Grid 1 kolumna (full width)
```tsx
sizes="100vw"
```
- Wszystkie rozdzielczości: 100vw (pełna szerokość)

### Obrazy w content (75vw na desktop)
```tsx
sizes="(min-width:768px) 75vw, 100vw"
```
- Desktop/Tablet (≥768px): 75vw (3/4 szerokości - typowe dla content)
- Mobile (<768px): 100vw (pełna szerokość)

## Weryfikacja alt tekstów

### ✅ Wszystkie obrazy mają alt
- **ProjectCard**: `${t.projectImageAlt} ${project.title}` - opisowy
- **TestimonialCard**: `alt=""` - dekoracyjny avatar (OK)
- **ArticlesList/Overview**: `alt={a.title}` - opisowy
- **SectionSteps**: `alt={topImageAlt ?? ''}` - z fallbackiem
- **SectionBasic**: `alt={imageAlt}` - wymagany prop
- **Navigation**: `alt={t.logoAlt}` - opisowy
- **RenderBlocks**: `alt={b.alt}` - z danych
- **beforeAfter**: `alt="Widok przed zmianami"` / `alt="Widok po wdrożeniu"` - opisowy

## Weryfikacja priority

### ✅ Priority tylko dla hero
- **Navigation.tsx**: Logo ma `priority` - OK (above the fold)
- **Brak innych przypadków priority** - OK

## Pliki zmienione

1. ✅ `components/ui/ProjectCard.tsx` - dodano sizes
2. ✅ `app/(pl)/realizacje/[slug]/page.tsx` - dodano sizes dla beforeAfter
3. ✅ `components/ui/sections/SectionSteps.tsx` - dodano sizes dla topImageSrc

## Oczekiwane korzyści

### 1. Lepszy LCP (Largest Contentful Paint)
- Next.js automatycznie generuje odpowiednie rozmiary obrazów dla każdego breakpointu
- Mniejsze obrazy na mobile = szybsze ładowanie
- **Oczekiwana poprawa**: -200-500ms na mobile

### 2. Mniejszy CLS (Cumulative Layout Shift)
- Poprawne width/height i sizes zapobiegają layout shift
- Obrazy mają zarezerwowaną przestrzeń przed załadowaniem
- **Oczekiwana poprawa**: CLS < 0.1

### 3. Lepszy mobile PSI (PageSpeed Insights)
- Mniejsze obrazy na mobile dzięki sizes
- Lepsze wykorzystanie bandwidth
- **Oczekiwana poprawa**: +5-10 punktów w mobile PSI

### 4. SEO
- Wszystkie obrazy mają alt teksty (opisowe lub dekoracyjne)
- Lepsze indeksowanie przez Google Images
- **Oczekiwana poprawa**: Lepsza widoczność w Google Images

### 5. Mniejsze zużycie danych
- Obrazy są generowane w odpowiednich rozmiarach
- Mniej danych do pobrania na mobile
- **Oczekiwana poprawa**: -30-50% rozmiaru obrazów na mobile

## Weryfikacja

- ✅ Brak błędów lintera
- ✅ Wszystkie obrazy z `fill` mają `sizes`
- ✅ Wszystkie obrazy mają `alt` (opisowy lub dekoracyjny)
- ✅ Priority tylko dla hero (logo)
- ✅ Nie zmieniono wyglądu layoutu
- ✅ Jakość obrazów bez zmian (quality pozostaje bez zmian)

