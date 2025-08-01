<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :aria-label="ariaLabel"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <span v-if="loading" class="button-spinner" aria-hidden="true">
      <svg class="spinner-icon" viewBox="0 0 24 24">
        <circle class="spinner-path" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="31.416" stroke-dashoffset="31.416">
          <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
        </circle>
      </svg>
    </span>

    <!-- Button content -->
    <span class="button-content" :class="{ 'button-content--hidden': loading }">
      <!-- Icon avant le texte -->
      <span v-if="$slots.icon" class="button-icon button-icon--before">
        <slot name="icon" />
      </span>

      <!-- Contenu principal -->
      <span class="button-text">
        <slot />
      </span>

      <!-- Icon après le texte -->
      <span v-if="$slots.iconAfter" class="button-icon button-icon--after">
        <slot name="iconAfter" />
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'

// Props
interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  ariaLabel?: string
}

// Emits
interface Emits {
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false
})

const emit = defineEmits<Emits>()

// Computed
const buttonClasses = computed(() => {
  // Map size names to CSS classes
  const sizeMap: Record<ButtonSize, string> = {
    'small': 'sm',
    'medium': 'md',
    'large': 'lg'
  }

  return [
    'button',
    `button--${props.variant}`,
    `button--${sizeMap[props.size]}`,
    {
      'button--disabled': props.disabled,
      'button--loading': props.loading,
      'button--block': props.block
    }
  ]
})

// Methods
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* ======================
   BASE BUTTON STYLES
   ====================== */
.button {
  /* Reset */
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  /* Layout */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);

  /* Typography - utilise les tokens */
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
  text-align: center;
  white-space: nowrap;

  /* Interaction */
  transition: all 0.2s ease;
  user-select: none;

  /* Border radius depuis les tokens */
  border-radius: var(--border-radius-base);

  /* Border width depuis les tokens */
  border: var(--border-width-1) solid transparent;

  /* Focus ring avec les couleurs de tokens */
}

.button:focus-visible {
  outline: var(--border-width-2) solid var(--theme-colors-primary-500);
  outline-offset: var(--spacing-1);
}

/* ======================
   SIZE VARIANTS
   ====================== */
.button--sm {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
  min-height: 32px;
}

.button--md {
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  min-height: 40px;
}

.button--lg {
  padding: var(--spacing-4) var(--spacing-6);
  font-size: var(--font-size-lg);
  min-height: 48px;
}

/* ======================
   VARIANT STYLES
   ====================== */

/* PRIMARY - utilise les couleurs primaires du thème */
.button--primary {
  background-color: var(--theme-colors-primary-500);
  color: var(--theme-colors-text-inverse);
  border-color: var(--theme-colors-primary-500);
}

.button--primary:hover:not(:disabled) {
  background-color: var(--theme-colors-primary-600);
  border-color: var(--theme-colors-primary-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button--primary:active:not(:disabled) {
  background-color: var(--theme-colors-primary-700);
  border-color: var(--theme-colors-primary-700);
  transform: translateY(0);
}

/* SECONDARY - utilise les couleurs de surface */
.button--secondary {
  background-color: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-primary);
  border-color: var(--theme-colors-border-default);
}

.button--secondary:hover:not(:disabled) {
  background-color: var(--theme-colors-border-muted);
  border-color: var(--theme-colors-border-strong);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.button--secondary:active:not(:disabled) {
  background-color: var(--theme-colors-border-default);
}

/* OUTLINE - bordure avec couleur primaire */
.button--outline {
  background-color: transparent;
  color: var(--theme-colors-primary-500);
  border-color: var(--theme-colors-primary-500);
}

.button--outline:hover:not(:disabled) {
  background-color: var(--theme-colors-primary-50);
  transform: translateY(-1px);
}

.button--outline:active:not(:disabled) {
  background-color: var(--theme-colors-primary-100);
}

/* GHOST - pas de bordure ni fond */
.button--ghost {
  background-color: transparent;
  color: var(--theme-colors-text-primary);
  border-color: transparent;
}

.button--ghost:hover:not(:disabled) {
  background-color: var(--theme-colors-border-muted);
}

.button--ghost:active:not(:disabled) {
  background-color: var(--theme-colors-border-default);
}

/* DANGER - utilise les couleurs d'erreur */
.button--danger {
  background-color: var(--theme-colors-state-error);
  color: var(--theme-colors-text-inverse);
  border-color: var(--theme-colors-state-error);
}

.button--danger:hover:not(:disabled) {
  background-color: #dc2626; /* Fallback pour hover danger */
  filter: brightness(0.9);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button--danger:active:not(:disabled) {
  filter: brightness(0.8);
  transform: translateY(0);
}

/* ======================
   STATE MODIFIERS
   ====================== */

/* Block (full width) */
.button--block {
  width: 100%;
}

/* Disabled state */
.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading state */
.button--loading {
  cursor: not-allowed;
}

/* ======================
   BUTTON CONTENT
   ====================== */
.button-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: opacity 0.2s ease;
}

.button-content--hidden {
  opacity: 0;
}

.button-text {
  flex: 1;
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;

}

.button-icon--before {
  margin-right: calc(-1 * var(--spacing-1));
}

.button-icon--after {
  margin-left: calc(-1 * var(--spacing-1));
}

/* ======================
   LOADING SPINNER
   ====================== */
.button-spinner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-icon {
  width: 16px;
  height: 16px;
  color: currentColor;
}

.button--sm .spinner-icon {
  width: 14px;
  height: 14px;
}

.button--lg .spinner-icon {
  width: 18px;
  height: 18px;
}
</style>
