<template>
  <aside class="utopia-menu" :class="{ 'collapsed': collapsed, 'initialized': isInitialized, 'resizing': isResizing, 'mobile-overlay': isMobileOverlay }">
    <!-- Backdrop pour mobile -->
    <div v-if="isMobileOverlay" class="mobile-backdrop" @click="closeMobileMenu"></div>
    
    <!-- Header avec logo et comportement hover -->
    <div class="menu-header" :class="{ 'collapsed': collapsed }">
      <!-- Logo aligné à gauche -->
      <div class="header-logo-container" :class="{ 'collapsed': collapsed }" @click="collapsed ? toggleMenu() : null">
        <!-- Logo/contenu du header -->
        <div class="header-logo">
          <slot name="header">
            <div class="menu-toggle">
              <Icon name="menu_tab" size="medium" color="neutral" />
            </div>
          </slot>
        </div>
        
        <!-- Icône d'expansion visible au hover quand collapsed -->
        <div v-if="collapsed" class="hover-expand-overlay">
          <Icon 
            name="Panel-left"
            :stroke-width="2" 
            size="small" 
            color="neutral"
          />
        </div>
      </div>
      
      <!-- Bouton de rétraction aligné à droite - visible seulement quand pas collapsed -->
      <div v-if="!collapsed" class="header-toggle" @click="toggleMenu">
        <Icon 
          name="Panel-left"
          :stroke-width="2" 
            size="small" 
            color="neutral" 
        />
      </div>
      
      <!-- Bouton de fermeture pour mobile -->
      <div v-if="isMobileOverlay" class="mobile-close-btn" @click="closeMobileMenu">
        <Icon 
          name="X"
          :stroke-width="2" 
          size="small" 
          color="neutral" 
        />
      </div>
    </div>

    <!-- Navigation items -->
    <nav class="menu-nav">
      <slot name="nav-items" :collapsed="collapsed" :animating="isAnimating">
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
import { onMounted, onUnmounted, ref } from 'vue';
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
const isInitialized = ref(false)
const isAnimating = ref(false)
const isResizing = ref(false)
const isMobileOverlay = ref(false)
const userPreference = ref<boolean | null>(null)

const toggleMenu = () => {
  collapsed.value = !collapsed.value
  userPreference.value = collapsed.value
  emit('update:collapsed', collapsed.value)
}

const closeMobileMenu = () => {
  collapsed.value = true
  isMobileOverlay.value = false
  emit('update:collapsed', collapsed.value)
}

const openMobileMenu = () => {
  collapsed.value = false
  isMobileOverlay.value = true
  emit('update:collapsed', collapsed.value)
}

// Exposer les méthodes pour l'usage externe
defineExpose({
  openMobileMenu,
  closeMobileMenu,
  toggleMenu
})

// Gérer le redimensionnement de la fenêtre
const handleResize = () => {
  const isMobile = window.innerWidth <= 768
  
  // Désactiver temporairement les transitions pendant le redimensionnement
  isResizing.value = true
  
  // Si on passe en mode desktop
  if (!isMobile) {
    // Fermer le mode overlay mobile
    isMobileOverlay.value = false
    
    // Si l'utilisateur a défini une préférence, on la respecte
    if (userPreference.value !== null) {
      collapsed.value = userPreference.value
    } else {
      // Sinon, état par défaut (non collapsed)
      collapsed.value = false
    }
    emit('update:collapsed', collapsed.value)
  }
  // Si on passe en mode mobile
  else if (isMobile) {
    // En mobile, on force le collapsed mais on garde la préférence pour le retour en desktop
    collapsed.value = true
    isMobileOverlay.value = false
    emit('update:collapsed', collapsed.value)
  }
  
  // Réactiver les transitions après un court délai
  setTimeout(() => {
    isResizing.value = false
  }, 100)
}

onMounted(() => {
  // Initialiser l'état selon la taille d'écran actuelle
  const isMobile = window.innerWidth <= 768
  if (isMobile) {
    collapsed.value = true
    isMobileOverlay.value = false
    emit('update:collapsed', collapsed.value)
  } else {
    // En desktop, on respecte la prop initiale ou on met l'état par défaut
    collapsed.value = props.collapsed
    emit('update:collapsed', collapsed.value)
  }
  
  // Activer les transitions après l'initialisation pour éviter les glitches
  setTimeout(() => {
    isInitialized.value = true
  }, 50)
  
  window.addEventListener('resize', handleResize)
  
  // Empêcher le scroll horizontal sur le body
  document.body.style.overflowX = 'hidden'
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  // Restaurer le scroll horizontal sur le body
  document.body.style.overflowX = ''
})
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
  border-right: 1px solid var(--theme-colors-primary-100);
  overflow: hidden;
  overflow-x: hidden;
  z-index: 998;
  min-width: 80px;
  max-width: 200px;
  transform: translateZ(0);
  will-change: width;
  box-sizing: border-box;
}

