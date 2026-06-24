import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      '**/.next/**',
      '**/node_modules/**',
      '**/.claude/**',
      '**/out/**',
      '**/build/**',
      '**/dist/**',
      '**/.next-docs/**',
      'public/**',
      '**/*.min.*',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...(nextPlugin.configs?.recommended?.rules ?? {}),
      ...(nextPlugin.configs?.['core-web-vitals']?.rules ?? {}),
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImports,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      sonarjs: sonarjs,
      promise: promise,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      ...(jsxA11y.configs?.recommended?.rules ?? {}),
      ...(sonarjs.configs?.recommended?.rules ?? {}),
      ...(promise.configs?.['flat/recommended']?.rules ?? {}),

      // Too noisy for an existing React codebase (200+ hits, marginal benefit).
      'sonarjs/prefer-read-only-props': 'off',
      // Nested ternaries are common and acceptable in JSX — keep visible, not blocking.
      'sonarjs/no-nested-conditional': 'warn',

      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      'no-undef': 'off',

      'unused-imports/no-unused-imports': 'error',
      'import/no-duplicates': 'error',
      'import/no-cycle': 'error',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@next/next/google-font-display': 'warn',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'warn',
    },
  },
  {
    // Karuzele to celowo dostępne, fokusowalne regiony przewijania (wzorzec WAI-ARIA
    // APG): kontener ma role="region"/"group" + aria-label + aria-roledescription
    // + tabIndex={0} + onKeyDown do nawigacji strzałkami. Te dwie reguły dają tu
    // false-positive (nie modelują przewijalnych regionów). Wyłączamy je WYŁĄCZNIE
    // dla karuzel — w modalach, nawigacji i galeriach pozostają aktywne.
    files: ['components/organisms/carousels/**/*.tsx'],
    rules: {
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  prettier,
];
