<template>
  <div class="utopia-inputcode" :class="inputcodeClasses">
    <!-- Label -->
    <label v-if="label" class="utopia-inputcode__label" :for="inputcodeId">
      {{ label }}
    </label>
    
    <!-- Container des champs -->
    <div class="utopia-inputcode__container">
      <div class="utopia-inputcode__fields">
        <InputText
          v-for="(_, index) in fields"
          :key="`field-${index}`"
          :ref="el => fieldRefs[index] = el"
          v-model="fieldValues[index]"
          :type="type"
          :inputmode="inputmode"
          :size="size"
          :state="fieldStates[index]"
          :disabled="disabled"
          :maxlength="1"
          is-code
          class="utopia-inputcode__field"
          :class="{ 'utopia-inputcode__field--active': activeIndex === index }"
          @update:modelValue="value => handleFieldInput(index, value)"
          @keydown="event => handleFieldKeydown(index, event)"
          @focus="handleFieldFocus(index)"
          @blur="handleFieldBlur(index)"
          @paste="handlePaste"
        />
      </div>
      
      <!-- Message d'erreur ou de validation -->
      <div v-if="message" class="utopia-inputcode__message" :class="messageClasses">
        <Icon 
          v-if="state === 'error'" 
          name="Alert-triangle" 
          class="utopia-inputcode__message-icon"
          stroke-width="2"
        />
        <Icon 
          v-else-if="state === 'valid'" 
          name="Check" 
          class="utopia-inputcode__message-icon"
          stroke-width="2"
        />
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { Icon } from '../../atoms/Icon'
import { InputText } from '../../atoms/InputText'

interface Props {
  modelValue?: string
  label?: string
  length?: number
  type?: 'text' | 'number'
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
  size?: 'small' | 'medium' | 'large'
  state?: 'default' | 'error' | 'valid'
  disabled?: boolean
  message?: string
  required?: boolean
  autoFocus?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  length: 6,
  type: 'number',
  size: 'medium',
  state: 'default',
  disabled: false,
  message: '',
  required: false,
  autoFocus: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'complete': [value: string]
  'change': [value: string]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

// ID unique
const inputcodeId = computed(() => `utopia-inputcode-${Math.random().toString(36).substr(2, 9)}`)

// Références des champs
const fieldRefs = ref<any[]>([])

// État local
const fieldValues = ref<string[]>([])
const activeIndex = ref(-1)
const fieldStates = ref<('default' | 'error' | 'valid')[]>([])

// Computed properties
const fields = computed(() => Array.from({ length: props.length }, (_, i) => i))

const inputcodeClasses = computed(() => ({
  [`utopia-inputcode--${props.size}`]: true,
  [`utopia-inputcode--${props.state}`]: true,
  'utopia-inputcode--disabled': props.disabled,
  'utopia-inputcode--with-label': !!props.label,
  'utopia-inputcode--with-message': !!props.message
}))

const messageClasses = computed(() => ({
  [`utopia-inputcode__message--${props.state}`]: props.state === 'error' || props.state === 'valid'
}))

// Méthodes
const initializeFields = () => {
  fieldValues.value = Array(props.length).fill('')
  fieldStates.value = Array(props.length).fill('default' as const)
  
  // Initialiser avec la valeur existante
  if (props.modelValue) {
    const chars = props.modelValue.split('').slice(0, props.length)
    chars.forEach((char, index) => {
      fieldValues.value[index] = char
    })
  }
}

const handleFieldInput = (index: number, value: string) => {
  fieldValues.value[index] = value
  
  // Émettre la valeur complète
  const completeValue = fieldValues.value.join('')
  emit('update:modelValue', completeValue)
  emit('change', completeValue)
  
  // Passer au champ suivant si on a saisi un caractère
  if (value && index < props.length - 1) {
    nextTick(() => {
      focusField(index + 1)
    })
  }
  
  // Vérifier si le code est completed
  if (completeValue.length === props.length) {
    emit('complete', completeValue)
  }
}

const handleFieldKeydown = (index: number, event: KeyboardEvent) => {
  if (event.key === 'Backspace') {
    event.preventDefault()
    
    // Si le champ actuel a du contenu, le vider
    if (fieldValues.value[index]) {
      fieldValues.value[index] = ''
    } 
    // Sinon, revenir au champ précédent et le vider
    else if (index > 0) {
      fieldValues.value[index - 1] = ''
      focusField(index - 1)
    }
    
    const completeValue = fieldValues.value.join('')
    emit('update:modelValue', completeValue)
    emit('change', completeValue)
  } else if (event.key === 'ArrowLeft' && index > 0) {
    event.preventDefault()
    focusField(index - 1)
  } else if (event.key === 'ArrowRight' && index < props.length - 1) {
    event.preventDefault()
    focusField(index + 1)
  }
}



const handleFieldFocus = (index: number) => {
  activeIndex.value = index
  emit('focus', new FocusEvent('focus'))
}

const handleFieldBlur = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1
  }
  emit('blur', new FocusEvent('blur'))
}

