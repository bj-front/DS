<template>
  <span class="icon" :class="iconClasses">
    {{ iconContent }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type IconName = 'plus' | 'download' | 'heart' | 'check' | 'x' | 'arrow-right' | 'arrow-left' | 'settings' | 'user' | 'home'
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  name: IconName
  size?: IconSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

// Mapping des icônes avec des emojis/caractères Unicode
const iconMap: Record<IconName, string> = {
  'plus': '➕',
  'download': '📥', 
  'heart': '❤️',
  'check': '✅',
  'x': '❌',
  'arrow-right': '➡️',
  'arrow-left': '⬅️',
  'settings': '⚙️',
  'user': '👤',
  'home': '🏠'
}

const iconContent = computed(() => iconMap[props.name] || '❓')

const iconClasses = computed(() => [`icon--${props.size}`])
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.icon--xs {
  font-size: 12px;
}

.icon--sm {
  font-size: 14px;
}

.icon--md {
  font-size: 16px;
}

.icon--lg {
  font-size: 20px;
}

.icon--xl {
  font-size: 24px;
}
</style> 