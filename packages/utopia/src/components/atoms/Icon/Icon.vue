<template>
  <span
    :class="iconClasses"
    :style="iconStyles"
    :aria-label="alt || name"
    role="img"
    v-html="iconSvg"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

// Types
export type IconName = string // Nom de l'icône (ex: 'user', 'search', 'general/home')
export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'

// Props
interface Props {
  /** Nom de l'icône (catégorie/nom ou juste nom) */
  name: IconName
  /** Taille de l'icône */
  size?: IconSize
  /** Couleur de l'icône */
  color?: IconColor
  /** Épaisseur du trait (stroke-width) */
  strokeWidth?: number | string
  /** Texte alternatif pour l'accessibilité */
  alt?: string
  /** Classes CSS personnalisées */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  color: 'current'
})

// État réactif pour le contenu SVG
const iconSvg = ref<string>('')

// Computed
const iconClasses = computed(() => {
  // Map size names to CSS classes  
  const sizeMap: Record<IconSize, string> = {
    'small': 'sm',
    'medium': 'md',
    'large': 'lg'
  }
  
  return [
    'icon',
    `icon--${sizeMap[props.size]}`,
    `icon--${props.color}`,
    props.class
  ].filter(Boolean)
})

const iconStyles = computed(() => {
  // Mapping des couleurs vers les tokens CSS
  const colorTokens: Record<IconColor, string> = {
    'primary': 'var(--color-brand-primary-500)',
    'secondary': 'var(--color-brand-secondary-500)',
    'success': 'var(--color-semantic-success-primary)',
    'warning': 'var(--color-warning-500)',
    'danger': 'var(--color-semantic-attention-primary)',
    'neutral': 'var(--color-neutral-400)',
    'current': 'currentColor'
  }

  return {
    color: colorTokens[props.color],
    '--stroke-width': props.strokeWidth ? String(props.strokeWidth) : '1'
  }
})

// Fonction pour charger l'icône SVG via import dynamique (tree-shakable)
const loadIcon = async (iconName: string) => {
  try {
    // Utiliser import dynamique avec Vite pour tree-shaking
    const iconModule = await import(`../../../assets/icons-processed/${iconName}.svg?raw`)
    const svgContent = iconModule.default || iconModule
    
    // Nettoyer le SVG pour retirer les attributs de taille fixe
    const cleanedSvg = svgContent
      .replace(/width="[^"]*"/g, '')
      .replace(/height="[^"]*"/g, '')
      .replace(/<svg([^>]*)>/g, '<svg$1 width="100%" height="100%">')
    
    iconSvg.value = cleanedSvg
  } catch (error) {
    console.error(`Failed to load icon: ${iconName}`, error)
    
    // Icône de fallback spécifique pour Package
    if (iconName === 'Package') {
      iconSvg.value = `
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 4.27002L16.5 9.42002M3.2998 7L11.9998 12M11.9998 12L20.6998 7M11.9998 12L12 22M21 8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16V8.00002Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `
      return
    }
    
    // Icône de fallback générale
    iconSvg.value = `
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M12 8v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  }
}

// Normaliser le nom de l'icône
const normalizeIconName = (name: string): string => {
  // Si le nom contient une catégorie (ex: 'users/user'), extraire juste le nom du fichier
  if (name.includes('/')) {
    return name.split('/').pop() || name
  }
  return name
}

// Watcher pour charger l'icône quand le nom change
watch(() => props.name, (newName) => {
  const normalizedName = normalizeIconName(newName)
  loadIcon(normalizedName)
}, { immediate: true })
</script>

<style scoped>
.icon {
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  /* Transition pour les changements */
  transition: color 0.2s ease, transform 0.2s ease;
}

/* Tailles */
.icon--xs {
  width: 16px;
  height: 16px;
}

.icon--sm {
  width: 20px;
  height: 20px;
}

.icon--md {
  width: 24px;
  height: 24px;
}

.icon--lg {
  width: 32px;
  height: 32px;
}

.icon--xl {
  width: 48px;
  height: 48px;
}

/* Couleurs - définies via le style inline pour plus de flexibilité */
.icon--primary,
.icon--secondary,
.icon--success,
.icon--warning,
.icon--danger,
.icon--neutral,
.icon--current {
  /* Les couleurs sont appliquées via iconStyles */
}

/* États d'interaction */
.icon:hover {
  /* background-color: var(--theme-colors-border-muted); */
}

/* Styles pour le SVG injecté */
.icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.icon :deep(path),
.icon :deep(circle),
.icon :deep(line),
.icon :deep(rect),
.icon :deep(polygon) {
  /* S'assurer que les éléments SVG héritent de la couleur */
  stroke: currentColor;
  fill: currentColor;
  /* Forcer la préservation de la stroke-width SVG */
  stroke-width: var(--stroke-width, 1) !important;
}

/* Pour les icônes en outline uniquement */
.icon :deep(svg[fill="none"]) path,
.icon :deep(svg[fill="none"]) circle,
.icon :deep(svg[fill="none"]) line,
.icon :deep(svg[fill="none"]) rect,
.icon :deep(svg[fill="none"]) polygon {
  fill: none;
  stroke: currentColor;
}

/* Gérer les opacités préservées */
.icon :deep([stroke-opacity]) {
  stroke: currentColor;
}

.icon :deep([fill-opacity]) {
  fill: currentColor;
}
</style> 