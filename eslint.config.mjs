import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  // Ignore the dist directory
  { ignores: ['dist'] },

  // Files to lint
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },

  // JavaScript files config
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },

  // Language options for all files
  { languageOptions: { globals: globals.browser } },

  // Recommended configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // React and React Hooks configurations
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Prettier and custom rules
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-var': 'error',
    },
  },
];
