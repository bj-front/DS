<template>
  <div
    :class="logoClasses"
    :style="logoStyles"
    :aria-label="alt || 'Logo'"
    role="img"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Types
export type LogoVariant = 'auto' | 'default' | 'white' | 'small' | 'small-white'
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

// Props
interface Props {
  /** Variante du logo */
  variant?: LogoVariant
  /** Taille du logo */
  size?: LogoSize
  /** Texte alternatif pour l'accessibilité */
  alt?: string
  /** Classes CSS personnalisées */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'auto',
  size: 'md',
  alt: 'Logo'
})

// Computed
const logoClasses = computed(() => {
  return [
    'logo',
    `logo--${props.size}`,
    `logo--${props.variant}`,
    props.class
  ].filter(Boolean)
})

const logoStyles = computed(() => {
  // Mapping des variantes vers les tokens CSS
  const variantTokens: Record<LogoVariant, string> = {
    'auto': '--theme-assets-logo-default',
    'default': '--theme-assets-logo-default',
    'white': '--theme-assets-logo-white',
    'small': '--theme-assets-logo-small',
    'small-white': '--theme-assets-logo-small-white'
  }

  // Pour les petites variantes, on utilise les logos small en auto
  const token = props.variant === 'auto' && (props.size === 'xs' || props.size === 'sm')
    ? '--theme-assets-logo-small'
    : variantTokens[props.variant]

  return {
    backgroundImage: `var(${token})`
  }
})
</script>

<style scoped>
.logo {
  /* Base styles */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;

  /* Ratio aspect maintenu (approximativement 4:1 basé sur les logos) */
  aspect-ratio: 4 / 1;

  /* Transition pour les changements de taille */
  transition: all 0.2s ease;
}

/* Tailles */
.logo--xs {
  width: 60px;
  height: 15px;
}

.logo--sm {
  width: 80px;
  height: 20px;
}

.logo--md {
  width: 120px;
  height: 30px;
}

.logo--lg {
  width: 160px;
  height: 40px;
}

.logo--xl {
  width: 200px;
  height: 50px;
}

.logo--xxl {
  width: 280px;
  height: 70px;
}

/* Variantes spécifiques pour ajustements fins */
.logo--small,
.logo--small-white {
  /* Les logos small ont un ratio différent (plus carré) */
  aspect-ratio: 2 / 1;
}

.logo--xs.logo--small,
.logo--xs.logo--small-white {
  width: 30px;
  height: 30px;
}

.logo--sm.logo--small,
.logo--sm.logo--small-white {
  width: 40px;
  height: 40px;
}

.logo--md.logo--small,
.logo--md.logo--small-white {
  width: 60px;
  height: 60px;
}

.logo--lg.logo--small,
.logo--lg.logo--small-white {
  width: 80px;
  height: 80px;
}

.logo--xl.logo--small,
.logo--xl.logo--small-white {
  width: 100px;
  height: 100px;
}

.logo--xxl.logo--small,
.logo--xxl.logo--small-white {
  width: 140px;
  height: 140px;
}

/* États d'interaction */
.logo:hover {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .logo--xl {
    width: 160px;
    height: 40px;
  }

  .logo--xxl {
    width: 200px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .logo--lg {
    width: 120px;
    height: 30px;
  }

  .logo--xl {
    width: 120px;
    height: 30px;
  }

  .logo--xxl {
    width: 160px;
    height: 40px;
  }
}
</style>
