import type { Preview } from '@storybook/vue3-vite'
import { h } from 'vue'
import { 
  ThemeProvider, 
  clubEmployesLight, 
  clubEmployesDark, 
  gifteoLight, 
  gifteoDark 
} from '../../../packages/utopia/src/index'

// Import du CSS global pour styler l'interface Storybook
import './preview.css'

// Global decorator pour injecter le ThemeProvider
const withThemeProvider = (story: any, context: any) => {
  const { globals } = context
  
  // Déterminer le thème basé sur les contrôles globaux
  const brand = globals.brand || 'club-employes'
  const mode = globals.mode || 'light'
  
  console.log('🎨 Storybook Theme Switch:', { brand, mode }) // Debug
  
  let currentTheme
  if (brand === 'club-employes') {
    currentTheme = mode === 'dark' ? clubEmployesDark : clubEmployesLight
  } else {
    currentTheme = mode === 'dark' ? gifteoDark : gifteoLight
  }

  console.log('📦 Selected theme:', currentTheme.name) // Debug

  // Calculer les couleurs selon la marque et le mode
  let bgColor = '#ffffff'
  let textColor = '#111827'
  
  if (mode === 'dark') {
    if (brand === 'club-employes') {
      bgColor = '#111827'  // Club Employés dark background
      textColor = '#f9fafb' // Club Employés dark text
    } else {
      bgColor = '#1c1917'  // Gifteo dark background  
      textColor = '#fafaf9' // Gifteo dark text
    }
  }
  
  console.log('🎨 Applying background colors:', { brand, mode, bgColor, textColor }) // Debug

  // Fonction pour appliquer le styling à un élément
  const applyThemeToElement = (element: HTMLElement) => {
    element.style.setProperty('background-color', bgColor, 'important')
    element.style.setProperty('color', textColor, 'important')
  }

  // Fonction pour appliquer le styling aux panels
  const applyThemeToPanels = () => {
    const panelSelectors = [
      '#storybook-panel-root',
      '#panel-tab-content', 
      '.panel-content',
      '[id^="panel-tab-content"]',
      '.docblock-argstable',
      '.sb-addon-panel',
      '.addon-panel',
      '.docblock-argstable table',
      '.docblock-argstable tbody', 
      '.docblock-argstable tr',
      '.docblock-argstable td',
      '.docblock-argstable th'
    ]
    
    panelSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element: Element) => {
        if (element instanceof HTMLElement) {
          applyThemeToElement(element)
        }
      })
    })
    
    // Appliquer spécifiquement aux contrôles (inputs, selects, etc.)
    const controlSelectors = [
      '#panel-tab-content input',
      '#panel-tab-content select',
      '#panel-tab-content textarea',
      '[id^="panel-tab-content"] input',
      '[id^="panel-tab-content"] select', 
      '[id^="panel-tab-content"] textarea',
      '.sb-addon-panel input',
      '.sb-addon-panel select',
      '.sb-addon-panel textarea',
      'input[type="text"]',
      'input[type="number"]',
      'input[type="email"]',
      'input[type="password"]'
    ]
    
    const cardBgColor = mode === 'dark' ? (brand === 'club-employes' ? '#1f2937' : '#292524') : '#f3f4f6'
    
    controlSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element: Element) => {
        if (element instanceof HTMLElement) {
          element.style.setProperty('background-color', cardBgColor, 'important')
          element.style.setProperty('color', textColor, 'important')
          element.style.setProperty('border', `1px solid ${mode === 'dark' ? (brand === 'club-employes' ? '#374151' : '#44403c') : '#e5e7eb'}`, 'important')
        }
      })
    })
  }

  // Forcer le changement de background via JavaScript
  if (typeof window !== 'undefined') {
    
    setTimeout(() => {
      const rootEl = document.documentElement
      const bodyEl = document.body
      const sbRoot = document.getElementById('storybook-root')
      
      // Appliquer aux éléments principaux
      applyThemeToElement(rootEl)
      applyThemeToElement(bodyEl)
      
      if (sbRoot) {
        applyThemeToElement(sbRoot)
      }
      
      // Appliquer aux panels existants
      applyThemeToPanels()
      
      // Réappliquer périodiquement pour s'assurer que les panels dynamiques sont couverts
      const intervalId = setInterval(() => {
        applyThemeToPanels()
      }, 500)
      
      // Nettoyer après 10 secondes
      setTimeout(() => {
        clearInterval(intervalId)
      }, 10000)
    }, 0)
  }

  // Return simple avec key pour forcer le re-render
  return h(ThemeProvider, { 
    theme: currentTheme,
    key: `${brand}-${mode}` // Force re-render sur changement
  }, {
    default: () => h(story())
  })
}

const preview: Preview = {
  // Décorateurs globaux
  decorators: [withThemeProvider],
  
  // Contrôles globaux
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Sélectionner la marque',
      defaultValue: 'club-employes',
      toolbar: {
        icon: 'component',
        items: [
          { value: 'club-employes', title: '💙 Club Employés' },
          { value: 'gifteo', title: '❤️ Gifteo' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    mode: {
      name: 'Mode',
      description: 'Basculer entre light et dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀️ Light' },
          { value: 'dark', title: '🌙 Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    // Configuration des docs pour mieux afficher nos tokens
    docs: {
      story: {
        inline: true,
      },
    },

    // Styles globaux pour l'interface Storybook
    backgrounds: {
      disable: true, // Désactiver les fonds par défaut
    },
  },
};

export default preview;