<template>
  <AppLayout>
    <template #header-title>
      <h1>📱 Menu Mobile</h1>
    </template>
      
      <template #nav-items="{ collapsed }">
        <div class="demo-nav">
          <div class="nav-item" @click="handleNavClick('accueil')">
            <Icon name="Home" size="small" color="neutral" />
            <span v-if="!collapsed">Accueil</span>
          </div>
          <div class="nav-item" @click="handleNavClick('couleurs')">
            <Icon name="Palette" size="small" color="neutral" />
            <span v-if="!collapsed">Couleurs</span>
          </div>
          <div class="nav-item" @click="handleNavClick('typographie')">
            <Icon name="Type" size="small" color="neutral" />
            <span v-if="!collapsed">Typographie</span>
          </div>
          <div class="nav-item" @click="handleNavClick('icones')">
            <Icon name="Star" size="small" color="neutral" />
            <span v-if="!collapsed">Icônes</span>
          </div>
          <div class="nav-item" @click="handleNavClick('parametres')">
            <Icon name="Settings" size="small" color="neutral" />
            <span v-if="!collapsed">Paramètres</span>
          </div>
        </div>
      </template>
      
      <template #header-actions>
        <button class="demo-btn" @click="showInfo = !showInfo">
          <Icon name="Info" size="small" color="neutral" />
          Info
        </button>
      </template>
      
      <div class="demo-content">
        <div class="demo-section">
          <h3>Instructions</h3>
          <ul>
            <li>Redimensionnez la fenêtre à moins de 768px pour voir le bouton mobile</li>
            <li>Cliquez sur le bouton "Menu" dans le header pour ouvrir le menu</li>
            <li>Le menu s'affiche en overlay avec un backdrop</li>
            <li>Cliquez sur le backdrop ou le bouton X pour fermer</li>
          </ul>
        </div>
        
        <div v-if="showInfo" class="demo-section">
          <h3>Informations</h3>
          <p>Cette démonstration montre le comportement du menu en mode mobile :</p>
          <ul>
            <li><strong>Desktop</strong> : Menu latéral avec animation de collapse/expand</li>
            <li><strong>Mobile</strong> : Menu overlay avec bouton d'ouverture dans le header</li>
            <li><strong>Responsive</strong> : Transition automatique entre les modes</li>
          </ul>
        </div>
        
        <div class="demo-section">
          <h3>Navigation testée</h3>
          <p>Page sélectionnée : <strong>{{ currentPage }}</strong></p>
        </div>
      </div>
    </AppLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppLayout from '../layouts/AppLayout.vue'
import { Icon } from '../atoms'

const showInfo = ref(false)
const currentPage = ref('accueil')

const handleNavClick = (page: string) => {
  currentPage.value = page
  console.log('Navigation vers:', page)
}
</script>

<style scoped>

.demo-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: var(--theme-colors-text-primary);
}

.nav-item:hover {
  background-color: var(--theme-colors-background-secondary);
}

.nav-item span {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.demo-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  background-color: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--font-size-sm);
}

.demo-btn:hover {
  background-color: var(--theme-colors-background-secondary);
}

.demo-content {
  max-width: 800px;
}

.demo-section {
  margin-bottom: var(--spacing-6);
}

.demo-section h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.demo-section ul {
  list-style-type: disc;
  padding-left: var(--spacing-4);
  color: var(--theme-colors-text-secondary);
}

.demo-section li {
  margin-bottom: var(--spacing-2);
}
</style> 