<template>
  <label class="utopia-switch" :class="switchClasses">
    <input 
      type="checkbox" 
      class="utopia-switch__input"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
    />
    <div class="utopia-switch__track">
      <div class="utopia-switch__thumb">
        <Icon 
          name="Check" 
          :class="`utopia-switch__icon ${modelValue ? 'utopia-switch__icon--visible' : ''}`"
          stroke-width="4"
        />

      </div>
    </div>
    <span v-if="$slots['default']" class="utopia-switch__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../../../composables/useTheme'
import Icon from '../Icon/Icon.vue'

interface Props {
  modelValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  size: 'medium'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { currentTheme } = useTheme()

const switchClasses = computed(() => ({
  [`utopia-switch--${props.size}`]: true,
  'utopia-switch--disabled': props.disabled,
  'utopia-switch--checked': props.modelValue,
  [`utopia-switch--${currentTheme.value?.mode || 'light'}`]: true
}))

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.utopia-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-3, 12px);
  cursor: pointer;
  user-select: none;
  position: relative;
  font-family: var(--font-family-sans, system-ui);
  font-size: var(--font-size-base, 16px);
  line-height: 1.5;
  transition: all 0.15s ease;
  
  /* Mobile touch fixes */
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
}

/* Cache l'input natif */
.utopia-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  
  /* Mobile touch fixes pour l'input caché */
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.utopia-switch__input:focus,
.utopia-switch__input:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
}

