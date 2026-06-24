import { test, expect, type Page } from '@playwright/test';

/**
 * Dedykowane testy DOSTĘPNOŚCI KLAWIATURY oparte na realnym rozkładzie strony
 * (PL home `/`), odwzorowujące ręczny test Tab. Selektory celują w faktyczny DOM:
 *  - submenu desktop: #tools-button / #offer-button → #tools-submenu / #offer-submenu (role="menu")
 *  - przełącznik języka: button[aria-haspopup="menu"] (poza submenu nawigacji), panel [role="menu"]
 *  - karuzele: [aria-roledescription="carousel"]; LogoCarousel: [role="region"][tabindex="0"] bez roledescription
 *  - wyszukiwarka: button[aria-haspopup="dialog"] → [role="dialog"]
 *
 * Część testów jest CELOWO czerwona na obecnym kodzie — dokumentują błędy z
 * docs/a11y-audit/11-keyboard-findings.md i staną się zielone po naprawach.
 * Uruchomienie: `npm run test:e2e` (wymaga raz `npx playwright install`).
 */

const DESKTOP = { width: 1280, height: 900 };

async function activeInside(page: Page, selector: string): Promise<boolean> {
  return page.evaluate(sel => !!document.activeElement?.closest(sel), selector);
}

// ---------------------------------------------------------------------------
// WYSZUKIWARKA — wzorzec poprawnego zachowania (oczekiwane: ZIELONE)
// ---------------------------------------------------------------------------
test.describe('Wyszukiwarka (wzorzec poprawny)', () => {
  test.use({ viewport: DESKTOP });

  test('otwiera dialog, przenosi focus do środka, Escape przywraca focus', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = page.locator('button[aria-haspopup="dialog"]').first();
    await trigger.focus();
    await trigger.press('Enter');

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    expect(await activeInside(page, '[role="dialog"]')).toBe(true);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    // focus wraca na wyzwalacz
    expect(await activeInside(page, 'header')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// SUBMENU DESKTOP — DesktopNavigation (#tools-button → #tools-submenu)
// ---------------------------------------------------------------------------
test.describe('Submenu desktop (Narzędzia)', () => {
  test.use({ viewport: DESKTOP });

  test('Enter na wyzwalaczu otwiera menu i przenosi focus do środka', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = page.locator('#tools-button');
    await trigger.focus();
    await trigger.press('Enter');
    await expect(page.locator('#tools-submenu')).toBeVisible();
    // focusFirst → focus powinien być w menu (obecnie: ✅)
    expect(await activeInside(page, '#tools-submenu')).toBe(true);
  });

  test('Escape zamyka menu i przywraca focus na wyzwalacz', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = page.locator('#tools-button');
    await trigger.focus();
    await trigger.press('Enter');
    await expect(page.locator('#tools-submenu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#tools-submenu')).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  // Wzorzec menu APG: Tab wewnątrz otwartego menu ZAMYKA je i wraca na wyzwalacz
  // (focus nie ucieka do portalu/przeglądarki).
  test('Tab wewnątrz menu zamyka je i przywraca focus na wyzwalacz', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = page.locator('#tools-button');
    await trigger.focus();
    await trigger.press('Enter'); // focus wchodzi do menu (1. pozycja)
    await page.keyboard.press('Tab');
    await expect(page.locator('#tools-submenu')).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('pozycje menu mają role="menuitem" i roving tabindex="-1"', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = page.locator('#tools-button');
    await trigger.click();
    const firstLink = page.locator('#tools-submenu a[href]').first();
    await expect(firstLink).toHaveAttribute('role', 'menuitem');
    await expect(firstLink).toHaveAttribute('tabindex', '-1');
  });

  // ArrowRight z kategorii (lewa kolumna) wchodzi do jej podstron (prawa kolumna)
  // — to naprawia „nie da się wejść w podstrony usług".
  test('ArrowRight z kategorii przenosi focus do podstron (prawa kolumna)', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = page.locator('#tools-button');
    await trigger.focus();
    await trigger.press('Enter'); // focus na 1. kategorii (data-menu-col="0")
    await page.keyboard.press('ArrowRight');
    expect(await activeInside(page, '[data-menu-col="1"]')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// PRZEŁĄCZNIK JĘZYKA (desktop) — LanguageSwitcher
// ---------------------------------------------------------------------------
test.describe('Subnawigacja języków (desktop)', () => {
  test.use({ viewport: DESKTOP });

  const langTrigger = (page: Page) =>
    page
      .locator(
        'button[aria-haspopup="menu"]:not(#tools-button):not(#offer-button)',
      )
      .first();

  test('Enter otwiera menu języków i przenosi focus do pierwszej pozycji', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = langTrigger(page);
    await trigger.focus();
    await trigger.press('Enter');
    await expect(
      page.locator('[role="menu"] a[role="menuitem"]').first(),
    ).toBeVisible();
    expect(await activeInside(page, '[role="menu"]')).toBe(true);
  });

  test('ArrowDown nawiguje pozycjami języków', async ({ page }) => {
    await page.goto('/');
    const trigger = langTrigger(page);
    await trigger.focus();
    await trigger.press('Enter');
    await page.keyboard.press('ArrowDown');
    const onMenuItem = await page.evaluate(
      () => document.activeElement?.getAttribute('role') === 'menuitem',
    );
    expect(onMenuItem).toBe(true);
  });

  test('Escape zamyka menu języków i przywraca focus na wyzwalacz', async ({
    page,
  }) => {
    await page.goto('/');
    const trigger = langTrigger(page);
    await trigger.focus();
    await trigger.press('Enter');
    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
  });
});

// ---------------------------------------------------------------------------
// KARUZELE
// ---------------------------------------------------------------------------
test.describe('Karuzele', () => {
  test.use({ viewport: DESKTOP });

  test('region karuzeli przewija się strzałkami (operowalny klawiaturą)', async ({
    page,
  }) => {
    await page.goto('/');
    const carousel = page.locator('[aria-roledescription="carousel"]').first();
    await carousel.scrollIntoViewIfNeeded();
    await carousel.focus();
    const before = await carousel.evaluate(el => el.scrollLeft);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(600); // scroll-smooth
    const after = await carousel.evaluate(el => el.scrollLeft);
    expect(after).toBeGreaterThan(before);
  });

  // LogoCarousel (tech-skille) nie może być martwym przystankiem focusu:
  // region auto-przewijany nie jest już fokusowalny (usunięto tabindex).
  test('brak fokusowalnego, nieoperowalnego regionu (martwy przystanek)', async ({
    page,
  }) => {
    await page.goto('/');
    const inertFocusable = page.locator(
      '[role="region"][tabindex="0"]:not([aria-roledescription])',
    );
    expect(await inertFocusable.count()).toBe(0);
  });
});
