<template>
  <button 
    class="utopia-button" 
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
    :style="buttonStyle"
    :aria-label="props.ariaLabel"
  >
    <!-- Éléments de gauche (icône ou loading) -->
    <template v-if="iconPosition === 'left' || (!icon && loading)">
      <Icon 
        v-if="loading && icon" 
        name="Loader-2" 
        class="utopia-button__icon utopia-button__icon--loading"
        stroke-width="2"
      />
      <Icon 
        v-else-if="loading && !icon && $slots['default']" 
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
    </template>

    <!-- Texte (toujours au milieu) -->
    <span v-if="$slots['default'] && (!loading || (loading && icon))" class="utopia-button__text">
      <slot />
    </span>

    <!-- Éléments de droite (icône ou loading) -->
    <template v-if="iconPosition === 'right'">
      <Icon 
        v-if="loading && icon" 
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
    </template>
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
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left',
  ariaLabel: undefined
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
  'utopia-button--icon-only': (props.icon && !slots.default) || (props.loading && !props.icon && slots.default),
  [`utopia-button--${currentTheme.value?.mode || 'light'}`]: true
}))

const buttonStyle = computed(() => {
  return {
    flexDirection: 'row' as const
  };
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>
/* Base styles */
.utopia-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2, 8px);
  border: 2px solid transparent;
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
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;

  /* Focus management */
  &:focus {
    outline: none;
  }

  /* Icon styles */
  &__icon {
    flex-shrink: 0;
    transition: transform 0.2s ease;

    &--loading {
      animation: spin 1s linear infinite;
    }
  }

  &__text {
    white-space: nowrap;
  }

  /* Common states mixin */
  @mixin button-states($bg-hover, $bg-active, $bg-focus, $bg-focus-hover, $bg-focus-active, $color: inherit) {
    &:hover:not(.utopia-button--disabled) {
      background: $bg-hover;
      border: 2px solid transparent;
      @content;
    }

    &:active:not(.utopia-button--disabled) {
      background: $bg-active;
      border: 2px solid transparent;
      @content;
    }

    &:focus-visible {
      background: $bg-focus;
      border: 2px solid transparent;
      box-shadow: 0 0 0 2px var(--theme-colors-brand-primary-500, #3b82f6);
    }

    &:focus-visible:hover:not(.utopia-button--disabled) {
      background: $bg-focus-hover;
      border: 2px solid transparent;
    }

    &:focus-visible:active:not(.utopia-button--disabled) {
      background: $bg-focus-active;
      border: 2px solid transparent;
    }
  }

  /* PRIMARY VARIANT */
  &--primary {
    background: var(--theme-colors-brand-primary-500, #3b82f6);
    color: white;
    box-shadow: 0 1px 3px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.3));

    @include button-states(
      var(--theme-colors-brand-primary-400, #60a5fa),
      var(--theme-colors-brand-primary-600, #2563eb),
      var(--theme-colors-brand-primary-300, #93c5fd),
      var(--theme-colors-brand-primary-400, #60a5fa),
      var(--theme-colors-brand-primary-600, #2563eb)
    ) {
      box-shadow: 0 4px 12px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.4));
      transform: translateY(-1px);
    }

    &:active:not(.utopia-button--disabled) {
      transform: translateY(0);
      box-shadow: 0 1px 3px var(--theme-colors-brand-primary-200, rgba(59, 130, 246, 0.3));
    }
  }

  /* SECONDARY VARIANT */
  &--secondary {
    background: var(--theme-colors-surface-card, #ffffff);
    color: var(--theme-colors-brand-primary-500, #3b82f6);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    @include button-states(
      var(--theme-colors-brand-primary-25, #eff6ff),
      var(--theme-colors-brand-primary-50, #dbeafe),
      var(--theme-colors-surface-card, #ffffff),
      var(--theme-colors-brand-primary-25, #eff6ff),
      var(--theme-colors-brand-primary-50, #dbeafe)
    ) {
      box-shadow: 0 2px 8px var(--theme-colors-brand-primary-100, rgba(59, 130, 246, 0.2));
      transform: translateY(-1px);
    }

    &:active:not(.utopia-button--disabled) {
      transform: translateY(0);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
  }

  /* TERTIARY VARIANT */
  &--tertiary {
    background: transparent;
    color: var(--theme-colors-brand-secondary-500, #3b82f6);

    @include button-states(
      var(--theme-colors-brand-primary-25, #eff6ff),
      var(--theme-colors-brand-primary-50, #dbeafe),
      transparent,
      var(--theme-colors-brand-primary-25, #eff6ff),
      var(--theme-colors-brand-primary-50, #dbeafe)
    );

    &:hover:not(.utopia-button--disabled) {
      color: var(--theme-colors-brand-secondary-500, #2563eb);
    }
  }
}

/* SIZES */
.utopia-button {
  &--xs {
    padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
    font-size: var(--font-size-xs, 12px);

    .utopia-button__icon {
      width: 12px;
      height: 12px;
    }
  }

  &--sm {
    padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
    font-size: var(--font-size-sm, 14px);

    .utopia-button__icon {
      width: 14px;
      height: 14px;
    }
  }

  &--md {
    padding: var(--spacing-2-5, 10px) var(--spacing-4, 16px);
    font-size: var(--font-size-base, 16px);

    .utopia-button__icon {
      width: 16px;
      height: 16px;
    }
  }

  &--lg {
    padding: var(--spacing-3, 12px) var(--spacing-5, 20px);
    font-size: var(--font-size-lg, 18px);

    .utopia-button__icon {
      width: 18px;
      height: 18px;
    }
  }

  &--xl {
    padding: var(--spacing-4, 16px) var(--spacing-6, 24px);
    font-size: var(--font-size-xl, 20px);

    .utopia-button__icon {
      width: 20px;
      height: 20px;
    }
  }

  /* Icon-only buttons */
  &--icon-only {
    &.utopia-button--xs {
      padding: var(--spacing-1, 4px);
      width: 24px;
      height: 24px;
    }

    &.utopia-button--sm {
      padding: var(--spacing-2, 8px);
      width: 32px;
      height: 32px;
    }

    &.utopia-button--md {
      padding: var(--spacing-2-5, 10px);
      width: 40px;
      height: 40px;
    }

    &.utopia-button--lg {
      padding: var(--spacing-3, 12px);
      width: 48px;
      height: 48px;
    }

    &.utopia-button--xl {
      padding: var(--spacing-4, 16px);
      width: 56px;
      height: 56px;
    }
  }

  /* Loading state */
  &--loading {
    cursor: wait;
    pointer-events: none;
    opacity: 0.8;

    &:hover,
    &:focus,
    &:active {
      transform: none !important;
      box-shadow: inherit !important;
    }
  }

  /* Disabled state */
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    transform: none !important;
    box-shadow: none !important;
    transition: none !important;
  }

  /* Icon animation on click */
  &:active:not(.utopia-button--disabled) .utopia-button__icon {
    transform: scale(0.95);
  }
}

/* Disabled states per variant */
.utopia-button--primary.utopia-button--disabled {
  background: var(--theme-colors-border-muted, #e5e7eb);
  color: var(--theme-colors-text-muted, #9ca3af);
}

.utopia-button--secondary.utopia-button--disabled {
  background: var(--theme-colors-surface-background, #f9fafb);
  color: var(--theme-colors-text-muted, #9ca3af);
}

.utopia-button--tertiary.utopia-button--disabled {
  background: transparent;
  color: var(--theme-colors-text-muted, #9ca3af);
}

/* Dark mode */
.utopia-button--dark {
  &.utopia-button--secondary {
    background: var(--theme-colors-surface-card, #1f2937);
    color: var(--theme-colors-brand-primary-400, #60a5fa);
    border-color: var(--theme-colors-border-default, #374151);

    &:hover:not(.utopia-button--disabled) {
      background: var(--theme-colors-brand-primary-25, rgba(59, 130, 246, 0.1));
    }
  }

  &.utopia-button--tertiary {
    color: var(--theme-colors-brand-primary-400, #60a5fa);

    &:hover:not(.utopia-button--disabled) {
      background: var(--theme-colors-brand-primary-25, rgba(59, 130, 246, 0.1));
    }
  }

  &.utopia-button--primary.utopia-button--disabled,
  &.utopia-button--secondary.utopia-button--disabled,
  &.utopia-button--tertiary.utopia-button--disabled {
    background: var(--theme-colors-surface-background, #111827);
    color: var(--theme-colors-text-muted, #6b7280);
    border-color: var(--theme-colors-border-muted, #374151);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>