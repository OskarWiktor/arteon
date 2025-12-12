# Atomic Design Components - Instrukcja użycia

## Typografia

### `Text`
**Lokalizacja:** `components/ui/typography/Text.tsx`

**Kiedy używać:**
- Tekst body, small, xs, caption z tonem (default, muted, dark)
- Zamiast `<p className="text-sm text-[#5e5e5e]">` lub podobnych patternów

**Props:**
- `variant`: `'body' | 'small' | 'xs' | 'caption'` (domyślnie: `'body'`)
- `tone`: `'default' | 'muted' | 'dark'` (domyślnie: `'default'`)
- `as`: `'p' | 'span' | 'div' | 'figcaption'` (domyślnie: `'p'`)
- `className?`: dodatkowe klasy
- `id?`, `aria-label?`, `itemProp?`: standardowe atrybuty

**Przykład:**
```tsx
<Text variant="small" tone="muted" as="span">
  Tekst pomocniczy
</Text>
```

---

### `Heading`
**Lokalizacja:** `components/ui/typography/Heading.tsx`

**Kiedy używać:**
- Nagłówki h1-h6 z zachowaniem semantyki HTML

**Props:**
- `as`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` (domyślnie: `'h2'`)
- `children`, `className?`, `id?`

**Przykład:**
```tsx
<Heading as="h2" className="reveal-animation mb-4">
  Tytuł sekcji
</Heading>
```

---

### `Eyebrow`
**Lokalizacja:** `components/ui/typography/Eyebrow.tsx`

**Kiedy używać:**
- Subtitle/eyebrow tekst nad nagłówkiem
- Zamiast `<span className="text-base tracking-wider text-[#5e5e5e] uppercase">`

**Props:**
- `variant`: `'default' | 'white' | 'hero' | 'dynamic'` (domyślnie: `'default'`)
- `children`, `className?`, `id?`

**Przykład:**
```tsx
<Eyebrow variant="default">Nasze usługi</Eyebrow>
```

---

### `SectionHeader`
**Lokalizacja:** `components/ui/typography/SectionHeader.tsx`

**Kiedy używać:**
- Sekcja z eyebrow + heading + description
- Zamiast ręcznego łączenia Eyebrow + Heading + `<p>`

**Props:**
- `subtitle?`, `title?`, `description?`
- `headingLevel?`: `'h1' | 'h2' | 'h3' | 'h4'` (domyślnie: `'h2'`)
- `eyebrowVariant?`, `eyebrowClassName?`, `headingClassName?`, `descriptionClassName?`
- `subtitleId?`, `titleId?`

**Przykład:**
```tsx
<SectionHeader
  subtitle="Nasze usługi"
  title="Strony internetowe"
  description="Tworzymy nowoczesne strony..."
  headingLevel="h2"
  headingClassName="reveal-animation mb-4"
/>
```

---

## Linki

### `AppLink`
**Lokalizacja:** `components/ui/Link.tsx`

**Kiedy używać:**
- Linki wewnętrzne z hover-underline i focus ring
- Zamiast `<Link className="hover:underline underline-offset-4">`

**Props:**
- `href`: string (wymagane)
- `variant`: `'default' | 'navigation'` (domyślnie: `'default'`)
- `display`: `'inline' | 'inline-block' | 'block'` (domyślnie: `'block'`)
- `className?`, `aria-current?`, `aria-label?`, `target?`, `rel?`

**Przykład:**
```tsx
<AppLink href="/uslugi" className="font-medium">
  Usługi
</AppLink>
```

---

## Komponenty UI

### `Tag`
**Lokalizacja:** `components/ui/Tag.tsx`

**Kiedy używać:**
- Badge/tag z rounded-full border (status badges, selected/unselected buttons, labels)
- Zamiast `<span className="rounded-full border px-3 py-1 ...">` lub podobnych patternów

**Props:**
- `variant`: `'default' | 'selected' | 'success' | 'error' | 'neutral' | 'dark'` (domyślnie: `'default'`)
- `size`: `'sm' | 'md' | 'lg'` (domyślnie: `'md'`)
- `as`: `'span' | 'button' | 'label' | 'a'` (domyślnie: `'span'`)
- `className?`, `onClick?`, `htmlFor?`, `type?`, `disabled?`, `href?`, `download?`, `target?`, `rel?`, `aria-label?`

**Przykład:**
```tsx
<Tag variant="selected" size="md" as="button" onClick={handleClick}>
  Wybrane
