<template>
  <div class="menu-section" :class="{ 'collapsed': collapsed }">
    <div class="section-label" v-if="!collapsed">
      <span class="section-text">{{ label.toUpperCase() }}</span>
    </div>
    <div 
      v-else 
      class="section-collapsed"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="sectionRef"
    >
      <span class="section-collapsed-label">{{ label.toUpperCase() }}</span>
    </div>

    <!-- Tooltip téléporté pour sections en mode collapsed -->
    <Teleport to="body" v-if="collapsed && showTooltip">
      <div 
        class="section-tooltip-teleported"
        :style="tooltipStyle"
      >
        {{ label }}
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

interface Props {
  label: string
  collapsed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: false
})

// Refs pour le tooltip téléporté
const sectionRef = ref<HTMLElement>()
const showTooltip = ref(false)
const tooltipStyle = ref({})

// Gestion du tooltip en mode collapsed
const handleMouseEnter = async () => {
  if (!props.collapsed) return
  
  showTooltip.value = true
  await nextTick()
  
  if (sectionRef.value) {
    const rect = sectionRef.value.getBoundingClientRect()
    tooltipStyle.value = {
      position: 'fixed',
      left: `${rect.right + 8}px`,
      top: `${rect.top + rect.height / 2}px`,
      transform: 'translateY(-50%)',
      zIndex: '9999'
    }
  }
}

const handleMouseLeave = () => {
  if (!props.collapsed) return
  showTooltip.value = false
}
</script>

<style scoped>
.menu-section {
  margin: 16px 0 8px 0;
  transition: all 0.2s ease;
  color: var(--theme-colors-primary-500);
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

.section-collapsed {
  display: flex;
  flex-direction: column; /* label sous le séparateur/icone */
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  min-height: 40px;
}

.menu-section.collapsed .section-divider {
  margin: 6px 20px;
  height: 1px;
}

.section-collapsed-label {
  font-size: 10px;
  line-height: 1.1;
  color: var(--theme-colors-text-subtle);
  text-align: center; /* centrage horizontal */
  max-width: 56px; /* largeur max */
  white-space: nowrap; /* force sur une seule ligne */
  overflow: hidden; /* cache le débordement */
  text-overflow: ellipsis; /* ajoute les 3 points */
  font-weight: 600;
}

/* Tooltip téléporté pour sections en mode collapsed */
.section-tooltip-teleported {
  background-color: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-secondary);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  white-space: nowrap;
  border: 1px solid var(--theme-colors-border-subtle);
  pointer-events: none;
  opacity: 1;
  animation: tooltipFadeIn 0.2s ease;
}

@keyframes tooltipFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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