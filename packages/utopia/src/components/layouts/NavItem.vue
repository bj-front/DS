<template>
  <!-- Navigation item component with hover and active states -->
  <div 
    class="nav-item" 
    :class="{ 
      'active': active,
      'collapsed': collapsed,
      'header-collapsed': headerCollapsed
    }"
    @click="$emit('click')"
  >
    <div class="nav-item-icon">
      <Icon :name="icon" size="medium" :stroke-width="2" :color="active ? 'primary' : 'neutral'" />
    </div>
    <div class="nav-item-label" v-if="!collapsed && !headerCollapsed">
      <slot>{{ label }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../atoms'

interface Props {
  icon: string
  label?: string
  active?: boolean
  collapsed?: boolean
  headerCollapsed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  collapsed: false,
  headerCollapsed: false
})

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  margin: var(--spacing-1) 0;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  gap: var(--spacing-3);
}

.nav-item:hover {
  background-color: var(--theme-colors-primary-100);
}

.nav-item.active {
  background-color: var(--theme-colors-primary-50);
  color: var(--theme-colors-primary-600);
}

.nav-item.active:hover {
  background-color: var(--theme-colors-primary-100);
}

.nav-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.nav-item-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-item.collapsed {
  justify-content: center;
  padding: var(--spacing-3);
}

.nav-item.collapsed .nav-item-label {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-item {
    padding: var(--spacing-4);
  }
}
</style> 