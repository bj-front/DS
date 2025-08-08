<template>
  <div class="scroll-example">
    <h2>Exemple d'utilisation de useScrollShadows</h2>
    
    <!-- Conteneur avec ombres -->
    <div class="scroll-container" :class="containerClasses">
      <!-- Élément scrollable -->
      <div 
        ref="scrollElementRef" 
        class="scroll-content" 
        :class="scrollClasses"
        @scroll="handleScroll"
      >
        <div v-for="i in 50" :key="i" class="scroll-item">
          Item {{ i }}
        </div>
      </div>
    </div>

    <!-- État des ombres -->
    <div class="shadow-status">
      <p>Ombre du haut : {{ showTopShadow ? '✅' : '❌' }}</p>
      <p>Ombre du bas : {{ showBottomShadow ? '✅' : '❌' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollShadows } from './useScrollShadows'

const {
  scrollElementRef,
  showTopShadow,
  showBottomShadow,
  handleScroll,
  initialize,
  containerClasses,
  scrollClasses
} = useScrollShadows({
  initialDelay: 100,
  bottomTolerance: 2,
  topTolerance: 2
})

onMounted(() => {
  initialize()
})
</script>

<style scoped>
@import './useScrollShadows.css';

.scroll-example {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.scroll-container {
  position: relative;
  width: 300px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  
  /* Configuration des ombres */
  --scroll-shadow-top-offset: 0;
  --scroll-shadow-bottom-offset: 0;
  --scroll-shadow-height: 12px;
  --scroll-shadow-opacity: 0.2;
  --scroll-shadow-z-index: 10;
}

.scroll-content {
  height: 100%;
  overflow-y: auto;
  padding: 10px;
}

.scroll-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-align: center;
}

.shadow-status {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.shadow-status p {
  margin: 5px 0;
  font-family: monospace;
}
</style>