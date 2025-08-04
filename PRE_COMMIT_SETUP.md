# 🔧 Pre-commit Hooks Setup

## ✅ Configuration Terminée

Les pre-commit hooks ont été configurés avec succès pour automatiser les vérifications de qualité du code !

## 🚀 Ce qui s'exécute automatiquement à chaque commit :

- **🔍 Lint (ESLint)** - Vérification de la qualité du code
- **✨ Format (Prettier)** - Formatage automatique du code
- **🔍 Type checking (TypeScript)** - Vérification des types
- **🎨 Validation des tokens** - Vérification stricte du design system
- **📝 Vérifications générales** - Trailing whitespace, fin de fichier, etc.

## 🛠️ Commandes disponibles

```bash
# Lint tous les projets
npm run lint:all

# Format tous les fichiers
npm run format:all

# Valider tout le système (types + design system)
npm run validate:all

# Réinstaller les hooks si nécessaire
npm run setup:hooks
```

## 🔧 Configuration des outils

### Husky
- **Configuration** : `.husky/pre-commit`
- **Installation automatique** : Script `prepare` dans package.json

### Lint-staged
- **Configuration** : Section `lint-staged` dans package.json
- **Scope** : Fichiers modifiés uniquement

### Pre-commit (optionnel)
- **Configuration** : `.pre-commit-config.yaml`
- **Installation** : `pip install pre-commit && pre-commit install`

## 🔄 Workflow

1. **Vous modifiez des fichiers**
2. **Vous faites `git add .`**
3. **Vous faites `git commit -m "message"`**
4. **🔄 Les hooks s'exécutent automatiquement :**
   - Lint + format des fichiers modifiés
   - Type checking si fichiers TS/Vue modifiés
   - Validation design system si tokens modifiés
5. **✅ Commit accepté** ou **❌ Erreurs à corriger**

## 🐛 En cas de problème

### Désactiver temporairement
```bash
git commit --no-verify -m "message"
```

### Réinstaller les hooks
```bash
npm run setup:hooks
```

### Debug
```bash
# Tester manuellement les vérifications
npm run precommit
```

## 📁 Fichiers concernés

- `package.json` - Scripts et configuration lint-staged
- `.husky/pre-commit` - Hook principal
- `.pre-commit-config.yaml` - Configuration pre-commit (optionnel)
- `scripts/setup-pre-commit.sh` - Script d'installation

---

🎉 **Les vérifications automatiques sont maintenant actives !**