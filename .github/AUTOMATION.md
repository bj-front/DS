# 🤖 Design System Automation

Ce projet utilise GitHub Actions pour automatiser la publication et la gestion des versions du design system Utopia.

## 📋 Actions disponibles

### 1. 🔄 **CI (Continuous Integration)**
**Fichier**: `.github/workflows/ci.yml`  
**Déclencheur**: Push sur `main` ou Pull Request vers `main`  
**Fonction**: 
- Build et test du design system
- Vérification des changesets manquants
- Tests visuels de régression (optionnel)

### 2. 🚀 **Release (Publication automatique)**
**Fichier**: `.github/workflows/release.yml`  
**Déclencheur**: Push sur `main` avec changements dans `packages/utopia/` ou `.changeset/`  
**Fonction**:
- Build automatique
- Application des changesets
- Publication sur npm
- Création des releases GitHub

### 3. 🔧 **Auto Changeset**
**Fichier**: `.github/workflows/auto-changeset.yml`  
**Déclencheur**: Ouverture/modification d'une PR avec changements dans les composants ou tokens  
**Fonction**:
- Détection automatique des types de changements
- Création de changesets automatiques
- Commentaire informatif sur la PR

## ⚙️ Configuration requise

### 1. 🔐 Secrets GitHub

Allez dans **Settings > Secrets and variables > Actions** et ajoutez :

```bash
NPM_TOKEN=npm_xxx...  # Token npm pour publication
```

### 2. 📝 Comment obtenir le NPM_TOKEN

1. Connectez-vous sur [npmjs.com](https://npmjs.com)
2. Allez dans **Account > Access Tokens**
3. Créez un token **Automation** avec les permissions :
   - ✅ Read and write packages
   - ✅ Read and write org packages
4. Copiez le token dans les secrets GitHub

### 3. 🏢 Permissions de l'organisation

Assurez-vous que votre token npm a les permissions pour publier dans l'organisation `@club-employes`.

## 🔄 Workflow de développement automatisé

### Pour ajouter un nouveau composant :

1. **Créer une branche**
   ```bash
   git checkout -b feature/new-component
   ```

2. **Développer le composant**
   ```bash
   cd packages/utopia/src/components/atoms
   # Créer votre nouveau composant
   ```

3. **Créer une Pull Request**
   - L'action `auto-changeset` créera automatiquement un changeset
   - L'action `ci` vérifiera le build et les tests

4. **Merger la PR**
   - L'action `release` publiera automatiquement sur npm
   - Une nouvelle version sera créée avec les notes de release

### Pour modifier les design tokens :

1. **Modifier les tokens**
   ```bash
   cd packages/utopia/src/tokens
   # Modifier vos fichiers JSON
   ```

2. **Les tokens seront automatiquement**:
   - ✅ Compilés par Style Dictionary
   - ✅ Intégrés dans le build
   - ✅ Publiés avec une version patch/minor

## 📊 Types de changements détectés automatiquement

| Type de changement | Version générée | Description |
|-------------------|-----------------|-------------|
| 🆕 Nouveau composant | `minor` | Ajout de fonctionnalités |
| 🎨 Modification tokens | `minor` | Changements potentiellement breaking |
| 🐛 Bug fix | `patch` | Corrections sans impact |
| 💥 Breaking change | `major` | Changements incompatibles |

## 🔍 Monitoring et debugging

### Voir les actions en cours
- Allez dans l'onglet **Actions** de votre repo GitHub
- Suivez le statut en temps réel

### En cas d'échec de publication
1. Vérifiez que le token npm est valide
2. Vérifiez les permissions de l'organisation
3. Consultez les logs de l'action GitHub

### Logs utiles
```bash
# Voir les packages publiés
npm view @club-employes/utopia

# Vérifier les changesets en attente
npx changeset status
```

## 🎯 Customisation

### Modifier les triggers
Éditez les sections `on:` dans les fichiers `.yml` pour changer les déclencheurs.

### Ajouter des notifications
Intégrez Slack, Discord, ou email dans les actions pour être notifié des releases.

### Tests visuels
Intégrez Chromatic, Percy, ou Playwright pour des tests visuels automatiques.

## 🚨 Dépannage

### "Changeset manquant"
```bash
# Créer manuellement un changeset
npm run changeset
```

### "Permission denied npm"
- Vérifiez le token npm dans les secrets GitHub
- Assurez-vous d'être membre de l'organisation `@club-employes`

### "Build failed"
- Vérifiez les erreurs TypeScript
- Assurez-vous que tous les design tokens sont valides

---

🎉 **Votre design system est maintenant entièrement automatisé !**