</Tag>
<Tag variant="success" size="sm">Sukces</Tag>
```

---

## Layout

### `SectionHeaderWithAction`
**Lokalizacja:** `components/ui/sections/SectionHeaderWithAction.tsx`

**Kiedy używać:**
- Sekcja z header (subtitle + title + description) po lewej i akcją (przycisk) po prawej
- Zamiast `<div className="mb-2 flex flex-col gap-3 md:mb-3 md:flex-row md:items-center md:justify-between">` + SectionHeader + Button

**Props:**
- Wszystkie props z `SectionHeader` (subtitle, title, description, headingLevel, itp.)
- `action?`: ReactNode (custom action element)
- `actionLabel?`: string (label dla Button)
- `actionLink?`: string (link dla Button)
- `actionAriaLabel?`: string (aria-label dla Button)
- `className?`: dodatkowe klasy

**Przykład:**
```tsx
<SectionHeaderWithAction
  subtitle="Nasze artykuły"
  title="Edukacja"
  headingLevel="h2"
  headingClassName="reveal-animation md:mb-0"
  titleId="articles-heading"
  actionLabel="Zobacz wszystkie"
  actionLink="/edukacja"
  actionAriaLabel="Zobacz wszystkie artykuły"
/>
```

---

### `ButtonGroup`
**Lokalizacja:** `components/ui/ButtonGroup.tsx`

**Kiedy używać:**
- Grupa przycisków CTA (1-2 przyciski)
- Zamiast `<div className="flex flex-wrap gap-3 mt-4">` + Button

**Props:**
- `btnOne?`, `btnOneLink?`, `btnOneVariant?`
- `btnTwo?`, `btnTwoLink?`, `btnTwoVariant?`
- `spacing`: `'default' | 'tight' | 'loose'` (domyślnie: `'default'`)
- `align`: `'left' | 'center' | 'right'` (domyślnie: `'left'`)
- `className?`, `ariaLabel?`, `role?`

**Przykład:**
```tsx
<ButtonGroup
  btnOne="Zobacz więcej"
  btnOneLink="/uslugi"
  btnOneVariant="accent"
  btnTwo="Kontakt"
  btnTwoLink="/kontakt"
  spacing="loose"
/>
```

---

### `IconText`
**Lokalizacja:** `components/ui/IconText.tsx`

**Kiedy używać:**
- Ikona + tekst obok siebie
- Zamiast `<div className="flex items-center gap-2">` + ikona + tekst

**Props:**
- `icon?`: ReactNode (ikona)
- `children`: ReactNode (tekst)
- `gap`: `'1' | '2' | '3' | '4'` (domyślnie: `'2'`)
- `align`: `'start' | 'center'` (domyślnie: `'center'`)
- `iconClassName?`, `className?`, `aria-label?`

**Przykład:**
```tsx
<IconText icon={<RiCheckFill />} gap="3" align="start">
  <span>Feature included</span>
</IconText>
```

---

## Narzędzia (Tools)

### `ToolSection`
**Lokalizacja:** `components/ui/tools/ToolSection.tsx`

**Kiedy używać:**
- Sekcja w narzędziach z klasą `tool-section`

**Props:**
- `children`, `className?`, `aria-label?`

**Przykład:**
```tsx
<ToolSection className="space-y-4">
  {/* zawartość */}
</ToolSection>
```

---

### `ToolInfo`
**Lokalizacja:** `components/ui/tools/ToolInfo.tsx`

**Kiedy używać:**
- Info box w narzędziach z klasą `tool-info-box`

**Props:**
- `children`, `className?`

**Przykład:**
```tsx
<ToolInfo>
  <p>Informacja pomocnicza</p>
