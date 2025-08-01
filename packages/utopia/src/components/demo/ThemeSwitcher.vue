<template>
  <div class="theme-switcher">
    <button
      @click="toggleTheme"
      class="theme-toggle-btn"
      :class="{ 'dark-mode': isDarkMode }"
    >
      <span class="theme-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
      <span class="theme-text">{{ isDarkMode ? 'Mode Dark' : 'Mode Light' }}</span>
    </button>

    <div class="theme-info">
      <code class="theme-name">{{ currentTheme.name }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ThemeConfig } from '../../theme-provider'

interface Props {
  lightTheme: ThemeConfig
  darkTheme: ThemeConfig
  currentTheme: ThemeConfig
}

interface Emits {
  (e: 'themeChange', theme: ThemeConfig): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isDarkMode = computed(() => props.currentTheme.mode === 'dark')

const toggleTheme = () => {
  const newTheme = isDarkMode.value ? props.lightTheme : props.darkTheme
  emit('themeChange', newTheme)
}
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background-color: var(--color-neutral-100);
  border-radius: var(--border-radius-lg);
  border: var(--border-width-1) solid var(--color-neutral-200);
  margin-bottom: var(--spacing-6);
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: linear-gradient(135deg, var(--color-blue-500), var(--color-blue-600));
  color: white;
  border: none;
  border-radius: var(--border-radius-base);
  cursor: pointer;
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.theme-toggle-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.theme-toggle-btn.dark-mode {
  background: linear-gradient(135deg, var(--color-neutral-700), var(--color-neutral-800));
}

.theme-icon {
  font-size: var(--font-size-lg);
}

.theme-text {
  font-size: var(--font-size-sm);
}

.theme-info {
  flex: 1;
}

.theme-name {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  background-color: var(--color-neutral-50);
  color: var(--color-neutral-700);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  border: var(--border-width-1) solid var(--color-neutral-200);
}
</style>
