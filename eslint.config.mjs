import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Ignore the dist directory
  { ignores: ['dist'] },

  // Files to lint
  { files: ['**/*.{js,mjs,cjs,ts}'] },

  // JavaScript files config
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },

  // Language options for all files
  { languageOptions: { globals: globals.browser } },

  // Recommended configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // Prettier and custom rules
  {
    plugins: {
      prettier: prettierPlugin, // Correctly specify the Prettier plugin here
    },
    rules: {
      'prettier/prettier': 'error', // Treat Prettier issues as errors
      'no-var': 'error',
    },
  },
];
