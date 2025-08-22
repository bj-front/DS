<template>
  <div class="utopia-inputtext" :class="inputtextClasses">
    <!-- Label -->
    <label v-if="label" class="utopia-inputtext__label" :for="inputId">
      {{ label }}
    </label>
    
    <!-- Input container -->
    <div class="utopia-inputtext__container">
      <!-- Input field -->
      <input
        :id="inputId"
        ref="inputRef"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        class="utopia-inputtext__field"
        :class="fieldClasses"
        :min="min"
        :max="max"
        :step="numericStep"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
        @keypress="handleKeypress"
      />
      
      <!-- Validation / leading icon -->
      <div v-if="icon || state === 'valid' || state === 'error'" class="utopia-inputtext__icon">
        <Icon 
          v-if="state === 'valid'" 
          name="Check" 
          class="utopia-inputtext__icon--valid"
          stroke-width="2"
          color="success"
        />
        <Icon 
          v-else-if="state === 'error'" 
          name="Alert-triangle" 
          class="utopia-inputtext__icon--error"
          stroke-width="2"
          color="danger"
        />
        <Icon 
          v-else-if="icon" 
          :name="icon" 
          class="utopia-inputtext__icon--default"
          stroke-width="2"
          color="current"
        />
      </div>

      <!-- Custom stepper for number type (hidden for code mode) -->
      <div 
        v-if="type === 'number' && !isCode" 
        class="utopia-inputtext__stepper"
        aria-hidden="true"
      >
        <button 
          type="button" 
          class="utopia-inputtext__stepper-btn utopia-inputtext__stepper-btn--up"
          @click="incrementValue"
          :disabled="disabled || readonly"
          tabindex="-1"
        >
          <Icon name="Chevron-up" stroke-width="2" />
        </button>
        <button 
          type="button" 
          class="utopia-inputtext__stepper-btn utopia-inputtext__stepper-btn--down"
          @click="decrementValue"
          :disabled="disabled || readonly"
          tabindex="-1"
        >
          <Icon name="Chevron-down" stroke-width="2" />
        </button>
      </div>
    </div>
    
    <!-- Message d'erreur ou de validation -->
    <div v-if="message" class="utopia-inputtext__message" :class="messageClasses">
      <Icon 
        v-if="state === 'error'" 
        name="Alert-triangle" 
        class="utopia-inputtext__message-icon"
        stroke-width="2"
      />
      <Icon 
        v-else-if="state === 'valid'" 
        name="Check" 
        class="utopia-inputtext__message-icon"
        stroke-width="2"
      />
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { Icon } from '../Icon'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  state?: 'default' | 'error' | 'valid' | 'incomplete' | 'completed'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  readonly?: boolean
  icon?: string
  message?: string
  required?: boolean
  min?: number
  max?: number
  step?: number
  isCode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  state: 'default',
  size: 'medium',
  disabled: false,
  readonly: false,
  icon: '',
  message: '',
  required: false,
  step: 1,
  isCode: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
  'input': [event: Event]
  'change': [event: Event]
}>()

// Références
const inputRef = ref<HTMLInputElement>()
const inputValue = ref(props.modelValue)

// ID unique pour l'input
const inputId = computed(() => `utopia-input-${Math.random().toString(36).substr(2, 9)}`)

// Step numérique
const numericStep = computed(() => props.step ?? 1)

// Classes CSS
const inputtextClasses = computed(() => ({
  [`utopia-inputtext--${props.size}`]: true,
  [`utopia-inputtext--${props.state}`]: true,
  'utopia-inputtext--disabled': props.disabled,
  'utopia-inputtext--with-icon': props.icon || props.state === 'valid' || props.state === 'error',
  'utopia-inputtext--with-message': props.message,
  'utopia-inputtext--code': props.isCode
}))

const fieldClasses = computed(() => ({
  'utopia-inputtext__field--with-icon': props.icon || props.state === 'valid' || props.state === 'error',
  'utopia-inputtext__field--number': props.type === 'number',
  'utopia-inputtext__field--code': props.isCode
}))

const messageClasses = computed(() => ({
  [`utopia-inputtext__message--${props.state}`]: props.state === 'error' || props.state === 'valid'
}))

