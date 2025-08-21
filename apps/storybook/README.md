# 📖 Storybook - Design System Documentation

Application Storybook pour la documentation interactive et les tests visuels du design system Utopia. Permet de développer, tester et documenter les composants en isolation.

## 🎯 Vue d'ensemble

Cette application Storybook fournit :
- 📚 **Documentation interactive** - Stories pour chaque composant
- 🧪 **Tests visuels** - Chromatic pour la régression visuelle
- 🎨 **Playground** - Test des props et variants
- 🔍 **Accessibilité** - Tests A11Y intégrés
- 📱 **Tests responsifs** - Viewports multiples

## 📋 Table des matières

- [Installation](#-installation)
- [Développement](#-développement)
- [Structure des Stories](#-structure-des-stories)
- [Addons](#-addons)
- [Tests visuels](#-tests-visuels)
- [Déploiement](#-déploiement)

## 🚀 Installation

### Prérequis
- Node.js 20+
- npm 10+

### Installation locale

```bash
git clone https://github.com/club-employes/ds.git
cd ds/apps/storybook
npm install
```

### Développement

```bash
# Démarrer Storybook
npm run storybook

# Ou depuis la racine du monorepo
npm run dev:storybook
```

Storybook sera disponible sur `http://localhost:6006`

## 🏗️ Architecture

### Structure des dossiers

```
apps/storybook/
├── src/
│   ├── stories/              # Stories des composants
│   │   ├── Button.stories.ts # Story du composant Button
│   │   ├── ThemeTest.stories.ts # Test des thèmes
│   │   └── Tokens.stories.ts # Documentation des tokens
│   ├── components/          # Composants helpers pour Storybook
│   ├── assets/             # Assets statiques
│   └── App.vue             # App de démonstration
├── .storybook/             # Configuration Storybook
├── public/                 # Assets publics
└── package.json
```

### Configuration Storybook

```typescript
// .storybook/main.ts
export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
}
```

## 📚 Structure des Stories

### Story de base

```typescript
// src/stories/Button.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@club-employes/utopia'

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Composant Button du design system Utopia'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Story par défaut
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click me</Button>'
  })
}

// Toutes les variantes
export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `
  })
}

// Toutes les tailles
export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    `
  })
}

// État désactivé
export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled Button</Button>'
  })
}
```

### Story avec contrôles avancés

```typescript
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'ghost']
    }
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { 
        args,
        handleClick: () => {
          args.onClick?.()
        }
      }
    },
    template: `
      <Button 
        v-bind="args" 
        @click="handleClick"
      >
        {{ args.label || 'Interactive Button' }}
      </Button>
    `
  })
}
```

### Story de test des thèmes

```typescript
// src/stories/ThemeTest.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, ThemeProvider, clubEmployesLight, clubEmployesDark } from '@club-employes/utopia'

const meta: Meta = {
  title: 'Design System/Themes/ThemeTest',
  parameters: {
    docs: {
      description: {
        component: 'Test des différents thèmes du design system'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const ClubEmployesLight: Story = {
  render: () => ({
    components: { Button, ThemeProvider },
    setup() {
      return { clubEmployesLight }
    },
    template: `
      <ThemeProvider :theme="clubEmployesLight">
        <div style="padding: 2rem; background: var(--utopia-color-surface);">
          <h2 style="color: var(--utopia-color-text);">Club Employés Light</h2>
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </ThemeProvider>
    `
  })
}

export const ClubEmployesDark: Story = {
  render: () => ({
    components: { Button, ThemeProvider },
    setup() {
      return { clubEmployesDark }
    },
    template: `
      <ThemeProvider :theme="clubEmployesDark">
        <div style="padding: 2rem; background: var(--utopia-color-surface);">
          <h2 style="color: var(--utopia-color-text);">Club Employés Dark</h2>
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </ThemeProvider>
    `
  })
}
```

## 🔧 Addons

### Addons installés

| Addon | Description | Usage |
|-------|-------------|-------|
| **@storybook/addon-docs** | Documentation automatique | Génère la doc depuis les stories |
| **@storybook/addon-controls** | Contrôles interactifs | Modifier les props en temps réel |
| **@storybook/addon-a11y** | Tests d'accessibilité | Validation WCAG automatique |
| **@chromatic-com/storybook** | Tests visuels | Intégration Chromatic |

### Configuration des addons

```typescript
// .storybook/main.ts
export default {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-a11y',
      options: {
        element: '#storybook-root'
      }
    }
  ]
}
```

### Utilisation des contrôles

```typescript
export const WithControls: Story = {
  argTypes: {
    // Select
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    
    // Boolean
    disabled: {
      control: { type: 'boolean' }
    },
    
    // Text
    label: {
      control: { type: 'text' }
    },
    
    // Number
    count: {
      control: { type: 'number', min: 0, max: 100 }
    },
    
    // Color
    color: {
      control: { type: 'color' }
    }
  }
}
```

## 🧪 Tests Visuels

### Configuration Chromatic

```bash
# Token Chromatic dans package.json
"chromatic": "chromatic --project-token=chpt_31b87a32083cc96"
```

### Lancer les tests visuels

```bash
# Tests Chromatic
npm run chromatic

# Build Storybook pour production
npm run build-storybook
```

### Ignorer des stories dans Chromatic

```typescript
export const ExcludedFromChromatic: Story = {
  parameters: {
    chromatic: { disable: true }
  }
}
```

### Tests de régression

Chromatic compare automatiquement :
- ✅ Captures d'écran des composants
- ✅ Détection des changements visuels
- ✅ Approbation des modifications
- ✅ Intégration CI/CD

## 🎨 Documentation

### Documentation automatique

```typescript
const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
          Le composant Button est l'élément interactif de base du design system.
          
          ## Utilisation
          
          \`\`\`vue
          <Button variant="primary" size="medium">
            Click me
          </Button>
          \`\`\`
        `
      }
    }
  }
}
```

### Documentation des props

```typescript
argTypes: {
  variant: {
    description: 'Style visuel du bouton',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' }
    },
    control: { type: 'select' }
  }
}
```

## 🚀 Déploiement

### Build de production

```bash
npm run build-storybook
```

Génère `storybook-static/` avec l'application compilée.

### Déploiement automatique

Storybook est automatiquement déployé via Chromatic lors des commits.

### Variables d'environnement

```env
CHROMATIC_PROJECT_TOKEN=chpt_31b87a32083cc96
```

## 🔄 Workflow de Développement

### Ajouter une nouvelle story

1. **Créer le fichier** : `src/stories/MonComposant.stories.ts`

2. **Définir la story** :
```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import { MonComposant } from '@club-employes/utopia'

