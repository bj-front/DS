<template>
  <div class="demo-container">
    <h1>Démonstration du Design System Utopia</h1>
    
    <section class="demo-section">
      <h2>Boutons</h2>
      <div class="component-group">
        <div class="variant-group">
          <h3>Variants</h3>
          <div class="button-row">
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="secondary" size="md">Outline</Button>
            <Button variant="tertiary" size="md">Ghost</Button>
          </div>
        </div>
        
        <div class="variant-group">
          <h3>Tailles</h3>
          <div class="button-row">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Icônes</h2>
      <div class="component-group">
        <div class="icon-grid">
          <div class="icon-item">
            <Icon name="add_round" size="medium" />
            <span>add_round</span>
          </div>
          <div class="icon-item">
            <Icon name="alarm" size="medium" />
            <span>alarm</span>
          </div>
          <div class="icon-item">
            <Icon name="archive_alt_big" size="medium" />
            <span>archive_alt_big</span>
          </div>
          <div class="icon-item">
            <Icon name="Shopping-basket" size="medium" />
            <span>basket</span>
          </div>
          <div class="icon-item">
            <Icon name="bell" size="medium" />
            <span>bell</span>
          </div>
          <div class="icon-item">
            <Icon name="calendar" size="medium" />
            <span>calendar</span>
          </div>
        </div>
        
        <div class="variant-group">
          <h3>Tailles d'icônes</h3>
          <div class="button-row">
            <Icon name="heart" size="small" />
            <Icon name="heart" size="medium" />
            <Icon name="heart" size="large" />
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Design Tokens</h2>
      <div class="component-group">
        <div class="token-group">
          <h3>Couleurs de marque</h3>
          <div class="color-grid">
            <div class="color-item">
              <div class="color-swatch" style="background: var(--color-brand-primary-500)"></div>
              <span>Primary 500</span>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: var(--color-brand-secondary-500)"></div>
              <span>Secondary 500</span>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: var(--color-brand-accent-500)"></div>
              <span>Accent 500</span>
            </div>
          </div>
        </div>
        
        <div class="token-group">
          <h3>Couleurs sémantiques</h3>
          <div class="color-grid">
            <div class="color-item">
              <div class="color-swatch" style="background: var(--color-state-success)"></div>
              <span>Success</span>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: var(--color-state-warning)"></div>
              <span>Warning</span>
            </div>
            <div class="color-item">
              <div class="color-swatch" style="background: var(--color-state-error)"></div>
              <span>Error</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button, Icon } from '@club-employes/utopia';
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container h1 {
  color: var(--color-text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  border: 1px solid var(--color-border-default);
  border-radius: 8px;
  background: var(--color-surface-card);
}

.demo-section h2 {
  color: var(--color-text-primary);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border-muted);
}

.component-group {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.variant-group h3 {
  color: var(--color-text-secondary);
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.button-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--color-border-muted);
  border-radius: 4px;
  background: var(--color-surface-background);
}

.icon-item span {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-align: center;
}

.token-group h3 {
  color: var(--color-text-secondary);
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.color-swatch {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--color-border-default);
  flex-shrink: 0;
}

.color-item span {
  font-size: 0.9rem;
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .demo-section {
    padding: 1.5rem;
  }
  
  .button-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .icon-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .color-grid {
    grid-template-columns: 1fr;
  }
}
</style>