import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  
  // Configuration TypeScript stricte et tokens Utopia
  {
    name: 'utopia-design-system-rules',
    rules: {
      // ===== RÈGLES TYPESCRIPT STRICTES =====
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      // ===== RÈGLES DESIGN SYSTEM UTOPIA =====
      // Interdire les valeurs CSS en dur
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/^(\\d+px|\\d+rem|\\d+em|#[0-9a-fA-F]{3,8}|rgba?\\(|hsla?\\().*$/]',
          message: '❌ Valeurs CSS en dur interdites. Utilisez les tokens du design system Utopia: var(--spacing-*), var(--theme-colors-*), var(--font-size-*), etc.'
        },
        {
          selector: 'TemplateElement[value.raw=/\\d+px|\\d+rem|\\d+em|#[0-9a-fA-F]{3,8}|rgba?\\(|hsla?\\(/]',
          message: '❌ Valeurs CSS en dur interdites dans les template literals. Utilisez les tokens Utopia.'
        }
      ],

      // Forcer l'utilisation des props typées dans les composants Vue
      'vue/define-props-declaration': 'error',
      'vue/define-emits-declaration': 'error',
      'vue/require-typed-ref': 'error',
      'vue/no-ref-as-operand': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',

      // Forcer l'utilisation d'interfaces explicites
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Interdire console.log en production
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },

  skipFormatting,
)
