<template>
  <div class="utopia-chip" :class="chipClasses">
    <!-- Icône à gauche -->
    <Icon 
      v-if="leftIcon" 
      :name="leftIcon" 
      :size="iconSize" 
      class="utopia-chip__left-icon"
    />
    
    <!-- Label -->
    <span class="utopia-chip__label">
      <slot />
    </span>
    
    <!-- Icône de fermeture à droite -->
    <button 
      v-if="removable" 
      type="button"
      class="utopia-chip__close-button"
      :disabled="disabled"
      @click="handleRemove"
      :aria-label="`Supprimer ${$slots.default ? $slots.default() : 'chip'}`"
    >
      <Icon 
        name="X" 
        :size="iconSize" 
        class="utopia-chip__close-icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../../../composables/useTheme'
import Icon from '../Icon/Icon.vue'

interface Props {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  removable?: boolean
  leftIcon?: string
  actionable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  disabled: false,
  removable: false,
  actionable: false
})

const emit = defineEmits<{
  remove: []
}>()

const { currentTheme } = useTheme()

const chipClasses = computed(() => ({
  [`utopia-chip--${props.variant}`]: true,
  [`utopia-chip--${props.size}`]: true,
  'utopia-chip--disabled': props.disabled,
  'utopia-chip--removable': props.removable,
  'utopia-chip--actionable': props.actionable,
  [`utopia-chip--${currentTheme.value?.mode || 'light'}`]: true
}))

const iconSize = computed(() => {
  const sizeMap = {
    'small': 'small' as const,
    'medium': 'medium' as const,
    'large': 'large' as const
  }
  return sizeMap[props.size]
})

const handleRemove = (event: Event) => {
  event.stopPropagation()
  if (!props.disabled) {
    emit('remove')
  }
}
</script>

<style scoped>
.utopia-chip {
  /* Styles de base inspirés du Switch */
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2, 8px);
  border-radius: var(--radius-md, 50px);
  font-family: var(--font-family-sans, system-ui);
  font-size: var(--font-size-base, 16px);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1.5;
  transition: all 0.15s ease;
  cursor: default;
  user-select: none;
  position: relative;
  
  /* Mobile touch fixes */
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
}

