<template>
  <div class="page-layout">
    <div class="page-header">
      <div class="header-title">
        <Icon :name="icon" class="page-icon" />
        <h1>{{ title }}</h1>
      </div>
      <p v-if="description" class="page-description">{{ description }}</p>
      <div v-if="section" class="page-meta">
        <span class="section-badge">{{ section }}</span>
      </div>
    </div>
    
    <div class="page-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@club-employes/utopia'

interface Props {
  title: string
  icon?: string
  description?: string
  section?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'FileText',
  description: undefined,
  section: undefined
})
</script>

<style scoped>
.page-layout {
  padding: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-8);
  padding-bottom: var(--spacing-6);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.header-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.header-title h1 {
  margin: 0;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
}

.page-icon {
  font-size: var(--font-size-2xl);
  color: var(--theme-colors-brand-primary-500);
}

.page-description {
  margin: 0 0 var(--spacing-3) 0;
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
}

.page-meta {
  margin: 0;
}

.section-badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  background: var(--theme-colors-brand-primary-100);
  color: var(--theme-colors-brand-primary-600);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: capitalize;
}

.page-content {
  margin-bottom: var(--spacing-8);
}

/* Styles pour le contenu de la page */
.page-content :deep(.content-section) {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-8);
  margin-bottom: var(--spacing-6);
}

.page-content :deep(.content-section h2) {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.page-content :deep(.content-section h3) {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-4);
  margin: 0 0 var(--spacing-4) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  border-bottom: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
}

.page-content :deep(.content-example) {
  padding: var(--spacing-6);
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-4);
}

.page-content :deep(.content-example p) {
  margin: 0 0 var(--spacing-4) 0;
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
}

.page-content :deep(.content-example p:last-child) {
  margin-bottom: 0;
}

.page-content :deep(.content-grid) {
  display: grid;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.page-content :deep(.content-card) {
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.page-content :deep(code) {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

.page-content :deep(pre) {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
  overflow-x: auto;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
  margin: var(--spacing-4) 0;
}

.page-content :deep(pre code) {
  background: none;
  padding: 0;
}
</style>