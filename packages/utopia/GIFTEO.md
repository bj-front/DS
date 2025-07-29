# ❤️ Gifteo Design Tokens

## 🎯 Vue d'ensemble

Gifteo possède maintenant ses **tokens complets** avec une palette rouge/rose distinctive et des neutrals orange/gris, disponible en modes light et dark.

## 🎨 Palette de couleurs

### Variable Gifteo - Rouge
Couleurs principales basées sur l'image fournie :

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-red-50` | `#fef2f2` | `#7f1d1d` | Backgrounds très clairs |
| `--color-red-100` | `#fee2e2` | `#991b1b` | Backgrounds clairs |
| `--color-red-200` | `#fecaca` | `#b91c1c` | Borders, dividers |
| `--color-red-300` | `#fca5a5` | `#dc2626` | Disabled states |
| `--color-red-600` | `#dc2626` | `#fca5a5` | Primary actions |

### Neutrals Orange
Couleurs neutres avec teinte orange chaude :

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-orange-605` | `#e55a0c` | `#fdba74` | Accents |
| `--color-orange-700` | `#c2410c` | `#fed7aa` | Text secondary |
| `--color-orange-800` | `#9a3412` | `#ffedd5` | Text muted |
| `--color-orange-900` | `#7c2d12` | `#fff7ed` | Text primary |
| `--color-orange-950` | `#431407` | `#fffbf7` | Backgrounds |

### Couleur secondaire
- `--color-secondary-primary` : `#f97316` (light) / `#fb923c` (dark)

## 🚀 Utilisation

### Import basique
```vue
<template>
  <ThemeProvider :theme="gifteoLight">
    <YourGifteoApp />
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider, gifteoLight } from '@clubemployes/design-system'
</script>
```

### Multi-marques avec switching
```vue
<template>
  <ThemeProvider :theme="currentTheme">
    <BrandSwitcher 
      :gifteoLight="gifteoLight"
      :gifteoDark="gifteoDark"
      :clubEmployesLight="clubEmployesLight"
      :clubEmployesDark="clubEmployesDark"
      @themeChange="handleThemeChange"
    />
    <YourApp />
  </ThemeProvider>
</template>

<script setup>
import { ref } from 'vue'
import { ThemeProvider, gifteoLight, gifteoDark, clubEmployesLight, clubEmployesDark } from '@clubemployes/design-system'

const currentTheme = ref(gifteoLight)
</script>
```

## 🎯 Variables universelles

**Avantage clé** : Même code CSS pour toutes les marques !

```css
/* Identique pour Club Employés ET Gifteo */
.button-primary {
  background-color: var(--color-red-600);     /* Rouge Gifteo ou Bleu Club Employés */
  color: var(--color-neutral-white);          /* S'adapte au thème */
  border: 1px solid var(--color-red-500);
}

.card {
  background-color: var(--color-neutral-white);
  color: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-200);
}
```

## 📦 Couleurs produits Gifteo

Couleurs spécifiques aux produits Gifteo :

```css
.gift-card {
  background-color: var(--color-product-gift-primary);        /* Rouge #dc2626 */
}

.experience-card {
  background-color: var(--color-product-experience-primary);  /* Orange #f97316 */
}

.voucher-card {
  background-color: var(--color-product-voucher-primary);     /* Orange foncé #ea580c */
}
```

## 🔧 Architecture technique

### Sources
```
src/tokens/brands/gifteo/
├── colors.json       # Couleurs light
└── colors-dark.json  # Couleurs dark
```

### Thèmes
```
src/tokens/themes/
├── gifteo-light.json  # Variables sémantiques light
└── gifteo-dark.json   # Variables sémantiques dark
```

### Fichiers générés
```
src/tokens/generated/gifteo/
├── light.css    # Variables CSS mode light
├── light.js     # Exports JS mode light
├── dark.css     # Variables CSS mode dark
└── dark.js      # Exports JS mode dark
```

### Build
```bash
npm run build:tokens
```
Génère automatiquement les 4 fichiers Gifteo + les 4 fichiers Club Employés.

## 🌈 Comparaison des marques

| Aspect | Club Employés | Gifteo |
|--------|---------------|--------|
| **Couleur principale** | Bleu (`#3b82f6`) | Rouge (`#dc2626`) |
| **Neutrals** | Gris standard | Orange/brun |
| **Sentiment** | Professionnel, corporate | Chaleureux, cadeau |
| **Usage** | RH, employés | Cadeaux, expériences |

## 🎨 Mode dark Gifteo

Le mode dark Gifteo utilise :
- **Rouges inversés** : `#fef2f2` → `#7f1d1d`
- **Orange plus doux** : `#431407` → `#fffbf7`
- **Contraste optimisé** pour la lisibilité

```vue
<template>
  <ThemeProvider :theme="gifteoDark">
    <div class="dark-gifteo-app">
      <!-- Interface sombre avec accents rouges/orange -->
    </div>
  </ThemeProvider>
</template>
```

## 🚦 Variables sémantiques

Les mêmes variables sémantiques fonctionnent pour toutes les marques :

```css
/* Variables universelles */
--color-primary-500     /* Bleu Club Employés / Rouge Gifteo */
--color-neutral-white   /* Blanc / Gris foncé en dark */
--color-neutral-900     /* Noir / Blanc en dark */

/* États */
--color-state-error     /* Rouge attention */
--color-state-success   /* Vert succès */
--color-state-warning   /* Orange warning */
```

## 🔄 Migration Club Employés → Gifteo

Pour migrer une app de Club Employés vers Gifteo :

```diff
- import { clubEmployesLight } from '@clubemployes/design-system'
+ import { gifteoLight } from '@clubemployes/design-system'

- <ThemeProvider :theme="clubEmployesLight">
+ <ThemeProvider :theme="gifteoLight">
```

**C'est tout !** Le CSS reste identique grâce aux variables universelles.

---

Gifteo est maintenant **prêt pour la production** avec une identité visuelle distincte et une intégration transparente ! ❤️ 