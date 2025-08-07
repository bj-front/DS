<template>
  <div class="menu-section" :class="{ 'collapsed': collapsed }">
    <div class="section-label" v-if="!collapsed">
      <span class="section-text">{{ label }}</span>
    </div>
    <div class="section-divider" v-else></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  collapsed?: boolean
}

withDefaults(defineProps<Props>(), {
  collapsed: false
})
</script>

<style scoped>
.menu-section {
  margin: 16px 0 8px 0;
  transition: all 0.2s ease;
}

.menu-section:first-child {
  margin-top: 8px;
}

.section-label {
  padding: 0 20px;
  margin-bottom: 8px;
}

.section-text {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--utopia-color-text-muted, #64748b);
  line-height: 1.5;
  user-select: none;
}

.section-divider {
  height: 1px;
  background-color: var(--utopia-color-border-subtle, #e2e8f0);
  margin: 8px 16px;
  transition: all 0.2s ease;
}

/* Mode collapsed */
.menu-section.collapsed {
  margin: 8px 0 6px 0;
}

.menu-section.collapsed .section-label {
  display: none;
}

.menu-section.collapsed .section-divider {
  margin: 6px 20px;
  height: 1px;
}

/* Animation d'apparition */
.section-label {
  opacity: 1;
  transition: opacity 0.2s ease 0.1s;
}

.menu-section.collapsed .section-label {
  opacity: 0;
  transition: opacity 0.1s ease;
}

/* Integration avec les tokens du design system */
.section-text {
  color: var(--utopia-color-neutral-500);
}

.section-divider {
  background-color: var(--utopia-color-neutral-200);
}

/* Dark mode support */
[data-theme="dark"] .section-text {
  color: var(--utopia-color-neutral-400);
}

[data-theme="dark"] .section-divider {
  background-color: var(--utopia-color-neutral-700);
}

/* Mobile specific adjustments */
@media (max-width: 768px) {
  .section-label {
    padding: 0 16px;
  }
  
  .section-divider {
    margin: 8px 12px;
  }
}
</style>