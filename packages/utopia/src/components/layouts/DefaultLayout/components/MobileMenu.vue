<template>
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div v-if="isOpen" class="mobile-menu-overlay">
        <!-- Backdrop -->
        <div class="mobile-backdrop" @click="closeMenu"></div>
        
        <!-- Menu content - utilise les mêmes styles que le menu desktop -->
        <aside class="utopia-menu mobile-menu-content">
          <!-- Header du menu mobile -->
          <div class="menu-header">
            <div class="header-logo-container">
              <slot name="header">
                <div class="header-logo">
                  <slot name="header-content">
                    <h3 class="mobile-menu-title">Menu</h3>
                  </slot>
                </div>
              </slot>
            </div>
            <button class="mobile-menu-close" @click="closeMenu">
              <Icon name="X" size="medium" color="neutral" :stroke-width="2" />
            </button>
          </div>
          
          <!-- Navigation -->
          <nav class="menu-nav">
            <slot name="nav-items">
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
          </nav>
          
          <!-- Footer optionnel -->
          <div class="menu-footer">
            <slot name="footer" />
          </div>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Icon } from '../../../atoms';

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'nav-click', page: string): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()



const closeMenu = () => {
  emit('close')
}

const handleNavClick = (page: string) => {
  emit('nav-click', page)
  closeMenu()
}
</script>

<style scoped>
/* Le menu mobile utilise exactement les mêmes styles que le menu desktop */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

/* Animation keyframes pour le blur */
@keyframes blur-pulse {
  0% { 
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
 
  100% { 
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
}

.mobile-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  transition: opacity 0.3s ease;
  animation: blur-pulse 1s ease-out;
}

/* Styles identiques au menu desktop */
.mobile-menu-content {
  position: relative;
  width: 280px;
  height: 100vh;
  background-color: var(--theme-colors-surface-card);
  border-right: 1px solid var(--theme-colors-primary-100);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1001;
  box-sizing: border-box;
  min-width: 80px;
  max-width: 280px;
  transform: translateZ(0);
  will-change: width;
}

/* Header identique au menu desktop */
.mobile-menu-content .menu-header {
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

.mobile-menu-content .header-logo-container {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  max-width: 100%;
  margin-left: var(--spacing-2);

}

.mobile-menu-content .header-logo {
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: var(--spacing-4); /* Aligné avec les nav-items */
  width: 100%;
  height: 100%;
}

.mobile-menu-close {
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

.mobile-menu-close:hover {
  background-color: var(--theme-colors-background-secondary);
}

.mobile-menu-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0;
}

/* Navigation identique au menu desktop */
.mobile-menu-content .menu-nav {
  flex: 1;
  padding: var(--spacing-3);
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 0;
  max-width: 100%;
}

/* Nav items identiques au menu desktop */
.mobile-menu-content .nav-item {
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  margin-bottom: var(--spacing-3);
  border-radius: var(--border-radius-md);
  color: var(--theme-colors-text-secondary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  min-height: 40px;
}

.mobile-menu-content .nav-item:hover {
  background-color: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-800);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.mobile-menu-content .nav-item.active {
  background-color: var(--theme-colors-primary-50);
  color: var(--theme-colors-primary-700);
}

.mobile-menu-content .nav-item.active:hover {
  background-color: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-900);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.mobile-menu-content .nav-item span {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  transition: opacity 0.3s ease, width 0.3s ease;
}

/* Footer identique au menu desktop */
.mobile-menu-content .menu-footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--theme-colors-border-subtle);
  overflow: hidden;
  min-width: 0;
  max-width: 100%;
}

/* Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
}

.mobile-menu-leave-to {
  opacity: 0;
}

/* Animation spécifique pour le menu */
.mobile-menu-enter-active .mobile-menu-content,
.mobile-menu-leave-active .mobile-menu-content {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from .mobile-menu-content {
  transform: translateX(-100%);
}

.mobile-menu-leave-to .mobile-menu-content {
  transform: translateX(-100%);
}

/* Animation spécifique pour le backdrop */
.mobile-menu-enter-active .mobile-backdrop,
.mobile-menu-leave-active .mobile-backdrop {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from .mobile-backdrop {
  opacity: 0;
}

.mobile-menu-leave-to .mobile-backdrop {
  opacity: 0;
}

/* Animation de blur seulement à l'ouverture */
.mobile-menu-enter-active .mobile-backdrop {
  animation: blur-pulse 0.6s ease-out;
}

.mobile-menu-leave-active .mobile-backdrop {
  animation: none;
}



/* Desktop - masquer le menu mobile */
@media (min-width: 769px) {
  .mobile-menu-overlay {
    display: none;
  }
}
</style> 