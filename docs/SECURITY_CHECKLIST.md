# Security Checklist — Arteon

## Pre-deployment

- [ ] `npm audit` pokazuje 0 vulnerabilities
- [ ] Wszystkie dependencies zaktualizowane (`npm outdated`)
- [ ] Żaden plik `.env` nie jest commitowany (`git log --all --full-history -- .env`)
- [ ] Security headers skonfigurowane w `next.config.ts` (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy, Referrer-Policy)
- [ ] `poweredByHeader: false` w `next.config.ts`
- [ ] Middleware blokuje znane boty i wrażliwe ścieżki
- [ ] HTTPS wymuszony (middleware: http → https redirect)
- [ ] Error handling nie pokazuje stack trace w production (`app/error.tsx`)
- [ ] `robots.txt` blokuje wrażliwe ścieżki
- [ ] Brak hardcoded secrets w kodzie źródłowym (klucze w env vars)

## Miesięcznie

- [ ] `npm audit` — sprawdź nowe vulnerabilities
- [ ] `npm outdated` — sprawdź aktualizacje paczek
- [ ] Przejrzyj logi Vercel pod kątem podejrzanej aktywności (404 na wrażliwych ścieżkach)
- [ ] Sprawdź czy CSP nie wymaga aktualizacji (nowe integracje zewnętrzne)

## Po dodaniu nowej integracji zewnętrznej

- [ ] Zaktualizuj CSP w `next.config.ts` (dodaj domenę do odpowiednich dyrektyw)
- [ ] Przetestuj na preview deployment przed merge do main
- [ ] Sprawdź czy nowa integracja nie wprowadza XSS vectors
- [ ] Zaktualizuj `.env.example` jeśli wymagana nowa zmienna środowiskowa

## Po aktualizacji Next.js

- [ ] Sprawdź changelog pod kątem security fixes
- [ ] `npm audit` po aktualizacji
- [ ] Przetestuj build i wszystkie narzędzia
- [ ] Sprawdź czy middleware działa poprawnie

## Pliki kluczowe

| Plik                | Rola                                                        |
| ------------------- | ----------------------------------------------------------- |
| `next.config.ts`    | Security headers, CSP, `poweredByHeader: false`             |
| `middleware.ts`     | Bot blocking, suspicious path blocking, canonical redirects |
| `public/robots.txt` | Blokady indeksowania wrażliwych ścieżek                     |
| `.gitignore`        | Ignorowanie `.env*`, `node_modules`, `.next`                |
| `.env.example`      | Szablon zmiennych środowiskowych (bez wartości)             |
