<template>
  <div class="utopia-card" :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'medium'
})

const cardClasses = computed(() => ({
  [`utopia-card--${props.variant}`]: true,
  [`utopia-card--padding-${props.padding}`]: true
}))
</script>

<style scoped>
.utopia-card {
  border-radius: 8px;
  background-color: var(--utopia-color-surface);
  border: 1px solid var(--utopia-color-border);
  transition: all 0.2s ease;
}

.utopia-card--default {
  /* Style par défaut */
}

.utopia-card--elevated {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.utopia-card--outlined {
  border: 2px solid var(--utopia-color-border);
}

.utopia-card--padding-none {
  padding: 0;
}

.utopia-card--padding-small {
  padding: 12px;
}

.utopia-card--padding-medium {
  padding: 16px;
}

.utopia-card--padding-large {
  padding: 24px;
}
</style>