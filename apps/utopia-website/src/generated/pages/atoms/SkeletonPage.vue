<template>
  <ComponentLayout 
    :title="'Skeleton'"
    :icon="'Skull'"
    :type="'Atoms'"
  >
    <template #examples>
      <!-- USkeleton - Conteneur avec animation -->
      <div class="showcase-item">
        <h3>USkeleton - Conteneur avec animation de shimmer</h3>
        <div class="example">
          <div class="skeleton-grid">
            <div class="skeleton-item">
                              <h4>Conteneur sans fond</h4>
                <Skeleton :width="200" :height="110" :radius="8">
                  <SkeletonAvatar :size="24" rounded />
                  <SkeletonText :lines="5" :lineHeight="10" :gap="2" animated/>
                </Skeleton>
            </div>
                        <div class="skeleton-item">
              <h4>Conteneur avec fond</h4>
              <Skeleton :width="200" :height="80" :radius="8" bg>
                <SkeletonAvatar :size="24" rounded />
                <SkeletonText :lines="3" :lineHeight="10" :gap="2" animated/>
              </Skeleton>
            </div>
            <div class="skeleton-item">
              <h4>Conteneur span</h4>
              <Skeleton :width="120" :height="80" :radius="10" bg>
                <SkeletonText :lines="3" :lineHeight="13" :gap="6" animated/>

              </Skeleton>
            </div>
            <div class="skeleton-item">
              <h4>Conteneur vide</h4>
              <Skeleton :width="80" :height="100" :radius="8" bg animated/>
            </div>
            <div class="skeleton-item">
              <h4>Sans animation</h4>
              <Skeleton :width="200" :height="60" :radius="38" :animated="false" bg>
              </Skeleton>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Conteneur avec contenu --&gt;
&lt;Skeleton :width="200" :height="60" :radius="8"&gt;
  &lt;SkeletonAvatar :size="24" rounded /&gt;
  &lt;SkeletonText :lines="3" :lineHeight="10" :gap="2" /&gt;
&lt;/Skeleton&gt;

&lt;!-- Conteneur avec fond --&gt;
&lt;Skeleton :width="200" :height="80" :radius="8" bg&gt;
  &lt;SkeletonAvatar :size="24" rounded /&gt;
  &lt;SkeletonText :lines="3" :lineHeight="10" :gap="2" /&gt;
&lt;/Skeleton&gt;

&lt;!-- Conteneur span --&gt;
&lt;Skeleton :width="120" :height="10" :radius="20" as="span"&gt;
  &lt;div class="inline-skeleton"&gt;&lt;/div&gt;
&lt;/Skeleton&gt;

&lt;!-- Conteneur vide --&gt;
&lt;Skeleton :width="80" :height="80" :radius="8" /&gt;

&lt;!-- Sans animation --&gt;
&lt;Skeleton :width="200" :height="60" :radius="8" :animated="false"&gt;
  &lt;div class="basic-skeleton"&gt;
    &lt;div class="line"&gt;&lt;/div&gt;
    &lt;div class="line short"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/Skeleton&gt;</code></pre>
        </details>
      </div>

      <!-- USkeletonText - Texte skeleton -->
      <div class="showcase-item">
        <h3>USkeletonText - Texte skeleton</h3>
        <div class="example">
          <div class="skeleton-grid">
            <div class="skeleton-item">
              <h4>3 lignes</h4>
              <Skeleton :width="200" :height="90" :radius="8">
                <SkeletonText :lines="3" :lineHeight="16" :gap="8" animated/>

              </Skeleton>
            </div>
            <div class="skeleton-item">
              <h4>5 lignes</h4>
              <Skeleton :width="200" :height="130" :radius="8" bg>
                <SkeletonText :lines="5" :lineHeight="16" :gap="8" animated/>
              </Skeleton>
            </div>
            <div class="skeleton-item">
              <h4>Dernière ligne courte</h4>
              <Skeleton :width="200" :height="90" :radius="8">
                <SkeletonText :lines="3" :lineHeight="16" :gap="8" animated/>

              </Skeleton>            </div>
            <div class="skeleton-item">
              <h4>Sans animation</h4>
              <Skeleton :width="200" :height="90" :radius="8">
                <SkeletonText :lines="3" :lineHeight="16" :gap="8" />

              </Skeleton>            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- 3 lignes --&gt;
