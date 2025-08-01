# 🔧 Configuration Pre-commit

Ce document explique comment configurer et utiliser les hooks pre-commit pour valider automatiquement le code avant chaque commit.

## 📋 Qu'est-ce qui est vérifié ?

### 🎨 Design System (`packages/utopia/`)
- ✅ **Validation des tokens** : Aucune valeur en dur (couleurs, tailles) autorisée
- ✅ **Lint** : Vérification de la qualité du code
- ✅ **Type check** : Vérification TypeScript
- ✅ **Build** : Test de compilation

### 🌐 Website (`apps/utopia-website/`)
- ✅ **Validation design system** : Utilisation exclusive des tokens Utopia
- ✅ **Lint** : ESLint + Prettier
- ✅ **Type check** : Vérification TypeScript
- ✅ **Build** : Test de compilation

### 📝 Général
- ✅ **Changeset** : Vérification qu'un changeset existe pour les modifications Utopia
- ✅ **Fichiers** : Pas de trailing whitespace, conflits de merge, etc.
- ✅ **Formats** : Validation YAML/JSON

---

## 🚀 Installation

### 1. Installer pre-commit

**Option A - avec pip (recommandé):**
```bash
pip install pre-commit
```

**Option B - avec conda:**
```bash
conda install -c conda-forge pre-commit
```

**Option C - avec homebrew (macOS):**
```bash
brew install pre-commit
```

### 2. Installer les hooks dans le repo

```bash
# Installer les hooks pre-commit
npm run pre-commit:install

# OU directement avec pre-commit
pre-commit install
```

### 3. Test de l'installation

```bash
# Tester tous les hooks
pre-commit run --all-files

# Tester un hook spécifique
pre-commit run design-system-validation
```

---

## 🎯 Usage quotidien

### Commit normal

```bash
git add .
git commit -m "feat: add new button component"
# ✅ Les hooks se lancent automatiquement
```

### Bypass temporaire (⚠️ À éviter)

```bash
# Contourner TOUS les hooks (déconseillé)
git commit -m "WIP: work in progress" --no-verify

# Contourner un hook spécifique
SKIP=design-system-validation git commit -m "docs: update README"
```

### Forcer l'exécution manuelle

```bash
# Lancer tous les hooks sur tous les fichiers
pre-commit run --all-files

# Lancer un hook spécifique
pre-commit run design-system-tokens-check

# Lancer les hooks sur des fichiers spécifiques
pre-commit run --files packages/utopia/src/components/Button.vue
```

---

## 🔍 Résolution des erreurs courantes

### ❌ Erreur : "Valeurs en dur détectées"

```bash
❌ Design System - Vérification tokens (pas de valeurs en dur)
📄 src/components/Button/Button.vue
   Type: Couleur hex
   Solution: Utilisez var(--color-*) à la place
   ❌ #ff0000
```

**Solution :**
```vue
<!-- ❌ Éviter -->
<style>
.button {
  background-color: #ff0000;
  padding: 16px;
}
</style>

<!-- ✅ Correct -->
<style>
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
}
</style>
```

### ❌ Erreur : "Changeset requis"

```bash
❌ CHANGESET REQUIS
Un changeset est nécessaire pour les modifications du design system
```

**Solution :**
```bash
# 1. Créer un changeset
npm run changeset

# 2. Suivre le prompt interactif
# 3. Ajouter le changeset au commit
git add .changeset/

# 4. Recommitter
git commit -m "feat: add new button component"
```

### ❌ Erreur : "Build failed"

```bash
❌ Build failed - compilation errors
```

**Solution :**
```bash
# Tester le build manuellement
cd packages/utopia
npm run build

# OU pour le website
cd apps/utopia-website
npm run build

# Corriger les erreurs et recommitter
```

---

## ⚙️ Configuration avancée

### Désactiver un hook temporairement

Editez `.pre-commit-config.yaml` :

```yaml
- id: design-system-tokens-check
  name: 🔍 Design System - Vérification tokens
  # Temporarily disabled for refactoring
  stages: [manual]
```

### Ajouter des exclusions

```yaml
- id: design-system-validation
  exclude: ^packages/utopia/src/demo/
  # Exclut le dossier demo
```

### Hooks conditionnels par branche

```bash
# Lancer des hooks différents selon la branche
if [[ $(git branch --show-current) == "main" ]]; then
  pre-commit run --hook-stage push
fi
```

---

## 🆘 Dépannage

### Pre-commit ne se lance pas

```bash
# Vérifier l'installation
pre-commit --version

# Réinstaller les hooks
pre-commit uninstall
pre-commit install

# Nettoyer le cache
pre-commit clean
```

### Problème de permissions

```bash
# Rendre les scripts exécutables
chmod +x packages/utopia/scripts/validate-tokens.js
chmod +x scripts/check-changeset.js
```

### Reset complet

```bash
# Supprimer tous les hooks et caches
pre-commit uninstall
rm -rf ~/.cache/pre-commit
pre-commit install
```

---

## 📚 Documentation

- [Pre-commit.com](https://pre-commit.com/) - Documentation officielle
- [Hooks disponibles](https://pre-commit.com/hooks.html) - Liste des hooks pré-construits
- [Configuration](https://pre-commit.com/#pre-commit-configyaml---top-level) - Options de configuration

---

## 🎉 Intégration CI/CD

Les mêmes vérifications sont exécutées dans les workflows GitHub Actions :
- ✅ **`design-system.yml`** - Validation du design system
- ✅ **`website.yml`** - Validation du website

**Avantage :** Détecter les problèmes localement avant de pusher ! 🚀
