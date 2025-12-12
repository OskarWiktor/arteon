# Możliwości zastosowania komponentów atomic design

## Analiza wykonana: 2024

## 1. Komponent `Text` (typografia)

### Miejsca do zastosowania:

#### `components/ui/ProjectCard.tsx`
- **Linia 39**: `<p className={`mt-2 text-[#5e5e5e] ${size === 'normal' ? 'line-clamp-3' : 'line-clamp-2'}`}>` → `<Text variant="body" tone="muted" as="p" className={`mt-2 ${size === 'normal' ? 'line-clamp-3' : 'line-clamp-2'}`}>`

**Potencjał:** 1 miejsce

#### `components/ui/FeatureCard.tsx`
- **Linia 44**: `<li key={i} className="flex items-start gap-1 text-base text-[#5e5e5e]">` → `<li key={i} className="flex items-start gap-1">` + `<Text variant="body" tone="muted" as="span">`

**Potencjał:** 1 miejsce (wewnątrz mapowania)

#### `components/sections/ContactForm.tsx`
- **Linia 66**: `<p className="pt-3 pb-2 text-[#2B2B2B]">` → `<Text variant="body" tone="dark" as="p" className="pt-3 pb-2">`
- **Linia 100**: `<p role="alert" className="text-red-700">` → `<Text variant="body" as="p" role="alert" className="text-red-700">` (można rozważyć ToolAlert)
- **Linia 105**: `<p role="status" className="text-slate-500">` → `<Text variant="body" tone="muted" as="p" role="status" className="text-slate-500">`

**Potencjał:** 3 miejsca

#### `components/sections/projects/ProjectsGrid.tsx`
- **Linia 43**: `<p className="mt-6 text-[#5e5e5e]">` → `<Text variant="body" tone="muted" as="p" className="mt-6">`

**Potencjał:** 1 miejsce

#### `components/sections/BreadCrumbs.tsx`
- **Linia 55**: `<span aria-current="page" className="text-sm opacity-70">` → `<Text variant="small" as="span" aria-current="page" className="opacity-70">`
- **Linia 64**: `<span className="text-sm" aria-hidden="true">` → `<Text variant="small" as="span" aria-hidden="true">`

**Potencjał:** 2 miejsca

#### `components/shared/navigation-types/MobileNavigation.tsx`
- **Linia 316**: `<button ... className="... text-sm font-medium text-[#5e5e5e] ...">` → można użyć Text dla tekstu wewnątrz buttona
- **Linia 322**: `<p className="px-3 pb-1 text-[11px] tracking-wider text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="px-3 pb-1 text-[11px] tracking-wider">` (lub Text z uppercase)
- **Linia 339**: `<div className="m-2 px-2 py-1 text-[14px] font-semibold text-[#080808]">` → `<Text variant="small" tone="default" as="div" className="m-2 px-2 py-1 font-semibold">`
- **Linia 347**: `<button ... className="... text-sm text-[#5e5e5e] ...">` → można użyć Text dla tekstu wewnątrz buttona
- **Linia 375**: `<Link ... className="... text-[15px] text-[#080808] ...">` → można użyć Text dla tekstu wewnątrz linka
- **Linia 404**: `<Link ... className="... text-[15px] ... text-[#080808] ...">` → można użyć Text dla tekstu wewnątrz linka

**Potencjał:** 6 miejsc (część może wymagać refaktoryzacji struktury)

#### `components/ui/TestimonialCard.tsx`
- **Linia 37**: `<p className="mt-2 text-[#0A0A0A]">` → `<Text variant="body" tone="default" as="p" className="mt-2">` (ale kolor #0A0A0A jest bardzo bliski #080808, więc może być tone="default")
- **Linia 47**: `<span className="truncate text-base font-semibold text-[#0A0A0A]">` → `<Text variant="body" tone="default" as="span" className="truncate font-semibold">`

**Potencjał:** 2 miejsca

#### `components/ui/TableBlock.tsx`
- **Linia 26**: `<div className="border-b border-black/10 px-4 py-3 text-sm font-medium text-[#1a1a1a]">` → `<Text variant="small" tone="default" as="div" className="border-b border-black/10 px-4 py-3 font-medium">` (ale kolor #1a1a1a jest bardzo bliski #080808)

**Potencjał:** 1 miejsce

#### `components/ui/calculator/CalculatorResult.tsx`
- **Linia 24**: `<span className="text-xs text-gray-700">` → `<Text variant="xs" tone="muted" as="span">` (ale używa text-gray-700, nie text-[#5e5e5e])

**Potencjał:** 1 miejsce (wymaga rozważenia czy gray-700 to to samo co muted)

#### `components/sections/tools/JpgPngToWebp.tsx`
- **Linia 561**: `<p className="text-sm! text-[#5e5e5e]">` → `<Text variant="small" tone="muted" as="p">`
- **Linia 566**: `<p className="text-sm! text-[#5e5e5e]">` → `<Text variant="small" tone="muted" as="p">`
- **Linia 569**: `<p className="text-sm! text-[#5e5e5e]">` → `<Text variant="small" tone="muted" as="p">`
- **Linia 596**: `<span className="text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="span">`
- **Linia 606**: `<p className="text-sm! text-[#5e5e5e]">` → `<Text variant="small" tone="muted" as="p">`
- **Linia 915**: `<span className="mb-2 text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="span" className="mb-2">`
- **Linia 929**: `<p className="mt-2 text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p" className="mt-2">`
- **Linia 936**: `<div className="mt-4 rounded-2xl border border-black/10 bg-white/90 p-4 text-xs! text-[#5e5e5e]">` → można użyć Text dla tekstu wewnątrz
- **Linia 1046**: `<span className="text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="span">`
- **Linia 1055**: `<p className="text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p">`
- **Linia 1034**: `<p className="mt-2 text-xs! text-red-600" role="alert">` → można rozważyć ToolAlert

**Potencjał:** 11 miejsc

#### `components/sections/tools/WcagContrastChecker.tsx`
- **Linia 265**: `<p className="text-sm! font-semibold uppercase">{t.normalText}</p>` → `<Text variant="small" as="p" className="font-semibold uppercase">`
- **Linia 278**: `<p className="text-sm! leading-snug font-normal">` → `<Text variant="small" as="p" className="leading-snug font-normal">`
- **Linia 284**: `<p className="text-sm! font-semibold uppercase">{t.largeText}</p>` → `<Text variant="small" as="p" className="font-semibold uppercase">`
- **Linia 297**: `<p className="text-sm! leading-snug font-normal">` → `<Text variant="small" as="p" className="leading-snug font-normal">`

**Potencjał:** 4 miejsca (już częściowo zastosowane w poprzednich iteracjach)

#### `components/sections/tools/EmailSignatureGenerator.tsx`
- **Linia 722**: `<span className="text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold">` (lub Text z uppercase)
- **Linia 763**: `<p className="text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold">` (lub Text z uppercase)
- **Linia 766**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 777**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 785**: `<p className="mt-1 text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p" className="mt-1">`
- **Linia 790**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 800**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 813**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 823**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 835**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 847**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 857**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 869**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 880**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 891**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 906**: `<p className="mb-2 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-2">` (lub Text z uppercase)
- **Linia 909**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 919**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 929**: `<p className="mt-1 text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p" className="mt-1">`
- **Linia 936**: `<p className="text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold">` (lub Text z uppercase)
- **Linia 939**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 949**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 961**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 971**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 983**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 993**: `<label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">` → można użyć Text dla tekstu wewnątrz labela
- **Linia 1003**: `<p className="text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p">`
- **Linia 1010**: `<p className="mb-2 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-2">` (lub Text z uppercase)
- **Linia 1032**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1043**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1049**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1063**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1077**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1098**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1118**: `<p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold mb-1">` (lub Text z uppercase)
- **Linia 1154**: `<p className="text-xs! font-semibold text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="text-xs! font-semibold">` (lub Text z uppercase)
- **Linia 743**: `<p className="text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p">`

**Potencjał:** 35+ miejsc (wiele labeli może wymagać refaktoryzacji struktury)

#### `components/sections/tools/FaviconGenerator.tsx`
- **Linia 401**: `<span className="mb-2 text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="span" className="mb-2">`
- **Linia 406**: `<p className="mt-2 text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p" className="mt-2">`
- **Linia 522**: `<p className="text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p">`
- **Linia 528**: `<p className="text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p">`
- **Linia 533**: `<p className="mb-2 text-xs font-semibold tracking-wide text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="mb-2 text-xs font-semibold tracking-wide">` (lub Text z uppercase)
- **Linia 540**: `<span className="text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="span">`
- **Linia 548**: `<span className="text-xs text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="span">`
- **Linia 574**: `<p className="text-xs! text-[#5e5e5e]">` → `<Text variant="xs" tone="muted" as="p">`

**Potencjał:** 8 miejsc

#### `components/sections/tools/ImageResizeTool.tsx`
- Wiele miejsc z `text-xs! text-[#5e5e5e]` i podobnymi klasami - podobny pattern jak w EmailSignatureGenerator

**Potencjał:** 15+ miejsc

#### `components/sections/tools/ColorPaletteGenerator.tsx`
- **Linia 365**: `<p className="text-sm! leading-tight font-medium">` → `<Text variant="small" tone="default" as="p" className="leading-tight font-medium">`
- **Linia 433**: `<p className="text-sm! leading-tight font-medium">` → `<Text variant="small" tone="default" as="p" className="leading-tight font-medium">`

**Potencjał:** 2 miejsca

#### `components/ui/CodeBlock.tsx`
- **Linia 42**: `<div className="flex items-center gap-2 text-xs text-white/70">` → można użyć Text dla tekstu wewnątrz (ale to dark theme, więc może wymagać specjalnego wariantu)
- **Linia 68**: `<span aria-hidden="true" className={`min-w-6 pr-1 text-right text-white/40 tabular-nums select-none`}>` → można użyć Text (ale to dark theme)
- **Linia 79**: `<figcaption className="border-t border-white/10 px-4 py-2 text-xs text-white/60">{caption}</figcaption>` → `<Text variant="xs" as="figcaption" className="border-t border-white/10 px-4 py-2 text-white/60">` (ale to dark theme)

**Potencjał:** 3 miejsca (ale wymaga rozważenia dark theme - może nie pasować do obecnego Text component)

#### `components/sections/ShareBlock.tsx`
- **Linia 74**: `<span className="text-xs font-semibold">X</span>` → `<Text variant="xs" as="span" className="font-semibold">`
- **Linia 86**: Button z `text-xs font-medium text-[#333]` → można użyć Text dla tekstu wewnątrz buttona

**Potencjał:** 2 miejsca

#### `components/sections/HeroBanner.tsx`
- **Linia 109**: `<p id="hero-description" className={`reveal-animation mt-3 text-base leading-relaxed md:mt-5 ${toneMutedClass} text-wrap:pretty`}>` → `<Text variant="body" tone="muted" as="p" id="hero-description" className={`reveal-animation mt-3 leading-relaxed md:mt-5 text-wrap:pretty`}>`

**Potencjał:** 1 miejsce

**RAZEM dla Text:** ~100+ miejsc w ~20 plikach

---

## 2. Komponent `Eyebrow` (typografia)

### Miejsca do zastosowania:

#### `components/sections/HeroBanner.tsx`
- **Linia 89**: `<p className={`reveal-animation text-base tracking-wide uppercase sm:text-lg ${toneMutedClass}`}>{subtitle}</p>` → `<Eyebrow variant="hero" className={`reveal-animation ${toneMutedClass}`}>{subtitle}</Eyebrow>`

**Potencjał:** 1 miejsce

#### `components/shared/navigation-types/MobileNavigation.tsx`
- **Linia 322**: `<p className="px-3 pb-1 text-[11px] tracking-wider text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="px-3 pb-1 text-[11px] tracking-wider">`

**Potencjał:** 1 miejsce

#### `components/sections/tools/EmailSignatureGenerator.tsx`
- Wiele miejsc z `text-xs! font-semibold text-[#5e5e5e] uppercase` - patrz sekcja Text powyżej

**Potencjał:** 15+ miejsc

#### `components/sections/tools/FaviconGenerator.tsx`
- **Linia 533**: `<p className="mb-2 text-xs font-semibold tracking-wide text-[#5e5e5e] uppercase">` → `<Eyebrow variant="dynamic" className="mb-2 text-xs font-semibold tracking-wide">`

**Potencjał:** 1 miejsce

**RAZEM dla Eyebrow:** ~18 miejsc w ~4 plikach

---

## 3. Komponent `Heading` (typografia)

### Miejsca do zastosowania:

#### `components/sections/ContactForm.tsx`
- **Linia 65**: `<h2 className="h3 reveal-animation">{title}</h2>` → `<Heading as="h2" className="h3 reveal-animation">{title}</Heading>`

**Potencjał:** 1 miejsce

#### `components/sections/projects/Filters.tsx`
- **Linia 39**: `<h2 className="reveal-animation mb-4">{t.heading}</h2>` → `<Heading as="h2" className="reveal-animation mb-4">{t.heading}</Heading>`

**Potencjał:** 1 miejsce

#### `components/ui/calculator/CalculatorResult.tsx`
- **Linia 22**: `<h3 className="inline border-b-2 border-b-slate-400">{title}</h3>` → `<Heading as="h3" className="inline border-b-2 border-b-slate-400">{title}</Heading>`
- **Linia 28**: `<h4 className="mb-2">{inPrice}</h4>` → `<Heading as="h4" className="mb-2">{inPrice}</Heading>`

**Potencjał:** 2 miejsca

#### `components/sections/tools/FaviconGenerator.tsx`
- **Linia 520**: `<h2 className="h6">{t.previewAndFiles}</h2>` → `<Heading as="h2" className="h6">{t.previewAndFiles}</Heading>`

**Potencjał:** 1 miejsce

#### `components/sections/tools/ImageResizeTool.tsx`
- **Linia 1044**: `<h2 className="h6">{t.cropTools}</h2>` → `<Heading as="h2" className="h6">{t.cropTools}</Heading>`

**Potencjał:** 1 miejsce

#### `components/sections/tools/EmailSignatureGenerator.tsx`
- **Linia 749**: `<h2 className="h6">{t.editorTitle}</h2>` → `<Heading as="h2" className="h6">{t.editorTitle}</Heading>`

**Potencjał:** 1 miejsce

#### `components/sections/tools/MetaTitleDescriptionTool.tsx`
- **Linia 229**: `<h2 className="h6 pb-2">{t.previewTitle}</h2>` → `<Heading as="h2" className="h6 pb-2">{t.previewTitle}</Heading>`

**Potencjał:** 1 miejsce

#### `components/sections/tools/JpgPngToWebp.tsx`
- **Linia 604**: `<h2 className="h6">{t.queueFilesHeading}</h2>` → `<Heading as="h2" className="h6">{t.queueFilesHeading}</Heading>`

**Potencjał:** 1 miejsce

**RAZEM dla Heading:** 9 miejsc w 8 plikach

---

## 4. Komponent `ButtonGroup` (layout)

### Miejsca do zastosowania:

#### `components/sections/HeroBanner.tsx`
- **Linia 114**: `<div className={`mt-7 flex flex-wrap gap-3 md:mt-8 ${justify}`}>` + Button elements → `<ButtonGroup btnOne={buttonAccent} btnOneLink={buttonAccentLink} btnTwo={buttonSecond} btnTwoLink={buttonSecondLink} spacing="loose" align={justify === 'justify-center' ? 'center' : 'left'} />`

**Potencjał:** 1 miejsce

#### `components/ui/sections/SectionPrices.tsx`
- **Linia 146**: `<div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={`${t.planActions}: ${plan.name}`}>` + 2 Button elements → `<ButtonGroup btnOne={plan.btnOne} btnOneLink={plan.btnOneLink} btnOneVariant={plan.lastPlan ? 'dark' : 'accent'} btnTwo={plan.btnTwo} btnTwoLink={plan.btnTwoLink} spacing="default" align="left" ariaLabel={`${t.planActions}: ${plan.name}`} />`

**Potencjał:** 1 miejsce (wewnątrz mapowania)

**RAZEM dla ButtonGroup:** 2 miejsca w 2 plikach

---

## 5. Komponent `IconText` (layout)

### Miejsca do zastosowania:

#### `components/sections/TechStack.tsx`
- **Linia 120-123**: 
  ```tsx
  <div key={`${label}-${index}`} className="flex shrink-0 items-center">
    <Icon className="h-auto w-6" aria-hidden="true" />
    <span className="pl-2 text-2xl">{label}</span>
  </div>
  ```
  → 
  ```tsx
  <IconText icon={<Icon className="h-auto w-6" aria-hidden="true" />} gap="2" className="shrink-0">
    <span className="text-2xl">{label}</span>
  </IconText>
  ```

**Potencjał:** 1 miejsce (wewnątrz mapowania)

#### `components/sections/ShareBlock.tsx`
- **Linia 60**: `<div className="flex items-start gap-3">` - może być użyte, ale struktura jest bardziej złożona

**Potencjał:** 0 miejsc (struktura nie pasuje idealnie)

#### `components/shared/navigation-types/MobileNavigation.tsx`
- **Linia 375**: `<Link ... className="group flex items-center gap-3 ...">` + icon → można użyć IconText, ale wymaga refaktoryzacji struktury

**Potencjał:** 1 miejsce (wymaga refaktoryzacji)

**RAZEM dla IconText:** 2 miejsca w 2 plikach

---

## 6. Komponent `Tag` (badge/tag)

### Miejsca do zastosowania:

#### `components/sections/ShareBlock.tsx`
- **Linia 86**: Button z `rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium` → `<Tag as="button" variant="default" size="sm" className="border-black/15 px-3 py-1.5">`

**Potencjał:** 1 miejsce

#### `components/sections/tools/EmailSignatureGenerator.tsx`
- **Linia 1017, 1084, 1105, 1125**: Elementy z `rounded-full border px-3 py-1 text-xs!` → `<Tag variant="default" size="sm">`

**Potencjał:** 4 miejsca

**RAZEM dla Tag:** 5 miejsc w 2 plikach

---

## 7. Komponent `AppLink` (linki)

### Miejsca do zastosowania:

#### `components/sections/BreadCrumbs.tsx`
- **Linia 59**: `<a href={it.href} className="inline-link text-sm">` → `<AppLink href={it.href} variant="default" display="inline" className="text-sm">`

**Potencjał:** 1 miejsce (wewnątrz mapowania)

#### `components/sections/steps/WorkSteps.tsx`
- **Linia 77**: `<Link href={REGULATIONS_URL} className="underline underline-offset-4">` → `<AppLink href={REGULATIONS_URL} variant="default" display="inline" className="underline underline-offset-4">`

**Potencjał:** 1 miejsce

**RAZEM dla AppLink:** 2 miejsca w 2 plikach

---

## 8. Komponent `ToolAlert` (alerty)

### Miejsca do zastosowania:

#### `components/sections/ContactForm.tsx`
- **Linia 100**: `<p role="alert" className="text-red-700">` → `<ToolAlert variant="error">{t.error}</ToolAlert>`
- **Linia 105**: `<p role="status" className="text-slate-500">` → `<ToolAlert variant="info">{t.success}</ToolAlert>` (lub success, w zależności od semantyki)

**Potencjał:** 2 miejsca

#### `components/sections/tools/JpgPngToWebp.tsx`
- **Linia 1034**: `<p className="mt-2 text-xs! text-red-600" role="alert">` → `<ToolAlert variant="error" className="mt-2">{error}</ToolAlert>`

**Potencjał:** 1 miejsce

**RAZEM dla ToolAlert:** 3 miejsca w 2 plikach

---

## 9. Komponent `CopyButton` (kopiowanie)

### Miejsca do zastosowania:

#### `components/sections/ShareBlock.tsx`
- **Linia 83-90**: Button z `navigator.clipboard` → `<CopyButton text={url} label={t.copyLink} copiedLabel={t.copied} />`

**Potencjał:** 1 miejsce

#### `components/ui/CodeBlock.tsx`
- **Linia 46-53**: Button z `navigator.clipboard` → `<CopyButton text={code} label={t.copy} copiedLabel={t.copied} />`

**Potencjał:** 1 miejsce

**RAZEM dla CopyButton:** 2 miejsca w 2 plikach

---

## Podsumowanie

| Komponent | Liczba miejsc | Liczba plików | Priorytet |
|-----------|---------------|---------------|-----------|
| `Text` | ~100+ | ~20 | **Wysoki** |
| `Eyebrow` | ~18 | ~4 | Wysoki |
| `Heading` | 9 | 8 | Średni |
| `ToolAlert` | 3 | 2 | Średni |
| `Tag` | 5 | 2 | Średni |
| `ButtonGroup` | 2 | 2 | Niski |
| `CopyButton` | 2 | 2 | Niski |
| `AppLink` | 2 | 2 | Niski |
| `IconText` | 2 | 2 | Niski |

**RAZEM:** ~143 miejsc w ~30 plikach

---

## Rekomendacje

### Priorytet 1: `Text` component
- **Największy potencjał** (~100+ miejsc)
- Proste zastosowanie
- Pliki: `ProjectCard.tsx`, `FeatureCard.tsx`, `ContactForm.tsx`, `ProjectsGrid.tsx`, `BreadCrumbs.tsx`, `MobileNavigation.tsx`, `TestimonialCard.tsx`, `TableBlock.tsx`, `CalculatorResult.tsx`, wszystkie narzędzia (`JpgPngToWebp.tsx`, `WcagContrastChecker.tsx`, `EmailSignatureGenerator.tsx`, `FaviconGenerator.tsx`, `ImageResizeTool.tsx`, `ColorPaletteGenerator.tsx`), `CodeBlock.tsx`, `ShareBlock.tsx`, `HeroBanner.tsx`

### Priorytet 2: `Eyebrow` component
- **Wysoki priorytet** (~18 miejsc)
- Proste zastosowanie
- Pliki: `HeroBanner.tsx`, `MobileNavigation.tsx`, `EmailSignatureGenerator.tsx`, `FaviconGenerator.tsx`

### Priorytet 3: `Heading` component
- **Średni priorytet** (9 miejsc)
- Proste zastosowanie
- Pliki: `ContactForm.tsx`, `Filters.tsx`, `CalculatorResult.tsx`, wszystkie narzędzia

### Priorytet 4: `ToolAlert` component
- **Średni priorytet** (3 miejsca)
- Proste zastosowanie
- Pliki: `ContactForm.tsx`, `JpgPngToWebp.tsx`

### Priorytet 5: `Tag` component
- **Średni priorytet** (5 miejsc)
- Proste zastosowanie
- Pliki: `ShareBlock.tsx`, `EmailSignatureGenerator.tsx`

### Priorytet 6: `CopyButton` component
- **Niski priorytet** (2 miejsca)
- Proste zastosowanie
- Pliki: `ShareBlock.tsx`, `CodeBlock.tsx`

### Priorytet 7: `ButtonGroup` component
- **Niski priorytet** (2 miejsca)
- Proste zastosowanie
- Pliki: `HeroBanner.tsx`, `SectionPrices.tsx`

### Priorytet 8: `AppLink` component
- **Niski priorytet** (2 miejsca)
- Proste zastosowanie
- Pliki: `BreadCrumbs.tsx`, `WorkSteps.tsx`

### Priorytet 9: `IconText` component
- **Niski priorytet** (2 miejsca)
- Może wymagać refaktoryzacji struktury
- Pliki: `TechStack.tsx`, `MobileNavigation.tsx`

---

## Uwagi

- Wszystkie zmiany powinny zachować istniejące klasy Tailwind 1:1
- Zero zmian w UI/UX
- Komponenty są "dumb UI", bez logiki biznesowej
- Należy upewnić się, że build przechodzi po zmianach
- Niektóre miejsca mogą wymagać refaktoryzacji struktury (np. labeli w formularzach)
- Dark theme w `CodeBlock.tsx` może wymagać specjalnego wariantu `Text` lub pozostawienia bez zmian
- Niektóre kolory (np. `#0A0A0A`, `#1a1a1a`, `#333`, `gray-700`) są bardzo bliskie standardowym kolorom (`#080808`, `#5e5e5e`), więc można je traktować jako odpowiedniki

---

## Statystyki

- **Całkowita liczba możliwości:** ~143 miejsca
- **Całkowita liczba plików:** ~30 plików
- **Największy potencjał:** `Text` component (~100+ miejsc)
- **Najmniejszy potencjał:** `ButtonGroup`, `CopyButton`, `AppLink`, `IconText` (po 2 miejsca)

---

## Następne kroki

1. Zastosować `Text` component w największej liczbie miejsc (priorytet 1)
2. Zastosować `Eyebrow` component (priorytet 2)
3. Zastosować `Heading` component (priorytet 3)
4. Zastosować pozostałe komponenty według priorytetów
