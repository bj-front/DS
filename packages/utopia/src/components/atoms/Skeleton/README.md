# Skeleton Component

Un composant skeleton loader simple et flexible pour afficher des placeholders animés pendant le chargement de contenu.

## Utilisation

Le composant Skeleton utilise un slot pour créer des skeletons personnalisés. Tous les éléments enfants héritent automatiquement du style skeleton avec animation.

```vue
<Skeleton>
  <div class="my-custom-skeleton">
    <div class="header"></div>
    <div class="content">
      <div class="line"></div>
      <div class="line short"></div>
    </div>
  </div>
</Skeleton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary'` | `'default'` | Variante de couleur |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Taille du border-radius |
| `width` | `string \| number` | `'auto'` | Largeur du skeleton |
| `height` | `string \| number` | `'auto'` | Hauteur du skeleton |
| `animated` | `boolean` | `true` | Activer l'animation de shimmer |
| `disabled` | `boolean` | `false` | Désactiver le skeleton |

## Exemples d'utilisation

### Skeleton de carte
```vue
<Skeleton :width="300" :height="200">
  <div class="card-skeleton">
    <div class="image"></div>
    <div class="content">
      <div class="title"></div>
      <div class="text"></div>
      <div class="text short"></div>
      <div class="button"></div>
    </div>
  </div>
</Skeleton>
```

### Skeleton de liste
```vue
<Skeleton :width="400">
  <div class="list-skeleton">
    <div class="item">
      <div class="avatar"></div>
      <div class="content">
        <div class="line"></div>
        <div class="line short"></div>
      </div>
    </div>
    <div class="item">
      <div class="avatar"></div>
      <div class="content">
        <div class="line"></div>
        <div class="line short"></div>
      </div>
    </div>
  </div>
</Skeleton>
```

### Skeleton de texte
```vue
<Skeleton :width="500">
  <div class="text-skeleton">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line short"></div>
  </div>
</Skeleton>
```

### Skeleton simple
```vue
<Skeleton :width="100" :height="100">
  <div class="simple-skeleton"></div>
</Skeleton>
```

### Skeleton sans animation
```vue
<Skeleton :animated="false" :width="200" :height="150">
  <div class="static-skeleton">
    <div class="circle"></div>
    <div class="text"></div>
  </div>
</Skeleton>
```

## Styles CSS recommandés

Voici des exemples de styles CSS pour vos skeletons personnalisés :

```css
/* Skeleton de carte */
.card-skeleton {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-skeleton .image {
  width: 100%;
  height: 120px;
  border-radius: 8px;
}

.card-skeleton .content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-skeleton .title {
  height: 20px;
  width: 80%;
}

.card-skeleton .text {
  height: 14px;
  width: 100%;
}

.card-skeleton .text.short {
  width: 60%;
}

.card-skeleton .button {
  height: 32px;
  width: 100px;
  border-radius: 6px;
}

/* Skeleton de liste */
.list-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-skeleton .item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.list-skeleton .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}

.list-skeleton .content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.list-skeleton .line {
  height: 14px;
  width: 100%;
}

.list-skeleton .line.short {
  width: 60%;
}

/* Skeleton de texte */
.text-skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.text-skeleton .line {
  height: 16px;
  width: 100%;
}

.text-skeleton .line.short {
  width: 70%;
}
```

## Tokens du Design System

Le composant utilise les tokens du design system pour la cohérence :

### Couleurs utilisées
- **Default** : `--theme-colors-border-muted` (light mode) / `--theme-colors-border-muted` (dark mode)
- **Primary** : `--theme-colors-brand-primary-200` (light mode) / `--theme-colors-brand-primary-800` (dark mode)
- **Secondary** : `--theme-colors-brand-secondary-200` (light mode) / `--theme-colors-brand-secondary-800` (dark mode)

### Tokens de border-radius
- `--spacing-1` : Taille small (4px)
- `--spacing-2` : Taille large (8px)

### Tokens de typographie
- `--font-family-sans` : Police système

## Animation

Le skeleton inclut une animation de shimmer qui se déplace de gauche à droite pour créer un effet de chargement. Cette animation peut être désactivée avec la prop `animated`.

L'animation utilise `:deep(*)` pour appliquer automatiquement les couleurs skeleton à tous les éléments enfants, tout en conservant l'animation de shimmer sur le conteneur principal.
