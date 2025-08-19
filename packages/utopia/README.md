# 📦 @club-employes/utopia - Design System

Le package principal du design system Utopia de Club Employés. Il contient tous les composants Vue 3, design tokens, thèmes et outils nécessaires pour construire des interfaces cohérentes.

## 🎯 Vue d'ensemble

Le design system Utopia est un système de conception complet qui fournit :
- 🎨 **Design Tokens** - Couleurs, espacement, typographie, ombres
- 🧩 **Composants Vue 3** - Atoms, Molecules, Organisms, Layouts
- 🌈 **Thèmes multi-marques** - Club Employés & Gifteo (light/dark)
- 🔧 **Outils de développement** - TypeScript, Vite, Style Dictionary

## 📋 Table des matières

- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Architecture](#-architecture)
- [Design Tokens](#-design-tokens)
- [Composants](#-composants)
- [Thèmes](#-thèmes)
- [Développement](#-développement)
- [Scripts](#-scripts)
- [Publication](#-publication)

## 🚀 Installation

```bash
npm install @club-employes/utopia
```

### Dépendances requises

```bash
npm install vue@^3.5.17
```

## 💡 Utilisation

### Import basique

```vue
<template>
  <ThemeProvider :theme="clubEmployesLight">
    <Button variant="primary" size="medium">
      Mon bouton
    </Button>
    <Icon name="heart" size="large" />
  </ThemeProvider>
</template>

<script setup>
import { Button, Icon, ThemeProvider, clubEmployesLight } from '@club-employes/utopia'
import '@club-employes/utopia/styles'
</script>
```

### Import des tokens CSS uniquement

```css
@import '@club-employes/utopia/tokens/club-employes/light';
/* ou */
@import '@club-employes/utopia/tokens/gifteo/dark';
```

## 🏗️ Architecture

```
packages/utopia/
├── src/
│   ├── components/           # Composants Vue 3
│   │   ├── atoms/           # Composants de base
│   │   ├── molecules/       # Combinaisons simples
│   │   ├── organisms/       # Composants complexes
│   │   └── layouts/         # Mises en page
│   ├── tokens/              # Design tokens
│   │   ├── core/           # Tokens de base
│   │   ├── brands/         # Tokens par marque
│   │   ├── themes/         # Configurations de thèmes
│   │   └── generated/      # Tokens compilés (CSS/JS)
│   ├── themes/             # Configurations des thèmes
│   ├── composables/        # Hooks Vue 3
│   └── assets/             # Icônes et ressources
├── dist/                   # Build de production
├── scripts/               # Scripts de build
└── style-dictionary.config.js
```

## 🎨 Design Tokens

Les tokens sont organisés en plusieurs couches :

### Tokens Core
- **colors.json** - Palette de couleurs de base
- **spacing.json** - Échelle d'espacement
- **typography.json** - Styles typographiques
- **borders.json** - Bordures et radius
- **shadows.json** - Ombres et élévations

### Tokens par Marque
- **club-employes/** - Couleurs spécifiques Club Employés
- **gifteo/** - Couleurs spécifiques Gifteo

### Génération des Tokens

```bash
npm run build:tokens
```

Génère automatiquement :
- `src/tokens/generated/club-employes/light.css`
- `src/tokens/generated/club-employes/dark.css`
- `src/tokens/generated/gifteo/light.css`
- `src/tokens/generated/gifteo/dark.css`

### Utilisation des Tokens

```css
.my-component {
  color: var(--utopia-color-text-primary);
  background: var(--utopia-color-surface-card);
  padding: var(--utopia-space-md);
  border-radius: var(--utopia-radius-md);
}
```

## 🧩 Composants

### Atoms (Composants de base)

| Composant | Description | Props principales |
|-----------|-------------|-------------------|
| **Button** | Boutons interactifs | `variant`, `size`, `disabled` |
| **Icon** | Icônes SVG | `name`, `size`, `color` |
| **Logo** | Logos des marques | `brand`, `variant`, `size` |
| **Badge** | Étiquettes informatives | `variant`, `size` |
| **Card** | Conteneur de contenu | `variant`, `padding` |
| **Checkbox** | Cases à cocher | `checked`, `disabled` |
| **Switch** | Interrupteurs | `checked`, `disabled` |
| **Input** | Champs de saisie | `type`, `placeholder`, `disabled` |

### Molecules (Combinaisons simples)

| Composant | Description | Props principales |
|-----------|-------------|-------------------|
| **SearchBox** | Barre de recherche | `placeholder`, `onSearch` |

### Organisms (Composants complexes)

| Composant | Description | Props principales |
|-----------|-------------|-------------------|
| **DataTable** | Tableau de données | `data`, `columns`, `pagination` |

### Layouts (Mises en page)

| Composant | Description | Props principales |
|-----------|-------------|-------------------|
| **DefaultLayout** | Layout principal | `showHeader`, `showMenu` |

### Exemple d'utilisation

```vue
<template>
  <DefaultLayout>
    <Card variant="elevated">
      <div class="card-header">
        <Logo brand="club-employes" size="small" />
        <Badge variant="success">Actif</Badge>
      </div>
      
      <SearchBox 
        placeholder="Rechercher..."
        @search="handleSearch"
      />
      
      <DataTable 
        :data="tableData"
        :columns="tableColumns"
        :pagination="true"
      />
    </Card>
  </DefaultLayout>
</template>
```

## 🌈 Thèmes

### Thèmes disponibles

```javascript
import { 
  clubEmployesLight, 
  clubEmployesDark, 
  gifteoLight, 
  gifteoDark 
} from '@club-employes/utopia'
```

### Configuration d'un thème

```vue
<template>
  <ThemeProvider :theme="currentTheme">
    <App />
  </ThemeProvider>
</template>

<script setup>
import { ref } from 'vue'
import { ThemeProvider, clubEmployesLight } from '@club-employes/utopia'

const currentTheme = ref(clubEmployesLight)
</script>
```

### Changement dynamique de thème

```vue
<script setup>
import { useTheme } from '@club-employes/utopia'

const { theme, setTheme } = useTheme()

// Changer vers le thème sombre
setTheme('club-employes', 'dark')

// Changer de marque
setTheme('gifteo', 'light')
</script>
```

## 🛠️ Développement

### Prérequis
- Node.js 20+
- npm 10+

### Installation locale

```bash
git clone https://github.com/club-employes/ds.git
cd ds/packages/utopia
npm install
```

### Structure de développement

```
src/
├── components/
│   └── atoms/
│       └── Button/
│           ├── Button.vue      # Composant principal
│           ├── index.ts        # Export
│           └── types.ts        # Types TypeScript
├── tokens/
│   ├── core/                   # Tokens de base
│   ├── brands/                 # Tokens par marque
│   └── themes/                 # Configuration des thèmes
└── composables/
    ├── useTheme.ts            # Gestion des thèmes
    └── useFavicon.ts          # Gestion du favicon
```

### Créer un nouveau composant

1. **Créer le dossier** : `src/components/atoms/MonComposant/`
2. **Fichiers requis** :
   - `MonComposant.vue` - Composant principal
   - `index.ts` - Export du composant
   - `types.ts` - Types TypeScript

3. **Template de composant** :

```vue
<template>
  <div class="utopia-mon-composant" :class="componentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MonComposantProps } from './types'

const props = withDefaults(defineProps<MonComposantProps>(), {
  variant: 'default',
  size: 'medium'
})

const componentClasses = computed(() => ({
  [`utopia-mon-composant--${props.variant}`]: true,
  [`utopia-mon-composant--${props.size}`]: true
}))
</script>

<style scoped>
.utopia-mon-composant {
  /* Styles utilisant les design tokens */
  background: var(--utopia-color-surface);
  padding: var(--utopia-space-md);
  border-radius: var(--utopia-radius-md);
}
</style>
```

4. **Ajouter à l'export principal** dans `src/components/index.ts`

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build complet (tokens + composants) |
| `npm run build:tokens` | Génération des tokens uniquement |
| `npm run generate:icons` | Génération de la liste des icônes |
| `npm run lint` | Vérification du code |
| `npm run type-check` | Vérification TypeScript |

### Workflow de build

```bash
# 1. Génération des tokens
npm run build:tokens

# 2. Génération de la liste des icônes
npm run generate:icons

# 3. Build Vite
vite build

# 4. Copie des fichiers de types
cp src/index.d.ts dist/index.d.ts

# 5. Copie des tokens générés
npm run copy:tokens

# 6. Copie de la liste des icônes
npm run copy:icons
```

## 📦 Publication

### Publication automatique via GitHub Actions

Le package est publié automatiquement sur NPM lors d'un merge sur `main` avec des changesets.

### Publication manuelle

```bash
# Depuis la racine du monorepo
npm run release
```

### Gestion des versions avec Changesets

```bash
# Créer un changeset
npm run changeset

# Appliquer les changesets
npm run version-packages

# Publier
npm run release
```

### Structure du package publié

```
dist/
├── index.js              # Export principal
├── index.d.ts            # Types TypeScript
├── utopia.css            # Styles compilés
├── icons-list.json       # Liste des icônes
└── tokens/               # Tokens CSS par thème
    ├── club-employes/
    │   ├── light.css
    │   └── dark.css
    └── gifteo/
        ├── light.css
        └── dark.css
```

## 🔗 Exports du package

```javascript
// Composants
export { Button, Icon, Logo, Badge, Card, Checkbox, Switch } from '@club-employes/utopia'

// Layouts
export { DefaultLayout, Header, Menu } from '@club-employes/utopia'

// Thèmes
export { clubEmployesLight, clubEmployesDark, gifteoLight, gifteoDark } from '@club-employes/utopia'

// Theme Provider
export { ThemeProvider } from '@club-employes/utopia'

// Composables
export { useTheme, useFavicon, useScrollShadows } from '@club-employes/utopia'

// Types
export type { ThemeConfig, BrandTheme, ThemeMode } from '@club-employes/utopia'
```

## 🎨 Styles et CSS

### Import des styles

```javascript
// Tous les styles
import '@club-employes/utopia/styles'

// Thème spécifique
import '@club-employes/utopia/tokens/club-employes/light'
```

### Variables CSS disponibles

```css
/* Couleurs */
--utopia-color-primary
--utopia-color-secondary
--utopia-color-surface
--utopia-color-text

/* Espacement */
--utopia-space-xs
--utopia-space-sm
--utopia-space-md
--utopia-space-lg

/* Typographie */
--utopia-font-family
--utopia-font-size-sm
--utopia-font-size-base
--utopia-font-size-lg

/* Bordures */
--utopia-radius-sm
--utopia-radius-md
--utopia-radius-lg
```

## 🧪 Tests et Qualité

### Validation du design system

```bash
npm run lint
npm run type-check
```

### Intégration avec Storybook

Le design system est testé et documenté via Storybook dans `apps/storybook/`.

### Tests visuels

Intégration avec Chromatic pour les tests de régression visuelle.

## 🤝 Contribution

1. **Fork** le repository
2. **Créer une branche** : `git checkout -b feature/nouveau-composant`
3. **Développer** le composant avec les bonnes pratiques
4. **Créer une PR** (changeset automatique créé)
5. **Review et merge** (publication automatique)

### Conventions de nommage

- **Composants** : PascalCase (`Button`, `SearchBox`)
- **Props** : camelCase (`variant`, `isDisabled`)
- **Classes CSS** : kebab-case avec préfixe (`utopia-button--primary`)
- **Tokens** : kebab-case avec préfixe (`--utopia-color-primary`)

## 📚 Ressources

- [🌐 Demo en ligne](https://ds-utopia.vercel.app/)
- [📦 Package NPM](https://npmjs.com/package/@club-employes/utopia)
- [🐙 Repository GitHub](https://github.com/club-employes/ds)
- [📖 Documentation complète](../docs/README.md)

---

**Version actuelle** : 2.14.0  
**Licence** : MIT © Club Employés