&lt;SkeletonText :lines="3" :lineHeight="16" :gap="8" /&gt;

&lt;!-- 5 lignes --&gt;
&lt;SkeletonText :lines="5" :lineHeight="14" :gap="6" /&gt;

&lt;!-- Dernière ligne courte --&gt;
&lt;SkeletonText :lines="4" :lineHeight="16" :gap="8" :lastLineWidth="60" /&gt;

&lt;!-- Sans animation --&gt;
&lt;SkeletonText :lines="3" :lineHeight="16" :gap="8" :animated="false" /&gt;</code></pre>
        </details>
      </div>

      <!-- USkeletonAvatar - Avatar skeleton -->
      <div class="showcase-item">
        <h3>USkeletonAvatar - Avatar skeleton</h3>
        <div class="example">
          <div class="skeleton-grid">
            <div class="skeleton-item">
              <h4>Petit (32px)</h4>
              <SkeletonAvatar :size="32" rounded />
            </div>
            <div class="skeleton-item">
              <h4>Moyen (48px)</h4>
              <SkeletonAvatar :size="48" rounded />
            </div>
            <div class="skeleton-item">
              <h4>Grand (64px)</h4>
              <SkeletonAvatar :size="64" rounded />
            </div>
            <div class="skeleton-item">
              <h4>Carré</h4>
              <SkeletonAvatar :size="48" :rounded="false" />
            </div>
            <div class="skeleton-item">
              <h4>Sans animation</h4>
              <SkeletonAvatar :size="48" rounded :animated="false" />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Petit (32px) --&gt;
&lt;SkeletonAvatar :size="32" :rounded="true" /&gt;

&lt;!-- Moyen (48px) --&gt;
&lt;SkeletonAvatar :size="48" :rounded="true" /&gt;

&lt;!-- Grand (64px) --&gt;
&lt;SkeletonAvatar :size="64" :rounded="true" /&gt;

&lt;!-- Carré --&gt;
&lt;SkeletonAvatar :size="48" :rounded="false" /&gt;

