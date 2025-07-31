/**
 * Règles ESLint personnalisées pour le design system Utopia
 */

const UTOPIA_CSS_TOKENS = {
  // Spacing tokens
  spacing: [
    '--spacing-0', '--spacing-1', '--spacing-2', '--spacing-3', '--spacing-4',
    '--spacing-5', '--spacing-6', '--spacing-8', '--spacing-10', '--spacing-12',
    '--spacing-16', '--spacing-20', '--spacing-24', '--spacing-32'
  ],
  
  // Color tokens  
  colors: [
    '--theme-colors-primary-50', '--theme-colors-primary-100', '--theme-colors-primary-200',
    '--theme-colors-primary-300', '--theme-colors-primary-400', '--theme-colors-primary-500',
    '--theme-colors-primary-600', '--theme-colors-primary-700', '--theme-colors-primary-800',
    '--theme-colors-primary-900',
    '--theme-colors-brand-primary-25', '--theme-colors-brand-primary-50',
    '--theme-colors-brand-secondary-25', '--theme-colors-brand-secondary-50',
    '--theme-colors-brand-accent-25', '--theme-colors-brand-accent-50',
    '--theme-colors-surface-background', '--theme-colors-surface-card',
    '--theme-colors-text-primary', '--theme-colors-text-secondary', 
    '--theme-colors-text-muted', '--theme-colors-text-inverse',
    '--theme-colors-border-default', '--theme-colors-border-muted',
    '--theme-colors-state-error', '--theme-colors-state-success', '--theme-colors-state-warning'
  ],
  
  // Typography tokens
  typography: [
    '--font-size-xs', '--font-size-sm', '--font-size-base', '--font-size-lg',
    '--font-size-xl', '--font-size-2xl', '--font-size-3xl', '--font-size-4xl', '--font-size-5xl',
    '--font-weight-light', '--font-weight-normal', '--font-weight-medium',
    '--font-weight-semibold', '--font-weight-bold',
    '--font-line-height-tight', '--font-line-height-normal', '--font-line-height-relaxed',
    '--font-family-sans', '--font-family-mono'
  ],
  
  // Border tokens
  borders: [
    '--border-width-0', '--border-width-1', '--border-width-2', '--border-width-4',
    '--border-radius-none', '--border-radius-sm', '--border-radius-base',
    '--border-radius-md', '--border-radius-lg', '--border-radius-xl', '--border-radius-full'
  ],
  
  // Shadow tokens
  shadows: [
    '--shadow-none', '--shadow-sm', '--shadow-base', '--shadow-md', '--shadow-lg', '--shadow-xl'
  ]
}

// Générer la liste complète des tokens autorisés
const ALL_UTOPIA_TOKENS = Object.values(UTOPIA_CSS_TOKENS).flat()

/**
 * Règle pour vérifier l'utilisation des tokens CSS
 */
const noHardcodedCSSValues = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Interdire les valeurs CSS en dur et forcer l\'utilisation des tokens Utopia',
      category: 'Design System',
    },
    fixable: null,
    schema: [],
  },
  
  create(context) {
    const hardcodedValueRegex = /^(\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)|#[0-9a-fA-F]{3,8}|rgba?\(|hsla?\()/
    
    return {
      // Vérifier les propriétés CSS dans les objets de style
      'Property[key.name=/^(margin|padding|width|height|fontSize|color|backgroundColor|borderRadius|border|top|left|right|bottom|gap|gridGap)$/]'(node) {
        if (node.value.type === 'Literal' && typeof node.value.value === 'string') {
          if (hardcodedValueRegex.test(node.value.value)) {
            const property = node.key.name
            const suggestedToken = getSuggestedToken(property, node.value.value)
            
            context.report({
              node: node.value,
              message: `❌ Valeur CSS en dur détectée pour "${property}". ${suggestedToken ? `Utilisez plutôt: var(${suggestedToken})` : 'Utilisez un token du design system Utopia.'}`
            })
          }
        }
      },
      
      // Vérifier les template literals contenant du CSS
      'TemplateLiteral'(node) {
        node.quasis.forEach(quasi => {
          if (hardcodedValueRegex.test(quasi.value.raw)) {
            context.report({
              node: quasi,
              message: '❌ Valeur CSS en dur détectée dans template literal. Utilisez les tokens Utopia: var(--spacing-*), var(--theme-colors-*), etc.'
            })
          }
        })
      }
    }
  }
}

/**
 * Suggérer un token approprié basé sur la propriété CSS
 */
function getSuggestedToken(property, value) {
  if (['margin', 'padding', 'gap', 'gridGap', 'top', 'left', 'right', 'bottom'].includes(property)) {
    return '--spacing-*'
  }
  if (['fontSize'].includes(property)) {
    return '--font-size-*'
  }
  if (['color', 'backgroundColor'].includes(property)) {
    return '--theme-colors-*'
  }
  if (['borderRadius'].includes(property)) {
    return '--border-radius-*'
  }
  if (property.includes('border')) {
    return '--border-width-*'
  }
  return null
}

module.exports = {
  UTOPIA_CSS_TOKENS,
  ALL_UTOPIA_TOKENS,
  rules: {
    'no-hardcoded-css-values': noHardcodedCSSValues
  }
}