<template>
  <header class="utopia-header">
    <nav class="nav-container">
      <!-- Left Slot (Brand/Logo) -->
      <div class="nav-left">
        <slot name="left" />
      </div>
      
      <!-- Right Slot (Actions) -->
      <div class="nav-right">
        <slot name="right" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Pas de props - utilise uniquement des slots
</script>

<style scoped>
.utopia-header {
  height: 60px;
  background-color: var(--theme-colors-primary-25);
  border-bottom: 1px solid var(--theme-colors-primary-300);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(13px);
  width: 100%;
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