&lt;!-- Sans animation --&gt;
&lt;SkeletonAvatar :size="48" :rounded="true" :animated="false" /&gt;</code></pre>
        </details>
      </div>



      <!-- Exemples avancés avec conteneur Skeleton -->
      <div class="showcase-item">
        <h3>Exemples avancés avec conteneur Skeleton</h3>
        <div class="example">
          <div class="skeleton-grid">
                        <div class="skeleton-item">
              <h4>Card avec contenu structuré</h4>
              <Skeleton :width="280" :height="180" :radius="12" bg>
                <div class="complex-card">
                  <div class="card-image"></div>
                  <div class="card-content">
                    <div class="card-title"></div>
                    <div class="card-description">
                      <div class="line"></div>
                      <div class="line short"></div>
                    </div>
                    <div class="card-footer">
                      <SkeletonAvatar :size="24" rounded />
                      <div class="meta">
                        <SkeletonText :lines="1" :lineHeight="12" :gap="2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Skeleton>
            </div>
                        <div class="skeleton-item">
              <h4>Liste avec composants spécialisés</h4>
              <Skeleton :width="300" :height="200" :radius="8" bg>
                <div class="icon-list">
                  <div class="list-item">
                    <SkeletonAvatar :size="20" :rounded="false" />
                    <div class="content">
                      <SkeletonText :lines="2" :lineHeight="14" :gap="4" :lastLineWidth="60" />
                    </div>
                    <Skeleton :width="40" :height="16" :radius="8" />
                  </div>
                  <div class="list-item">
                    <SkeletonAvatar :size="20" :rounded="false" />
                    <div class="content">
                      <SkeletonText :lines="2" :lineHeight="14" :gap="4" :lastLineWidth="60" />
                    </div>
                    <Skeleton :width="40" :height="16" :radius="8" />
                  </div>
                  <div class="list-item">
                    <SkeletonAvatar :size="20" :rounded="false" />
                    <div class="content">
                      <SkeletonText :lines="2" :lineHeight="14" :gap="4" :lastLineWidth="60" />
                    </div>
                    <Skeleton :width="40" :height="16" :radius="8" />
                  </div>
                </div>
              </Skeleton>
            </div>
                        <div class="skeleton-item">
              <h4>Formulaire avec contenu mixte</h4>
              <Skeleton :width="320" :height="240" :radius="8" bg>
                <div class="form-skeleton">
                  <div class="form-header">
                    <SkeletonText :lines="2" :lineHeight="20" :gap="4" :lastLineWidth="50" />
                  </div>
                  <div class="form-fields">
                    <div class="field">
                      <Skeleton :width="60" :height="14" :radius="4" />
                      <Skeleton :width="100" :height="32" :radius="6" />
                    </div>
                    <div class="field">
                      <Skeleton :width="80" :height="14" :radius="4" />
                      <Skeleton :width="100" :height="32" :radius="6" />
                    </div>
                    <div class="field">
                      <Skeleton :width="70" :height="14" :radius="4" />
                      <Skeleton :width="100" :height="60" :radius="6" />
                    </div>
                  </div>
                  <div class="form-actions">
                    <Skeleton :width="80" :height="36" :radius="6" />
                    <Skeleton :width="60" :height="36" :radius="6" />
                  </div>
                </div>
              </Skeleton>
            </div>
            <div class="skeleton-item">
              <h4>Dashboard widget</h4>
              <Skeleton :width="250" :height="160" :radius="12">
                <div class="dashboard-widget">
                                     <div class="widget-header">
                     <SkeletonAvatar :size="16" :rounded="false" />
                     <Skeleton :width="120" :height="16" :radius="4" />
                     <Skeleton :width="16" :height="16" :radius="2" />
                   </div>
                                     <div class="widget-content">
                     <div class="metric">
                       <Skeleton :width="80" :height="24" :radius="4" />
                       <Skeleton :width="40" :height="16" :radius="4" />
                     </div>
                     <Skeleton :width="100" :height="60" :radius="8" />
                   </div>
                </div>
              </Skeleton>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Card complexe --&gt;
&lt;Skeleton :width="280" :height="180" :radius="12"&gt;
  &lt;div class="complex-card"&gt;
    &lt;div class="card-image"&gt;&lt;/div&gt;
    &lt;div class="card-content"&gt;
      &lt;div class="card-title"&gt;&lt;/div&gt;
      &lt;div class="card-description"&gt;
        &lt;div class="line"&gt;&lt;/div&gt;
        &lt;div class="line short"&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="card-footer"&gt;
        &lt;SkeletonAvatar :size="24" rounded /&gt;
        &lt;div class="meta"&gt;
          &lt;SkeletonText :lines="1" :lineHeight="12" :gap="2" /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/Skeleton&gt;

