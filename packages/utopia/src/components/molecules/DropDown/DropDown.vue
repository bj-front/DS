<template>
  <div class="utopia-dropdown" :class="dropdownClasses">
    <!-- Label -->
    <label v-if="label" class="utopia-dropdown__label" :for="dropdownId">
      {{ label }}
    </label>
    
    <!-- Dropdown container -->
    <div class="utopia-dropdown__container">
      <!-- Trigger button -->
      <button
        :id="dropdownId"
        ref="triggerRef"
        type="button"
        class="utopia-dropdown__trigger"
        :class="triggerClasses"
        :disabled="disabled"
        :aria-expanded="isOpen"
        :aria-haspopup="true"
        @click="toggleDropdown"
        @keydown="handleTriggerKeydown"
        @focus="handleTriggerFocus"
        @blur="handleTriggerBlur"
      >
        <!-- Selected value display -->
        <div class="utopia-dropdown__value" :class="{ 'utopia-dropdown__value--placeholder': !hasSelection }">
          <!-- Single selection display -->
          <span v-if="!multiple">{{ displayValue }}</span>
          
          <!-- Multiple selection display -->
          <template v-else>
            <div 
              v-if="hasSelection" 
              class="utopia-dropdown__chips-wrapper"
              :key="`chips-${selectedOptions.length}`"
            >
              <!-- Ombre gauche -->
              <div 
                v-if="showLeftShadow && hasScrollableChips" 
                class="utopia-dropdown__chips-shadow utopia-dropdown__chips-shadow--left"
              ></div>
              
              <!-- Container des chips -->
              <div 
                ref="chipsScrollRef"
                class="utopia-dropdown__chips" 
                @scroll="checkChipsScroll"
              >
                <Chip
                  v-for="selectedOption in selectedOptions.slice(0, visibleChipsLimit)"
                  :key="`chip-${selectedOption.value}`"
                  size="small"
                  variant="default"
                  removable
                  class="utopia-dropdown__chip"
                  @remove="removeOption(selectedOption.value)"
                >
                  {{ selectedOption.label }}
                </Chip>
                <span v-if="selectedOptions.length > visibleChipsLimit" class="utopia-dropdown__more">
                  +{{ selectedOptions.length - visibleChipsLimit }} autres
                </span>
              </div>
              
              <!-- Ombre droite -->
              <div 
                v-if="showRightShadow && hasScrollableChips" 
                class="utopia-dropdown__chips-shadow utopia-dropdown__chips-shadow--right"
              ></div>
            </div>
            <span v-else :key="'placeholder'">{{ placeholder }}</span>
          </template>
        </div>
        
        <!-- Clear button -->
        <div
          v-if="clearable && hasSelection && !disabled"
          size="sm"
          class="utopia-dropdown__clear"
          @click.stop="clearSelection"
          @mousedown.prevent
          icon="X"
        >
          <Icon name="X" stroke-width="2" size="small" color="neutral" />
        </div>
        
        <!-- Chevron icon -->
        <div class="utopia-dropdown__chevron" :class="{ 'utopia-dropdown__chevron--open': isOpen }">
          <Icon name="Chevron-down" stroke-width="2" />
        </div>
        
        <!-- Validation / state icon -->
        <div v-if="state === 'valid' || state === 'error'" class="utopia-dropdown__state-icon">
          <Icon 
            v-if="state === 'valid'" 
            name="Check" 
            class="utopia-dropdown__state-icon--valid"
            stroke-width="2"
            color="success"
          />
          <Icon 
            v-else-if="state === 'error'" 
            name="Alert-triangle" 
            class="utopia-dropdown__state-icon--error"
            stroke-width="2"
            color="danger"
          />
        </div>
      </button>
      
      <!-- Dropdown menu -->
      <Transition name="utopia-dropdown-fade">
        <div
          v-if="isOpen"
          ref="menuRef"
          class="utopia-dropdown__menu"
          :style="{ 
            maxHeight: computedMaxHeight,
            top: menuPosition.top,
            left: menuPosition.left,
            width: menuPosition.width
          }"
          role="listbox"
          :aria-multiselectable="multiple"
        >
          <!-- Search input -->
          <div v-if="searchable" class="utopia-dropdown__search">
            <InputText
              ref="searchRef"
              v-model="searchQuery"
              placeholder="Rechercher..."
              icon="Search"
              size="small"
              class="utopia-dropdown__search-input"
              @keydown="handleSearchKeydown"
            />
          </div>
          
          <!-- Options list -->
          <div class="utopia-dropdown__options" role="group">
            <div
              v-for="(option, index) in filteredOptions"
              :key="`option-${option.value}-${index}`"
              class="utopia-dropdown__option"
              :class="[
                optionClasses(option, index),
                { 'utopia-dropdown__option--multiple': multiple }
              ]"
              role="option"
              :aria-selected="isSelected(option.value)"
              :aria-disabled="option.disabled"
              @click="selectOption(option)"
              @mouseenter="highlightedIndex = index"
            >
              <!-- Checkbox for multiple selection -->
              <div v-if="multiple" class="utopia-dropdown__checkbox-container">
                <Checkbox
                  :modelValue="isSelected(option.value)"
                  :disabled="option.disabled"
                  size="small"
                  class="utopia-dropdown__checkbox"
                />
                <span 
                  class="utopia-dropdown__checkbox-label" 
                  :title="option.label"
                >
                  {{ option.label }}
                </span>
              </div>
              
              <!-- Option label with tooltip for long text -->
              <span
                v-else 
                class="utopia-dropdown__option-label"
                :title="option.label"
              >
                {{ option.label }}
              </span>
            </div>
            
            <!-- No results -->
            <div v-if="filteredOptions.length === 0" class="utopia-dropdown__no-results">
              Aucun résultat trouvé
            </div>
          </div>
        </div>
      </Transition>
    </div>
    
    <!-- Message d'erreur ou de validation -->
    <div v-if="message" class="utopia-dropdown__message" :class="messageClasses">
      <Icon 
        v-if="state === 'error'" 
        name="Alert-triangle" 
        class="utopia-dropdown__message-icon"
        stroke-width="2"
      />
      <Icon 
        v-else-if="state === 'valid'" 
        name="Check" 
        class="utopia-dropdown__message-icon"
        stroke-width="2"
      />
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';

