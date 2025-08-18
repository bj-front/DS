<template>
  <button 
    class="utopia-button" 
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
    :style="{ flexDirection: iconPosition === 'right' && icon && $slots['default'] && !loading ? 'row-reverse' : 'row' }"
  >
    <Icon 
      v-if="loading" 
      name="Loader-2" 
      class="utopia-button__icon utopia-button__icon--loading"
      stroke-width="2"
    />
    <Icon 
      v-else-if="icon" 
      :name="icon" 
      class="utopia-button__icon"
      stroke-width="2"
    />
    <span v-if="$slots['default']" class="utopia-button__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useTheme } from '../../../composables/useTheme'
import Icon from '../Icon/Icon.vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { currentTheme } = useTheme()
const slots = useSlots()

const buttonClasses = computed(() => ({
  [`utopia-button--${props.variant}`]: true,
  [`utopia-button--${props.size}`]: true,
  'utopia-button--disabled': props.disabled,
  'utopia-button--loading': props.loading,
  'utopia-button--icon-only': (props.icon && !slots.default) || props.loading,
  [`utopia-button--${currentTheme.value?.mode || 'light'}`]: true
}))

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.utopia-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2, 8px);
  border: 2px solid transparent !important;
  border-radius: 50px;
  font-family: var(--font-family-sans, system-ui);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  
  /* Mobile touch fixes */
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
  user-select: none;
}

.utopia-button:focus,
.utopia-button:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
}

/* Icône */
.utopia-button__icon {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

/* Icône loading avec animation */
.utopia-button__icon--loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}



.utopia-button__text {
  white-space: nowrap;
}

/* VARIANT PRIMARY */
.utopia-button--primary {
  background: var(--theme-colors-brand-primary-500, #3b82f6);
  border-color: transparent;
  color: white;
  box-shadow: 0 1px 3px var(--theme-colors-brand-primary-200, #3b82f6);
}

.utopia-button--primary:hover:not(.utopia-button--disabled):not(:focus-visible) {
  background: var(--theme-colors-brand-primary-400, #60a5fa);
  border-color: transparent;
  box-shadow: 0 4px 12px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.4));
  transform: translateY(-1px);
}

.utopia-button--primary:active:not(.utopia-button--disabled):not(:focus-visible) {
  transform: translateY(0);
  border-color: transparent;
  box-shadow: 0 1px 3px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.3));
  transition: all 0.1s ease;
}

.utopia-button--primary:active:focus-visible:not(.utopia-button--disabled) {
  background: var(--theme-colors-brand-primary-200, #c7d2fe);
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  box-shadow: 0 1px 3px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.3));
  transform: translateY(0);
}

.utopia-button--primary:focus-visible {
  background: var(--theme-colors-brand-primary-200, #c7d2fe);
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: none;
}

.utopia-button--primary:focus-visible:hover:not(.utopia-button--disabled) {
  background: var(--theme-colors-brand-primary-200, #c7d2fe);
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: 0 4px 12px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.4));
}

.utopia-button--primary:focus-visible:active:not(.utopia-button--disabled) {
  background: var(--theme-colors-brand-primary-200, #c7d2fe);
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: 0 1px 3px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.3));
  transform: translateY(0);
}

