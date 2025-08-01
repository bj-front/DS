<template>
  <div class="logos-page">
    <div class="page-header">
      <h1 class="page-title">🏢 Logos & Identités</h1>
      <p class="page-description">
        Découvrez les logos et identités visuelles pour chaque marque du système.
      </p>
    </div>

    <!-- Club Employés -->
    <section class="section">
      <h2 class="section-title">🏢 Club Employés</h2>
      <p class="section-description">
        Logos et variations pour la marque Club Employés.
      </p>
      
      <div class="logos-grid">
        <div class="logo-card">
          <div class="logo-preview">
            <!-- Placeholder pour le logo -->
            <div class="logo-placeholder club-employes">
              <span>CLUB EMPLOYÉS</span>
            </div>
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo principal</h4>
            <p class="logo-description">Version complète du logo avec texte</p>
            <div class="logo-actions">
              <Button variant="outline" size="small">
                Télécharger SVG
              </Button>
              <Button variant="ghost" size="small">
                Télécharger PNG
              </Button>
            </div>
          </div>
        </div>

        <div class="logo-card">
          <div class="logo-preview">
            <div class="logo-placeholder club-employes-small">
              <span>CE</span>
            </div>
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo compact</h4>
            <p class="logo-description">Version compacte pour petits espaces</p>
            <div class="logo-actions">
              <Button variant="outline" size="small">
                Télécharger SVG
              </Button>
              <Button variant="ghost" size="small">
                Télécharger PNG
              </Button>
            </div>
          </div>
        </div>

        <div class="logo-card dark">
          <div class="logo-preview">
            <div class="logo-placeholder club-employes-white">
              <span>CLUB EMPLOYÉS</span>
            </div>
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo blanc</h4>
            <p class="logo-description">Version pour fonds sombres</p>
            <div class="logo-actions">
              <Button variant="outline" size="small">
                Télécharger SVG
              </Button>
              <Button variant="ghost" size="small">
                Télécharger PNG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gifteo -->
    <section class="section">
      <h2 class="section-title">❤️ Gifteo</h2>
      <p class="section-description">
        Logos et variations pour la marque Gifteo.
      </p>
      
      <div class="logos-grid">
        <div class="logo-card">
          <div class="logo-preview">
            <div class="logo-placeholder gifteo">
              <span>❤️ GIFTEO</span>
            </div>
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo principal</h4>
            <p class="logo-description">Version complète du logo avec icône</p>
            <div class="logo-actions">
              <Button variant="outline" size="small">
                Télécharger SVG
              </Button>
              <Button variant="ghost" size="small">
                Télécharger PNG
              </Button>
            </div>
          </div>
        </div>

        <div class="logo-card">
          <div class="logo-preview">
            <div class="logo-placeholder gifteo-small">
              <span>❤️</span>
            </div>
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo compact</h4>
            <p class="logo-description">Version icône seule</p>
            <div class="logo-actions">
              <Button variant="outline" size="small">
                Télécharger SVG
              </Button>
              <Button variant="ghost" size="small">
                Télécharger PNG
              </Button>
            </div>
          </div>
        </div>

        <div class="logo-card dark">
          <div class="logo-preview">
            <div class="logo-placeholder gifteo-white">
              <span>❤️ GIFTEO</span>
            </div>
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo blanc</h4>
            <p class="logo-description">Version pour fonds sombres</p>
            <div class="logo-actions">
              <Button variant="outline" size="small">
                Télécharger SVG
              </Button>
              <Button variant="ghost" size="small">
                Télécharger PNG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guidelines d'utilisation -->
    <section class="section">
      <h2 class="section-title">📋 Guidelines d'utilisation</h2>
      <div class="guidelines-grid">
        <div class="guideline-card">
          <h4 class="guideline-title">✅ À faire</h4>
          <ul class="guideline-list">
            <li>Respecter l'espace minimum autour du logo</li>
            <li>Utiliser les versions officielles uniquement</li>
            <li>Maintenir les proportions originales</li>
            <li>Choisir la version adaptée au contraste</li>
          </ul>
        </div>
        
        <div class="guideline-card error">
          <h4 class="guideline-title">❌ À éviter</h4>
          <ul class="guideline-list">
            <li>Ne pas déformer ou étirer le logo</li>
            <li>Ne pas modifier les couleurs</li>
            <li>Ne pas ajouter d'effets ou filtres</li>
            <li>Ne pas placer sur un fond similaire</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Espacement minimum -->
    <section class="section">
      <h2 class="section-title">📐 Espacement minimum</h2>
      <p class="section-description">
        Respectez toujours un espace minimum autour des logos pour garantir leur lisibilité.
      </p>
      
      <div class="spacing-example">
        <div class="spacing-demo">
          <div class="spacing-lines">
            <div class="spacing-line horizontal top"></div>
            <div class="spacing-line horizontal bottom"></div>
            <div class="spacing-line vertical left"></div>
            <div class="spacing-line vertical right"></div>
          </div>
          <div class="demo-logo">
            <span>LOGO</span>
          </div>
        </div>
        <p class="spacing-note">
          L'espace minimum recommandé est équivalent à la hauteur de la lettre "x" du logo.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'