import { Checkbox } from '../../atoms/Checkbox';
import { Chip } from '../../atoms/Chip';
import { Icon } from '../../atoms/Icon';
import { InputText } from '../../atoms/InputText';
import type { DropDownOption, DropDownProps } from './types';

const props = withDefaults(defineProps<DropDownProps>(), {
  modelValue: '',
  label: '',
  placeholder: 'Sélectionner une option',
  options: () => [],
  state: 'default',
  size: 'medium',
  disabled: false,
  readonly: false,
  multiple: false,
  searchable: false,
  clearable: false,
  message: '',
  required: false,
  maxHeight: '200px'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | (string | number)[]]
  'change': [value: string | number | (string | number)[]]
  'open': []
  'close': []
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

// Références
const triggerRef = ref<HTMLButtonElement>()
const menuRef = ref<HTMLDivElement>()
const searchRef = ref()
const chipsContainerRef = ref<HTMLDivElement>()

// Référence pour les chips
const chipsScrollRef = ref<HTMLDivElement>()

// États des ombres
const showLeftShadow = ref(false)
const showRightShadow = ref(false)

// État local
const isOpen = ref(false)
const searchQuery = ref('')
const highlightedIndex = ref(-1)
const menuPosition = ref({ top: '0px', left: '0px', width: '0px' })

// ID unique
const dropdownId = computed(() => `utopia-dropdown-${Math.random().toString(36).substr(2, 9)}`)

// Computed properties

const hasSelection = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0
  }
  return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined
})

const selectedOptions = computed(() => {
  if (!props.multiple || !Array.isArray(props.modelValue)) return []
  return props.options.filter(option => 
    (props.modelValue as (string | number)[]).includes(option.value)
  )
})

const visibleChipsLimit = computed(() => 2) // Limite le nombre de chips affichées

const hasScrollableChips = computed(() => {
  if (!chipsScrollRef.value) return false
  const { scrollWidth, clientWidth } = chipsScrollRef.value
  return scrollWidth > clientWidth + 2 // +2px de marge de sécurité
})