&lt;!-- Liste avec icônes --&gt;
&lt;Skeleton :width="300" :height="200" :radius="8"&gt;
  &lt;div class="icon-list"&gt;
    &lt;div class="list-item"&gt;
      &lt;SkeletonAvatar :size="20" :rounded="false" /&gt;
      &lt;div class="content"&gt;
        &lt;SkeletonText :lines="2" :lineHeight="14" :gap="4" :lastLineWidth="60" /&gt;
      &lt;/div&gt;
      &lt;Skeleton :width="40" :height="16" :radius="8" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/Skeleton&gt;</code></pre>
        </details>
      </div>

      <!-- Exemples combinés -->
      <div class="showcase-item">
        <h3>Exemples combinés</h3>
        <div class="example">
          <div class="skeleton-grid">
            <div class="skeleton-item">
              <h4>Profil utilisateur</h4>
              <div class="profile-example">
                <div class="profile-header">
                  <SkeletonAvatar :size="48" rounded />
                  <div class="profile-info">
                    <SkeletonText :lines="2" :lineHeight="16" :gap="4" :lastLineWidth="70" />
                  </div>
                </div>
                <div class="profile-stats">
                  <Skeleton :width="60" :height="24" :radius="12" />
                  <Skeleton :width="60" :height="24" :radius="12" />
                  <Skeleton :width="60" :height="24" :radius="12" />
                </div>
              </div>
            </div>
            <div class="skeleton-item">
              <h4>Article</h4>
              <div class="article-example">
                <Skeleton :width="100" :height="16" :radius="4" />
                <SkeletonText :lines="3" :lineHeight="16" :gap="8" />
                <div class="article-meta">
                  <SkeletonAvatar :size="24" rounded />
                  <Skeleton :width="80" :height="14" :radius="4" />
                  <Skeleton :width="60" :height="14" :radius="4" />
                </div>
              </div>
            </div>
            <div class="skeleton-item">
              <h4>Widget avec contenu mixte</h4>
              <Skeleton :width="250" :height="160" :radius="12" bg>
                <div class="dashboard-widget">
                  <div class="widget-header">
                    <SkeletonAvatar :size="16" :rounded="false" />
                    <Skeleton :width="120" :height="16" :radius="4" />
                    <Skeleton :width="16" :height="16" :radius="2" />
                  </div>
                  <div class="widget-content">
                    <div class="metric">
                      <Skeleton :width="80" :height="24" :radius="4" />
                      <Skeleton :width="40" :height="16" :radius="4" />
                    </div>
                    <Skeleton :width="100" :height="60" :radius="8" />
                  </div>
                </div>
              </Skeleton>
            </div>
            <div class="skeleton-item">
              <h4>Notifications avec composants spécialisés</h4>
              <div class="notifications-example">
                <div class="notification-item">
                  <SkeletonAvatar :size="32" rounded />
                  <div class="notification-content">
                    <SkeletonText :lines="2" :lineHeight="14" :gap="4" :lastLineWidth="80" />
                  </div>
                  <Skeleton :width="40" :height="12" :radius="6" />
                </div>
                <div class="notification-item">
                  <SkeletonAvatar :size="32" rounded />
                  <div class="notification-content">
                    <SkeletonText :lines="2" :lineHeight="14" :gap="4" :lastLineWidth="60" />
                  </div>
                  <Skeleton :width="40" :height="12" :radius="6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Profil utilisateur --&gt;
&lt;div class="profile-example"&gt;
  &lt;div class="profile-header"&gt;
    &lt;SkeletonAvatar :size="48" :rounded="true" /&gt;
    &lt;div class="profile-info"&gt;
      &lt;SkeletonText :lines="2" :lineHeight="16" :gap="4" :lastLineWidth="70" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="profile-stats"&gt;
    &lt;Skeleton :width="60" :height="24" :radius="12" /&gt;
    &lt;Skeleton :width="60" :height="24" :radius="12" /&gt;
    &lt;Skeleton :width="60" :height="24" :radius="12" /&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Article --&gt;
