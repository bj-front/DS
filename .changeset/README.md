# Changesets

Ce dossier contient les changesets pour le design system Utopia.

## 📝 Qu'est-ce qu'un changeset ?

Un changeset est un fichier qui décrit les modifications apportées au design system et le type de version à publier.

## 🤖 Création automatique

Les changesets sont créés automatiquement par GitHub Actions quand vous:
- ✅ Ajoutez un nouveau composant
- ✅ Modifiez les design tokens
- ✅ Faites des changements significatifs

## ✋ Création manuelle

Si vous voulez créer un changeset manuellement :

```bash
npm run changeset
```

## 📋 Types de changements

- **patch** (1.0.0 → 1.0.1) : Bug fixes, améliorations mineures
- **minor** (1.0.0 → 1.1.0) : Nouvelles fonctionnalités, nouveaux composants
- **major** (1.0.0 → 2.0.0) : Breaking changes

## 📄 Format d'un changeset

```markdown
---
"@club-employes/utopia": minor
---

Ajout du composant Card

Nouveau composant Card avec les variants :
- default
- elevated
- outlined

Ce composant est compatible avec tous les thèmes existants.
```

## 🔄 Processus automatisé

1. **Développement** : Vous développez sur une branche
2. **PR** : Vous créez une Pull Request
3. **Auto-changeset** : GitHub Actions crée automatiquement le changeset
4. **Merge** : Vous mergez la PR
5. **Release** : GitHub Actions publie automatiquement sur npm

---

Pour plus d'informations, consultez la [documentation d'automatisation](../.github/AUTOMATION.md).