import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: {
      js,
      '@stylistic': stylistic
    },
    extends: ['js/recommended'],
    rules: {
      quotes: ['warn', 'single'],
      indent: ['warn', 2],
      'no-multi-spaces': ['warn'],
      'space-before-function-paren': ['error', 'always'],
      semi: ['warn', 'never'],
      '@stylistic/semi': ['warn', 'never'],
      '@stylistic/member-delimiter-style': ['warn']
    },
    languageOptions: { globals: globals.browser }
  }, {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser }
    }
  }
])