&lt;div class="article-example"&gt;
  &lt;Skeleton :width="100" :height="16" :radius="4" /&gt;
  &lt;SkeletonText :lines="3" :lineHeight="16" :gap="8" /&gt;
  &lt;div class="article-meta"&gt;
    &lt;SkeletonAvatar :size="24" :rounded="true" /&gt;
    &lt;Skeleton :width="80" :height="14" :radius="4" /&gt;
    &lt;Skeleton :width="60" :height="14" :radius="4" /&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <p>Le système de composants <strong>Skeleton</strong> fournit quatre composants spécialisés pour créer des placeholders de chargement élégants et flexibles.</p>
      
      <h3>Composants disponibles</h3>
      
      <h4>USkeleton - Conteneur avec animation</h4>
      <p>Conteneur qui applique l'animation de shimmer à tous ses éléments enfants via un slot libre.</p>
      <ul>
        <li><code>width</code> : Largeur (string | number)</li>
        <li><code>height</code> : Hauteur (string | number)</li>
        <li><code>radius</code> : Rayon de bordure (string | number)</li>
        <li><code>animated</code> : Animation de shimmer (boolean)</li>
        <li><code>block</code> : Affichage en bloc (boolean)</li>
        <li><code>as</code> : Élément HTML à utiliser (string)</li>
        <li><code>bg</code> : Afficher un fond de conteneur (boolean)</li>
      </ul>

      <h4>USkeletonText - Texte skeleton</h4>
      <p>Génère automatiquement plusieurs lignes de texte skeleton avec contrôle sur l'apparence.</p>
      <ul>
        <li><code>lines</code> : Nombre de lignes (number)</li>
        <li><code>lineHeight</code> : Hauteur de ligne (string | number)</li>
        <li><code>gap</code> : Espacement entre lignes (string | number)</li>
        <li><code>lastLineWidth</code> : Largeur de la dernière ligne (string | number)</li>
        <li><code>animated</code> : Animation de shimmer (boolean)</li>
      </ul>

      <h4>USkeletonAvatar - Avatar skeleton</h4>
      <p>Avatar skeleton circulaire ou carré avec différentes tailles.</p>
      <ul>
        <li><code>size</code> : Taille de l'avatar (string | number)</li>
        <li><code>rounded</code> : Forme circulaire (boolean)</li>
        <li><code>animated</code> : Animation de shimmer (boolean)</li>
      </ul>



      <h3>Animation de shimmer</h3>
      <p>Le composant USkeleton applique une animation de shimmer qui se déplace de gauche à droite sur tous ses éléments enfants. Cette animation peut être désactivée avec la prop <code>animated</code>.</p>

      <h3>Variables CSS locales</h3>
      <p>Le composant USkeleton utilise des variables CSS locales pour faciliter la personnalisation :</p>
      <ul>
        <li><code>--skeleton-bg-color</code> : Couleur de fond</li>
        <li><code>--skeleton-shimmer-color</code> : Couleur de l'effet shimmer</li>
        <li><code>--skeleton-animation-duration</code> : Durée de l'animation</li>
      </ul>

      <h3>Support du mode sombre</h3>
      <p>Le composant USkeleton s'adapte automatiquement au mode sombre en utilisant <code>prefers-color-scheme: dark</code>.</p>

      <h3>Flexibilité</h3>
      <p>Le composant USkeleton accepte des valeurs numériques (converties en px) ou des chaînes (%, rem, em, etc.) pour toutes les dimensions, offrant une grande flexibilité d'utilisation.</p>
      
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import { Icon } from '@club-employes/utopia';
// Import temporaire jusqu'à ce que le composant soit buildé
import Skeleton from '../../../../../../packages/utopia/src/components/atoms/Skeleton/Skeleton.vue';
import SkeletonAvatar from '../../../../../../packages/utopia/src/components/atoms/Skeleton/SkeletonAvatar.vue';
import SkeletonText from '../../../../../../packages/utopia/src/components/atoms/Skeleton/SkeletonText.vue';
</script>

<style scoped>
/* Styles standard pour les pages de composants */
.showcase-item {
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--spacing-6, 24px);
  overflow: auto;
}

