<template>
  <div class="floating-nav">
    <div class="nav-content">
      <button
        v-for="page in pages"
        :key="page.key"
        @click="$emit('pageChange', page.key)"
        class="nav-btn"
        :class="{ 'active': currentPage === page.key }"
        :title="page.title"
      >
        <span class="nav-icon">{{ page.icon }}</span>
        <span class="nav-label">{{ page.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Page {
  key: string
  label: string
  icon: string
  title: string
}

interface Props {
  currentPage: string
}

interface Emits {
  (e: 'pageChange', page: string): void
}

defineProps<Props>()
defineEmits<Emits>()

const pages: Page[] = [
  {
    key: 'home',
    label: 'Accueil',
    icon: '🏠',
    title: 'Page d\'accueil'
  },
  {
    key: 'colors',
    label: 'Couleurs',
    icon: '🎨',
    title: 'Palettes de couleurs'
  },
  {
    key: 'surfaces',
    label: 'Surfaces',
    icon: '🖼️',
    title: 'Surfaces et arrière-plans'
  },
  {
    key: 'typography',
    label: 'Typo',
    icon: '📝',
    title: 'Typographie'
  },
  {
    key: 'spacing',
    label: 'Espacement',
    icon: '📏',
    title: 'Espacement et dimensions'
  },
  {
    key: 'logos',
    label: 'Logos',
    icon: '🏢',
    title: 'Logos et icônes'
  },
  {
    key: 'theme-comparison',
    label: 'Light/Dark',
    icon: '🌓',
    title: 'Correspondances Light/Dark'
  }
]
</script>

<style scoped>
.floating-nav {
  position: fixed;
  top: calc(var(--spacing-6) + 50px); /* En dessous du widget switcher */
  right: var(--spacing-6);
  z-index: 999;
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

.floating-nav:hover {
  box-shadow: var(--shadow-xl);
}

.nav-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid transparent;
  border-radius: var(--border-radius-md);
  background: transparent;
  color: var(--theme-colors-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-align: left;
  min-width: 100px;
}

.nav-btn:hover {
  background: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-primary);
  transform: translateX(-2px);
}

.nav-btn.active {
  background: var(--theme-colors-primary-500);
  color: white;
  border-color: var(--theme-colors-primary-600);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  font-size: var(--font-size-base);
  flex-shrink: 0;
}

.nav-label {
  font-size: var(--font-size-sm);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .floating-nav {
    top: calc(var(--spacing-4) + 40px);
    right: var(--spacing-4);
  }

  .nav-btn {
    padding: var(--spacing-1) var(--spacing-2);
    min-width: 80px;
  }

  .nav-label {
    font-size: var(--font-size-xs);
  }
}
</style>