// Fonction pour vérifier le scroll des chips
const checkChipsScroll = () => {
  if (!chipsScrollRef.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = chipsScrollRef.value
  const hasScrollableContent = scrollWidth > clientWidth + 2
  
  if (!hasScrollableContent) {
    showLeftShadow.value = false
    showRightShadow.value = false
    return
  }
  
  const isAtLeft = scrollLeft <= 1
  const isAtRight = Math.abs(scrollWidth - clientWidth - scrollLeft) <= 1
  
  showLeftShadow.value = hasScrollableContent && !isAtLeft
  showRightShadow.value = hasScrollableContent && !isAtRight
}

const computedMaxHeight = computed(() => {
  const isMultipleWithSearch = props.multiple && props.searchable
  if (isMultipleWithSearch) {
    return '400px'
  }
  return props.maxHeight || '300px'
})

const displayValue = computed(() => {
  if (!hasSelection.value) {
    return props.placeholder
  }
  
  if (props.multiple && Array.isArray(props.modelValue)) {
    const selected = selectedOptions.value
    if (selected.length === 0) return props.placeholder
    if (selected.length === 1) return selected[0].label
    return `${selected.length} éléments sélectionnés`
  }
  
  const selectedOption = props.options.find(option => option.value === props.modelValue)
  return selectedOption?.label || props.placeholder
})

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options
  }
  
  return props.options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Classes CSS
const dropdownClasses = computed(() => ({
  [`utopia-dropdown--${props.size}`]: true,
  [`utopia-dropdown--${props.state}`]: true,
  'utopia-dropdown--disabled': props.disabled,
  'utopia-dropdown--multiple': props.multiple,
  'utopia-dropdown--open': isOpen.value,
  'utopia-dropdown--with-message': props.message
}))

const triggerClasses = computed(() => ({
  'utopia-dropdown__trigger--with-clear': props.clearable && hasSelection.value,
  'utopia-dropdown__trigger--with-state': props.state === 'valid' || props.state === 'error',
  'utopia-dropdown__trigger--open': isOpen.value
}))

const messageClasses = computed(() => ({
  [`utopia-dropdown__message--${props.state}`]: props.state === 'error' || props.state === 'valid'
}))

// Méthodes
const isSelected = (value: string | number): boolean => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value)
  }
  return props.modelValue === value
}

const optionClasses = (option: DropDownOption, index: number) => ({
  'utopia-dropdown__option--selected': isSelected(option.value),
  'utopia-dropdown__option--highlighted': highlightedIndex.value === index,
  'utopia-dropdown__option--disabled': option.disabled
})

const calculateMenuPosition = () => {
  if (!triggerRef.value) return
  
  const triggerRect = triggerRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const spaceBelow = viewportHeight - triggerRect.bottom
  const spaceAbove = triggerRect.top
  
  // Determine if menu should open upward or downward
  // Use computed max height
  const maxMenuHeight = parseInt(computedMaxHeight.value.replace('px', '')) || 300
  const shouldOpenUpward = spaceBelow < maxMenuHeight && spaceAbove > maxMenuHeight
  
  menuPosition.value = {
    top: shouldOpenUpward 
      ? `${triggerRect.top - Math.min(maxMenuHeight, spaceAbove) - 4}px`
      : `${triggerRect.bottom + 4}px`,
    left: `${triggerRect.left}px`,
    width: `${triggerRect.width}px`
  }
}

const toggleDropdown = () => {
  if (props.disabled || props.readonly) return
  
  if (isOpen.value) {
    closeDropdown()
  } else {
    openDropdown()
  }
}

const openDropdown = async () => {
  if (props.disabled || props.readonly) return
  
  calculateMenuPosition()
  isOpen.value = true
  highlightedIndex.value = -1
  searchQuery.value = ''
  emit('open')
  
  await nextTick()
  
  if (props.searchable && searchRef.value) {
    // Focus sur le composant InputText
    try {
      const inputElement = (searchRef.value as any)?.$el?.querySelector('input')
      if (inputElement) {
        inputElement.focus()
      }
    } catch (error) {
      // Fallback si l'accès à l'input échoue
      console.warn('Could not focus search input:', error)
    }
  }
}

const closeDropdown = () => {
  isOpen.value = false
  highlightedIndex.value = -1
  searchQuery.value = ''
  emit('close')
  
  if (triggerRef.value) {
    triggerRef.value.focus()
  }
}

