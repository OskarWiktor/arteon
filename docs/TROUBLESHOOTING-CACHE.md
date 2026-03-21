# Rozwiązywanie problemów z cache i przekierowaniami

## Problem: Localhost przekierowuje na stronę live

**Przyczyna:** Middleware był skonfigurowany do zawsze przekierowywania na `www.arteonagency.pl`.

**Rozwiązanie:** Zmodyfikowano `middleware.ts` aby pomijał przekierowania w development:

```javascript
// Skip canonical redirects in development
if (process.env.NODE_ENV !== 'production') {
  return NextResponse.next();
}
```

## Problem: Zmiany nie są widoczne na stronie live

**Przyczyny:**

1. **Cache Vercel Edge** - zmiany mogą być widoczne z opóźnieniem
2. **Cache przeglądarki** - przeglądarka przechowuje stare wersje

**Rozwiązania:**

### 1. Czyszczenie cache Vercel (po deployment)

```bash
npm run clear-cache
```

### 2. Development - cache disabled

W `next.config.ts` dodano nagłówki anti-cache dla development:

```javascript
const devHeaders = [
  {
    source: '/:path*',
    headers: [
      { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
      { key: 'Pragma', value: 'no-cache' },
      { key: 'Expires', value: '0' },
    ],
  },
];
```

### 3. Przeglądarka - hard refresh

- **Chrome/Firefox:** `Ctrl+Shift+R` (Windows) lub `Cmd+Shift+R` (Mac)
- **Tryb incognito:** zawsze ładuje świeżą wersję

## Procedura po wprowadzeniu zmian w treści

1. **Development:** Zmiany widoczne natychmiast na `localhost:3000`
2. **Deployment:**
   ```bash
   npm run build
   git push origin main
   ```
3. **Czyszczenie cache (opcjonalnie):**
   ```bash
   npm run clear-cache
   ```
4. **Weryfikacja:** Otwórz stronę w trybie incognito

## Debugowanie

### Sprawdzenie nagłówków cache

```bash
curl -I https://www.arteonagency.pl
```

### Sprawdzenie przekierowań

```bash
curl -I http://localhost:3000
```

## Ważne uwagi

- **Development:** Middleware nie przekierowuje na live
- **Production:** Zawsze przekierowuje na HTTPS i www
- **Cache:** Development ma wyłączony cache, production używa optymalnych ustawień
- **Vercel:** Cache jest automatycznie zarządzane przez `vercel.json`