/* Transitions activées seulement après initialisation */
.utopia-menu.initialized {
  transition: width 0.3s ease, transform 0.3s ease;
}

/* Désactiver les transitions pendant le redimensionnement seulement */
.utopia-menu.resizing {
  transition: none !important;
}

/* Masquer le débordement pendant l'animation */
.utopia-menu:not(.initialized) {
  clip-path: inset(0);
}

/* Forcer tous les éléments à respecter la largeur du conteneur */
.utopia-menu * {
  max-width: 100%;
  box-sizing: border-box;
}

/* Contraintes spécifiques sur les slots */
.utopia-menu :deep(.menu-footer > *) {
  max-width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.utopia-menu :deep(.menu-header > *) {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.utopia-menu.collapsed {
  width: 80px;
  overflow: visible;
}

.menu-header {
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--theme-colors-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  overflow: hidden;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
}

.menu-header.collapsed {
  justify-content: flex-start;
  padding: var(--spacing-4);
  align-items: center;
}

.header-logo-container {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  max-width: 100%;
}

.header-logo-container.collapsed {
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: background-color 0.2s ease;
  padding: var(--spacing-2);
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  transform: translateX(0);
}

/* Position fixe du logo pendant l'animation */
.header-logo-container {
  transform: translateX(0);
  transition: background-color 0.2s ease;
}

.header-logo-container.collapsed:hover {
  background-color: var(--theme-colors-background-secondary);
  cursor: e-resize; /* Flèche vers la droite pour indiquer l'expansion */
}

.header-logo-container.collapsed:hover .header-logo {
  opacity: 0;
}

.header-logo-container.collapsed:hover .hover-expand-overlay {
  opacity: 1;
}

.header-logo {
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: var(--spacing-2);
  width: 100%;
  height: 100%;
}

/* Alignement cohérent du logo dans tous les modes */
.utopia-menu .header-logo {
  margin-left: var(--spacing-2);
}

.header-logo-container.collapsed .header-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
}

.hover-expand-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  width: 100%;
  height: 100%;
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
  position: relative;
}

.header-toggle:hover {
  background-color: var(--theme-colors-background-secondary);
}

/* Curseurs directionnels selon l'état */
.header-toggle:not(.collapsed):hover {
  cursor: w-resize; /* Flèche vers la gauche quand le menu va se rétracter */
}

.header-toggle.collapsed:hover {
  cursor: e-resize; /* Flèche vers la droite quand le menu va s'ouvrir */
}

.mobile-close-btn {
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.mobile-close-btn:hover {
  background-color: var(--theme-colors-background-secondary);
}

.menu-nav {
  flex: 1;
  padding: var(--spacing-3);
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 0;
  max-width: 100%;
}

/* Navigation avec overflow contrôlé */
.utopia-menu.collapsed .menu-nav {
  overflow: visible;
}

/* Forcer une largeur fixe en mode collapsed */
.utopia-menu.collapsed .menu-footer,
.utopia-menu.collapsed .menu-header,
.utopia-menu.collapsed .menu-nav {
  width: 80px;
  min-width: 80px;
  max-width: 80px;
}

.menu-footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--theme-colors-border-subtle);
  overflow: hidden;
  min-width: 0;
  max-width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .utopia-menu {
    width: 280px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transform: translateX(-100%);
  }

  /* Transitions seulement après initialisation */
  .utopia-menu.initialized {
    transition: transform 0.3s ease;
  }

  /* En mobile, quand le menu n'est PAS collapsed, on l'affiche */
  .utopia-menu:not(.collapsed) {
    transform: translateX(0);
  }

  /* En mobile, quand le menu est collapsed, on le cache */
  .utopia-menu.collapsed {
    transform: translateX(-100%);
    width: 280px;
  }
  
  /* Mode overlay mobile */
  .utopia-menu.mobile-overlay {
    width: 280px;
    z-index: 1001;
  }
  
  /* Backdrop pour mobile */
  .mobile-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    backdrop-filter: blur(2px);
  }
}
</style> 