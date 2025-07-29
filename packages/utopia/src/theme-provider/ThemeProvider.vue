<template>
  <div class="theme-provider" :data-theme="themeName">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, onMounted, onBeforeUnmount, watch } from 'vue'

interface ThemeConfig {
  name: string
  cssContent: string
}

interface Props {
  theme: ThemeConfig
}

const props = defineProps<Props>()

const themeName = computed(() => props.theme.name)
let styleElement: HTMLStyleElement | null = null

// Fonction pour injecter les styles CSS
const injectStyles = () => {
  // Supprimer l'ancien style si il existe
  if (styleElement) {
    document.head.removeChild(styleElement)
  }

  // Créer et injecter le nouveau style
  styleElement = document.createElement('style')
  styleElement.setAttribute('data-theme-provider', themeName.value)
  styleElement.textContent = props.theme.cssContent
  document.head.appendChild(styleElement)
}

// Fonction pour nettoyer les styles
const cleanupStyles = () => {
  if (styleElement && document.head.contains(styleElement)) {
    document.head.removeChild(styleElement)
    styleElement = null
  }
}

// Provide du thème pour les composants enfants
provide('theme', {
  name: themeName,
  config: props.theme
})

// Injecter les styles au montage
onMounted(() => {
  injectStyles()
})

// Nettoyer au démontage
onBeforeUnmount(() => {
  cleanupStyles()
})

// Réinjecter les styles si le thème change
watch(() => props.theme, () => {
  injectStyles()
}, { deep: true })
</script>

<style scoped>
.theme-provider {
  height: 100%;
  width: 100%;
}
</style> 