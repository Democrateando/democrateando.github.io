import * as astro from 'eslint-plugin-astro';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.astro'],
    plugins: { astro },
    languageOptions: {
      parser: astro.parsers.astro,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{js,ts,cjs,mjs}'],
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];
