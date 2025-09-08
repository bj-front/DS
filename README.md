# 🎨 Design System Utopia

Un design system moderne pour Club Employés avec automatisation complète CI/CD.

[![npm version](https://badge.fury.io/js/@club-employes%2Futopia.svg)](https://badge.fury.io/js/@club-employes%2Futopia)
[![Build Status](https://github.com/club-employes/ds/workflows/CI%20Design%20System/badge.svg)](https://github.com/club-employes/ds/actions)

## 📦 Packages

- **[@club-employes/utopia](https://npmjs.com/package/@club-employes/utopia)** - Design system principal
- **utopia-website** - Application de démonstration

## 🚀 Installation

```bash
npm install @club-employes/utopia
```

## 🎯 Utilisation

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

## 🏗️ Développement

### Prérequis
- Node.js 20+
- npm 8+

### Installation locale
```bash
git clone https://github.com/club-employes/ds.git
cd ds
npm install
```

### Scripts disponibles

```bash
# Développement du design system
npm run dev

# Build complet (tokens + librairie)
npm run build

# Build des tokens uniquement
npm run build:tokens

# Créer un changeset
npm run changeset

# Publier (automatique via GitHub Actions)
npm run release
```

## 🚀 Release Manuelle

Si vous devez faire une release manuelle (par exemple, si l'automatisation ne fonctionne pas), voici les étapes :

### 1. Créer un changeset
```bash
# Créer un changeset pour vos modifications
npm run changeset
```

### 2. Mettre à jour les versions
```bash
# Appliquer les changesets et mettre à jour les versions
npm run version-packages
```

### 3. Commiter les changements de version
```bash
# Commiter les changements de version
git add .
git commit -m "chore: version packages to X.X.X"
git push origin votre-branche
```

### 4. Merger sur main
```bash
# Créer une PR vers main
gh pr create --title "Release vX.X.X" --body "Description des changements"

# Ou merger directement si vous avez les droits
git checkout main
git merge votre-branche
git push origin main
```

### 5. Publication automatique
Une fois mergé sur `main`, le workflow GitHub Actions va automatiquement :
- ✅ Détecter les changements de version
- ✅ Builder le design system
- ✅ Publier sur NPM
- ✅ Créer une GitHub Release

### 🔍 Vérification
```bash
# Vérifier que la version a été publiée
npm view @club-employes/utopia version

# Vérifier les releases GitHub
gh release list
```

## 🤖 Automatisation

Ce projet utilise GitHub Actions pour automatiser :

- ✅ **Build et tests** automatiques sur chaque PR
- ✅ **Création de changesets** automatique pour nouveaux composants
- ✅ **Publication npm** automatique sur merge
- ✅ **Versioning sémantique** avec notes de release

### 🔄 Flux automatique des changesets

Le système détecte automatiquement les changements et crée des changesets :

1. **Commit hook** : Crée automatiquement un changeset lors du commit
2. **Version locale** : `npm run version-packages` met à jour les versions
3. **Merge sur main** : Le workflow publie automatiquement sur NPM

### 📝 Types de changements détectés

- **Minor** : Nouveaux composants, nouvelles fonctionnalités
- **Patch** : Corrections de bugs, améliorations mineures
- **Major** : Changements breaking (détectés via mots-clés)

### Configuration rapide

```bash
./scripts/setup-automation.sh
```

Consultez [AUTOMATION.md](.github/AUTOMATION.md) pour la documentation complète.

## 📁 Structure du projet

```
DS/
├── packages/
│   └── utopia/                 # 📦 Design system
│       ├── src/
│       │   ├── components/     # 🧩 Composants Vue
│       │   ├── tokens/         # 🎨 Design tokens
│       │   └── themes/         # 🌈 Thèmes
│       └── dist/              # 📤 Build de la librairie
├── apps/
│   └── utopia-website/        # 🌐 App de démonstration
├── .github/
│   └── workflows/             # 🤖 GitHub Actions
└── .changeset/                # 📝 Gestion des versions
```

## 🎨 Composants disponibles

### Atomes
- **Button** - Boutons avec variants (primary, secondary, outline, ghost)
- **Icon** - Icônes SVG avec système de noms
- **Logo** - Logos des marques (Club Employés, Gifteo)

### Thèmes
- **Club Employés** (light/dark)
- **Gifteo** (light/dark)

### Design Tokens
- 🎨 Couleurs (brand, semantic, neutral)
- 📏 Espacements et tailles
- 🔤 Typographie
- 🎯 Composants UI

## 🔄 Workflow de contribution

1. **Fork** le repository
2. **Créer une branche** : `git checkout -b feature/nouveau-composant`
3. **Développer** votre composant
4. **Créer une PR** (changeset automatique créé)
5. **Review et merge** (publication automatique)

## 📚 Documentation

### 📖 Documentation Complète
- [📚 **Documentation Technique Complète**](docs/README.md) - Guide complet pour les développeurs

### 📦 Documentation par Projet
- [🎨 **Design System Package**](packages/utopia/README.md) - Package NPM principal
- [🌐 **Website Application**](apps/utopia-website/README.md) - Documentation interactive
- [📖 **Storybook Application**](apps/storybook/README.md) - Tests visuels et stories

### 🤖 Automatisation et Processus
- [🤖 Automatisation](.github/AUTOMATION.md) - GitHub Actions et CI/CD
- [📝 Changesets](.changeset/README.md) - Gestion des versions

### 🌐 Applications en Ligne
- [🌐 Demo en ligne](https://ds-utopia.vercel.app/) - Documentation interactive
- [📖 Storybook](https://main--673cf2b1e9d0b7c5f2b7b7e7.chromatic.com/) - Stories et tests visuels

## 🔗 Liens utiles

- [📦 Package npm](https://npmjs.com/package/@club-employes/utopia)
- [🐙 Repository GitHub](https://github.com/club-employes/ds)
- [🎯 Issues et demandes](https://github.com/club-employes/ds/issues)

## 📄 Licence

MIT © Club Employés

---

<p align="center">
  <strong>Design System automatisé avec ❤️ pour Club Employés</strong>
</p># Test automation fix