const handlePaste = (event: ClipboardEvent) => {
  // Empêcher le comportement par défaut du paste
  event.preventDefault()
  
  const pastedText = event.clipboardData?.getData('text') || ''
  
  // Filtrer selon le type
  let validChars: string[]
  if (props.type === 'number') {
    validChars = pastedText.split('').filter(char => /^\d$/.test(char))
  } else {
    validChars = pastedText.split('').filter(char => /^[A-Za-z0-9]$/.test(char))
  }
  
  const chars = validChars.slice(0, props.length)
  
  // Réinitialiser tous les champs d'abord
  fieldValues.value = Array(props.length).fill('')
  
  // Remplir avec les caractères valides
  chars.forEach((char, index) => {
    fieldValues.value[index] = char.toUpperCase()
  })
  
  const completeValue = fieldValues.value.join('')
  emit('update:modelValue', completeValue)
  emit('change', completeValue)
  
  if (completeValue.length === props.length) {
    emit('complete', completeValue)
  }
  
  // Focus sur le dernier champ rempli ou le premier vide
  const nextIndex = chars.length < props.length ? chars.length : props.length - 1
  nextTick(() => {
    focusField(nextIndex)
  })
}

const focusField = (index: number) => {
  if (fieldRefs.value[index]) {
    const inputElement = (fieldRefs.value[index] as any)?.$el?.querySelector('input')
    if (inputElement) {
      inputElement.focus()
      inputElement.select()
    }
  }
}

const clearFields = () => {
  fieldValues.value = Array(props.length).fill('')
  emit('update:modelValue', '')
  emit('change', '')
}

const setValue = (value: string) => {
  const chars = value.split('').slice(0, props.length)
  
  // Remplir les champs (validation faite par InputText)
  chars.forEach((char, index) => {
    fieldValues.value[index] = char.toUpperCase()
  })
  
  // Remplir les champs restants avec des chaînes vides
  for (let i = chars.length; i < props.length; i++) {
    fieldValues.value[i] = ''
  }
  
  const completeValue = fieldValues.value.join('')
  emit('update:modelValue', completeValue)
  emit('change', completeValue)
}

// Watchers
watch(() => props.modelValue, (newValue) => {
  if (newValue !== fieldValues.value.join('')) {
    setValue(newValue)
  }
})

watch(() => props.length, () => {
  initializeFields()
})

// Lifecycle
onMounted(() => {
  initializeFields()
  
  if (props.autoFocus && !props.disabled) {
    nextTick(() => {
      focusField(0)
    })
  }
})

// Expose methods
defineExpose({
  focus: () => focusField(0),
  clear: clearFields,
  setValue
})
</script>

<style scoped>
.utopia-inputcode {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  width: 100%;
  font-family: var(--font-family-base, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
}

/* Label */
.utopia-inputcode__label {
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.4;
}

/* Container */
.utopia-inputcode__container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  width: 100%;
  overflow: hidden;
}

/* Fields container */
.utopia-inputcode__fields {
  display: flex;
  gap: var(--spacing-2, 8px);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 60px;
  padding: var(--spacing-2, 8px);
}

/* Individual field */
.utopia-inputcode__field {
  width: 60px;
  min-width: 60px;
  flex-shrink: 0;
  flex-basis: 60px;
}

.utopia-inputcode__field--active {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}

/* Sizes */
.utopia-inputcode--small .utopia-inputcode__field {
  width: 51px;
  min-width: 50px;
  flex-basis: 50px;
}

.utopia-inputcode--large .utopia-inputcode__field {
  width: 70px;
  min-width: 70px;
  flex-basis: 70px;
}

/* Message */
.utopia-inputcode__message {
  display: flex;
  align-items: center;
  gap: var(--spacing-1, 4px);
  font-size: var(--font-size-sm, 14px);
  line-height: 1.4;
}

.utopia-inputcode__message--error {
  color: var(--theme-colors-danger-600, #dc2626);
}

.utopia-inputcode__message--valid {
  color: var(--theme-colors-success-600, #16a34a);
}

.utopia-inputcode__message-icon {
  flex-shrink: 0;
}

/* States */
.utopia-inputcode--disabled .utopia-inputcode__fields {
  opacity: 0.5;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 480px) {
  .utopia-inputcode__fields {
    gap: var(--spacing-1, 4px);
    justify-content: flex-start;
  }
  
  .utopia-inputcode__field {
    width: 45px;
    min-width: 45px;
    flex-basis: 45px;
  }
  
  .utopia-inputcode--large .utopia-inputcode__field {
    width: 55px;
    min-width: 55px;
    flex-basis: 55px;
  }
}

@media (max-width: 360px) {
  .utopia-inputcode__fields {
    gap: 2px;
  }
  
  .utopia-inputcode__field {
    width: 40px;
    min-width: 40px;
    flex-basis: 40px;
  }
  
  .utopia-inputcode--large .utopia-inputcode__field {
    width: 50px;
    min-width: 50px;
    flex-basis: 50px;
  }
}
</style>