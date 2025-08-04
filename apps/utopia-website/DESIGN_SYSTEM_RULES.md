# 🎨 Règles du Design System Utopia

Ce document explique les règles de développement strictes mises en place pour garantir l'utilisation cohérente du design system Utopia.

## 🚨 Règles ESLint Strictes

### ❌ Valeurs CSS en dur interdites

```css
/* ❌ INTERDIT */
.my-component {
  padding: 16px;
  margin: 1rem;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  font-size: 18px;
  border-radius: 8px;
}
```

```css
/* ✅ CORRECT */
.my-component {
  padding: var(--spacing-4);
  margin: var(--spacing-4);
  color: var(--theme-colors-primary-500);
  background: var(--theme-colors-primary-50);
  font-size: var(--font-size-lg);
  border-radius: var(--border-radius-base);
}
```

### ❌ TypeScript any interdit

```typescript
// ❌ INTERDIT
function processData(data: any): any {
  return data.something
}

// ✅ CORRECT
interface DataInterface {
  something: string
}

function processData(data: DataInterface): string {
  return data.something
}
```

## 📏 Tokens Disponibles

### 🔲 Spacing (Espacement)
```css
var(--spacing-0)   /* 0px */
var(--spacing-1)   /* 4px */
var(--spacing-2)   /* 8px */
var(--spacing-3)   /* 12px */
var(--spacing-4)   /* 16px */
var(--spacing-5)   /* 20px */
var(--spacing-6)   /* 24px */
var(--spacing-8)   /* 32px */
var(--spacing-10)  /* 40px */
var(--spacing-12)  /* 48px */
var(--spacing-16)  /* 64px */
var(--spacing-20)  /* 80px */
var(--spacing-24)  /* 96px */
var(--spacing-32)  /* 128px */
```

### 🎨 Colors (Couleurs)
```css
/* Couleurs primaires */
var(--theme-colors-primary-50)   /* Très clair */
var(--theme-colors-primary-100)
var(--theme-colors-primary-200)
var(--theme-colors-primary-300)
var(--theme-colors-primary-400)
var(--theme-colors-primary-500)  /* Couleur principale */
var(--theme-colors-primary-600)
var(--theme-colors-primary-700)
var(--theme-colors-primary-800)
var(--theme-colors-primary-900)  /* Très foncé */

/* Couleurs de surface */
var(--theme-colors-surface-background)  /* Arrière-plan */
var(--theme-colors-surface-card)        /* Cartes/composants */

/* Couleurs de texte */
var(--theme-colors-text-primary)    /* Texte principal */
var(--theme-colors-text-secondary)  /* Texte secondaire */
var(--theme-colors-text-muted)      /* Texte en sourdine */
var(--theme-colors-text-inverse)    /* Texte inversé (blanc) */

/* Couleurs de bordure */
var(--theme-colors-border-default)  /* Bordure par défaut */
var(--theme-colors-border-muted)    /* Bordure discrète */

/* Couleurs d'état */
var(--theme-colors-state-success)   /* Succès (vert) */
var(--theme-colors-state-warning)   /* Attention (orange) */
var(--theme-colors-state-error)     /* Erreur (rouge) */
```

### ✏️ Typography (Typographie)
```css
/* Tailles de police */
var(--font-size-xs)    /* 12px */
var(--font-size-sm)    /* 14px */
var(--font-size-base)  /* 16px */
var(--font-size-lg)    /* 18px */
var(--font-size-xl)    /* 20px */
var(--font-size-2xl)   /* 24px */
var(--font-size-3xl)   /* 30px */
var(--font-size-4xl)   /* 36px */
var(--font-size-5xl)   /* 48px */

/* Poids de police */
var(--font-weight-light)     /* 300 */
var(--font-weight-normal)    /* 400 */
var(--font-weight-medium)    /* 500 */
var(--font-weight-semibold)  /* 600 */
var(--font-weight-bold)      /* 700 */

/* Hauteur de ligne */
var(--font-line-height-tight)    /* 1.25 */
var(--font-line-height-normal)   /* 1.5 */
var(--font-line-height-relaxed)  /* 1.75 */

/* Familles de police */
var(--font-family-sans)  /* Inter, sans-serif */
var(--font-family-mono)  /* JetBrains Mono, monospace */
```