/* VARIANT SECONDARY */
.utopia-button--secondary {
  background: var(--theme-colors-surface-card, #ffffff);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  border-color: transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.utopia-button--secondary:hover:not(.utopia-button--disabled):not(:focus-visible) {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
  border-color: transparent;
  box-shadow: 0 2px 8px var(--theme-colors-brand-primary-100, rgba(59, 130, 246, 0.2));
  transform: translateY(-1px);
}

.utopia-button--secondary:active:not(.utopia-button--disabled):not(:focus-visible) {
  transform: translateY(0);
  background: var(--theme-colors-brand-primary-50, #dbeafe);
  border-color: transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.1s ease;
}

.utopia-button--secondary:active:focus-visible:not(.utopia-button--disabled) {
  background: var(--theme-colors-surface-card, #ffffff);
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transform: translateY(0);
}

.utopia-button--secondary:focus-visible {
  border-color: transparent;
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: none;
}

.utopia-button--secondary:focus-visible:hover:not(.utopia-button--disabled) {
  background: var(--theme-colors-surface-card, #ffffff);
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: 0 2px 8px var(--theme-colors-brand-primary-100, rgba(59, 130, 246, 0.2));
}

/* VARIANT TERTIARY */
.utopia-button--tertiary {
  background: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  border-color: transparent;
  box-shadow: none;
}

.utopia-button--tertiary:hover:not(.utopia-button--disabled):not(:focus-visible) {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #2563eb);
}

.utopia-button--tertiary:active:not(.utopia-button--disabled):not(:focus-visible) {
  background: var(--theme-colors-brand-primary-50, #dbeafe);
  border-color: transparent;
  transition: all 0.1s ease;
}

.utopia-button--tertiary:active:focus-visible:not(.utopia-button--disabled) {
  background: transparent;
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  box-shadow: none;
  transform: translateY(0);
}

.utopia-button--tertiary:focus-visible {
  border-color: transparent;
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: none;
}

.utopia-button--tertiary:focus-visible:hover:not(.utopia-button--disabled) {
  background: transparent;
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: none;
}

.utopia-button--tertiary:focus-visible:active:not(.utopia-button--disabled) {
  background: transparent;
  border-color: transparent;
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: -2px;
  box-shadow: none;
  transform: translateY(0);
}

/* TAILLES */
.utopia-button--xs {
  padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
  font-size: var(--font-size-xs, 12px);
  border-radius: 50px;
}

.utopia-button--xs .utopia-button__icon {
  width: 12px;
  height: 12px;
}

.utopia-button--sm {
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  font-size: var(--font-size-sm, 14px);
  border-radius: 50px;
}

.utopia-button--sm .utopia-button__icon {
  width: 14px;
  height: 14px;
}

.utopia-button--md {
  padding: var(--spacing-2-5, 10px) var(--spacing-4, 16px);
  font-size: var(--font-size-base, 16px);
  border-radius: 50px;
}

.utopia-button--md .utopia-button__icon {
  width: 16px;
  height: 16px;
}

.utopia-button--lg {
  padding: var(--spacing-3, 12px) var(--spacing-5, 20px);
  font-size: var(--font-size-lg, 18px);
  border-radius: 50px;
}

.utopia-button--lg .utopia-button__icon {
  width: 18px;
  height: 18px;
}

.utopia-button--xl {
  padding: var(--spacing-4, 16px) var(--spacing-6, 24px);
  font-size: var(--font-size-xl, 20px);
  border-radius: 50px;
}

.utopia-button--xl .utopia-button__icon {
  width: 20px;
  height: 20px;
}

/* Boutons icon-only (carrés) */
.utopia-button--icon-only.utopia-button--xs {
  padding: var(--spacing-1, 4px);
  width: 24px;
  height: 24px;
}

.utopia-button--icon-only.utopia-button--sm {
  padding: var(--spacing-2, 8px);
  width: 32px;
  height: 32px;
}

.utopia-button--icon-only.utopia-button--md {
  padding: var(--spacing-2-5, 10px);
  width: 40px;
  height: 40px;
}

.utopia-button--icon-only.utopia-button--lg {
  padding: var(--spacing-3, 12px);
  width: 48px;
  height: 48px;
}

.utopia-button--icon-only.utopia-button--xl {
  padding: var(--spacing-4, 16px);
  width: 56px;
  height: 56px;
}

/* ÉTAT LOADING */
.utopia-button--loading {
  cursor: wait;
  pointer-events: none;
  opacity: 0.8;
}

.utopia-button--loading:hover,
.utopia-button--loading:focus,
.utopia-button--loading:active {
  transform: none !important;
  box-shadow: inherit !important;
  border-color: inherit !important;
  background: inherit !important;
}

/* Loading spécifique par variant pour maintenir les bordures */
.utopia-button--primary.utopia-button--loading {
  border-color: transparent;
}

.utopia-button--secondary.utopia-button--loading {
  border-color: var(--theme-colors-border-default, #d1d5db);
}

.utopia-button--tertiary.utopia-button--loading {
  border-color: transparent;
}

/* ÉTAT DISABLED */
.utopia-button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  transform: none !important;
  box-shadow: none !important;
  transition: none !important;
}

.utopia-button--primary.utopia-button--disabled {
  background: var(--theme-colors-border-muted, #e5e7eb);
  color: var(--theme-colors-text-muted, #9ca3af);
  border-color: transparent;
}

.utopia-button--secondary.utopia-button--disabled {
  background: var(--theme-colors-surface-background, #f9fafb);
  color: var(--theme-colors-text-muted, #9ca3af);
  border-color: transparent;
}

.utopia-button--tertiary.utopia-button--disabled {
  background: transparent;
  color: var(--theme-colors-text-muted, #9ca3af);
  border-color: transparent;
}

/* Animation au clic */
.utopia-button:active:not(.utopia-button--disabled) .utopia-button__icon {
  transform: scale(0.95);
}

/* Dark mode */
.utopia-button--dark.utopia-button--secondary {
  background: var(--theme-colors-surface-card, #1f2937);
  color: var(--theme-colors-brand-primary-400, #60a5fa);
  border-color: var(--theme-colors-border-default, #374151);
}

.utopia-button--dark.utopia-button--secondary:hover:not(.utopia-button--disabled) {
  background: var(--theme-colors-brand-primary-25, rgba(59, 130, 246, 0.1));
  border-color: var(--theme-colors-brand-primary-400, #60a5fa);
}

.utopia-button--dark.utopia-button--tertiary {
  color: var(--theme-colors-brand-primary-400, #60a5fa);
}

.utopia-button--dark.utopia-button--tertiary:hover:not(.utopia-button--disabled) {
  background: var(--theme-colors-brand-primary-25, rgba(59, 130, 246, 0.1));
}

.utopia-button--dark.utopia-button--primary.utopia-button--disabled,
.utopia-button--dark.utopia-button--secondary.utopia-button--disabled,
.utopia-button--dark.utopia-button--tertiary.utopia-button--disabled {
  background: var(--theme-colors-surface-background, #111827);
  color: var(--theme-colors-text-muted, #6b7280);
  border-color: var(--theme-colors-border-muted, #374151);
}
</style>