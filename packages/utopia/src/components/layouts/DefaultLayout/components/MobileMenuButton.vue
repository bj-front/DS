<template>
  <button 
    @click="openMenu"
    class="mobile-menu-btn"
    :title="'Ouvrir le menu'"
    aria-label="Ouvrir le menu de navigation"
  >
    <Icon 
      name="Menu"
      size="medium" 
      color="neutral"
      :stroke-width="2"
    />
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Icon } from '../../../atoms';

interface Props {
  onOpenMenu?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  onOpenMenu: () => {}
})

const isMobile = ref(false)

const openMenu = () => {
  props.onOpenMenu()
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.mobile-menu-btn {
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  background: none;
  color: var(--theme-colors-text-primary);
}

.mobile-menu-btn:hover {
  background-color: var(--theme-colors-background-secondary);
}

.mobile-menu-btn:focus {
  outline: 2px solid var(--theme-colors-primary-500);
  outline-offset: 2px;
}

/* Desktop - masquer le bouton */
@media (min-width: 769px) {
  .mobile-menu-btn {
    display: none;
  }
}
</style> 