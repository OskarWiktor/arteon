import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Tylko pliki *.test.ts w folderze tests/ to testy jednostkowe Vitest.
    // Pliki *.spec.ts zostawiamy dla Playwright (testy E2E) — nie kolidują.
    include: ['tests/**/*.test.ts'],
    // Czyste funkcje nie potrzebują przeglądarki ani DOM, więc 'node'
    // jest najszybsze. Do testów komponentów React zmienisz to na 'jsdom'.
    environment: 'node',
  },
  resolve: {
    // Odwzorowanie aliasu @/ z tsconfig.json, żeby importy typu
    // '@/types/locale' działały tak samo w testach jak w aplikacji.
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
