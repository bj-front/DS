<template>
  <div
    :class="logoClasses"
    :aria-label="alt || `Logo ${brandName}`"
    role="img"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LogoBrand, LogoSize, LogoVariant } from './types'

// Props
interface Props {
  /** Marque du logo (auto-détectée depuis le thème CSS si non spécifiée) */
  brand?: LogoBrand
  /** Variante du logo (auto = adaptatif selon le thème) */
  variant?: LogoVariant
  /** Taille du logo */
  size?: LogoSize
  /** Texte alternatif pour l'accessibilité */
  alt?: string
  /** Classes CSS personnalisées */
  class?: string
  test?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'auto',
  size: 'md'
})

// Simple computed pour les classes
const logoClasses = computed(() => {
  const brandClass = props.brand ? `logo--${props.brand}` : 'logo--auto-brand'
  
  return [
    'logo',
    `logo--${props.size}`,
    `logo--${props.variant}`,
    brandClass,
    props.class
  ].filter(Boolean)
})

// Brand name pour l'accessibilité
const brandName = computed(() => {
  if (props.brand === 'gifteo') return 'Gifteo'
  if (props.brand === 'club-employes') return 'Club Employés'
  return 'Logo' // pour auto-détection
})
</script>

<style>
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
  
  /* Amélioration du rendu SVG */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: auto;
  
  /* Force le rendu vectoriel sur les écrans haute résolution */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  
  /* Améliore la netteté sur les écrans Retina */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* === AUTO DETECTION VIA CSS === */

/* Club Employés - Thème Light */
body[data-theme*="club-employes"]:not([data-theme*="dark"]) .logo--auto-brand.logo--auto,
body[data-theme*="club-employes"]:not([data-theme*="dark"]) .logo--club-employes.logo--auto,
.logo--club-employes.logo--default {
  background-image: var(--assets-logos-club-employes-default);
}

/* Club Employés - Thème Dark */
body[data-theme*="club-employes"][data-theme*="dark"] .logo--auto-brand.logo--auto,
body[data-theme*="club-employes"][data-theme*="dark"] .logo--club-employes.logo--auto,
.logo--club-employes.logo--white {
  background-image: var(--assets-logos-club-employes-white);
}

/* Club Employés - Small Light */
body[data-theme*="club-employes"]:not([data-theme*="dark"]) .logo--auto-brand.logo--auto.logo--xs,
body[data-theme*="club-employes"]:not([data-theme*="dark"]) .logo--auto-brand.logo--auto.logo--sm,
body[data-theme*="club-employes"]:not([data-theme*="dark"]) .logo--club-employes.logo--auto.logo--xs,
body[data-theme*="club-employes"]:not([data-theme*="dark"]) .logo--club-employes.logo--auto.logo--sm,
.logo--club-employes.logo--small {
  background-image: var(--assets-logos-club-employes-small);
}

/* Club Employés - Small Dark */
body[data-theme*="club-employes"][data-theme*="dark"] .logo--auto-brand.logo--auto.logo--xs,
body[data-theme*="club-employes"][data-theme*="dark"] .logo--auto-brand.logo--auto.logo--sm,
body[data-theme*="club-employes"][data-theme*="dark"] .logo--club-employes.logo--auto.logo--xs,
body[data-theme*="club-employes"][data-theme*="dark"] .logo--club-employes.logo--auto.logo--sm,
.logo--club-employes.logo--small-white {
  background-image: var(--assets-logos-club-employes-small-white);
}

/* Gifteo - Thème Light */
body[data-theme*="gifteo"]:not([data-theme*="dark"]) .logo--auto-brand.logo--auto,
body[data-theme*="gifteo"]:not([data-theme*="dark"]) .logo--gifteo.logo--auto,
.logo--gifteo.logo--default {
  background-image: var(--assets-logos-gifteo-default);
}

/* Gifteo - Thème Dark */
body[data-theme*="gifteo"][data-theme*="dark"] .logo--auto-brand.logo--auto,
body[data-theme*="gifteo"][data-theme*="dark"] .logo--gifteo.logo--auto,
.logo--gifteo.logo--white {
  background-image: var(--assets-logos-gifteo-white);
}

/* Gifteo - Small Light */
body[data-theme*="gifteo"]:not([data-theme*="dark"]) .logo--auto-brand.logo--auto.logo--xs,
body[data-theme*="gifteo"]:not([data-theme*="dark"]) .logo--auto-brand.logo--auto.logo--sm,
body[data-theme*="gifteo"]:not([data-theme*="dark"]) .logo--gifteo.logo--auto.logo--xs,
body[data-theme*="gifteo"]:not([data-theme*="dark"]) .logo--gifteo.logo--auto.logo--sm,
.logo--gifteo.logo--small {
  background-image: var(--assets-logos-gifteo-small);
}

/* Gifteo - Small Dark */
body[data-theme*="gifteo"][data-theme*="dark"] .logo--auto-brand.logo--auto.logo--xs,
body[data-theme*="gifteo"][data-theme*="dark"] .logo--auto-brand.logo--auto.logo--sm,
body[data-theme*="gifteo"][data-theme*="dark"] .logo--gifteo.logo--auto.logo--xs,
body[data-theme*="gifteo"][data-theme*="dark"] .logo--gifteo.logo--auto.logo--sm,
.logo--gifteo.logo--small-white {
  background-image: var(--assets-logos-gifteo-small-white);
}

/* Fallback par défaut (Club Employés Light) */
.logo--auto-brand.logo--auto {
  background-image: var(--assets-logos-club-employes-default);
}

.logo--auto-brand.logo--auto.logo--xs,
.logo--auto-brand.logo--auto.logo--sm {
  background-image: var(--assets-logos-club-employes-small);
}

/* === TAILLES === */
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

/* Variantes small (ratio différent) */
.logo--small,
.logo--small-white {
  aspect-ratio: 2 / 1;
}

.logo--xs.logo--small,
.logo--xs.logo--small-white,
.logo--xs.logo--auto.logo--xs {
  width: 30px;
  height: 30px;
}

.logo--sm.logo--small,
.logo--sm.logo--small-white,
.logo--sm.logo--auto.logo--sm {
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