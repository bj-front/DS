# Exemple d'intégration - Thème basé sur le domaine

Ce fichier montre un exemple complet et concret d'intégration de la fonctionnalité d'initialisation de thème basée sur le domaine.

## Structure du projet

```
my-app/
├── src/
│   ├── main.ts          ← Configuration du thème ici
│   ├── App.vue          ← ThemeProvider ici
│   └── ...
├── package.json
└── vite.config.ts
```

## 1. Installation

```bash
npm install @club-employes/utopia
```

## 2. Configuration dans `src/main.ts`

```typescript
import { createApp } from 'vue'
import { initializeTheme, type ThemeName } from '@club-employes/utopia'
import '@club-employes/utopia/style.css'
import App from './App.vue'
import router from './router'

/**
 * Détecte le thème à utiliser en fonction du domaine
 */
function getThemeFromDomain(): ThemeName {
  const hostname = window.location.hostname
  
  // Pour le développement local, permettre de forcer le thème via URL
  if (import.meta.env.DEV) {
    const params = new URLSearchParams(window.location.search)
    const forceTheme = params.get('theme')
    if (forceTheme) {
      console.log('🎨 Theme forced via URL:', forceTheme)
      return forceTheme as ThemeName
    }
  }
  
  // Production: détection par domaine
  // Gifteo domains
  if (
    hostname === 'gifteo.com' ||
    hostname === 'www.gifteo.com' ||
    hostname.endsWith('.gifteo.com') ||
    hostname.includes('gifteo')
  ) {
    return 'gifteo-light'
  }
  
  // Club Employés domains
  if (
    hostname === 'club-employes.com' ||
    hostname === 'www.club-employes.com' ||
    hostname.endsWith('.club-employes.com') ||
    hostname.includes('club-employes')
  ) {
    return 'club-employes-light'
  }
  
  // Fallback par défaut
  console.warn('⚠️ Domain not recognized, using default theme')
  return 'club-employes-light'
}

/**
 * Bootstrap de l'application avec initialisation du thème
 */
async function bootstrap() {
  const themeName = getThemeFromDomain()
  
  console.log('🚀 Starting application...')
  console.log('🌍 Domain:', window.location.hostname)
  console.log('🎨 Selected theme:', themeName)
  
  try {
    // ÉTAPE CRITIQUE: Initialiser le thème AVANT de créer l'app Vue
    // Cela évite le FOUC (Flash of Unstyled Content)
    await initializeTheme(themeName)
    console.log('✅ Theme initialized successfully')
  } catch (error) {
    console.error('❌ Failed to initialize theme:', error)
    // En cas d'erreur, tenter avec le thème par défaut
    try {
      await initializeTheme('club-employes-light')
      console.log('✅ Fallback theme loaded')
    } catch (fallbackError) {
      console.error('❌ Critical: Could not load any theme:', fallbackError)
    }
  }
  
  // Créer et monter l'application Vue
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
  
  console.log('✅ Application mounted')
}

// Démarrer l'application
bootstrap()
```

## 3. Configuration dans `src/App.vue`

```vue
<template>
  <ThemeProvider :theme="currentTheme">
    <RouterView />
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ThemeProvider, useTheme } from '@club-employes/utopia'

// Le composable useTheme détecte automatiquement le thème
// qui a été initialisé dans main.ts
const { currentTheme } = useTheme()
</script>

<style>
/* Styles globaux si nécessaire */
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
```

## 4. Utilisation dans les composants

```vue
<template>
  <div class="my-component">
    <Button variant="primary" @click="handleClick">
      Mon Bouton
    </Button>
    
    <Icon name="heart" size="medium" />
    
    <Card>
      <h2>Mon Contenu</h2>
      <p>Le thème est automatiquement appliqué!</p>
    </Card>
    
    <!-- Switch de thème - SEULEMENT le mode, pas la marque -->
    <div class="theme-switcher">
      <!-- ⚠️ La marque est verrouillée après initializeTheme() -->
      <!-- Ne pas afficher de bouton pour changer la marque en production -->
      
      <!-- ✅ Mode switcher - toujours disponible -->
      <Button @click="toggleMode">
        {{ currentMode === 'light' ? '🌙 Dark' : '☀️ Light' }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Card, Icon, useTheme } from '@club-employes/utopia'

const { 
  currentMode, 
  toggleMode,
  // isBrandLocked est true après initializeTheme()
  isBrandLocked
} = useTheme()

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<style scoped>
.my-component {
  padding: var(--utopia-space-lg);
  background: var(--utopia-color-surface);
  color: var(--utopia-color-text-primary);
}

.theme-switcher {
  display: flex;
  gap: var(--utopia-space-md);
  margin-top: var(--utopia-space-lg);
}
</style>
```

