#!/bin/bash

# Script pour nettoyer les PRs de release en boucle
# Usage: ./scripts/cleanup-release-prs.sh

echo "🧹 Nettoyage des PRs de release en boucle..."

# Fermer toutes les PRs de release ouvertes
RELEASE_PRS=$(gh pr list --state open --head changeset-release/main --json number --jq '.[].number')

if [ -n "$RELEASE_PRS" ]; then
    echo "📋 PRs de release trouvées: $RELEASE_PRS"
    
    for pr_number in $RELEASE_PRS; do
        echo "❌ Fermeture de la PR #$pr_number"
        gh pr close $pr_number --comment "🔧 PR fermée automatiquement pour éviter la boucle infinie de release"
    done
    
    echo "✅ Toutes les PRs de release ont été fermées"
else
    echo "ℹ️ Aucune PR de release ouverte trouvée"
fi

# Vérifier s'il y a des branches changeset-release orphelines
echo "🔍 Vérification des branches changeset-release..."
CHANGESET_BRANCHES=$(git branch -r | grep "changeset-release" | head -5)

if [ -n "$CHANGESET_BRANCHES" ]; then
    echo "📋 Branches changeset-release trouvées:"
    echo "$CHANGESET_BRANCHES"
    echo "⚠️ Ces branches peuvent être supprimées si elles ne sont plus nécessaires"
else
    echo "✅ Aucune branche changeset-release trouvée"
fi

echo "🎯 Nettoyage terminé !"