</script>

<style scoped>
.logos-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  border-bottom: 2px solid var(--theme-colors-border-default);
  padding-bottom: var(--spacing-4);
}

.section-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.logo-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.logo-card:hover {
  transform: translateY(-2px);
}

.logo-card.dark {
  background: var(--theme-colors-slate-800);
}

.logo-preview {
  padding: var(--spacing-8);
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-placeholder {
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  border: 2px dashed var(--theme-colors-border-default);
}

.club-employes {
  color: var(--theme-colors-primary-600);
  background: var(--theme-colors-primary-50);
  border-color: var(--theme-colors-primary-300);
}

.club-employes-small {
  color: var(--theme-colors-primary-600);
  background: var(--theme-colors-primary-50);
  border-color: var(--theme-colors-primary-300);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.club-employes-white {
  color: white;
  background: var(--theme-colors-primary-600);
  border-color: var(--theme-colors-primary-400);
}

.gifteo {
  color: var(--theme-colors-danger-600);
  background: var(--theme-colors-danger-50);
  border-color: var(--theme-colors-danger-300);
}

.gifteo-small {
  color: var(--theme-colors-danger-600);
  background: var(--theme-colors-danger-50);
  border-color: var(--theme-colors-danger-300);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.gifteo-white {
  color: white;
  background: var(--theme-colors-danger-600);
  border-color: var(--theme-colors-danger-400);
}

.logo-info {
  padding: var(--spacing-6);
  border-top: 1px solid var(--theme-colors-border-default);
}

.logo-card.dark .logo-info {
  background: var(--theme-colors-surface-card);
}

.logo-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-2);
}

.logo-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-4);
}

.logo-actions {
  display: flex;
  gap: var(--spacing-2);
}

.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.guideline-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.guideline-card.error {
  border-color: var(--theme-colors-danger-300);
  background: var(--theme-colors-danger-25);
}

.guideline-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.guideline-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.guideline-list li {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-2);
  padding-left: var(--spacing-4);
  position: relative;
}

.guideline-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--theme-colors-primary-500);
  font-weight: var(--font-weight-bold);
}

.guideline-card.error .guideline-list li::before {
  color: var(--theme-colors-danger-500);
}

.spacing-example {
  text-align: center;
  margin-top: var(--spacing-8);
}

.spacing-demo {
  position: relative;
  display: inline-block;
  margin-bottom: var(--spacing-4);
}

.spacing-lines {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
}

.spacing-line {
  position: absolute;
  border: 1px dashed var(--theme-colors-primary-400);
}

.horizontal {
  left: 0;
  right: 0;
}

.vertical {
  top: 0;
  bottom: 0;
}

.top {
  top: -20px;
}

.bottom {
  bottom: -20px;
}

.left {
  left: -20px;
}

.right {
  right: -20px;
}

.demo-logo {
  background: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-600);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  border: 2px solid var(--theme-colors-primary-300);
}

.spacing-note {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  font-style: italic;
}

@media (max-width: 768px) {
  .logos-page {
    padding: var(--spacing-4);
  }
  
  .logos-grid,
  .guidelines-grid {
    grid-template-columns: 1fr;
  }
  
  .logo-actions {
    flex-direction: column;
  }
}
</style>