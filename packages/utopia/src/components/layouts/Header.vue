<template>
  <header class="utopia-header">
    <nav class="nav-container">
      <!-- Left Slot (Brand/Logo) -->
      <div class="nav-left">
        <MobileMenuButton @open-menu="openMobileMenu" />
        <slot name="left" />
      </div>
      
      <!-- Right Slot (Actions) -->
      <div class="nav-right">
        <slot name="right" />
      </div>
    </nav>
    
    <!-- Menu mobile -->
    <MobileMenu 
      :is-open="isMobileMenuOpen"
      @close="closeMobileMenu"
      @nav-click="handleNavClick"
    >
      <template #header>
        <slot name="mobile-menu-header">
          <div class="menu-header-content">
            <Logo size="md" />
          </div>
        </slot>
      </template>
      
      <template #nav-items>
        <slot name="mobile-nav-items">
          <!-- Navigation par défaut -->
          <div class="nav-item" @click="handleNavClick('accueil')">
            <Icon name="Home" size="small" color="neutral" />
            <span>Accueil</span>
          </div>
          <div class="nav-item" @click="handleNavClick('couleurs')">
            <Icon name="Palette" size="small" color="neutral" />
            <span>Couleurs</span>
          </div>
          <div class="nav-item" @click="handleNavClick('typographie')">
            <Icon name="Type" size="small" color="neutral" />
            <span>Typographie</span>
          </div>
          <div class="nav-item" @click="handleNavClick('icones')">
            <Icon name="Star" size="small" color="neutral" />
            <span>Icônes</span>
          </div>
          <div class="nav-item" @click="handleNavClick('parametres')">
            <Icon name="Settings" size="small" color="neutral" />
            <span>Paramètres</span>
          </div>
        </slot>
      </template>
    </MobileMenu>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon, Logo } from '../atoms'
import MobileMenu from './MobileMenu.vue'
import MobileMenuButton from './MobileMenuButton.vue'

// État du menu mobile
const isMobileMenuOpen = ref(false)

// Fonction pour ouvrir le menu mobile
const openMobileMenu = () => {
  console.log('Ouverture du menu mobile depuis le Header')
  isMobileMenuOpen.value = true
}

// Fonction pour fermer le menu mobile
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Fonction pour gérer les clics de navigation
const handleNavClick = (page: string) => {
  console.log('Navigation vers:', page)
  emit('nav-click', page)
}

// Émettre les événements
const emit = defineEmits<{
  'mobile-menu-open': []
  'nav-click': [page: string]
}>()
</script>

<style scoped>
.utopia-header {
  height: 60px;
  background-color: var(--theme-colors-primary-25);
  border-bottom: 1px solid var(--theme-colors-primary-100);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(13px);
  width: 100%;
  flex-shrink: 0;
}


.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3) var(--spacing-12);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 var(--spacing-4);
  }
  
  .nav-right {
    gap: var(--spacing-2);
  }
}
</style>