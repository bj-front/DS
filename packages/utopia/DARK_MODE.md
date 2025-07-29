# 🌙 Mode Dark - Club Employés

## 🎯 Vue d'ensemble

Le mode dark est maintenant **entièrement fonctionnel** pour la marque Club Employés. Le système utilise les **mêmes variables CSS** mais avec des **valeurs différentes** selon le thème importé.

## 🚀 Utilisation

### Basique (un seul mode)

```vue
<template>
  <ThemeProvider :theme="clubEmployesDark">
    <YourApp />
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider, clubEmployesDark } from '@clubemployes/design-system'
</script>
```

### Avancée (switching dynamique)

```vue
<template>
  <ThemeProvider :theme="currentTheme">
    <button @click="toggleTheme">
      {{ isDark ? '☀️ Light' : '🌙 Dark' }}
    </button>
    <YourApp />
  </ThemeProvider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ThemeProvider, clubEmployesLight, clubEmployesDark } from '@clubemployes/design-system'

const currentTheme = ref(clubEmployesLight)
const isDark = computed(() => currentTheme.value.mode === 'dark')

const toggleTheme = () => {
  currentTheme.value = isDark.value ? clubEmployesLight : clubEmployesDark
}
</script>
```

## 🎨 Couleurs adaptées

### Palette bleue (inversée)
- **Light**: `#eff6ff` → **Dark**: `#0c1426` 
- **Light**: `#3b82f6` → **Dark**: `#3b82f6` (identique)
- **Light**: `#1e3a8a` → **Dark**: `#eff6ff`

### Neutrals (inversés)
- **Light**: `white` → **Dark**: `#111827`
- **Light**: `#111827` → **Dark**: `#f9fafb`

### Couleurs produits (légèrement modifiées)
- **Vente exclusive**: `#ff6b35` → `#ff8a65` (plus doux)
- **Code promo**: `#e91e63` → `#f06292` (plus doux)
- **E-billet**: `#f59e0b` → `#fbbf24` (plus doux)

## 📝 Variables universelles

Le **grand avantage** : vos composants n'ont **aucun changement** à faire !

```css
/* Même code CSS dans tous les modes */
.button {
  background-color: var(--color-blue-500);
  color: var(--color-neutral-white);
  border: var(--border-width-1) solid var(--color-neutral-200);
}

.card {
  background-color: var(--color-neutral-white);
  color: var(--color-neutral-900);
}
```

## 🔧 Architecture technique

### Fichiers générés
```
src/tokens/generated/club-employes/
├── light.css    # Variables CSS mode light
├── light.js     # Exports JS mode light  
├── dark.css     # Variables CSS mode dark
└── dark.js      # Exports JS mode dark
```

### Sources des tokens
```
src/tokens/brands/club-employes/
├── colors.json       # Couleurs light
└── colors-dark.json  # Couleurs dark
```

### Build process
```bash
npm run build:tokens
```
Génère automatiquement les 4 fichiers avec Style Dictionary.

## 🎯 Recommandations

### 1. **Test systématique**
Testez **tous vos composants** en light ET dark pendant le développement.

### 2. **Contraste**
Le mode dark respecte les ratios de contraste WCAG avec :
- Texte principal: `#f9fafb` sur `#111827`
- Texte secondaire: `#d1d5db` sur `#111827`

### 3. **Images et icônes**
Prévoyez des **variants dark** pour :
- Logos avec fond blanc
- Icônes de couleur claire
- Illustrations avec couleurs spécifiques

### 4. **Persistance utilisateur**
```typescript
// Exemple de sauvegarde préférence utilisateur
const saveThemePreference = (theme: ThemeConfig) => {
  localStorage.setItem('theme-preference', theme.mode || 'light')
}

const loadThemePreference = (): ThemeConfig => {
  const saved = localStorage.getItem('theme-preference')
  return saved === 'dark' ? clubEmployesDark : clubEmployesLight
}
```

## 🌈 Prochaines étapes

1. **eBank dark mode** - Dupliquer la structure pour eBank
2. **Auto-detection** - Respecter `prefers-color-scheme`
3. **Animations** - Transitions fluides entre modes
4. **High contrast** - Mode haute visibilité

---

Le mode dark Club Employés est **prêt pour la production** ! 🎉 