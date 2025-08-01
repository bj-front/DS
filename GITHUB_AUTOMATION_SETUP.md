# 🤖 Configuration GitHub Actions Automation

## 🔧 **Étape 1 : Créer un Personal Access Token**

### **1.1 Aller aux paramètres GitHub**
- Va sur **GitHub.com**
- Clique sur ta **photo de profil** (en haut à droite)
- **Settings** (paramètres de ton compte, pas du repo)

### **1.2 Accéder aux tokens**
- Dans le menu de gauche, scroll en bas
- **Developer settings** (en bas à gauche)
- **Personal access tokens** → **Tokens (classic)**

### **1.3 Créer le token**
- **Generate new token** → **Generate new token (classic)**

**Nom du token :** `DS Automation Token`

**Expiration :** `No expiration` (ou `1 year` si tu préfères)

**Scopes à cocher :**
- ✅ `repo` (Full control of private repositories)
  - ✅ `repo:status`
  - ✅ `repo_deployment`
  - ✅ `public_repo`
  - ✅ `repo:invite`
  - ✅ `security_events`
- ✅ `workflow` (Update GitHub Action workflows)
- ✅ `write:packages` (Upload packages to GitHub Package Registry)
- ✅ `read:org` (Read org and team membership, read org projects)

### **1.4 Générer et copier**
- Clique **Generate token**
- ⚠️ **IMPORTANT** : Copie le token immédiatement (tu ne le reverras plus !)

## 🔐 **Étape 2 : Ajouter le token aux secrets**

### **2.1 Aller aux secrets du repo**
- Va sur ton repo : `https://github.com/bj-front/DS`
- **Settings** (onglet du repo)
- **Secrets and variables** → **Actions**

### **2.2 Créer le secret**
- **New repository secret**
- **Name :** `PAT_TOKEN`
- **Secret :** Colle le token que tu as copié
- **Add secret**

## ✅ **Étape 3 : Configurer les labels GitHub**

### **3.1 Créer les labels automatiquement**
Exécute le script de configuration des labels :

```bash
./scripts/create-labels.sh
```

Si le script échoue, passe à l'étape 3.2 pour créer les labels manuellement.

### **3.2 Créer les labels manuellement**
Va dans **Settings** → **Issues** → **Labels** et crée ces labels :

| Nom | Description | Couleur |
|-----|-------------|---------|
| `auto-created` | Pull Request créée automatiquement | `#0E8A16` |
| `design-system` | Modifications du design system | `#1D76DB` |
| `component` | Modifications de composants | `#FF9500` |
| `tokens` | Modifications des design tokens | `#FF6B6B` |

### **3.3 Permissions du repo**
Va aussi dans **Settings** → **Actions** → **General** et assure-toi :
- ✅ **Workflow permissions** : `Read and write permissions`
- ✅ **Allow GitHub Actions to create and approve pull requests**

### **3.4 Test**
Une fois configuré, fais un push sur une branche :

```bash
git checkout -b test/automation-fix
echo "test" >> README.md
git add . && git commit -m "test: verify automation works"
git push -u origin test/automation-fix
```

## 🎯 **Résultat attendu**

Avec le PAT_TOKEN configuré, les workflows devraient :

1. ✅ **Auto Changeset** : Créer et pusher automatiquement le changeset
2. ✅ **Auto PR** : Créer automatiquement la Pull Request
3. ✅ **PR Helper** : Ajouter des commentaires et analyses intelligentes

## 🔍 **Diagnostic**

### **Si ça marche pas encore :**

1. **Vérifier le token :**
   - Token créé avec les bons scopes
   - Token ajouté aux secrets avec le nom exact `PAT_TOKEN`

2. **Vérifier les labels :**
   - Labels `auto-created` et `design-system` existent dans le repo
   - Utiliser `./scripts/create-labels.sh` pour les créer automatiquement

3. **Vérifier les permissions :**
   - Settings → Actions → General → "Read and write permissions"

4. **Vérifier les logs :**
   - GitHub → Actions → Voir les erreurs dans les logs

### **Erreurs courantes :**

| Erreur | Solution |
|--------|----------|
| `403 Write access to repository not granted` | Le PAT_TOKEN n'est pas configuré ou n'a pas les bonnes permissions |
| `could not add label: 'auto-created' not found` | Créer les labels avec `./scripts/create-labels.sh` |
| `user benoit.jolly not found` | Normal, la PR sera créée sans assignation automatique |

## 💡 **Pourquoi ça fonctionne**

Le **GITHUB_TOKEN** par défaut a des permissions limitées pour la sécurité.

Le **PAT_TOKEN** utilise **tes permissions personnelles**, donc il peut :
- ✅ Pusher des commits
- ✅ Créer des PRs
- ✅ Ajouter des commentaires
- ✅ Modifier les workflows

## 🚀 **Workflow final automatisé**

```bash
# 1. Créer une branche
git checkout -b feature/awesome-thing

# 2. Faire des changements
# ... modifier des composants/tokens ...

# 3. Commit et push
git add . && git commit -m "feat: add awesome thing"
git push -u origin feature/awesome-thing

# 🤖 AUTOMATIQUE :
# ✅ Changeset créé et pushé automatiquement
# ✅ PR créée automatiquement avec description intelligente
# ✅ CI lancé automatiquement
# ✅ Ready for review !
```

**Plus JAMAIS de création manuelle !** 🎯
