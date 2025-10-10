# Initialisation des thèmes basée sur le domaine

Ce guide explique comment initialiser un thème spécifique basé sur l'URL de votre application, **sans Flash Of Unstyled Content (FOUC)**.

## Problème

Par défaut, si vous laissez Vue monter l'application avant de charger le CSS du thème, vous verrez un flash de contenu non stylisé pendant quelques millisecondes.

## Solution

Utilisez la fonction `initializeTheme()` **avant** de créer et monter votre application Vue.

## Installation

```bash
npm install @utopia/design-system
```

## Usage

### 1. Dans votre fichier `main.ts` ou `main.js`

```typescript
import { createApp } from 'vue'
import { initializeTheme, ThemeProvider } from '@utopia/design-system'
import '@utopia/design-system/style.css'
import App from './App.vue'

// 🎨 ÉTAPE 1: Détecter le thème depuis le domaine
function getThemeFromDomain(): string {
  const hostname = window.location.hostname
  
  // Exemple de logique de détection
  if (hostname.includes('gifteo')) {
    return 'gifteo-light'
  }
  
  if (hostname.includes('club-employes')) {
    return 'club-employes-light'
  }
  
  // Thème par défaut
  return 'club-employes-light'
}

// 🎨 ÉTAPE 2: Initialiser le thème AVANT de créer l'app
async function bootstrap() {
  const themeName = getThemeFromDomain()
  
  try {
    // Charge et injecte le CSS du thème de manière synchrone
    await initializeTheme(themeName)
    console.log('✅ Theme initialized:', themeName)
  } catch (error) {
    console.error('❌ Failed to initialize theme:', error)
    // Continuer quand même avec le thème par défaut
  }
  
  // 🎨 ÉTAPE 3: Créer et monter l'app Vue (pas de FOUC !)
  const app = createApp(App)
  app.mount('#app')
}

// Démarrer l'application
bootstrap()
```

### 2. Dans votre composant racine `App.vue`

```vue
<template>
  <ThemeProvider :theme="currentTheme">
    <RouterView />
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ThemeProvider, useTheme } from '@utopia/design-system'

// Le composable useTheme détectera automatiquement le thème déjà initialisé
const { currentTheme } = useTheme()
</script>
```

## Thèmes disponibles

| Nom du thème | Description |
|-------------|-------------|
| `club-employes-light` | Club Employés - Mode clair |
| `club-employes-dark` | Club Employés - Mode sombre |
| `gifteo-light` | Gifteo - Mode clair |
| `gifteo-dark` | Gifteo - Mode sombre |

## Exemples de détection de domaine

### Par domaine complet

```typescript
function getThemeFromDomain(): string {
  const hostname = window.location.hostname
  
  switch (hostname) {
    case 'gifteo.com':
    case 'www.gifteo.com':
    case 'gifteo.fr':
      return 'gifteo-light'
      
    case 'club-employes.com':
    case 'www.club-employes.com':
      return 'club-employes-light'
      
    default:
      return 'club-employes-light'
  }
}
```

### Par sous-domaine

```typescript
function getThemeFromDomain(): string {
  const hostname = window.location.hostname
  const subdomain = hostname.split('.')[0]
  
  switch (subdomain) {
    case 'gifteo':
      return 'gifteo-light'
    case 'club-employes':
    case 'ce':
      return 'club-employes-light'
    default:
      return 'club-employes-light'
  }
}
```

### Avec environnements (dev, staging, prod)

```typescript
function getThemeFromDomain(): string {
  const hostname = window.location.hostname
  
  // Environnements de développement
  if (hostname === 'localhost' || hostname.includes('127.0.0.1')) {
    // Lire depuis une variable d'environnement ou URL param
    const urlParams = new URLSearchParams(window.location.search)
    const themeParam = urlParams.get('theme')
    if (themeParam) return themeParam
    return 'club-employes-light'
  }
  
  // Staging
  if (hostname.includes('staging-gifteo')) return 'gifteo-light'
  if (hostname.includes('staging-ce')) return 'club-employes-light'
  
  // Production
  if (hostname.includes('gifteo')) return 'gifteo-light'
  if (hostname.includes('club-employes')) return 'club-employes-light'
  
  return 'club-employes-light'
}
```

### Avec mode dark/light basé sur la préférence système

```typescript
function getThemeFromDomain(): string {
  const hostname = window.location.hostname
  
  // Détecter la préférence système
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const mode = prefersDark ? 'dark' : 'light'
  
  // Détecter la marque
  let brand = 'club-employes'
  if (hostname.includes('gifteo')) {
    brand = 'gifteo'
  }
  
  return `${brand}-${mode}`
}
```

## API

### `initializeTheme(themeName: string): Promise<void>`

Initialise et injecte le CSS du thème dans le document.

**Paramètres:**
- `themeName` - Le nom du thème à charger (ex: `'club-employes-light'`)

**Throws:**
- `Error` si le nom du thème est invalide
- `Error` si le CSS ne peut pas être chargé

**Exemple:**
```typescript
await initializeTheme('gifteo-light')
```

