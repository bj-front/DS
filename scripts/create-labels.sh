#!/bin/bash

# 🏷️ Script pour créer les labels GitHub nécessaires à l'automatisation
# Usage: ./scripts/create-labels.sh

echo "🏷️ Création des labels GitHub pour l'automatisation"
echo "=================================================="

# Vérifier si GitHub CLI est connecté
if ! gh auth status >/dev/null 2>&1; then
    echo "❌ Vous devez être connecté à GitHub CLI"
    echo "   Exécutez: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI connecté"

# Créer les labels nécessaires
echo "📝 Création des labels..."

# Label pour les PRs auto-créées
gh label create "auto-created" \
    --description "Pull Request créée automatiquement par GitHub Actions" \
    --color "0E8A16" && echo "✅ Label 'auto-created' créé" || echo "ℹ️  Label 'auto-created' existe déjà"

# Label pour le design system
gh label create "design-system" \
    --description "Modifications liées au design system" \
    --color "1D76DB" && echo "✅ Label 'design-system' créé" || echo "ℹ️  Label 'design-system' existe déjà"

# Labels optionnels mais utiles
gh label create "component" \
    --description "Modifications de composants" \
    --color "FF9500" && echo "✅ Label 'component' créé" || echo "ℹ️  Label 'component' existe déjà"

gh label create "tokens" \
    --description "Modifications des design tokens" \
    --color "FF6B6B" && echo "✅ Label 'tokens' créé" || echo "ℹ️  Label 'tokens' existe déjà"

gh label create "documentation" \
    --description "Mise à jour de la documentation" \
    --color "0075CA" && echo "✅ Label 'documentation' créé" || echo "ℹ️  Label 'documentation' existe déjà"

echo ""
echo "🎉 Configuration des labels terminée!"
echo ""
echo "📋 Labels disponibles:"
gh label list --limit 20

echo ""
echo "✅ Votre repository est maintenant configuré avec tous les labels nécessaires"
echo "   L'automatisation des PRs devrait maintenant fonctionner correctement!"