// Gestionnaires d'événements
const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value
  
  // Validation spécifique pour le mode code
  if (props.isCode) {
    // Prendre seulement le premier caractère
    value = value.charAt(0).toUpperCase()
    
    // Validation selon le type
    if (props.type === 'number') {
      // Pour les numériques : seulement les chiffres
      if (!/^\d$/.test(value)) {
        value = ''
      }
    } else {
      // Pour le texte : lettres et chiffres uniquement
      if (!/^[A-Z0-9]$/.test(value)) {
        value = ''
      }
    }
    
    // Mettre à jour la valeur dans l'input
    target.value = value
  }
  
  inputValue.value = value
  emit('update:modelValue', value)
  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleKeypress = (event: KeyboardEvent) => {
  // Validation spécifique pour le mode code
  if (props.isCode) {
    const char = event.key
    
    // Bloquer les caractères invalides
    if (props.type === 'number') {
      // Pour les numériques : seulement les chiffres
      if (!/^\d$/.test(char)) {
        event.preventDefault()
        return
      }
    } else {
      // Pour le texte : lettres et chiffres uniquement
      if (!/^[A-Za-z0-9]$/.test(char)) {
        event.preventDefault()
        return
      }
    }
  }
}

// Helpers number
const coerceNumber = (value: string): number => {
  const n = parseFloat(value)
  return Number.isFinite(n) ? n : 0
}

const clamp = (n: number): number => {
  if (typeof props.min === 'number') n = Math.max(n, props.min)
  if (typeof props.max === 'number') n = Math.min(n, props.max)
  return n
}

const formatValue = (n: number): string => {
  // Conserver la granularité du step
  const step = numericStep.value
  const decimals = (step && !Number.isInteger(step)) ? (step.toString().split('.')[1]?.length ?? 0) : 0
  return n.toFixed(decimals)
}

const incrementValue = (): void => {
  const current = coerceNumber(inputValue.value)
  const next = clamp(current + numericStep.value)
  const nextStr = formatValue(next)
  inputValue.value = nextStr
  emit('update:modelValue', nextStr)
}

const decrementValue = (): void => {
  const current = coerceNumber(inputValue.value)
  const next = clamp(current - numericStep.value)
  const nextStr = formatValue(next)
  inputValue.value = nextStr
  emit('update:modelValue', nextStr)
}

// Synchronisation avec modelValue
const updateValue = (newValue: string) => {
  inputValue.value = newValue
  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.value = newValue
    }
  })
}

// Watch pour modelValue
import { watch } from 'vue'
watch(() => props.modelValue, (newValue) => {
  if (newValue !== inputValue.value) {
    updateValue(newValue || '')
  }
})
</script>

