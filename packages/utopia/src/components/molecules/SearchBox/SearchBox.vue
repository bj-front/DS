<template>
  <div class="utopia-search-box" :class="searchClasses">
    <Icon name="Search" class="search-icon" />
    <input
      v-model="internalValue"
      type="text"
      :placeholder="placeholder"
      class="search-input"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <button
      v-if="internalValue && clearable"
      @click="clearSearch"
      class="clear-button"
      type="button"
    >
      <Icon name="X" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '../../atoms'

interface Props {
  modelValue?: string
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  clearable?: boolean
  disabled?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'search', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Rechercher...',
  size: 'medium',
  clearable: true,
  disabled: false
})

const emit = defineEmits<Emits>()

const internalValue = ref(props.modelValue)
const isFocused = ref(false)

const searchClasses = computed(() => ({
  [`utopia-search-box--${props.size}`]: true,
  'utopia-search-box--focused': isFocused.value,
  'utopia-search-box--disabled': props.disabled
}))

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  internalValue.value = target.value
  emit('update:modelValue', target.value)
  emit('search', target.value)
}

function handleFocus() {
  isFocused.value = true
  emit('focus')
}

function handleBlur() {
  isFocused.value = false
  emit('blur')
}

function clearSearch() {
  internalValue.value = ''
  emit('update:modelValue', '')
  emit('search', '')
}
</script>

<style scoped>
.utopia-search-box {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--utopia-color-border);
  border-radius: 6px;
  background: var(--utopia-color-surface);
  transition: all 0.2s ease;
}

.utopia-search-box:hover {
  border-color: var(--utopia-color-border-hover);
}

.utopia-search-box--focused {
  border-color: var(--utopia-color-primary);
  box-shadow: 0 0 0 2px var(--utopia-color-primary-alpha);
}

.utopia-search-box--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.search-icon {
  margin-left: 12px;
  color: var(--utopia-color-text-secondary);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 8px 12px;
  color: var(--utopia-color-text-primary);
  font-size: 14px;
}

.search-input::placeholder {
  color: var(--utopia-color-text-placeholder);
}

.clear-button {
  border: none;
  background: none;
  padding: 4px;
  margin-right: 8px;
  border-radius: 4px;
  color: var(--utopia-color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.clear-button:hover {
  background: var(--utopia-color-surface-secondary);
  color: var(--utopia-color-text-primary);
}

/* Tailles */
.utopia-search-box--small {
  height: 32px;
}

.utopia-search-box--small .search-input {
  font-size: 12px;
  padding: 4px 8px;
}

.utopia-search-box--small .search-icon {
  margin-left: 8px;
}

.utopia-search-box--medium {
  height: 40px;
}

.utopia-search-box--large {
  height: 48px;
}

.utopia-search-box--large .search-input {
  font-size: 16px;
  padding: 12px 16px;
}

.utopia-search-box--large .search-icon {
  margin-left: 16px;
}
</style>