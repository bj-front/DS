<template>
  <div class="gifteo-colors-demo">
    <h2 class="demo-title">❤️ Palette Gifteo</h2>
    
    <!-- Variable Gifteo - Palette principale Rouge -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Variable Gifteo - Rouge</h3>
      <div class="color-grid main-palette">
        <div class="color-card" 
             v-for="shade in redShades" 
             :key="shade.name"
             :style="{ backgroundColor: `var(--color-red-${shade.value})` }"
        >
          <span class="color-name">Red / {{ shade.value }}</span>
          <code class="color-var">--color-red-{{ shade.value }}</code>
        </div>
      </div>
    </section>

    <!-- Neutrals Orange/Gris -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Neutrals Orange</h3>
      <div class="color-grid neutral-palette">
        <div class="color-card neutral" 
             v-for="shade in orangeShades" 
             :key="shade.name"
             :style="{ backgroundColor: `var(--color-orange-${shade.value})` }"
        >
          <span class="color-name">Orange / {{ shade.value }}</span>
          <code class="color-var">--color-orange-{{ shade.value }}</code>
        </div>
      </div>
    </section>

    <!-- Couleur secondaire -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Secondaire</h3>
      <div class="secondary-color">
        <div class="color-card secondary">
          <span class="color-name">Secondary</span>
          <code class="color-var">--color-secondary-primary</code>
        </div>
      </div>
    </section>

    <!-- Couleurs produits Gifteo -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Couleurs produits Gifteo</h3>
      <div class="color-grid products-palette">
        <div class="color-card product gift">
          <span class="color-name">Cadeau</span>
          <code class="color-var">--color-product-gift-primary</code>
        </div>
        <div class="color-card product experience">
          <span class="color-name">Expérience</span>
          <code class="color-var">--color-product-experience-primary</code>
        </div>
        <div class="color-card product voucher">
          <span class="color-name">Bon cadeau</span>
          <code class="color-var">--color-product-voucher-primary</code>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const redShades = [
  { name: 'Red 50', value: '50' },
  { name: 'Red 100', value: '100' },
  { name: 'Red 200', value: '200' },
  { name: 'Red 300', value: '300' },
  { name: 'Red 600', value: '600' }
]

const orangeShades = [
  { name: 'Orange 605', value: '605' },
  { name: 'Orange 700', value: '700' },
  { name: 'Orange 800', value: '800' },
  { name: 'Orange 900', value: '900' },
  { name: 'Orange 950', value: '950' }
]
</script>

<style scoped>
.gifteo-colors-demo {
  padding: var(--spacing-6);
  background-color: var(--color-neutral-white);
  border-radius: var(--border-radius-lg);
  border: var(--border-width-1) solid var(--color-neutral-200);
  margin-top: var(--spacing-8);
}

.demo-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-red-600);
  margin-bottom: var(--spacing-6);
  text-align: center;
}

.demo-section {
  margin-bottom: var(--spacing-8);
}

.demo-subtitle {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-800);
  margin-bottom: var(--spacing-4);
}

.color-grid {
  display: grid;
  gap: var(--spacing-3);
}

.main-palette {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.neutral-palette {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.products-palette {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.color-card {
  padding: var(--spacing-4);
  border-radius: var(--border-radius-base);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  min-height: 80px;
  justify-content: center;
}

.color-card .color-name {
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.color-card .color-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  background: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-1);
  border-radius: var(--border-radius-sm);
}

/* Couleurs spécifiques pour les cartes rouge */
.color-card:nth-child(1) { /* Red 50 */
  color: var(--color-red-900);
}

.color-card:nth-child(2) { /* Red 100 */
  color: var(--color-red-900);
}

.color-card:nth-child(3) { /* Red 200 */
  color: var(--color-red-900);
}

.color-card:nth-child(4),
.color-card:nth-child(5) { /* Red 300, 600 */
  color: white;
}

/* Couleurs pour les neutrals orange */
.neutral-palette .color-card {
  color: var(--color-neutral-50);
}

.neutral-palette .color-card:nth-child(1),
.neutral-palette .color-card:nth-child(2) { /* Orange 605, 700 */
  color: white;
}

/* Couleur secondaire */
.secondary-color {
  display: flex;
  justify-content: flex-start;
}

.color-card.secondary {
  background-color: var(--color-secondary-primary) !important;
  color: white;
  min-width: 200px;
}

/* Couleurs produits */
.color-card.product {
  color: white;
}

.color-card.gift {
  background-color: var(--color-product-gift-primary) !important;
}

.color-card.experience {
  background-color: var(--color-product-experience-primary) !important;
}

.color-card.voucher {
  background-color: var(--color-product-voucher-primary) !important;
}
</style> 