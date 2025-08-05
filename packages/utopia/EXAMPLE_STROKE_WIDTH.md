# Utilisation de la prop strokeWidth

Vous pouvez maintenant contrôler dynamiquement l'épaisseur du trait des icônes avec la prop `strokeWidth`.

## Exemples d'utilisation

```vue
<template>
  <!-- Stroke-width par défaut (4) -->
  <Icon name="Settings" size="medium" color="primary" />
  
  <!-- Stroke-width fin (1) -->
  <Icon name="Settings" size="medium" color="primary" :stroke-width="1" />
  
  <!-- Stroke-width normal (2) -->
  <Icon name="Settings" size="medium" color="primary" :stroke-width="2" />
  
  <!-- Stroke-width épais (4) -->
  <Icon name="Settings" size="medium" color="primary" :stroke-width="4" />
  
  <!-- Stroke-width très épais (6) -->
  <Icon name="Settings" size="medium" color="primary" :stroke-width="6" />
  
  <!-- Vous pouvez aussi passer une string -->
  <Icon name="Settings" size="medium" color="primary" stroke-width="3.5" />
</template>

<script setup>
import { Icon } from '@club-employes/utopia'
</script>
```

## Interface TypeScript

```typescript
interface IconProps {
  name: IconName
  size?: IconSize
  color?: IconColor
  strokeWidth?: number | string  // 👈 Nouvelle prop !
  alt?: string
  class?: string
}
```

## Comment ça fonctionne

La prop `strokeWidth` définit une variable CSS `--stroke-width` qui est utilisée par le CSS du composant Icon :

```css
.icon :deep(path),
.icon :deep(circle),
.icon :deep(line),
.icon :deep(rect),
.icon :deep(polygon) {
  stroke: currentColor;
  fill: currentColor;
  stroke-width: var(--stroke-width, 4) !important;
}
```

- Si vous ne passez pas la prop, la valeur par défaut est `4`
- Si vous passez une valeur, elle sera utilisée comme `stroke-width`
- Le `!important` garantit que votre valeur ne sera pas écrasée par d'autres CSS
