<template>
  <label class="utopia-checkbox" :class="checkboxClasses">
    <input 
      type="checkbox" 
      class="utopia-checkbox__input"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
    />
    <div class="utopia-checkbox__box">
      <Icon 
        name="Check" 
        class="utopia-checkbox__check"
        stroke-width="4"
      />
    </div>
    <span v-if="$slots.default" class="utopia-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '../../../composables/useTheme';
import Icon from '../Icon/Icon.vue';

interface Props {
  modelValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
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

const checkboxClasses = computed(() => ({
  [`utopia-checkbox--${props.size}`]: true,
  'utopia-checkbox--disabled': props.disabled,
  'utopia-checkbox--checked': props.modelValue,
  [`utopia-checkbox--${currentTheme.value?.mode || 'light'}`]: true
}))

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.utopia-checkbox {
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
}

/* Cache l'input natif */
.utopia-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

/* Box de la checkbox */
.utopia-checkbox__box {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--theme-colors-border-default, #d1d5db);
  border-radius: var(--radius-sm, 6px);
  background: var(--theme-colors-surface-card, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}

/* Icône check */
.utopia-checkbox__check {
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  width: 12px;
  height: 12px;
}

.utopia-checkbox__check :deep(svg) {
  color: white !important;
  fill: white !important;
}

.utopia-checkbox__check :deep(svg path) {
  stroke: white !important;
  fill: none !important;
}

/* Label */
.utopia-checkbox__label {
  color: var(--theme-colors-text-primary, #111827);
  font-weight: var(--font-weight-medium, 500);
  cursor: pointer;
  transition: color 0.15s ease;
}

/* États - Hover */
.utopia-checkbox:hover:not(.utopia-checkbox--disabled) .utopia-checkbox__box {
  border-color: var(--theme-colors-brand-primary-400, #60a5fa);
  background: var(--theme-colors-brand-primary-25, #eff6ff);
  transform: scale(1.05);
}

.utopia-checkbox:hover:not(.utopia-checkbox--disabled) .utopia-checkbox__label {
  color: var(--theme-colors-brand-primary-500);
}

/* États - Active (effet au clic) */
.utopia-checkbox:active:not(.utopia-checkbox--disabled) .utopia-checkbox__box {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}

/* États - Checked */
.utopia-checkbox--checked .utopia-checkbox__box {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #3b82f6) 0%, var(--theme-colors-brand-primary-600, #2563eb) 100%);
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.utopia-checkbox--checked .utopia-checkbox__check {
  opacity: 1;
  transform: scale(1);
}

.utopia-checkbox--checked:hover:not(.utopia-checkbox--disabled) .utopia-checkbox__box {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-600, #2563eb) 0%, var(--theme-colors-brand-primary-700, #1d4ed8) 100%);
  border-color: var(--theme-colors-brand-primary-600, #2563eb);
  transform: scale(1.05);
}

/* États - Disabled */
.utopia-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.utopia-checkbox--disabled .utopia-checkbox__box {
  background: var(--theme-colors-surface-background, #f9fafb);
  border-color: var(--theme-colors-border-muted, #e5e7eb);
  cursor: not-allowed;
}

.utopia-checkbox--disabled .utopia-checkbox__label {
  color: var(--theme-colors-text-muted, #9ca3af);
  cursor: not-allowed;
}

.utopia-checkbox--disabled.utopia-checkbox--checked .utopia-checkbox__box {
  background: var(--theme-colors-border-muted, #e5e7eb);
  border-color: var(--theme-colors-border-muted, #e5e7eb);
}

.utopia-checkbox--disabled.utopia-checkbox--checked .utopia-checkbox__check :deep(svg) {
  color: var(--theme-colors-text-muted, #9ca3af) !important;
  fill: var(--theme-colors-text-muted, #9ca3af) !important;
}

.utopia-checkbox--disabled.utopia-checkbox--checked .utopia-checkbox__check :deep(svg path) {
  stroke: var(--theme-colors-text-muted, #9ca3af) !important;
}

/* Tailles */
.utopia-checkbox--small {
  font-size: var(--font-size-sm, 14px);
  gap: var(--spacing-2, 8px);
}

.utopia-checkbox--small .utopia-checkbox__box {
  width: 16px;
  height: 16px;
}

.utopia-checkbox--small .utopia-checkbox__check {
  width: 10px;
  height: 10px;
}

.utopia-checkbox--medium {
  font-size: var(--font-size-base, 16px);
  gap: var(--spacing-3, 12px);
}

.utopia-checkbox--medium .utopia-checkbox__box {
  width: 20px;
  height: 20px;
}

.utopia-checkbox--medium .utopia-checkbox__check {
  width: 12px;
  height: 12px;
}

.utopia-checkbox--large {
  font-size: var(--font-size-lg, 18px);
  gap: var(--spacing-4, 16px);
}

.utopia-checkbox--large .utopia-checkbox__box {
  width: 24px;
  height: 24px;
}

.utopia-checkbox--large .utopia-checkbox__check {
  width: 16px;
  height: 16px;
}

/* Animation de focus pour l'accessibilité */
.utopia-checkbox__input:focus-visible + .utopia-checkbox__box {
  outline: 2px solid var(--theme-colors-primary-500, #3b82f6);
  outline-offset: 2px;
}

/* Animations personnalisées */
@keyframes checkboxPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.utopia-checkbox--checked .utopia-checkbox__box {
  animation: checkboxPop 0.2s ease-out;
}

/* Dark mode */
.utopia-checkbox--dark .utopia-checkbox__box {
  background: var(--theme-colors-surface-card, #1f2937);
  border-color: var(--theme-colors-border-default, #374151);
}



.utopia-checkbox--dark:hover:not(.utopia-checkbox--disabled) .utopia-checkbox__box {
  background: var(--theme-colors-brand-primary-25, rgba(59, 130, 246, 0.1));
  border-color: var(--theme-colors-brand-primary-400, #60a5fa);
}

.utopia-checkbox--dark.utopia-checkbox--checked .utopia-checkbox__box {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500, #3b82f6) 0%, var(--theme-colors-brand-primary-600, #2563eb) 100%);
  border-color: var(--theme-colors-brand-primary-500, #3b82f6);
}

.utopia-checkbox--dark.utopia-checkbox--checked:hover:not(.utopia-checkbox--disabled) .utopia-checkbox__box {
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-600, #2563eb) 0%, var(--theme-colors-brand-primary-700, #1d4ed8) 100%);
  border-color: var(--theme-colors-brand-primary-600, #2563eb);
}

.utopia-checkbox--dark.utopia-checkbox--disabled .utopia-checkbox__box {
  background: var(--theme-colors-surface-background, #111827);
  border-color: var(--theme-colors-border-muted, #374151);
}


</style>