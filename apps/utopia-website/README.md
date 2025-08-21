# 🌐 Utopia Website - Documentation & Showcase

L'application de démonstration et documentation du design system Utopia. Cette application Vue 3 présente tous les composants, tokens et outils du design system avec des exemples interactifs.

## 🎯 Vue d'ensemble

Utopia Website est une application Vue 3 moderne qui sert de :
- 📚 **Documentation interactive** - Présentation de tous les composants
- 🎨 **Showcase** - Démonstrations et exemples d'utilisation
- 🧪 **Playground** - Tests et expérimentations
- 🔧 **Outils de développement** - Générateurs et validateurs

## 📋 Table des matières

- [Installation](#-installation)
- [Architecture](#-architecture)
- [Développement](#-développement)
- [Outils CLI](#-outils-cli)
- [Structure des pages](#-structure-des-pages)
- [Génération automatique](#-génération-automatique)
- [Validation](#-validation)
- [Déploiement](#-déploiement)

## 🚀 Installation

### Prérequis
- Node.js 20+
- npm 10+

### Installation locale

```bash
git clone https://github.com/club-employes/ds.git
cd ds/apps/utopia-website
npm install
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Avec rechargement automatique des tokens
npm run dev:vite
```

L'application sera disponible sur `http://localhost:5173`

## 🏗️ Architecture

### Structure des dossiers

```
apps/utopia-website/
├── src/
│   ├── components/           # Composants de l'application
│   │   ├── layouts/         # Layouts spécifiques au site
│   │   └── icons/           # Icônes personnalisées
│   ├── domains/             # Organisation par domaines
│   │   ├── design-system/   # Pages du design system
│   │   ├── showcase/        # Pages de démonstration
│   │   └── shared/          # Composants partagés
│   ├── generated/           # Contenu généré automatiquement
│   │   ├── pages/           # Pages générées par CLI
│   │   ├── routes.ts        # Routes générées
│   │   └── menu-structure.ts # Structure de menu
│   ├── pages/               # Pages statiques
│   ├── config/              # Configuration
│   │   └── menu.json        # Configuration du menu
│   └── router/              # Configuration du routeur
├── scripts/                 # Scripts de génération
├── public/                  # Assets statiques
└── design-system-validator.cjs # Validateur du DS
```

### Architecture par domaines

L'application est organisée en domaines fonctionnels :

#### Design System Domain
```
src/domains/design-system/
├── pages/                   # Pages de documentation des composants
│   ├── ColorsPage.vue      # Documentation des couleurs
│   ├── IconsPage.vue       # Galerie d'icônes
│   ├── TypographyPage.vue  # Guide typographique
│   └── TokensPage.vue      # Documentation des tokens
├── components/             # Composants spécifiques au DS
└── composables/           # Logique métier du DS
```

#### Showcase Domain
```
src/domains/showcase/
├── pages/
│   └── ShowcasePage.vue    # Page de démonstration
├── components/             # Composants de démonstration
└── composables/           # Logique métier showcase
```

#### Shared Domain
```
src/domains/shared/
├── components/
│   └── AppLayout.vue       # Layout principal de l'app
├── router/
│   ├── index.ts           # Configuration du routeur
│   └── NotFoundPage.vue   # Page 404
└── types/
    └── router.d.ts        # Types du routeur
```

## 🛠️ Développement

### Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualisation du build |
| `npm run lint` | Vérification du code |
| `npm run format` | Formatage du code |
| `npm run type-check` | Vérification TypeScript |
| `npm run validate` | Validation complète |
| `npm run create:component` | Générateur de composant |
| `npm run create:page` | Générateur de page |

### Configuration de développement

#### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173
  }
})
```

#### TypeScript Configuration
```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🔧 Outils CLI

L'application dispose de deux outils CLI puissants pour automatiser la création de contenu.

### Générateur de Composant

Crée un nouveau composant dans le design system avec sa page de documentation.

```bash
npm run create:component
```

**Fonctionnalités :**
- ✅ Création du composant Vue dans `packages/utopia/src/components/`
- ✅ Génération des fichiers TypeScript (types, index)
- ✅ Mise à jour automatique des exports
- ✅ Création de la page de documentation
- ✅ Ajout automatique au menu
- ✅ Génération des routes

**Workflow interactif :**
1. Choix du type de composant (atoms, molecules, organisms, etc.)
2. Nom du composant
3. Sélection de l'icône
4. Confirmation et génération

**Fichiers générés :**
```
packages/utopia/src/components/atoms/MonComposant/
├── MonComposant.vue        # Composant principal
├── index.ts               # Export
└── types.ts              # Types TypeScript

apps/utopia-website/src/generated/pages/atoms/
└── MonComposantPage.vue   # Page de documentation
```

### Générateur de Page

Crée une nouvelle page dans l'application website.

```bash
npm run create:page
```

**Fonctionnalités :**
- ✅ Création de la page Vue avec template
- ✅ Ajout automatique au menu
- ✅ Génération des routes
- ✅ Support des sections
- ✅ Sélection d'icône

**Workflow interactif :**
1. Nom de la page
2. Choix de la section (ou hors section)
3. Sélection de l'icône
4. Route personnalisée
5. Confirmation et génération

### Script de Génération Complète

```bash
npm run generate:menu
# ou pour forcer la régénération
npm run generate:all
```

Génère automatiquement :
- Structure complète du menu
- Pages manquantes
- Routes pour tous les composants

## 📄 Structure des Pages

### Template de Page Standard

```vue
<template>
  <PageLayout 
    :title="'Ma Page'"
    :icon="'FileText'"
    :description="'Description de la page'"
    :section="'Section'"
  >
    <!-- Contenu de la page -->
  </PageLayout>
</template>

<script setup lang="ts">
import { PageLayout } from '@/components'
</script>
```

### Template de Page de Composant

```vue
<template>
  <ComponentLayout 
    :title="'Button'"
    :icon="'Package-first'"
    :type="'Atoms'"
  >
    <template #examples>
      <!-- Exemples interactifs -->
    </template>
    
    <template #documentation>
      <!-- Documentation du composant -->
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components'
import { Button } from '@club-employes/utopia'
</script>
```

### Layouts Disponibles

#### PageLayout
Layout standard pour les pages de contenu.

**Props :**
- `title` - Titre de la page
- `icon` - Icône (nom Lucide)
- `description` - Description sous le titre
- `section` - Badge de section

#### ComponentLayout
Layout spécialisé pour la documentation des composants.

**Props :**
- `title` - Nom du composant
- `icon` - Icône du composant
- `type` - Type (Atoms, Molecules, etc.)

**Slots :**
- `#examples` - Exemples interactifs
- `#documentation` - Documentation détaillée

## 🤖 Génération Automatique

### Menu Configuration

Le menu est configuré via `src/config/menu.json` :

```json
{
  "menuItems": [
    {
      "key": "home",
      "label": "Accueil",
      "icon": "Home",
      "to": "/"
    },
    {
      "key": "design-system-section",
      "type": "section",
      "label": "Design System"
    },
    {
      "key": "button",
      "label": "Button",
      "icon": "Package-first",
      "to": "/design-system/atoms/button"
    }
  ]
}
```

### Génération des Routes

Les routes sont générées automatiquement dans `src/generated/routes.ts` :

```typescript
export const generatedRoutes: RouteRecordRaw[] = [
  {
    path: '/design-system/atoms/button',
    name: 'atoms-Button',
    component: () => import('@/generated/pages/atoms/ButtonPage.vue'),
    meta: { title: "Button", section: "Atoms" }
  }
]
```

### Métadonnées des Icônes

Les icônes des composants sont stockées dans `src/generated/component-icons.json` :

```json
{
  "atoms-Button": "Package-first",
  "molecules-SearchBox": "Search"
}
```

## ✅ Validation

### Validateur du Design System

Le fichier `design-system-validator.cjs` valide la cohérence du design system :

```bash
npm run validate:design-system
```

**Vérifications :**
- ✅ Cohérence des composants
- ✅ Validation des tokens
- ✅ Vérification des exports
- ✅ Contrôle des types

### Validation ESLint

```bash
npm run lint          # Correction automatique
npm run lint:check    # Vérification uniquement
npm run lint:strict   # Mode strict (0 warnings)
```

### Configuration ESLint

```typescript
// eslint.config.ts
export default [
  ...vue(),
  ...typescript(),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/multi-word-component-names': 'off'
    }
  }
]
```

## 🚀 Déploiement

### Build de Production

```bash
npm run build
```

Génère :
- `dist/` - Application compilée
- Assets optimisés
- Chunks séparés par route

### Vercel Deployment

L'application est automatiquement déployée sur Vercel via GitHub Actions.

**Configuration Vercel** (`vercel.json`) :
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Variables d'environnement

```env
VERCEL_TOKEN=xxx
VERCEL_ORG_ID=xxx
VERCEL_PROJECT_ID=xxx
```

### Preview Deployments

Chaque PR génère automatiquement un déploiement de prévisualisation.

## 🔄 Workflow de Développement

### Ajouter un nouveau composant au DS

1. **Utiliser le CLI** :
   ```bash
   npm run create:component
   ```

2. **Développer le composant** dans `packages/utopia/`

3. **Personnaliser la page** dans `src/generated/pages/`

4. **Tester localement** :
   ```bash
   npm run dev
   ```

### Ajouter une nouvelle page au site

1. **Utiliser le CLI** :
   ```bash
   npm run create:page
   ```

2. **Personnaliser le contenu** de la page générée

3. **Vérifier le menu** et la navigation

### Modifier la structure du menu

1. **Éditer** `src/config/menu.json`

2. **Régénérer** si nécessaire :
   ```bash
   npm run generate:menu
   ```

## 🎨 Personnalisation

### Thèmes

L'application supporte les thèmes du design system :

```vue
<script setup>
import { useTheme } from '@club-employes/utopia'

const { theme, setTheme } = useTheme()

// Changer de thème
setTheme('club-employes', 'dark')
</script>
```

### Styles Personnalisés

```vue
<style scoped>
/* Utilisation des tokens du DS */
.my-component {
  background: var(--utopia-color-surface);
  padding: var(--utopia-space-md);
  border-radius: var(--utopia-radius-md);
}
</style>
```

### Composables Disponibles

```typescript
import { 
  useTheme,           // Gestion des thèmes
  useFavicon,         // Gestion du favicon
  useScrollShadows    // Ombres de scroll
} from '@club-employes/utopia'
```

## 🧪 Tests

### Tests de Validation

```bash
npm run validate      # Validation complète
npm run type-check    # Types TypeScript
npm run lint:strict   # Code quality
```

### Tests Visuels

Intégration avec Chromatic pour les tests de régression visuelle des composants.

## 📚 Ressources

- [🎨 Design System Package](../../packages/utopia/README.md)
- [🌐 Application en ligne](https://ds-utopia.vercel.app/)
- [🐙 Repository GitHub](https://github.com/club-employes/ds)
- [📖 Documentation globale](../../README.md)

---

**Version** : 0.0.0 (privée)  
**Framework** : Vue 3 + Vite  
**Licence** : ISC © Club Employés