/* Variants */
.utopia-chip--default {
  background: var(--theme-colors-surface-background, #ffffff);
  border: 1px solid var(--theme-colors-border-default, #d1d5db);
  color: var(--theme-colors-text-primary, #111827);
}

.utopia-chip--primary {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #3b82f6) 0%, var(--theme-colors-brand-primary-500, #2563eb) 100%);
  border: 1px solid var(--theme-colors-brand-primary-500, #3b82f6);
  color: var(--theme-colors-brand-primary-text, #ffffff);
}

.utopia-chip--secondary {
  background: linear-gradient(135deg, var(--theme-colors-brand-secondary-500, #8b5cf6) 0%, var(--theme-colors-brand-secondary-500, #7c3aed) 100%);
  border: 1px solid var(--theme-colors-brand-secondary-500, #8b5cf6);
  color: var(--theme-colors-brand-secondary-text, #ffffff);
}

.utopia-chip--success {
  background: linear-gradient(135deg, var(--theme-colors-semantic-success-primary, #10b981) 0%, var(--theme-colors-semantic-success-primary, #059669) 100%);
  border: 1px solid var(--theme-colors-semantic-success-primary, #10b981);
  color: var(--theme-colors-semantic-success-text, #ffffff);
}

.utopia-chip--warning {
  background: linear-gradient(135deg, var(--theme-colors-warning-500, #f59e0b) 0%, var(--theme-colors-warning-500, #d97706) 100%);
  border: 1px solid var(--theme-colors-warning-500, #f59e0b);
  color: var(--theme-colors-warning-text, #ffffff);
}

.utopia-chip--danger {
  background: linear-gradient(135deg, var(--theme-colors-semantic-attention-primary, #ef4444) 0%, var(--theme-colors-semantic-attention-primary, #dc2626) 100%);
  border: 1px solid var(--theme-colors-semantic-attention-primary, #ef4444);
  color: var(--theme-colors-semantic-attention-text, #ffffff);
}

/* Sizes */
.utopia-chip--small {
  padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
  font-size: var(--font-size-sm, 14px);
  gap: var(--spacing-1, 4px);
}

.utopia-chip--medium {
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  font-size: var(--font-size-base, 16px);
  gap: var(--spacing-2, 8px);
}

.utopia-chip--large {
  padding: var(--spacing-3, 12px) var(--spacing-4, 16px);
  font-size: var(--font-size-lg, 18px);
  gap: var(--spacing-2, 8px);
}

/* Label */
.utopia-chip__label {
  color: inherit;
  font-weight: inherit;
  cursor: inherit;
  transition: color 0.15s ease;
}

/* Icône à gauche */
.utopia-chip__left-icon {
  flex-shrink: 0;
  color: inherit;
}

/* Bouton de fermeture */
.utopia-chip__close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.15s ease;
  flex-shrink: 0;
  color: inherit;
  
  /* Mobile touch fixes */
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
}

.utopia-chip__close-icon {
  color: currentColor !important;
  opacity: 0.7;
  transition: all 0.15s ease;
}

/* Forcer la couleur des éléments SVG de l'icône de fermeture */
.utopia-chip__close-icon :deep(svg),
.utopia-chip__close-icon :deep(path),
.utopia-chip__close-icon :deep(circle),
.utopia-chip__close-icon :deep(line),
.utopia-chip__close-icon :deep(rect),
.utopia-chip__close-icon :deep(polygon) {
  stroke: currentColor !important;
  fill: currentColor !important;
}

/* États - Hover (seulement si actionable) */
.utopia-chip--actionable:hover:not(.utopia-chip--disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.utopia-chip--actionable.utopia-chip--default:hover:not(.utopia-chip--disabled) {
  background: var(--theme-colors-surface-background, #f9fafb);
  border-color: var(--theme-colors-border-default, #9ca3af);
}

.utopia-chip--actionable.utopia-chip--primary:hover:not(.utopia-chip--disabled) {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #2563eb) 0%, var(--theme-colors-brand-primary-500, #1d4ed8) 100%);
  border-color: var(--theme-colors-brand-primary-500, #2563eb);
}

.utopia-chip--actionable.utopia-chip--secondary:hover:not(.utopia-chip--disabled) {
  background: linear-gradient(135deg, var(--theme-colors-brand-secondary-500, #7c3aed) 0%, var(--theme-colors-brand-secondary-500, #6d28d9) 100%);
  border-color: var(--theme-colors-brand-secondary-500, #7c3aed);
}

.utopia-chip--actionable.utopia-chip--success:hover:not(.utopia-chip--disabled) {
  background: linear-gradient(135deg, var(--theme-colors-semantic-success-primary, #059669) 0%, var(--theme-colors-semantic-success-primary, #047857) 100%);
  border-color: var(--theme-colors-semantic-success-primary, #059669);
}

.utopia-chip--actionable.utopia-chip--warning:hover:not(.utopia-chip--disabled) {
  background: linear-gradient(135deg, var(--theme-colors-warning-500, #d97706) 0%, var(--theme-colors-warning-500, #b45309) 100%);
  border-color: var(--theme-colors-warning-500, #d97706);
}

.utopia-chip--actionable.utopia-chip--danger:hover:not(.utopia-chip--disabled) {
  background: linear-gradient(135deg, var(--theme-colors-semantic-attention-primary, #dc2626) 0%, var(--theme-colors-semantic-attention-primary, #b91c1c) 100%);
  border-color: var(--theme-colors-semantic-attention-primary, #dc2626);
}

/* Hover sur le bouton de fermeture */
.utopia-chip__close-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.utopia-chip__close-button:hover:not(:disabled) .utopia-chip__close-icon {
  opacity: 1;
  color: inherit;
}

/* États - Active (effet au clic) */
.utopia-chip--actionable:active:not(.utopia-chip--disabled) {
  transform: translateY(0);
  transition: transform 0.1s ease;
}

.utopia-chip__close-button:active:not(:disabled) {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}

/* États - Disabled */
.utopia-chip--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  transform: none !important;
}

.utopia-chip--disabled .utopia-chip__close-button {
  cursor: not-allowed;
  pointer-events: none;
}

.utopia-chip--disabled .utopia-chip__close-icon {
  opacity: 0.3;
}

/* Focus pour l'accessibilité */
.utopia-chip--actionable:focus-visible {
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: 2px;
}

.utopia-chip__close-button:focus-visible {
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: 2px;
}

/* Animations personnalisées */
@keyframes chipPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.utopia-chip {
  animation: chipPop 0.2s ease-out;
}

/* Dark mode */
.utopia-chip--dark.utopia-chip--default {
  background: var(--theme-colors-surface-background, #1f2937);
  border-color: var(--theme-colors-border-default, #4b5563);
  color: var(--theme-colors-text-primary, #f9fafb);
}

.utopia-chip--dark.utopia-chip--actionable.utopia-chip--default:hover:not(.utopia-chip--disabled) {
  background: var(--theme-colors-surface-background, #374151);
  border-color: var(--theme-colors-border-default, #6b7280);
}

.utopia-chip--dark.utopia-chip--disabled {
  background: var(--theme-colors-surface-background, #111827);
  border-color: var(--theme-colors-border-muted, #374151);
  color: var(--theme-colors-text-muted, #6b7280);
}
</style>