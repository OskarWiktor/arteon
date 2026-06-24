import { test, expect } from '@playwright/test';

/**
 * Testy dostępności E2E (struktura + klawiatura) oparte wyłącznie na
 * @playwright/test — bez dodatkowych zależności.
 *
 * Uruchomienie: `npm run test:e2e` (wymaga raz `npx playwright install`).
 * Pełne skanowanie reguł WCAG (axe-core) jest osobno — patrz docs/
 * WCAG_ACCESSIBILITY_REFACTOR_PLAN.md (Faza 5), wymaga `@axe-core/playwright`.
 *
 * Reprezentatywne strony w dwóch językach (pl domyślny bez prefiksu, en z prefiksem).
 */
const PAGES = ['/', '/narzedzia', '/en', '/en/tools'];

for (const path of PAGES) {
  test.describe(`a11y — ${path}`, () => {
    test('ma dokładnie jeden landmark <main> z id="main-content"', async ({
      page,
    }) => {
      await page.goto(path);
      const main = page.locator('main#main-content');
      await expect(main).toHaveCount(1);
    });

    test('ma dokładnie jeden nagłówek <h1>', async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('h1')).toHaveCount(1);
    });

    test('skip-link prowadzi do treści i przejmuje focus', async ({ page }) => {
      await page.goto(path);

      // Pierwszy Tab powinien sfokusować link pomijający.
      await page.keyboard.press('Tab');
      const skipLink = page.locator('a[href="#main-content"]');
      await expect(skipLink).toBeFocused();

      // Aktywacja przenosi focus na obszar główny.
      await skipLink.press('Enter');
      const main = page.locator('main#main-content');
      await expect(main).toBeFocused();
    });
  });
}

test.describe('a11y — wyszukiwarka (modal/focus-trap)', () => {
  test('Escape zamyka dialog wyszukiwania', async ({ page }) => {
    await page.goto('/');

    const searchTrigger = page
      .getByRole('button', { name: /szukaj|wyszuk/i })
      .first();
    await searchTrigger.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });
});
