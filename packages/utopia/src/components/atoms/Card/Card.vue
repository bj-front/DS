<template>
  <div class="utopia-card" :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  interactive?: boolean
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  disabled: false,
  interactive: true,
  active: false
})

const cardClasses = computed(() => ({
  [`utopia-card--${props.variant}`]: true,
  [`utopia-card--${props.size}`]: true,
  'utopia-card--disabled': props.disabled,
  'utopia-card--interactive': props.interactive,
  'utopia-card--active': props.active
}))
</script>

<style scoped>
.utopia-card {
  /* Base */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3, 12px);
  border-radius: var(--radius-md, 8px);
  background-color: var(--theme-colors-surface-background, #ffffff);
  color: var(--theme-colors-text-primary, #111827);
  border: 2px solid var(--theme-colors-border-default, #9ca3af);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.06s ease;
  box-shadow: 0 0 0 4px transparent; /* évite les layout shifts */
}

/* Variants */
.utopia-card--default {
  background-color: var(--theme-colors-surface-background, #ffffff);
  border: 2px solid var(--theme-colors-border-default, #9ca3af);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.utopia-card--elevated {
  background-color: var(--theme-colors-surface-card, #ffffff);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.utopia-card--outlined {
  background-color: transparent;
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  box-shadow: none;
}

/* Interactions (calquées sur Switch) */
.utopia-card--interactive:hover:not(.utopia-card--disabled):not(.utopia-card--active) {
  border-color: transparent;
  box-shadow: 0 0 0 4px var(--theme-colors-brand-secondary-50, rgba(59, 130, 246, 0.2));
}

.utopia-card--interactive:active:not(.utopia-card--disabled):not(.utopia-card--active) {
  transform: scale(0.995);
}

/* État non-interactif : aucune interaction visible */
.utopia-card:not(.utopia-card--interactive) {
  cursor: default;
}

.utopia-card:not(.utopia-card--interactive):hover {
  border-color: var(--theme-colors-border-default, #9ca3af);
  box-shadow: 0 0 0 4px transparent;
  transform: none;
}

.utopia-card:not(.utopia-card--interactive):active {
  border-color: var(--theme-colors-border-default, #9ca3af);
  box-shadow: 0 0 0 4px transparent;
  transform: none;
}

/* Override spécifique pour les variants non-interactifs */
.utopia-card--elevated:not(.utopia-card--interactive):hover {
  transform: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-color: var(--theme-colors-border-default, #e5e7eb);
}

.utopia-card--outlined:not(.utopia-card--interactive):hover {
  border-color: var(--theme-colors-border-default, #e5e7eb);
  box-shadow: none;
}

/* Hover effects spécifiques par variant (seulement pour les interactives) */
.utopia-card--elevated.utopia-card--interactive:hover:not(.utopia-card--disabled):not(.utopia-card--active) {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--theme-colors-brand-primary-300, #93c5fd);
}

.utopia-card--outlined.utopia-card--interactive:hover:not(.utopia-card--disabled):not(.utopia-card--active) {
  border-color: var(--theme-colors-brand-primary-300, #93c5fd);
  box-shadow: 0 0 0 4px var(--theme-colors-brand-secondary-50, rgba(59, 130, 246, 0.2));
}

/* État actif */
.utopia-card--active {
  background: linear-gradient(
    135deg,
    var(--theme-colors-brand-primary-500, #3b82f6) 0%,
    var(--theme-colors-brand-primary-500, #2563eb) 100%
  );
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.utopia-card--active.utopia-card--interactive:hover:not(.utopia-card--disabled) {
  background: linear-gradient(
    135deg,
    var(--theme-colors-brand-primary-500, #2563eb) 0%,
    var(--theme-colors-brand-primary-500, #1d4ed8) 100%
  );
  border-color: var(--theme-colors-brand-primary-500, #2563eb);
  box-shadow: 0 0 0 4px var(--theme-colors-brand-primary-300, rgba(59, 130, 246, 0.2));
}

/* Sizes */
.utopia-card--small {
  padding: var(--spacing-3, 12px);
  font-size: var(--font-size-sm, 14px);
}

.utopia-card--medium {
  padding: var(--spacing-4, 16px);
  font-size: var(--font-size-base, 16px);
}

.utopia-card--large {
  padding: var(--spacing-6, 24px);
  font-size: var(--font-size-lg, 18px);
}

/* States */
.utopia-card--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .utopia-card {
    background-color: var(--theme-colors-surface-background, #1f2937);
    border-color: var(--theme-colors-border-default, #6b7280);
    color: var(--theme-colors-text-primary, #f9fafb);
  }

  .utopia-card--default {
    background-color: var(--theme-colors-surface-background, #1f2937);
    border-color: var(--theme-colors-border-default, #6b7280);
  }

  .utopia-card--elevated {
    background-color: var(--theme-colors-surface-card, #374151);
    border-color: var(--theme-colors-border-default, #4b5563);
  }

  .utopia-card--outlined {
    background-color: transparent;
    border-color: var(--theme-colors-border-default, #4b5563);
  }

  .utopia-card--interactive:hover:not(.utopia-card--disabled):not(.utopia-card--active) {
    border-color: transparent;
    box-shadow: 0 0 0 4px var(--theme-colors-brand-primary-300, rgba(59, 130, 246, 0.2));
  }

  .utopia-card--active {
    background: linear-gradient(
      135deg,
      var(--theme-colors-brand-primary-500, #3b82f6) 0%,
      var(--theme-colors-brand-primary-500, #2563eb) 100%
    );
    border-color: var(--theme-colors-brand-primary-500, #3b82f6);
  }
}
</style>