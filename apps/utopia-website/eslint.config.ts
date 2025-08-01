import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import tsEslint from '@typescript-eslint/eslint-plugin'
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
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      // ===== RÈGLES TYPESCRIPT STRICTES =====
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      // ===== RÈGLES DESIGN SYSTEM UTOPIA =====
      // Interdire les valeurs CSS en dur UNIQUEMENT dans les contextes de style
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Property[key.name="style"] Literal[value=/^(\\d+px|\\d+rem|\\d+em|#[0-9a-fA-F]{3,8}|rgba?\\(|hsla?\\().*$/]',
          message: '❌ Valeurs CSS en dur interdites dans style. Utilisez les tokens du design system Utopia: var(--spacing-*), var(--theme-colors-*), var(--font-size-*), etc.'
        },
        {
          selector: 'CallExpression[callee.name="computed"] TemplateElement[value.raw=/\\d+px|\\d+rem|\\d+em|#[0-9a-fA-F]{3,8}|rgba?\\(|hsla?\\(/]',
          message: '❌ Valeurs CSS en dur interdites dans les styles computed. Utilisez les tokens Utopia.'
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
      '@typescript-eslint/consistent-type-imports': ['error', { 
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
        fixStyle: 'separate-type-imports'
      }],

      // Interdire console.log en production
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },

  // Configuration pour les fichiers JavaScript (Node.js, config, scripts)
  {
    name: 'utopia-js-files',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-as-const': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'no-console': 'off',
      'no-restricted-syntax': 'off',
      'vue/define-props-declaration': 'off',
      'vue/define-emits-declaration': 'off',
      'vue/require-typed-ref': 'off',
      'vue/no-ref-as-operand': 'off',
      'vue/prefer-true-attribute-shorthand': 'off',
    },
  },

  // Configuration plus permissive pour les pages de démonstration du design system
  {
    name: 'utopia-demo-pages',
    files: ['**/design-system/pages/**/*.vue'],
    rules: {
      'no-restricted-syntax': 'warn', // Warning au lieu d'error pour les demos
      'no-console': 'off', // Autorisé dans les demos
    },
  },

  // Configuration pour les fichiers de routing (imports dynamiques autorisés)
  {
    name: 'utopia-router-files',
    files: ['**/router/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off', // Autorisé pour imports dynamiques
    },
  },

  skipFormatting,
)
