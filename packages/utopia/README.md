# 🎨 Utopia Design System

Système de design multi-marques basé sur des tokens avec Style Dictionary.

## 🏗️ Architecture

```
src/
├── tokens/                  # Sources des design tokens
│   ├── core/               # Tokens communs (spacing, typography, etc.)
│   ├── brands/             # Tokens spécifiques par marque
│   │   └── club-employes/  # Couleurs Club Employés
│   ├── themes/             # Combinaisons marque + mode
│   └── generated/          # Fichiers CSS/JS générés
├── theme-provider/         # Composant ThemeProvider Vue
├── themes/                 # Packages de thèmes exportés
└── components/             # Composants de démo
```

## 🚀 Utilisation

### 1. Installation

```bash
npm install @clubemployes/design-system
```

### 2. Utilisation dans une app Vue

```vue
<template>
  <ThemeProvider :theme="clubEmployesLight">
    <YourApp />
  </ThemeProvider>
</template>

<script setup>
import { ThemeProvider } from '@clubemployes/design-system'
import { clubEmployesLight } from '@clubemployes/theme-club-employes'
</script>
```

### 3. Utilisation des CSS variables

```css
.button {
  background-color: var(--color-blue-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-base);
}

.product-card {
  background-color: var(--color-product-exclusive-sale-primary);
  color: white;
}
```

## 🎯 Tokens disponibles

### Couleurs

#### Palette principale (Bleu)
- `--color-blue-25` à `--color-blue-950`

#### Couleurs produits
- `--color-product-exclusive-sale-primary` - Vente exclusive
- `--color-product-promo-code-primary` - Code promo
- `--color-product-physical-product-primary` - Produit physique
- `--color-product-e-ticket-primary` - E-billet
- `--color-product-member-card-primary` - Carte membre
- `--color-product-gift-card-primary` - Carte cadeau
- `--color-product-e-check-primary` - E-chèque

#### Signalétique
- `--color-semantic-attention-primary` - Erreur/Attention
- `--color-semantic-success-primary` - Succès

### Espacement
- `--spacing-0` (0px) à `--spacing-32` (128px)

### Typographie
- Tailles: `--font-size-xs` à `--font-size-5xl`
- Poids: `--font-weight-light` à `--font-weight-bold`
- Familles: `--font-family-sans`, `--font-family-mono`

### Bordures
- Rayons: `--border-radius-none` à `--border-radius-full`
- Largeurs: `--border-width-0` à `--border-width-4`

### Ombres
- `--shadow-none` à `--shadow-xl`

## 🔧 Développement

### Build des tokens

```bash
npm run build:tokens
```

### Ajouter une nouvelle marque

1. Créer `src/tokens/brands/nouvelle-marque/colors.json`
2. Créer les thèmes light/dark dans `src/tokens/themes/`
3. Mettre à jour `style-dictionary.config.js`
4. Créer le package thème dans `src/themes/nouvelle-marque/`

### Structure d'un token de couleur

```json
{
  "color": {
    "primary": {
      "500": {
        "value": "#3B82F6",
        "type": "color"
      }
    }
  }
}
```

## �� Packages

- `@clubemployes/design-system` - Composants et ThemeProvider
- `@clubemployes/theme-club-employes` - Thème Club Employés
- `@clubemployes/theme-ebank` - Thème eBank (à venir)

## 🎨 Variables universelles

Toutes les apps utilisent les **mêmes noms de variables CSS**. Seules les valeurs changent selon le thème importé.

```css
/* Dans toutes les apps */
.button {
  background: var(--color-primary-500); /* Même variable partout */
}
```

```typescript
// App Club Employés
import { clubEmployesLight } from '@clubemployes/theme-club-employes'

// App eBank
import { ebankLight } from '@clubemployes/theme-ebank'
```

## 🔄 Workflow

1. **Designer** → Met à jour les tokens JSON
2. **Build** → `npm run build:tokens` génère les CSS
3. **Developer** → Importe le bon thème
4. **Deploy** → Changement de thème = changement d'import

---

Made with ❤️ by Club Employés