<style scoped>
.utopia-inputtext {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  width: 100%;
  font-family: var(--font-family-base, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  cursor: pointer;
  user-select: none;
}

/* Label */
.utopia-inputtext__label {
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.4;
}

/* Container */
.utopia-inputtext__container {
  position: relative;
  display: flex;
  align-items: center;
}

/* Field */
.utopia-inputtext__field {
  width: 100%;
  padding: var(--spacing-3, 12px) var(--spacing-4, 16px);
  border: 2px solid var(--theme-colors-border-default, #9ca3af);
  border-radius: var(--border-radius-md);
  background-color: var(--theme-colors-surface-background, #ffffff);
  color: var(--theme-colors-text-primary, #111827);
  font-size: var(--font-size-base, 16px);
  line-height: 1.5;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Prévenir le layout shift */
  box-sizing: border-box;
  /* Ajouter un shadow transparent par défaut pour éviter le shift */
  box-shadow: 0 0 0 4px transparent;
}

/* Mode code - optimisé pour les champs de code */
.utopia-inputtext__field--code {
  padding: var(--spacing-2, 8px) var(--spacing-2, 8px);
  text-align: center;
  font-size: var(--font-size-xl, 20px);
  font-weight: var(--font-weight-bold, 700);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  min-width: 0;
  flex-shrink: 0;
}

/* Tailles pour le mode code */
.utopia-inputtext--small .utopia-inputtext__field--code {
  padding: var(--spacing-1, 4px) var(--spacing-1, 4px);
  font-size: var(--font-size-lg, 18px);
}

.utopia-inputtext--large .utopia-inputtext__field--code {
  padding: var(--spacing-3, 12px) var(--spacing-3, 12px);
  font-size: var(--font-size-2xl, 24px);
}

/* Retirer les spinners natifs et garder le clavier/scroll */
.utopia-inputtext__field[type="number"]::-webkit-outer-spin-button,
.utopia-inputtext__field[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.utopia-inputtext__field[type="number"] {
  -moz-appearance: textfield;
}

/* Supprimer les flèches pour le mode code */
.utopia-inputtext__field--code[type="number"]::-webkit-outer-spin-button,
.utopia-inputtext__field--code[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.utopia-inputtext__field--code[type="number"] {
  -moz-appearance: textfield;
}

/* Espace pour le stepper custom (pas pour le mode code) */
.utopia-inputtext__field--number:not(.utopia-inputtext__field--code) {
  padding-right: calc(var(--spacing-4, 16px) + 28px);
}

.utopia-inputtext__field::placeholder {
  color: var(--theme-colors-text-muted, #9ca3af);
}

.utopia-inputtext__field--with-icon {
  padding-right: calc(var(--spacing-4, 16px) + 20px + var(--spacing-2, 8px));
}

/* Icon */
.utopia-inputtext__icon {
  position: absolute;
  right: var(--spacing-4, 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  pointer-events: none;
}

/* Custom stepper */
.utopia-inputtext__stepper {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.utopia-inputtext__stepper-btn {
  width: 22px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--theme-colors-text-muted, #9ca3af);
  cursor: pointer;
}
.utopia-inputtext__stepper-btn:hover:not(:disabled) {
  background: var(--theme-colors-surface-secondary, rgba(0,0,0,0.04));
  color: var(--theme-colors-text-secondary, #6b7280);
}
.utopia-inputtext__stepper-btn:active:not(:disabled) {
  background: var(--theme-colors-surface-secondary, rgba(0,0,0,0.06));
}
.utopia-inputtext__stepper-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Message */
.utopia-inputtext__message {
  display: flex;
  align-items: center;
  gap: var(--spacing-1, 4px);
  font-size: var(--font-size-sm, 14px);
  line-height: 1.4;
}

.utopia-inputtext__message--error {
  color: var(--theme-colors-danger-500, #ef4444);
}

.utopia-inputtext__message--valid {
  color: var(--theme-colors-success-500, #10b981);
}

.utopia-inputtext__message-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* États */

/* Focus générique pour tous les états */
.utopia-inputtext__field:focus {
  border-color: var(--theme-colors-brand-secondary-500, #3b82f6) !important;
  box-shadow: 0 0 0 4px var(--theme-colors-brand-secondary-300, rgba(59, 130, 246, 0.2)) !important;
  /* Prévenir le layout shift */
  transform: translateZ(0);
}

/* Focus spécifique pour les états error et valid */
.utopia-inputtext--error .utopia-inputtext__field:focus {
  border-color: var(--theme-colors-danger-500, #ef4444) !important;
  box-shadow: 0 0 0 4px var(--theme-colors-danger-100, rgba(239, 68, 68, 0.2)) !important;
  /* Prévenir le layout shift */
  transform: translateZ(0);
}

.utopia-inputtext--valid .utopia-inputtext__field:focus {
  border-color: var(--theme-colors-success-500, #10b981) !important;
  box-shadow: 0 0 0 4px var(--theme-colors-success-100, rgba(16, 185, 129, 0.2)) !important;
  /* Prévenir le layout shift */
  transform: translateZ(0);
}

/* Pas de focus pour l'état disabled */
.utopia-inputtext--disabled .utopia-inputtext__field:focus {
  border-color: var(--theme-colors-border-default, #9ca3af) !important;
  box-shadow: 0 0 0 4px transparent !important;
}

/* Pas d'effet de clic pour l'état disabled */
.utopia-inputtext--disabled .utopia-inputtext__field:active {
  border-color: var(--theme-colors-border-default, #9ca3af) !important;
  box-shadow: 0 0 0 4px transparent !important;
  transform: none !important;
}

/* Default (inactif) */
.utopia-inputtext--default .utopia-inputtext__field {
  border-color: var(--theme-colors-border-default, #9ca3af);
  background-color: var(--theme-colors-surface-background, #ffffff);
}

/* Active (actif) */
.utopia-inputtext--active .utopia-inputtext__field {
  border-color: var(--theme-colors-brand-secondary-500, #3b82f6);
  background-color: var(--theme-colors-surface-background, #ffffff);
  box-shadow: 0 0 0 4px var(--theme-colors-brand-secondary-300, rgba(59, 130, 246, 0.2));
}

/* Error */
.utopia-inputtext--error .utopia-inputtext__field {
  border-color: var(--theme-colors-danger-500, #ef4444);
  background-color: var(--theme-colors-surface-background, #ffffff);
}

/* Valid */
.utopia-inputtext--valid .utopia-inputtext__field {
  border-color: var(--theme-colors-success-500, #10b981);
  background-color: var(--theme-colors-surface-background, #ffffff);
}

/* Incomplete (non-complété) */
.utopia-inputtext--incomplete .utopia-inputtext__field {
  border-color: var(--theme-colors-border-default, #9ca3af);
  background-color: var(--theme-colors-surface-background, #ffffff);
}

/* Completed (complété) */
.utopia-inputtext--completed .utopia-inputtext__field {
  border-color: var(--theme-colors-border-default, #9ca3af);
  background-color: var(--theme-colors-surface-background, #ffffff);
  color: var(--theme-colors-text-primary, #111827);
}

/* Disabled */
.utopia-inputtext--disabled .utopia-inputtext__field {
  border-color: var(--theme-colors-border-muted, #e5e7eb);
  background-color: var(--theme-colors-surface-background, #f9fafb);
  color: var(--theme-colors-text-muted, #9ca3af);
  cursor: not-allowed;
  opacity: 0.5;
}

.utopia-inputtext--disabled .utopia-inputtext__field::placeholder {
  color: var(--theme-colors-text-muted, #9ca3af);
}

/* Sizes */
.utopia-inputtext--small .utopia-inputtext__field {
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  font-size: var(--font-size-sm, 14px);
}

.utopia-inputtext--small .utopia-inputtext__field--with-icon {
  padding-right: calc(var(--spacing-3, 12px) + 16px + var(--spacing-1, 4px));
}

.utopia-inputtext--small .utopia-inputtext__icon {
  right: var(--spacing-3, 12px);
  width: 16px;
  height: 16px;
}

.utopia-inputtext--large .utopia-inputtext__field {
  padding: var(--spacing-4, 16px) var(--spacing-5, 20px);
  font-size: var(--font-size-lg, 18px);
}

.utopia-inputtext--large .utopia-inputtext__field--with-icon {
  padding-right: calc(var(--spacing-5, 20px) + 24px + var(--spacing-3, 12px));
}

.utopia-inputtext--large .utopia-inputtext__icon {
  right: var(--spacing-5, 20px);
  width: 24px;
  height: 24px;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .utopia-inputtext__field {
    background-color: var(--theme-colors-surface-background, #1f2937);
    border-color: var(--theme-colors-border-default, #6b7280);
    color: var(--theme-colors-text-primary, #f9fafb);
  }
  
  .utopia-inputtext__field::placeholder {
    color: var(--theme-colors-text-muted, #6b7280);
  }
  
  .utopia-inputtext__label {
    color: var(--theme-colors-text-secondary, #9ca3af);
  }
  
  .utopia-inputtext__stepper-btn:hover:not(:disabled) {
    background: rgba(255,255,255,0.06);
  }
  
  .utopia-inputtext--disabled .utopia-inputtext__field {
    background-color: var(--theme-colors-surface-background, #111827);
    border-color: var(--theme-colors-border-muted, #374151);
    color: var(--theme-colors-text-muted, #6b7280);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .utopia-inputtext__field {
    font-size: 16px; /* Empêche le zoom sur iOS */
  }
}
</style>