### `getActiveTheme(): ThemeName | null`

Retourne le nom du thème actuellement actif.

**Retourne:**
- Le nom du thème actif ou `null` si aucun thème n'est chargé

**Exemple:**
```typescript
const activeTheme = getActiveTheme()
console.log('Current theme:', activeTheme) // 'gifteo-light'
```

### `isValidThemeName(themeName: string): boolean`

Vérifie si un nom de thème est valide.

**Paramètres:**
- `themeName` - Le nom à valider

**Retourne:**
- `true` si le nom est valide, `false` sinon

**Exemple:**
```typescript
if (isValidThemeName('gifteo-light')) {
  await initializeTheme('gifteo-light')
}
```

## Verrouillage de la marque (Brand Locking)

Lorsque vous utilisez `initializeTheme()`, **la marque est automatiquement verrouillée**. Cela signifie que :

✅ **L'utilisateur peut changer** : Le mode (light/dark)  
❌ **L'utilisateur ne peut PAS changer** : La marque (club-employes/gifteo)

### Pourquoi ?

Dans une application multi-tenant, la marque doit correspondre au domaine. Un utilisateur sur `gifteo.com` ne devrait pas pouvoir switch vers le thème `club-employes`.

### Comportement

```typescript
import { useTheme, initializeTheme } from '@club-employes/utopia'

// Après initializeTheme()
await initializeTheme('gifteo-light')

const { toggleBrand, toggleMode, isBrandLocked } = useTheme()

console.log(isBrandLocked.value) // true

// ✅ Ceci fonctionne - change le mode
toggleMode() // gifteo-light → gifteo-dark

// ❌ Ceci ne fait rien - la marque est verrouillée
toggleBrand() // Affiche un warning dans la console
// ⚠️ Brand is locked and cannot be changed. Brand is determined by the domain.
```

### Interface utilisateur

Dans votre UI, vous pouvez masquer/désactiver les contrôles de changement de marque :

```vue
<template>
  <div class="theme-controls">
    <!-- Toggle mode - toujours disponible -->
    <Button @click="toggleMode">
      {{ currentMode === 'light' ? '🌙 Dark' : '☀️ Light' }}
    </Button>
    
    <!-- Toggle brand - seulement si déverrouillé -->
    <Button 
      v-if="!isBrandLocked"
      @click="toggleBrand"
    >
      Switch Brand
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@club-employes/utopia'

const { toggleMode, toggleBrand, isBrandLocked, currentMode } = useTheme()
</script>
```

### Déverrouiller pour le showcase/demo

Pour les applications de démonstration (comme `utopia-website`), vous pouvez déverrouiller la marque :

```typescript
import { initializeTheme, unlockBrand } from '@club-employes/utopia'

// Initialiser le thème
await initializeTheme('club-employes-light')

// Déverrouiller pour permettre les tests
unlockBrand()

// Maintenant toggleBrand() fonctionnera
```

**⚠️ Important** : N'utilisez `unlockBrand()` que pour les applications de showcase/demo, **jamais en production** !

## FAQ

### Est-ce que je peux changer de thème après l'initialisation ?

Oui ! Le `ThemeProvider` gère automatiquement les changements de thème avec des transitions fluides.

```typescript
import { useTheme } from '@utopia/design-system'

const { setBrand, setMode } = useTheme()

// Changer de marque
setBrand('gifteo')

// Changer de mode
setMode('dark')
```

### Comment tester en local avec différents thèmes ?

Ajoutez un paramètre d'URL pour forcer un thème spécifique :

```typescript
function getThemeFromDomain(): string {
  // En développement, permettre de forcer le thème via URL
  if (import.meta.env.DEV) {
    const params = new URLSearchParams(window.location.search)
    const forceTheme = params.get('theme')
    if (forceTheme && isValidThemeName(forceTheme)) {
      return forceTheme
    }
  }
  
  // Logique normale...
  return 'club-employes-light'
}
```

Puis testez avec : `http://localhost:5173/?theme=gifteo-dark`

### Le thème est-il persisté entre les rechargements de page ?

Oui, le thème est automatiquement sauvegardé dans `localStorage` et sera restauré au prochain chargement.

### Que se passe-t-il si `initializeTheme()` échoue ?

L'application continuera de fonctionner, mais le style par défaut du navigateur sera appliqué jusqu'à ce que le `ThemeProvider` charge le thème. C'est pourquoi il est important de gérer les erreurs :

```typescript
try {
  await initializeTheme(themeName)
} catch (error) {
  console.error('Theme initialization failed:', error)
  // Continuer avec un thème par défaut
  await initializeTheme('club-employes-light')
}
```

## Avantages

✅ **Pas de FOUC** - Le CSS est chargé avant le rendu de l'application  
✅ **Performance** - Un seul thème CSS est chargé initialement  
✅ **Flexibilité** - Logique de détection personnalisable  
✅ **Compatibilité** - Fonctionne avec le système de thèmes existant  
✅ **Persistance** - Sauvegarde automatique dans localStorage  

## Support

Pour toute question ou problème, consultez le README principal ou contactez l'équipe du Design System.