const selectOption = (option: DropDownOption) => {
  if (option.disabled) return
  
  let newValue: string | number | (string | number)[]
  
  if (props.multiple) {
    const currentValues = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = currentValues.indexOf(option.value)
    
    if (index > -1) {
      currentValues.splice(index, 1)
    } else {
      currentValues.push(option.value)
    }
    
    newValue = currentValues
  } else {
    newValue = option.value
    closeDropdown()
  }
  
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const clearSelection = () => {
  const newValue = props.multiple ? [] : ''
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const removeOption = (value: string | number) => {
  if (!props.multiple || !Array.isArray(props.modelValue)) return
  
  const currentValues = [...props.modelValue]
  const index = currentValues.indexOf(value)
  
  if (index > -1) {
    currentValues.splice(index, 1)
    emit('update:modelValue', currentValues)
    emit('change', currentValues)
  }
}

// Gestion du clavier
const handleTriggerKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      toggleDropdown()
      break
    case 'ArrowDown':
      event.preventDefault()
      if (!isOpen.value) {
        openDropdown()
      } else {
        highlightedIndex.value = Math.min(highlightedIndex.value + 1, filteredOptions.value.length - 1)
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      if (isOpen.value) {
        highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      }
      break
    case 'Escape':
      if (isOpen.value) {
        event.preventDefault()
        closeDropdown()
      }
      break
    case 'Tab':
      if (isOpen.value) {
        closeDropdown()
      }
      break
  }
}

const handleSearchKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      highlightedIndex.value = Math.min(highlightedIndex.value + 1, filteredOptions.value.length - 1)
      break
    case 'ArrowUp':
      event.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      break
    case 'Enter':
      event.preventDefault()
      if (highlightedIndex.value >= 0 && filteredOptions.value[highlightedIndex.value]) {
        selectOption(filteredOptions.value[highlightedIndex.value])
      }
      break
    case 'Escape':
      event.preventDefault()
      closeDropdown()
      break
  }
}

const handleTriggerFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleTriggerBlur = (event: FocusEvent) => {
  emit('blur', event)
}

// Gestion des clics extérieurs
const handleClickOutside = (event: Event) => {
  const target = event.target as Node
  if (
    isOpen.value &&
    triggerRef.value &&
    menuRef.value &&
    !triggerRef.value.contains(target) &&
    !menuRef.value.contains(target)
  ) {
    closeDropdown()
  }
}

// Gestion du repositionnement
const handleReposition = () => {
  if (isOpen.value) {
    calculateMenuPosition()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleReposition)
  window.addEventListener('scroll', handleReposition, true)
  
  // Initialiser les ombres des chips
  setTimeout(() => {
    checkChipsScroll()
  }, 100)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleReposition)
  window.removeEventListener('scroll', handleReposition, true)
})
</script>