## 5. Tests en local

### Test avec URL parameters

```bash
# Club Employés Light
http://localhost:5173/?theme=club-employes-light

# Club Employés Dark
http://localhost:5173/?theme=club-employes-dark

# Gifteo Light
http://localhost:5173/?theme=gifteo-light

# Gifteo Dark
http://localhost:5173/?theme=gifteo-dark
```

### Test avec /etc/hosts (simulation de domaines)

```bash
# Éditer /etc/hosts
sudo nano /etc/hosts

# Ajouter ces lignes
127.0.0.1 local.club-employes.com
127.0.0.1 local.gifteo.com

# Tester
http://local.club-employes.com:5173
http://local.gifteo.com:5173
```

## 6. Configuration Vite pour les domaines locaux

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // Permet l'accès via les domaines locaux
    port: 5173,
    strictPort: true,
  }
})
```

## 7. Variables d'environnement (optionnel)

```bash
# .env.development
VITE_DEFAULT_THEME=club-employes-light

# .env.production
VITE_DEFAULT_THEME=auto
```

```typescript
// Utilisation dans main.ts
const defaultTheme = import.meta.env.VITE_DEFAULT_THEME || 'club-employes-light'
```

## 8. Configuration TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
```

```typescript
// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_THEME?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## 9. Gestion d'erreurs avancée

```typescript
// src/utils/theme.ts
import { initializeTheme, type ThemeName, isValidThemeName } from '@club-employes/utopia'

export async function safeInitializeTheme(
  themeName: string,
  fallback: ThemeName = 'club-employes-light'
): Promise<void> {
  // Valider le nom du thème
  if (!isValidThemeName(themeName)) {
    console.warn(`Invalid theme name: ${themeName}, using fallback: ${fallback}`)
    themeName = fallback
  }
  
  try {
    await initializeTheme(themeName as ThemeName)
  } catch (error) {
    console.error('Theme initialization failed:', error)
    
    // Tenter avec le fallback
    if (themeName !== fallback) {
      console.log('Trying fallback theme:', fallback)
      await initializeTheme(fallback)
    } else {
      throw new Error('Could not initialize any theme')
    }
  }
}

// Usage dans main.ts
import { safeInitializeTheme } from './utils/theme'

async function bootstrap() {
  const themeName = getThemeFromDomain()
  await safeInitializeTheme(themeName)
  
  // Rest of bootstrap...
}
```

## 10. Support du mode dark automatique

```typescript
// Détecter la préférence système
function getSystemThemeMode(): 'light' | 'dark' {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function getThemeFromDomain(): ThemeName {
  const hostname = window.location.hostname
  const mode = getSystemThemeMode()
  
  // Déterminer la marque
  let brand = 'club-employes'
  if (hostname.includes('gifteo')) {
    brand = 'gifteo'
  }
  
  // Combiner marque + mode système
  return `${brand}-${mode}` as ThemeName
}
```

## FAQ

### Q: Le thème clignote encore au chargement

**R:** Assurez-vous que `initializeTheme()` est appelé **avant** `app.mount('#app')`. La fonction doit être `await`ée.

### Q: Comment débugger le chargement du thème ?

**R:** Ouvrez la console du navigateur, vous verrez les logs :
- 🎨 Initializing theme: ...
- ✅ Theme initialized successfully
- ✅ Theme already preloaded via initializeTheme()

### Q: Puis-je utiliser plusieurs domaines pour le même thème ?

**R:** Oui, utilisez des conditions multiples :
```typescript
if (
  hostname.includes('gifteo') || 
  hostname.includes('gift') || 
  hostname === 'app.example.com'
) {
  return 'gifteo-light'
}
```

### Q: Comment gérer les sous-domaines ?

**R:** Utilisez `hostname.split('.')[0]` pour extraire le sous-domaine :
```typescript
const subdomain = hostname.split('.')[0]
if (subdomain === 'gifteo') {
  return 'gifteo-light'
}
```

## Support

Pour plus d'informations, consultez :
- [THEME_INITIALIZATION.md](./THEME_INITIALIZATION.md) - Documentation complète
- [README.md](./README.md) - Documentation générale