### 🔲 Borders (Bordures)
```css
/* Largeurs de bordure */
var(--border-width-0)  /* 0px */
var(--border-width-1)  /* 1px */
var(--border-width-2)  /* 2px */
var(--border-width-4)  /* 4px */

/* Rayons de bordure */
var(--border-radius-none)  /* 0px */
var(--border-radius-sm)    /* 4px */
var(--border-radius-base)  /* 8px */
var(--border-radius-md)    /* 12px */
var(--border-radius-lg)    /* 16px */
var(--border-radius-xl)    /* 24px */
var(--border-radius-full)  /* 9999px (cercle) */
```

### 🌑 Shadows (Ombres)
```css
var(--shadow-none)  /* Aucune ombre */
var(--shadow-sm)    /* Ombre subtile */
var(--shadow-base)  /* Ombre standard */
var(--shadow-md)    /* Ombre moyenne */
var(--shadow-lg)    /* Ombre large */
var(--shadow-xl)    /* Ombre extra-large */
```

## 🛠️ Exemples d'Usage

### Composant Vue avec Props Typées
```vue
<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
    <Button 
      :variant="buttonVariant" 
      @click="handleClick"
    >
      {{ buttonText }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { ButtonVariant } from '@club-employes/utopia'
import { Button } from '@club-employes/utopia'

// ✅ Props typées obligatoires
interface Props {
  title: string
  description: string
  buttonText: string
  buttonVariant?: ButtonVariant
}

// ✅ Interface pour les emits
interface Emits {
  click: []
}

const props = withDefaults(defineProps<Props>(), {
  buttonVariant: 'primary'
})

const emit = defineEmits<Emits>()

// ✅ Type de retour explicite
const handleClick = (): void => {
  emit('click')
}
</script>

<style scoped>
/* ✅ Utilisation exclusive des tokens */
.card {
  padding: var(--spacing-6);
  background: var(--theme-colors-surface-card);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-base);
}

.title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
  font-family: var(--font-family-sans);
}

.description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-4);
  line-height: var(--font-line-height-normal);
  font-family: var(--font-family-sans);
}
</style>
```

### Interface TypeScript Stricte
```typescript
// ✅ Interface au lieu de type
interface User {
  readonly id: number
  name: string
  email: string
  avatar?: string
  createdAt: Date
}

// ✅ Types stricts pour les props
interface ComponentProps {
  users: readonly User[]
  onUserSelect: (user: User) => void
  isLoading?: boolean
}

// ✅ Type de retour explicite
function formatUserName(user: User): string {
  return `${user.name} (${user.email})`
}

// ✅ Gestion stricte des nulls
function findUserById(users: readonly User[], id: number): User | null {
  return users.find(user => user.id === id) ?? null
}
```

## 🔧 Commandes de Lint

```bash
# Vérifier le code
npm run lint

# Corriger automatiquement
npm run lint --fix

# Type checking strict
npm run type-check

# Build avec vérifications
npm run build
```

## 🚫 Erreurs Communes

### 1. Valeurs en dur dans le CSS
```css
/* ❌ ERREUR */
.component { margin: 16px; }

/* ✅ SOLUTION */
.component { margin: var(--spacing-4); }
```

### 2. Types any
```typescript
// ❌ ERREUR
const data: any = fetchData()

// ✅ SOLUTION
interface ApiResponse {
  data: string[]
}
const data: ApiResponse = fetchData()
```

### 3. Props non typées
```vue
<!-- ❌ ERREUR -->
<script setup>
const props = defineProps(['title', 'description'])
</script>

<!-- ✅ SOLUTION -->
<script setup lang="ts">
interface Props {
  title: string
  description: string
}
const props = defineProps<Props>()
</script>
```

## 📚 Ressources

- **Design System**: `@club-employes/utopia`
- **Documentation Tokens**: `packages/utopia/src/tokens/generated/`
- **Composants**: `packages/utopia/src/components/`
- **Types**: `packages/utopia/src/types.ts`

---

⚡ **Objectif**: Code 100% typé, 0 valeur CSS en dur, cohérence parfaite avec le design system !