<style scoped>
.utopia-dropdown {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  width: 100%;
  font-family: var(--font-family-base, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  position: relative;
}

/* Label */
.utopia-dropdown__label {
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.4;
}

/* Container */
.utopia-dropdown__container {
  position: relative;
  display: flex;
  align-items: center;
}

/* Trigger button */
.utopia-dropdown__trigger {
  width: 100%;
  padding: var(--spacing-3, 8px) var(--spacing-3, 12px);
  border: 2px solid var(--theme-colors-border-default, #9ca3af);
  border-radius: var(--border-radius-md);
  background-color: var(--theme-colors-brand-secondary-25, rgba(59, 130, 246, 0.05));
  color: var(--theme-colors-text-primary, #111827);
  font-size: var(--font-size-base, 16px);
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  box-sizing: border-box;
  box-shadow: 0 0 0 4px transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2, 8px);
}

.utopia-dropdown__trigger:hover:not(:disabled) {
  border-color: var(--theme-colors-brand-secondary-400, #60a5fa);
}

.utopia-dropdown__trigger:focus {
  border-color: var(--theme-colors-brand-secondary-500, #3b82f6) !important;
  box-shadow: 0 0 0 4px var(--theme-colors-brand-secondary-300, rgba(59, 130, 246, 0.2)) !important;
}

/* Shadow transparent quand ouvert */
.utopia-dropdown__trigger--open {
  box-shadow: 0 0 0 0 transparent !important;
}

.utopia-dropdown__trigger:disabled {
  border-color: var(--theme-colors-border-muted, #e5e7eb);
  background-color: var(--theme-colors-surface-background, #f9fafb);
  color: var(--theme-colors-text-muted, #9ca3af);
  cursor: not-allowed;
  opacity: 0.5;
}

/* Value display */
.utopia-dropdown__value {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0; /* Permet la compression */
  height: 20px; /* Hauteur minimale pour éviter le layout shift */
}

.utopia-dropdown__value span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.utopia-dropdown__value--placeholder {
  color: var(--theme-colors-text-muted, #9ca3af);
}

/* Wrapper des chips avec ombres */
.utopia-dropdown__chips-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

/* Chips container */
.utopia-dropdown__chips {
  display: flex;
  flex-wrap: nowrap; /* Force les chips sur une seule ligne */
  gap: var(--spacing-1, 4px);
  align-items: center;
  max-width: 100%;
  overflow-x: auto;
  min-height: 20px; /* Hauteur minimale pour éviter le layout shift */
  flex: 1;
}
/* supprimer le scroll horizontal */
.utopia-dropdown__chips::-webkit-scrollbar {
  display: none;
}

.utopia-dropdown__chips {
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* Ombres des chips */
.utopia-dropdown__chips-shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.3s ease;
}

.utopia-dropdown__chips-shadow--left {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
}

.utopia-dropdown__chips-shadow--right {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
}

.utopia-dropdown__chip {
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.utopia-dropdown__more {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-muted, #9ca3af);
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: auto; /* Pousse le compteur vers la droite */
}

/* Chevron */
.utopia-dropdown__chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--theme-colors-text-muted, #9ca3af);
  transition: transform 0.2s ease;
}

.utopia-dropdown__chevron--open {
  transform: rotate(180deg);
}

/* State icon */
.utopia-dropdown__state-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

/* Menu */
.utopia-dropdown__menu {
  position: fixed;
  z-index: 9999;
  border: 2px solid var(--theme-colors-border-default, #9ca3af);
  border-radius: var(--border-radius-md);
  background-color: var(--theme-colors-brand-secondary-25, rgba(59, 130, 246, 0.05));
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden; /* Évite les débordements */
  min-width: 200px;
  will-change: transform, opacity; /* Améliore les performances d'animation */
  display: flex;
  flex-direction: column;
}

/* Search */
.utopia-dropdown__search {
  padding: var(--spacing-2, 8px);
  border-bottom: 1px solid var(--theme-colors-border-default, #9ca3af);
  flex-shrink: 0; /* Évite que la recherche se comprime */
}

.utopia-dropdown__search-input {
  width: 100%;
}

/* Options */
.utopia-dropdown__options {
  overflow-y: auto;
  overflow-x: visible; /* Permet l'overflow horizontal pour les longs textes */
  flex: 1; /* Permet aux options de prendre l'espace disponible */
}

.utopia-dropdown__option {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-2, 8px);
  padding: var(--spacing-3, 8px) var(--spacing-3, 12px);
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 0; /* Permet la compression */
}

/* Mode multiple - pas de padding pour éviter les problèmes de clic */
.utopia-dropdown__option--multiple {
  padding: 0;
}

.utopia-dropdown__option:hover:not(.utopia-dropdown__option--disabled) {
  background-color: var(--theme-colors-surface-secondary, rgba(0,0,0,0.04));
  z-index: 10; /* Met l'option au-dessus des autres au hover */
}

.utopia-dropdown__option--highlighted {
  background-color: var(--theme-colors-brand-secondary-50, rgba(59, 130, 246, 0.1));
  z-index: 10;
}

.utopia-dropdown__option--selected {
  background-color: var(--theme-colors-brand-secondary-100, rgba(59, 130, 246, 0.2));
  color: var(--theme-colors-brand-primary-500, #1d4ed8);
}

.utopia-dropdown__option--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Checkbox */
.utopia-dropdown__checkbox-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-2, 8px);
  width: 100%;
  cursor: pointer;
  padding: var(--spacing-3) var(--spacing-3, 12px);
}

.utopia-dropdown__checkbox {
  flex-shrink: 0;
  pointer-events: none; /* Le clic est géré par le container parent */
}

.utopia-dropdown__checkbox-label {
  flex: 1;
  font-size: var(--font-size-base, 16px);
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  position: relative;
  pointer-events: none; /* Le clic est géré par le container parent */
}

/* Option label */
.utopia-dropdown__option-label {
  flex: 1;
  font-size: var(--font-size-base, 16px);
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  position: relative;
}

/* Tooltips pour les longs textes */
.utopia-dropdown__option:hover .utopia-dropdown__option-label::after,
.utopia-dropdown__checkbox-container:hover .utopia-dropdown__checkbox-label::after {
  content: attr(title);
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1001;
  background: var(--theme-colors-surface-card, #1f2937);
  color: var(--theme-colors-text-primary-inverse, #ffffff);
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm, 14px);
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-top: var(--spacing-1, 4px);
  pointer-events: none;
  opacity: 0;
  animation: fadeIn 0.2s ease forwards 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* N'afficher le tooltip que si le texte dépasse */
.utopia-dropdown__option-label[title]:not([title=""]):hover::after,
.utopia-dropdown__checkbox-label[title]:not([title=""]):hover::after {
  display: block;
}

/* No results */
.utopia-dropdown__no-results {
  padding: var(--spacing-4, 16px) var(--spacing-3, 12px);
  text-align: center;
  color: var(--theme-colors-text-muted, #9ca3af);
  font-size: var(--font-size-sm, 14px);
}

/* Message */
.utopia-dropdown__message {
  display: flex;
  align-items: center;
  gap: var(--spacing-1, 4px);
  font-size: var(--font-size-sm, 14px);
  line-height: 1.4;
}

.utopia-dropdown__message--error {
  color: var(--theme-colors-danger-500, #ef4444);
}

.utopia-dropdown__message--valid {
  color: var(--theme-colors-success-500, #10b981);
}

.utopia-dropdown__message-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* États */

/* Error */
.utopia-dropdown--error .utopia-dropdown__trigger {
  border-color: var(--theme-colors-danger-500, #ef4444);
}

.utopia-dropdown--error .utopia-dropdown__trigger:focus {
  border-color: var(--theme-colors-danger-500, #ef4444) !important;
  box-shadow: 0 0 0 4px var(--theme-colors-danger-100, rgba(239, 68, 68, 0.2)) !important;
}

/* Valid */
.utopia-dropdown--valid .utopia-dropdown__trigger {
  border-color: var(--theme-colors-success-500, #10b981);
}

.utopia-dropdown--valid .utopia-dropdown__trigger:focus {
  border-color: var(--theme-colors-success-500, #10b981) !important;
  box-shadow: 0 0 0 4px var(--theme-colors-success-100, rgba(16, 185, 129, 0.2)) !important;
}

/* Sizes */
.utopia-dropdown--small .utopia-dropdown__trigger {
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  font-size: var(--font-size-sm, 14px);
}
.utopia-dropdown__clear {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--border-radius-sm, 4px);
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}

.utopia-dropdown__clear:hover {
  background-color: var(--theme-colors-surface-secondary, rgba(0,0,0,0.04));
}
.utopia-dropdown--small .utopia-dropdown__chevron,
.utopia-dropdown--small .utopia-dropdown__state-icon,
.utopia-dropdown--small .utopia-dropdown__clear {
  width: 16px;
  height: 16px;
}

.utopia-dropdown--large .utopia-dropdown__trigger {
  padding: var(--spacing-4, 16px) var(--spacing-5, 20px);
  font-size: var(--font-size-lg, 18px);
}

.utopia-dropdown--large .utopia-dropdown__chevron,
.utopia-dropdown--large .utopia-dropdown__state-icon,
.utopia-dropdown--large .utopia-dropdown__clear {
  width: 24px;
  height: 24px;
}

/* Transitions */
.utopia-dropdown-fade-enter-active,
.utopia-dropdown-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
              transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.utopia-dropdown-fade-enter-from {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

.utopia-dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

/* Évite le layout shift */
.utopia-dropdown-fade-enter-active {
  transform-origin: top;
}

.utopia-dropdown-fade-leave-active {
  transform-origin: top;
}


/* Responsive */
@media (max-width: 768px) {
  .utopia-dropdown__trigger {
    font-size: 16px; /* Empêche le zoom sur iOS */
  }
}
</style>