const meta: Meta<typeof MonComposant> = {
  title: 'Design System/Atoms/MonComposant',
  component: MonComposant
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Props par défaut
  }
}
```

3. **Tester localement** :
```bash
npm run storybook
```

### Tester un composant en développement

1. **Lier le package** local :
```bash
cd packages/utopia
npm link

cd apps/storybook
npm link @club-employes/utopia
```

2. **Développer** avec rechargement automatique

3. **Valider** avec Chromatic

## 📊 Métriques et Monitoring

### Tests d'accessibilité

L'addon A11Y teste automatiquement :
- ✅ Contraste des couleurs
- ✅ Labels et descriptions
- ✅ Navigation au clavier
- ✅ Attributs ARIA

### Rapports Chromatic

Chromatic fournit :
- 📊 Couverture des tests visuels
- 🔍 Détails des changements
- 📈 Historique des versions
- 🎯 Métriques de qualité

## 🛠️ Configuration Avancée

### Viewports personnalisés

```typescript
// .storybook/preview.ts
export const parameters = {
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: { width: '375px', height: '667px' }
      },
      tablet: {
        name: 'Tablet',
        styles: { width: '768px', height: '1024px' }
      },
      desktop: {
        name: 'Desktop',
        styles: { width: '1440px', height: '900px' }
      }
    }
  }
}
```

### Thèmes globaux

```typescript
// .storybook/preview.ts
import { clubEmployesLight } from '@club-employes/utopia'

export const decorators = [
  (story) => ({
    components: { ThemeProvider },
    setup() {
      return { clubEmployesLight }
    },
    template: `
      <ThemeProvider :theme="clubEmployesLight">
        <story />
      </ThemeProvider>
    `
  })
]
```

## 📚 Ressources

- [📖 Documentation Storybook](https://storybook.js.org/docs)
- [🎨 Chromatic](https://www.chromatic.com/)
- [🔍 Addon A11Y](https://storybook.js.org/addons/@storybook/addon-a11y)
- [🎨 Design System Package](../../packages/utopia/README.md)

---

**Version** : 0.0.0 (privée)  
**Framework** : Storybook 8 + Vue 3  
**Tests visuels** : Chromatic  
**Licence** : ISC © Club Employés