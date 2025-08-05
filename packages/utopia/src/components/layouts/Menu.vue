<template>
  <aside class="utopia-menu" :class="{ 'collapsed': collapsed }">
    <!-- Header avec icône de retraction -->
    <div class="menu-header">
      <slot name="header">
        <div class="menu-toggle" @click="toggleMenu">
          <Icon name="menu_tab" size="medium" color="neutral" />
        </div>
      </slot>
      <!-- Bouton de rétraction du header -->
      <div class="header-toggle" @click="toggleHeader">
        <Icon name="Panel-left-close" :stroke-width="2" size="medium" color="neutral" />
      </div>
    </div>

    <!-- Navigation items -->
    <nav class="menu-nav">
      <slot name="nav-items">
        <!-- Les nav-items seront injectés via le slot -->
      </slot>
    </nav>

    <!-- Footer optionnel -->
    <div class="menu-footer">
      <slot name="footer" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '../atoms';

interface Props {
  collapsed?: boolean
  headerCollapsed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
  headerCollapsed: false
})

const emit = defineEmits<{
  'update:collapsed': [value: boolean]
  'update:headerCollapsed': [value: boolean]
}>()

const collapsed = ref(props.collapsed)
const headerCollapsed = ref(props.headerCollapsed)

const toggleMenu = () => {
  collapsed.value = !collapsed.value
  emit('update:collapsed', collapsed.value)
}

const toggleHeader = () => {
  headerCollapsed.value = !headerCollapsed.value
  emit('update:headerCollapsed', headerCollapsed.value)
}
</script>

<style scoped>
.utopia-menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: var(--theme-colors-surface-card);
  border-right: 1px solid var(--theme-colors-primary-300);
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 998;
}

.utopia-menu.collapsed {
  width: 80px;
}

.menu-header {
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--theme-colors-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
}

.menu-toggle {
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-toggle:hover {
  background-color: var(--theme-colors-background-secondary);
}

.header-toggle {
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-toggle:hover {
  background-color: var(--theme-colors-background-secondary);
}

.menu-nav {
  flex: 1;
  padding: var(--spacing-2);
  overflow-y: auto;
}

.menu-footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--theme-colors-border-subtle);
}

/* Responsive */
@media (max-width: 768px) {
  .utopia-menu {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .utopia-menu.collapsed {
    transform: translateX(0);
  }
}
</style> 