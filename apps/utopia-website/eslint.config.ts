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

  // Configuration TypeScript et tokens Utopia (simplifiée)
  {
    name: 'utopia-design-system-rules',
    rules: {
      // ===== RÈGLES TYPESCRIPT ESSENTIELLES =====
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',

      // ===== RÈGLES DESIGN SYSTEM UTOPIA =====
      // Interdire les valeurs CSS en dur (moins strict pour les pages demo)
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

      // Permettre console.log en développement
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },

  // Configuration spécifique pour les pages de demo - règles moins strictes
  {
    name: 'demo-pages-relaxed-rules',
    files: ['src/domains/design-system/pages/**/*.vue', 'validate-design-system.cjs'],
    rules: {
      'no-restricted-syntax': 'off', // Permettre les valeurs en dur dans les pages de demo
      '@typescript-eslint/no-require-imports': 'off', // Permettre require() dans les scripts
      'no-console': 'off', // Permettre console.log dans les demos
    },
  },

  skipFormatting,
)
