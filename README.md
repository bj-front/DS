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

## 🤖 Automatisation

Ce projet utilise GitHub Actions pour automatiser :

- ✅ **Build et tests** automatiques sur chaque PR
- ✅ **Création de changesets** automatique pour nouveaux composants
- ✅ **Publication npm** automatique sur merge
- ✅ **Versioning sémantique** avec notes de release

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

- [🤖 Automatisation](.github/AUTOMATION.md)
- [📝 Changesets](.changeset/README.md)
- [🌐 Demo en ligne](https://ds-utopia.vercel.app/)

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