/* Track du switch */
.utopia-switch__track {
  position: relative;
  flex-shrink: 0;
  width: 48px;
  height: 24px;
  background: var(--theme-colors-border-default, #9ca3af);
  border: 2px solid var(--theme-colors-border-default, #9ca3af);
  border-radius: 24px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Thumb du switch */
.utopia-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateX(0);
}

/* Icône dans le thumb - cachée par défaut */
.utopia-switch__icon {
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  width: 10px;
  height: 10px;
}

/* Icône visible quand le switch est actif */
.utopia-switch__icon--visible {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.utopia-switch__icon :deep(svg) {
  color: var(--theme-colors-brand-primary-500, #3b82f6) !important;
  fill: var(--theme-colors-brand-primary-500, #3b82f6) !important;
}

.utopia-switch__icon :deep(svg path) {
  stroke: var(--theme-colors-brand-primary-500, #3b82f6) !important;
  fill: none !important;
}



/* Label */
.utopia-switch__label {
  color: var(--theme-colors-text-primary, #111827);
  font-weight: var(--font-weight-medium, 500);
  cursor: pointer;
  transition: color 0.15s ease;
}

/* États - Hover (inactif) */
.utopia-switch:hover:not(.utopia-switch--disabled):not(.utopia-switch--checked) .utopia-switch__track {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
  border-color: var(--theme-colors-brand-primary-400, #60a5fa);
}

.utopia-switch:hover:not(.utopia-switch--disabled) .utopia-switch__label {
  color: var(--theme-colors-brand-primary-500);
}

/* États - Active (effet au clic) */
.utopia-switch:active:not(.utopia-switch--disabled) .utopia-switch__thumb {
  transform: translateX(0) scale(0.9);
  transition: transform 0.1s ease;
}

.utopia-switch--checked:active:not(.utopia-switch--disabled) .utopia-switch__thumb {
  transform: translateX(24px) scale(0.9);
  transition: transform 0.1s ease;
}

/* États - Checked (actif) */
.utopia-switch--checked .utopia-switch__track {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #3b82f6) 0%, var(--theme-colors-brand-primary-500, #2563eb) 100%);
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.utopia-switch--checked .utopia-switch__thumb {
  transform: translateX(24px);
  background: white;
}



/* États - Checked + Hover */
.utopia-switch--checked:hover:not(.utopia-switch--disabled) .utopia-switch__track {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #2563eb) 0%, var(--theme-colors-brand-primary-500, #1d4ed8) 100%);
  border-color: var(--theme-colors-brand-primary-500, #2563eb);
  box-shadow: 0 0 0 4px var(--theme-colors-brand-primary-100, rgba(59, 130, 246, 0.2));
}

/* États - Disabled */
.utopia-switch--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.utopia-switch--disabled .utopia-switch__track {
  background: var(--theme-colors-surface-background, #f9fafb);
  border-color: var(--theme-colors-border-muted, #e5e7eb);
  cursor: not-allowed;
}

.utopia-switch--disabled .utopia-switch__thumb {
  background: var(--theme-colors-border-muted, #e5e7eb);
  cursor: not-allowed;
  box-shadow: none;
}

.utopia-switch--disabled .utopia-switch__label {
  color: var(--theme-colors-text-muted, #9ca3af);
  cursor: not-allowed;
}

/* États - Disabled + Checked */
.utopia-switch--disabled.utopia-switch--checked .utopia-switch__track {
  background: var(--theme-colors-border-muted, #e5e7eb);
  border-color: var(--theme-colors-border-muted, #e5e7eb);
  box-shadow: none;
}

.utopia-switch--disabled.utopia-switch--checked .utopia-switch__thumb {
  background: var(--theme-colors-text-muted, #9ca3af);
  transform: translateX(22px);
}

.utopia-switch--disabled.utopia-switch--checked .utopia-switch__icon {
  opacity: 0.7;
}

.utopia-switch--disabled.utopia-switch--checked .utopia-switch__icon :deep(svg) {
  color: white !important;
  fill: white !important;
}

.utopia-switch--disabled.utopia-switch--checked .utopia-switch__icon :deep(svg path) {
  stroke: white !important;
}

/* Tailles */
.utopia-switch--small {
  font-size: var(--font-size-sm, 14px);
  gap: var(--spacing-2, 8px);
}

.utopia-switch--small .utopia-switch__track {
  width: 40px;
  height: 20px;
}

.utopia-switch--small .utopia-switch__thumb {
  width: 14px;
  height: 14px;
  top: 1px;
  left: 1px;
}

.utopia-switch--small.utopia-switch--checked .utopia-switch__thumb {
  transform: translateX(19px);
}

.utopia-switch--small.utopia-switch--checked:active:not(.utopia-switch--disabled) .utopia-switch__thumb {
  transform: translateX(19px) scale(0.9);
}

.utopia-switch--small .utopia-switch__icon {
  width: 8px;
  height: 8px;
}

.utopia-switch--medium {
  font-size: var(--font-size-base, 16px);
  gap: var(--spacing-3, 12px);
}

.utopia-switch--medium .utopia-switch__track {
  width: 48px;
  height: 24px;
}

.utopia-switch--medium .utopia-switch__thumb {
  width: 16px;
  height: 16px;
  top: 2px;
  left: 2px;
}

.utopia-switch--medium.utopia-switch--checked .utopia-switch__thumb {
  transform: translateX(24px);
}

.utopia-switch--medium.utopia-switch--checked:active:not(.utopia-switch--disabled) .utopia-switch__thumb {
  transform: translateX(24px) scale(0.9);
}

.utopia-switch--medium .utopia-switch__icon {
  width: 10px;
  height: 10px;
}

.utopia-switch--large {
  font-size: var(--font-size-lg, 18px);
  gap: var(--spacing-4, 16px);
}

.utopia-switch--large .utopia-switch__track {
  width: 56px;
  height: 28px;
}

.utopia-switch--large .utopia-switch__thumb {
  width: 20px;
  height: 20px;
  top: 2px;
  left: 2px;
}

.utopia-switch--large.utopia-switch--checked .utopia-switch__thumb {
  transform: translateX(28px);
}

.utopia-switch--large.utopia-switch--checked:active:not(.utopia-switch--disabled) .utopia-switch__thumb {
  transform: translateX(28px) scale(0.9);
}

.utopia-switch--large .utopia-switch__icon {
  width: 12px;
  height: 12px;
}

/* Animation de focus pour l'accessibilité */
.utopia-switch__input:focus-visible + .utopia-switch__track {
  outline: 2px solid var(--theme-colors-brand-primary-500, #3b82f6);
  outline-offset: 2px;
}

/* Animations personnalisées */
@keyframes switchPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.utopia-switch--checked .utopia-switch__track {
  animation: switchPop 0.2s ease-out;
}

/* Dark mode */
.utopia-switch--dark .utopia-switch__track {
  background: var(--theme-colors-border-default, #6b7280);
  border-color: var(--theme-colors-border-default, #6b7280);
}

.utopia-switch--dark .utopia-switch__thumb {
  background: var(--theme-colors-surface-background, #f9fafb);
}

.utopia-switch--dark:hover:not(.utopia-switch--disabled):not(.utopia-switch--checked) .utopia-switch__track {
  background: var(--theme-colors-brand-primary-25, rgba(59, 130, 246, 0.1));
  border-color: var(--theme-colors-brand-primary-400, #60a5fa);
}

.utopia-switch--dark.utopia-switch--checked .utopia-switch__track {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #3b82f6) 0%, var(--theme-colors-brand-primary-500, #2563eb) 100%);
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
}

.utopia-switch--dark.utopia-switch--checked .utopia-switch__thumb {
  background: white;
}

.utopia-switch--dark.utopia-switch--checked:hover:not(.utopia-switch--disabled) .utopia-switch__track {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #2563eb) 0%, var(--theme-colors-brand-primary-500, #1d4ed8) 100%);
  border-color: var(--theme-colors-brand-primary-500, #2563eb);
}

.utopia-switch--dark.utopia-switch--disabled .utopia-switch__track {
  background: var(--theme-colors-surface-background, #111827);
  border-color: var(--theme-colors-border-muted, #374151);
}

.utopia-switch--dark.utopia-switch--disabled .utopia-switch__thumb {
  background: var(--theme-colors-border-muted, #374151);
}

.utopia-switch--dark.utopia-switch--disabled.utopia-switch--checked .utopia-switch__track {
  background: var(--theme-colors-border-muted, #374151);
  border-color: var(--theme-colors-border-muted, #374151);
}

.utopia-switch--dark.utopia-switch--disabled.utopia-switch--checked .utopia-switch__thumb {
  background: var(--theme-colors-text-muted, #6b7280);
}
</style>