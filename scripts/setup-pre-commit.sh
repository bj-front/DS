#!/bin/bash

# Script de configuration automatique des hooks pre-commit
# Usage: chmod +x scripts/setup-pre-commit.sh && ./scripts/setup-pre-commit.sh

set -e

echo "🔧 Configuration des hooks pre-commit pour le Design System"
echo ""

# Vérifier si pre-commit est installé
if ! command -v pre-commit &> /dev/null; then
    echo "❌ pre-commit n'est pas installé"
    echo ""
    echo "📦 Installation recommandée:"
    echo "   pip install pre-commit"
    echo ""
    echo "🍺 Alternative (macOS avec Homebrew):"
    echo "   brew install pre-commit"
    echo ""
    echo "🐍 Alternative (avec conda):"
    echo "   conda install -c conda-forge pre-commit"
    echo ""
    exit 1
fi

echo "✅ pre-commit détecté: $(pre-commit --version)"
echo ""

# Installer les hooks
echo "🔧 Installation des hooks pre-commit..."
pre-commit install

echo ""
echo "🧪 Test des hooks sur tous les fichiers..."
echo "   (Cela peut prendre quelques minutes la première fois)"

# Tester avec --all-files mais permettre l'échec pour la première fois
if pre-commit run --all-files; then
    echo ""
    echo "🎉 Tous les hooks fonctionnent correctement !"
else
    echo ""
    echo "⚠️  Certains hooks ont échoué - c'est normal la première fois"
    echo "   Les hooks se déclencheront automatiquement lors des prochains commits"
fi

echo ""
echo "✅ Configuration terminée !"
echo ""
echo "📋 Prochaines étapes:"
echo "   1. Les hooks se lancent automatiquement à chaque commit"
echo "   2. Consultez PRE_COMMIT_SETUP.md pour plus d'informations"
echo "   3. Testez avec: git commit (les hooks se lanceront)"
echo ""
echo "🚀 Bon développement !"