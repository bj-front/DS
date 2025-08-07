<template>
  <component 
    :is="component"
    :to="to"
    :href="href"
    class="nav-item"
    :class="{ 'active': isActive, 'collapsed': props.collapsed }"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span class="nav-item-icon" v-if="icon">
      <Icon :name="icon" size="medium" color="current" :stroke-width="2"/>
    </span>
    <span class="nav-item-label">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '../atoms'

interface Props {
  /** Libellé du nav item */
  label?: string
  /** Icône à afficher */
  icon?: string
  /** URL pour les liens externes */
  href?: string
  /** Route pour Vue Router */
  to?: string | object
  /** État actif */
  active?: boolean
  /** État collapsed du menu parent */
  collapsed?: boolean
}

interface Emits {
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  collapsed: false
})

const emit = defineEmits<Emits>()

// Déterminer le composant à utiliser
const component = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

// Détermine si l'élément est actif
const isActive = computed(() => {
  return props.active
})

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.nav-item {
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  margin-bottom: var(--spacing-3);
  border-radius: var(--border-radius-md);
  color: var(--theme-colors-text-secondary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  min-height: 40px;
}

/* Position fixe des icônes en mode normal */
.nav-item:not(.collapsed) .nav-item-icon {
  position: relative;
  left: 0;
  transform: none;
}

.nav-item:hover {
  background-color: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-800);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.nav-item.active {
  background-color: var(--theme-colors-primary-50);
  color: var(--theme-colors-primary-700);
}

.nav-item.active:hover {
  background-color: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-900);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.nav-item-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: none;
  position: relative;
  left: 0;
}

.nav-item-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  transition: opacity 0.3s ease, width 0.3s ease;
}

/* Mode collapsed - styles appliqués via prop */
.nav-item.collapsed {
  gap: 0;
  justify-content: center;
  padding: var(--spacing-3);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
}

.nav-item.collapsed:hover {
  background-color: var(--theme-colors-primary-100);
  transform: scale(1.1);
  box-shadow: var(--shadow-md);
}

.nav-item.collapsed .nav-item-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.nav-item.collapsed .nav-item-label {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-secondary);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: none;
  z-index: 9999;
  margin-left: var(--spacing-1);
  border: 1px solid var(--theme-colors-border-subtle);
  width: fit-content;
  min-width: max-content;
  overflow: visible;
  pointer-events: none;
}



.nav-item.collapsed:hover .nav-item-label {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

/* Masquer les tooltips pendant l'animation de collapse */
.nav-item.animating .nav-item-label {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}
</style>