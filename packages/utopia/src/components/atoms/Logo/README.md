# Composant Logo

Le composant `Logo` s'adapte **automatiquement** au thème et à la marque actuels. Plus besoin de gérer les variantes manuellement !

## Import

```vue
<script setup>
import { Logo } from '@club-employes/utopia'
</script>
```

## Utilisation ultra-simple

```vue
<template>
  <!-- ✨ Logo intelligent : détecte tout automatiquement ! -->
  <Logo />
  
  <!-- Avec une taille personnalisée -->
  <Logo size="lg" />
  
  <!-- Pour forcer une marque spécifique -->
  <Logo brand="gifteo" />
</template>
```

## 🧠 Intelligence automatique

Le composant Logo détecte automatiquement :

- **La marque** depuis le thème actuel (`club-employes-light` → Club Employés)
- **Le mode** (clair/sombre) et adapte le logo en conséquence
- **La taille optimale** (logos compacts pour `xs` et `sm`)

### Exemples d'adaptation

```vue
<!-- Avec le thème "club-employes-light" -->
<Logo />  <!-- = Logo Club Employés normal -->

<!-- Avec le thème "club-employes-dark" -->
<Logo />  <!-- = Logo Club Employés blanc -->

<!-- Avec le thème "gifteo-light" -->
<Logo />  <!-- = Logo Gifteo normal -->
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `brand` | `'club-employes' \| 'gifteo'` | `'club-employes'` | Marque du logo à afficher |
| `variant` | `'auto' \| 'default' \| 'white' \| 'small' \| 'small-white'` | `'auto'` | Variante du logo |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'md'` | Taille du logo |
| `alt` | `string` | Auto-généré | Texte alternatif pour l'accessibilité |
| `class` | `string` | - | Classes CSS personnalisées |

## Variantes

### `auto` (Recommandé)

S'adapte automatiquement au thème actuel :

- **Thème clair** : Logo normal
- **Thème sombre** : Logo blanc
- **Petites tailles** (`xs`, `sm`) : Version compacte

### `default`

Logo standard de la marque (version colorée)

### `white`

Logo blanc pour les fonds sombres

### `small`

Version compacte du logo (format carré)

### `small-white`

Version compacte blanche

## Tailles

| Taille | Dimensions |
|--------|------------|
| `xs` | 60×15px (30×30px pour small) |
| `sm` | 80×20px (40×40px pour small) |
| `md` | 120×30px (60×60px pour small) |
| `lg` | 160×40px (80×80px pour small) |
| `xl` | 200×50px (100×100px pour small) |
| `xxl` | 280×70px (140×140px pour small) |

## Exemples d'utilisation

### Header d'application

```vue
<template>
  <header>
    <Logo brand="club-employes" variant="auto" size="lg" />
    <nav>...</nav>
  </header>
</template>
```

### Footer

```vue
<template>
  <footer class="dark-footer">
    <Logo brand="club-employes" variant="white" size="md" />
  </footer>
</template>
```

### Navigation mobile

```vue
<template>
  <nav class="mobile-nav">
    <Logo brand="club-employes" variant="auto" size="xs" />
  </nav>
</template>
```

### Multi-marques

```vue
<template>
  <div class="brands">
    <Logo brand="club-employes" variant="auto" size="lg" />
    <Logo brand="gifteo" variant="auto" size="lg" />
  </div>
</template>
```

## Personnalisation

Le composant utilise les tokens CSS du design system pour les logos :

```css
/* Ces tokens sont automatiquement sélectionnés selon la marque et la variante */
--assets-logos-club-employes-default
--assets-logos-club-employes-small
--assets-logos-club-employes-white
--assets-logos-club-employes-small-white
--assets-logos-gifteo-default
--assets-logos-gifteo-small
--assets-logos-gifteo-white
--assets-logos-gifteo-small-white
```

## Accessibilité

- Le composant génère automatiquement un `aria-label` approprié
- Utilisez la prop `alt` pour personnaliser le texte alternatif
- Le rôle `img` est appliqué automatiquement

## Responsive

Le composant s'adapte automatiquement sur mobile :

- Les grandes tailles sont réduites sur petits écrans
- Les proportions sont maintenues
- La lisibilité est préservée