</ToolInfo>
```

---

### `ToolFieldRow`
**Lokalizacja:** `components/ui/tools/ToolFieldRow.tsx`

**Kiedy używać:**
- Wiersz z label + input + helper text

**Props:**
- `label`: string (wymagane)
- `children`: ReactNode (input)
- `helperText?`: ReactNode
- `className?`

**Przykład:**
```tsx
<ToolFieldRow label="Tytuł" helperText="Maksymalnie 60 znaków">
  <input type="text" />
</ToolFieldRow>
```

---

### `ToolHelper`
**Lokalizacja:** `components/ui/tools/ToolHelper.tsx`

**Kiedy używać:**
- Helper text w narzędziach z klasą `tool-helper`

**Props:**
- `children`, `className?`

**Przykład:**
```tsx
<ToolHelper>Maksymalnie 60 znaków</ToolHelper>
```

---

### `ToolAlert`
**Lokalizacja:** `components/ui/tools/ToolAlert.tsx`

**Kiedy używać:**
- Alert/komunikat w narzędziach (success, error, warning, info)

**Props:**
- `variant`: `'success' | 'warning' | 'error' | 'info'` (domyślnie: `'info'`)
- `children`, `className?`

**Przykład:**
```tsx
<ToolAlert variant="error">
  Wystąpił błąd podczas przetwarzania
</ToolAlert>
```

---

### `CopyButton`
**Lokalizacja:** `components/ui/tools/CopyButton.tsx`

**Kiedy używać:**
- Przycisk kopiowania tekstu do schowka

**Props:**
- `text`: string (wymagane - tekst do skopiowania)
- `label?`: string (domyślnie: `'Kopiuj'`)
- `copiedLabel?`: string (domyślnie: `'Skopiowano'`)
- `className?`, `onCopy?`, `onError?`

**Przykład:**
```tsx
<CopyButton text="#FF5733" label="Kopiuj kolor" />
```

---

## Zasady

1. **Zawsze używaj komponentów zamiast duplikacji** - jeśli widzisz ten sam pattern w 2+ miejscach, użyj komponentu
2. **Zachowaj klasy Tailwind 1:1** - komponenty nie zmieniają istniejących klas, tylko je enkapsulują
3. **Zero zmian w UI/UX** - komponenty są "dumb UI", bez logiki biznesowej
4. **Min. 2 użycia** - komponent powinien być używany w minimum 2 miejscach (wyjątek: Heading/Text/SectionHeader)

---

## Historia iteracji

### Iteracja 4 - Tag Component

**Data:** 2024

**Nowy komponent:**
- `Tag` - badge/tag z rounded-full border

**Zrefaktoryzowane pliki (7):**
1. `components/sections/tools/WcagContrastChecker.tsx` - Badge function
2. `components/sections/tools/FaviconGenerator.tsx` - checkbox labels, download link, supportedFormats (3 miejsca)
3. `components/sections/tools/EmailSignatureGenerator.tsx` - layout buttons
4. `components/sections/tools/JpgPngToWebp.tsx` - status badges, buttons, supportedFormats (5 miejsc)
5. `components/ui/sections/SectionPrices.tsx` - featured plan badge
6. `components/sections/tools/ImageResizeTool.tsx` - PillButton, supportedFormats (2 miejsca)

**Statystyki:**
- Nowy komponent: 1 (`Tag`)
- Zastosowania: 15+ miejsc w 7 plikach
- Usunięte duplikacje: Pattern `rounded-full border px-3 py-1` w 15+ miejscach

**Co zostało zunifikowane:**
Pattern `rounded-full border px-3 py-1` (lub `px-2.5 py-1`, `px-2 py-1`) z różnymi wariantami kolorów i stanami został zunifikowany w komponencie `Tag` z wariantami (default, selected, success, error, neutral, dark), rozmiarami (sm, md, lg) i obsługą różnych elementów HTML (span, button, label, a).

---

## Aktualizacja dokumentu

Przy dodawaniu nowego komponentu:
1. Dodaj sekcję z nazwą komponentu
2. Wskaż lokalizację pliku
3. Opisz kiedy używać (przypadki użycia)
4. Wypisz wszystkie props z typami
5. Dodaj minimalny przykład użycia
6. Zaktualizuj sekcję "Historia iteracji" z podsumowaniem zmian