.showcase-item h3 {
  margin: 0;
  padding: 1rem;
  background: var(--theme-colors-surface-background, #f9fafb);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  font-size: 1rem;
  font-weight: 600;
}

.example {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: var(--theme-colors-surface-card, #ffffff);
}

.code-snippet {
  border-top: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.code-snippet summary {
  padding: 0.75rem 1rem;
  cursor: pointer;
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-snippet pre {
  margin: 0;
  padding: 1rem;
  background: var(--theme-colors-surface-background, #f9fafb);
  overflow-x: auto;
}

.code-snippet code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

.code-icon {
  width: 16px;
  height: 16px;
}

/* Grid pour les skeletons */
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-6, 24px);
  width: 100%;
}

.skeleton-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3, 12px);
}

.skeleton-item h4 {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--theme-colors-text-secondary, #6b7280);
  text-align: center;
}

/* Styles pour les skeletons basiques */
.basic-skeleton {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.basic-skeleton .line {
  height: 16px;
  width: 100%;
}

.basic-skeleton .line.short {
  width: 60%;
}

.inline-skeleton {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

/* Styles pour les exemples avancés avec slots */
.complex-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.card-image {
  width: 100%;
  height: 80px;
  border-radius: 8px;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  height: 18px;
  width: 80%;
}

.card-description {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-description .line {
  height: 12px;
  width: 100%;
}

.card-description .line.short {
  width: 60%;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}

.card-footer .avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.card-footer .meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-footer .author {
  height: 12px;
  width: 60%;
}

.card-footer .date {
  height: 10px;
  width: 40%;
}

.icon-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.icon-list .list-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-list .icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.icon-list .content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.icon-list .title {
  height: 14px;
  width: 80%;
}

.icon-list .subtitle {
  height: 12px;
  width: 60%;
}

.icon-list .badge {
  width: 40px;
  height: 16px;
  border-radius: 8px;
}

.form-skeleton {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.form-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-header .title {
  height: 20px;
  width: 70%;
}

.form-header .subtitle {
  height: 14px;
  width: 50%;
}

.form-fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-fields .field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-fields .label {
  height: 14px;
  width: 40%;
}

.form-fields .input {
  height: 32px;
  width: 100%;
  border-radius: 6px;
}

.form-fields .textarea {
  height: 60px;
  width: 100%;
  border-radius: 6px;
}

.form-actions {
  display: flex;
  gap: 8px;
}

.form-actions .button {
  height: 36px;
  border-radius: 6px;
}

.form-actions .button.primary {
  width: 80px;
}

.form-actions .button.secondary {
  width: 60px;
}

.dashboard-widget {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.widget-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.widget-header .icon {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.widget-header .title {
  flex: 1;
  height: 16px;
  width: 60%;
}

.widget-header .menu {
  width: 16px;
  height: 16px;
  border-radius: 2px;
}

.widget-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.widget-content .metric {
  display: flex;
  align-items: center;
  gap: 8px;
}

.widget-content .value {
  height: 24px;
  width: 40%;
}

.widget-content .trend {
  height: 16px;
  width: 20%;
}

.widget-content .chart {
  flex: 1;
  border-radius: 8px;
}

/* Styles pour les exemples combinés */
.profile-example {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-info {
  flex: 1;
}

.profile-stats {
  display: flex;
  gap: 8px;
}

.article-example {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dashboard-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.notifications-example {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.notification-content {
  flex: 1;
}

/* Styles pour SkeletonSurface */
.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-placeholder {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.title-placeholder {
  height: 16px;
  width: 60%;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.text-line {
  height: 12px;
  width: 100%;
}

.text-line.short {
  width: 70%;
}

.banner-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
}

.icon-placeholder {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

.banner-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title-line {
  height: 16px;
  width: 80%;
}

.subtitle-line {
  height: 12px;
  width: 60%;
}

.list-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.item-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-title {
  height: 14px;
  width: 80%;
}

.item-subtitle {
  height: 12px;
  width: 60%;
}

/* Styles pour la note importante */
.important-note {
  background: var(--theme-colors-warning-background, #fef3c7);
  border: 1px solid var(--theme-colors-warning-border, #f59e0b);
  border-radius: 8px;
  padding: var(--spacing-4, 16px);
  margin: var(--spacing-6, 24px) 0;
}

.important-note h3 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  color: var(--theme-colors-warning-text, #d97706);
  font-size: 1rem;
  font-weight: 600;
}

.important-note p {
  margin: 0 0 var(--spacing-3, 12px) 0;
  color: var(--theme-colors-text-primary, #111827);
}

.important-note ol {
  margin: 0;
  padding-left: var(--spacing-5, 20px);
  color: var(--theme-colors-text-primary, #111827);
}

.important-note li {
  margin-bottom: var(--spacing-2, 8px);
}

.important-note code {
  background: var(--theme-colors-warning-code-background, #fbbf24);
  color: var(--theme-colors-warning-code-text, #92400e);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .skeleton-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4, 16px);
  }
  
  .example {
    padding: 1rem;
  }
}
</style>