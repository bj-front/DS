# 📚 Storybook - Design System Utopia

Storybook configuré pour documenter et tester le système de design multi-marques avec support des thèmes.

## 🚀 Lancement

```bash
cd apps/storybook
npm run storybook
```

Storybook sera accessible sur : **http://localhost:6006**

## 🎨 Configuration des Thèmes

### **Contrôles Globaux**

Storybook est configuré avec des contrôles globaux dans la toolbar :

- **🏢 Brand** : Basculer entre `Club Employés` (💙) et `Gifteo` (❤️)
- **🌗 Mode** : Basculer entre `Light` (☀️) et `Dark` (🌙)

### **Comment utiliser**

1. **Ouvrez une story** (ex: `Atoms/Button`)
2. **Dans la toolbar**, vous verrez les contrôles Brand et Mode
3. **Cliquez sur Brand** pour changer entre Club Employés et Gifteo
4. **Cliquez sur Mode** pour changer entre Light et Dark
5. **Observez** comment les composants s'adaptent automatiquement

## 📖 Stories Disponibles

### **🔲 Atoms/Button**
- Tous les variants : primary, secondary, outline, ghost, danger
- Toutes les tailles : sm, md, lg  
- États : normal, disabled, loading
- Avec icônes

### **🎨 Design System/Tokens**
- **Colors** : Palette complète adaptative
- **Typography** : Tailles et poids de police

## ⚙️ Configuration Technique

### **Décorateur Global**
```typescript
// .storybook/preview.ts
const withThemeProvider = (story, context) => {
  const { globals } = context
  const brand = globals.brand || 'club-employes'
  const mode = globals.mode || 'light'
  
  // Sélection automatique du thème
  let currentTheme
  if (brand === 'club-employes') {
    currentTheme = mode === 'dark' ? clubEmployesDark : clubEmployesLight
  } else {
    currentTheme = mode === 'dark' ? gifteoDark : gifteoLight
  }

  return h(ThemeProvider, { theme: currentTheme }, {
    default: () => h(story())
  })
}
```

### **Thèmes Supportés**
- `clubEmployesLight` - Club Employés mode light (bleu)
- `clubEmployesDark` - Club Employés mode dark (bleu inversé)
- `gifteoLight` - Gifteo mode light (rouge/orange)
- `gifteoDark` - Gifteo mode dark (rouge/orange inversé)

## 🔗 Variables CSS Universelles

Tous les composants utilisent les mêmes variables CSS qui s'adaptent automatiquement :

```css
/* Couleurs primaires */
--theme-colors-primary-50
--theme-colors-primary-500
--theme-colors-primary-900

/* Couleurs de texte */
--theme-colors-text-primary
--theme-colors-text-secondary
--theme-colors-text-muted
--theme-colors-text-inverse

/* Surfaces */
--theme-colors-surface-background
--theme-colors-surface-card

/* Bordures */
--theme-colors-border-default
--theme-colors-border-muted
--theme-colors-border-strong

/* Espacement */
--spacing-1, --spacing-2, --spacing-3...

/* Typographie */
--font-family-sans
--font-size-xs, --font-size-sm, --font-size-base...
--font-weight-light, --font-weight-normal...
```

## 📝 Créer de Nouvelles Stories

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import MonComposant from '../../../../packages/utopia/src/components/atoms/MonComposant/MonComposant.vue'

const meta: Meta<typeof MonComposant> = {
  title: 'Atoms/MonComposant',
  component: MonComposant,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // props du composant
  },
}
```

## 🎯 Avantages

- **👀 Visualisation** : Voir tous les composants dans différents thèmes
- **🧪 Test** : Vérifier la cohérence entre marques et modes
- **📚 Documentation** : Auto-générer la documentation des props
- **🔄 Réactivité** : Changement de thème en temps réel
- **♿ Accessibilité** : Test automatique avec addon-a11y

---

**💡 Astuce** : Utilisez les contrôles globaux pour tester rapidement tous vos composants dans différents contextes !
