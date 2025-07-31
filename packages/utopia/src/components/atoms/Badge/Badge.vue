<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Types
export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'small' | 'medium'

// Props
interface Props {
  variant?: BadgeVariant
  size?: BadgeSize
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium'
})

// Computed
const badgeClasses = computed(() => {
  const sizeMap: Record<BadgeSize, string> = {
    'small': 'sm',
    'medium': 'md'
  }
  
  return [
    'badge',
    `badge--${props.variant}`,
    `badge--${sizeMap[props.size]}`
  ]
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  font-weight: 500;
  white-space: nowrap;
}

.badge--sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.badge--md {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.badge--default {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-800);
}

.badge--success {
  background-color: var(--color-succeed-50);
  color: var(--color-succeed-800);
}

.badge--warning {
  background-color: var(--color-warning-50);
  color: var(--color-warning-800);
}

.badge--danger {
  background-color: var(--color-danger-50);
  color: var(--color-danger-800);
}
</style>