<template>
  <div class="utopia-input" :class="inputClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  disabled: false
})

const inputClasses = computed(() => ({
  [`utopia-input--${props.variant}`]: true,
  [`utopia-input--${props.size}`]: true,
  'utopia-input--disabled': props.disabled
}))
</script>

<style scoped>
.utopia-input {
  /* Styles de base */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--utopia-radius-md);
  font-family: var(--utopia-font-family);
  transition: all 0.2s ease;
  
  /* Mobile touch fixes */
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Supprime les effets tactiles sur tous les inputs enfants */
.utopia-input input,
.utopia-input textarea,
.utopia-input select {
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 16px; /* Empêche le zoom automatique sur iOS */
}

.utopia-input input:focus,
.utopia-input input:active,
.utopia-input textarea:focus,
.utopia-input textarea:active,
.utopia-input select:focus,
.utopia-input select:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
  -webkit-appearance: none !important;
}

/* Variants */
.utopia-input--default {
  background-color: var(--utopia-color-surface);
  border: 1px solid var(--utopia-color-border);
  color: var(--utopia-color-text);
}

.utopia-input--primary {
  background-color: var(--utopia-color-primary);
  border: 1px solid var(--utopia-color-primary);
  color: var(--utopia-color-primary-text);
}

.utopia-input--secondary {
  background-color: var(--utopia-color-secondary);
  border: 1px solid var(--utopia-color-secondary);
  color: var(--utopia-color-secondary-text);
}

/* Sizes */
.utopia-input--small {
  padding: var(--utopia-space-xs) var(--utopia-space-sm);
  font-size: var(--utopia-font-size-sm);
}

.utopia-input--medium {
  padding: var(--utopia-space-sm) var(--utopia-space-md);
  font-size: var(--utopia-font-size-base);
}

.utopia-input--large {
  padding: var(--utopia-space-md) var(--utopia-space-lg);
  font-size: var(--utopia-font-size-lg);
}

/* States */
.utopia-input--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .utopia-input--default {
    background-color: var(--utopia-color-surface-dark);
    border-color: var(--utopia-color-border-dark);
    color: var(--utopia-color-text-dark);
  }
}
</style>