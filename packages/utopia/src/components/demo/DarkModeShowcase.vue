<template>
  <div class="dark-mode-showcase">
    <h2 class="showcase-title">🌗 Light/Dark Mode Showcase</h2>

    <div class="showcase-grid">
      <!-- Surface colors -->
      <div class="showcase-card">
        <h3 class="card-title">Surfaces</h3>
        <div class="surface-demo">
          <div class="surface-item background">
            <span>Background</span>
            <code>--theme-colors-surface-background</code>
          </div>
          <div class="surface-item card">
            <span>Card</span>
            <code>--theme-colors-surface-card</code>
          </div>
        </div>
      </div>

      <!-- Text colors -->
      <div class="showcase-card">
        <h3 class="card-title">Texte</h3>
        <div class="text-demo">
          <p class="text-primary">Texte principal</p>
          <p class="text-secondary">Texte secondaire</p>
          <p class="text-muted">Texte atténué</p>
        </div>
      </div>

      <!-- Primary colors -->
      <div class="showcase-card">
        <h3 class="card-title">Couleurs primaires</h3>
        <div class="primary-demo">
          <div class="primary-swatch primary-100">100</div>
          <div class="primary-swatch primary-500">500</div>
          <div class="primary-swatch primary-900">900</div>
        </div>
      </div>

      <!-- Borders -->
      <div class="showcase-card">
        <h3 class="card-title">Bordures</h3>
        <div class="border-demo">
          <div class="border-item border-default">Default</div>
          <div class="border-item border-muted">Muted</div>
          <div class="border-item border-strong">Strong</div>
        </div>
      </div>
    </div>

    <div class="mode-info">
      <div class="info-badge">
        <span class="info-label">Mode actuel:</span>
        <span class="info-value">{{ currentMode }}</span>
      </div>
      <p class="info-text">
        Les variables CSS restent identiques, seules les valeurs changent selon le thème importé.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

const theme = inject('theme', { name: { value: 'unknown' } })
const currentMode = computed(() => {
  const themeName = typeof theme.name === 'string' ? theme.name : theme.name?.value || 'unknown'
  return themeName.includes('dark') ? 'Dark 🌙' : 'Light ☀️'
})
</script>

<style scoped>
.dark-mode-showcase {
  padding: var(--spacing-6);
  background-color: var(--theme-colors-surface-card);
  border-radius: var(--border-radius-lg);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  margin-top: var(--spacing-8);
}

.showcase-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
  text-align: center;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.showcase-card {
  padding: var(--spacing-5);
  background-color: var(--theme-colors-surface-card);
  border-radius: var(--border-radius-base);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

/* Surface demo */
.surface-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.surface-item {
  padding: var(--spacing-3);
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.surface-item.background {
  background-color: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-primary);
}

.surface-item.card {
  background-color: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-primary);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
}

.surface-item code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--color-neutral-600);
}

/* Text demo */
.text-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.text-primary {
  color: var(--theme-colors-text-primary);
  font-weight: var(--font-weight-medium);
}

.text-secondary {
  color: var(--theme-colors-text-secondary);
}

.text-muted {
  color: var(--theme-colors-text-muted);
}

/* Primary demo */
.primary-demo {
  display: flex;
  gap: var(--spacing-2);
}

.primary-swatch {
  flex: 1;
  padding: var(--spacing-3);
  border-radius: var(--border-radius-sm);
  text-align: center;
  color: white;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.primary-100 { background-color: var(--theme-colors-primary-100); color: var(--theme-colors-primary-900); }
.primary-500 { background-color: var(--theme-colors-primary-500); }
.primary-900 { background-color: var(--theme-colors-primary-900); }

/* Border demo */
.border-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.border-item {
  padding: var(--spacing-3);
  border-radius: var(--border-radius-sm);
  text-align: center;
  background-color: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-primary);
  font-weight: var(--font-weight-medium);
}

.border-default {
  border: var(--border-width-2) solid var(--theme-colors-border-default);
}

.border-muted {
  border: var(--border-width-2) solid var(--theme-colors-border-muted);
}

.border-strong {
  border: var(--border-width-2) solid var(--theme-colors-border-strong);
}

/* Mode info */
.mode-info {
  text-align: center;
  padding: var(--spacing-4);
  background-color: var(--theme-colors-primary-50);
  border-radius: var(--border-radius-base);
  border: var(--border-width-1) solid var(--theme-colors-primary-200);
}

.info-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-blue-500);
  color: white;
  border-radius: var(--border-radius-full);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-3);
}

.info-text {
  color: var(--color-blue-700);
  font-size: var(--font-size-sm);
  margin: 0;
}
</style>
