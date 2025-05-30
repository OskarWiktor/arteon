/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'sonarjs',
    'unicorn',
    'security',
    'promise',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    // === TypeScript ===
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // === Importy ===
    'unused-imports/no-unused-imports': 'error',
    'no-duplicate-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // === Styl i czytelność ===
    'prefer-const': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'unicorn/prevent-abbreviations': 'off', // np. props, ref itd.
    'unicorn/filename-case': 'off', // np. Button.tsx
    'unicorn/no-null': 'off', // pozwalamy używać `null`
    'unicorn/no-useless-undefined': 'off',

    // === React Hooks ===
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
