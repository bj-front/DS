#!/bin/bash

# 🔧 Setup Pre-commit Hooks for Design System
# Ce script configure automatiquement les hooks de pre-commit pour
# automatiser les vérifications de qualité du code

set -e

echo "🚀 Configuration des Pre-commit Hooks..."

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

# Installer les dépendances si nécessaire
echo "📦 Installation des dépendances..."
npm install

# Installer pre-commit si pas déjà installé
if ! command -v pre-commit &> /dev/null; then
    echo "📦 Installation de pre-commit..."
    pip install pre-commit || {
        echo "⚠️  Impossible d'installer pre-commit via pip"
        echo "   Veuillez installer pre-commit manuellement :"
        echo "   https://pre-commit.com/#installation"
    }
fi

# Installer les hooks pre-commit
echo "🔗 Installation des hooks pre-commit..."
if command -v pre-commit &> /dev/null; then
    pre-commit install
    echo "✅ Hooks pre-commit installés avec succès"
else
    echo "⚠️  pre-commit non disponible, utilisation de husky comme fallback"
fi

# Setup Husky comme fallback
echo "🐕 Configuration de Husky..."
npx husky install
mkdir -p .husky

# Créer le hook pre-commit avec husky
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Exécution des vérifications pre-commit..."

# Lint et format pour le website
if git diff --cached --name-only | grep -q "^apps/utopia-website/.*\.(js|ts|vue)$"; then
    echo "🔍 Lint du website..."
    cd apps/utopia-website && npm run lint:check
    echo "✨ Format du website..."
    cd apps/utopia-website && npm run format
fi

# Type check pour le website
if git diff --cached --name-only | grep -q "^apps/utopia-website/.*\.(ts|vue)$"; then
    echo "🔍 Type check du website..."
    cd apps/utopia-website && npm run type-check
fi

# Validation du design system
if git diff --cached --name-only | grep -qE "^(apps/utopia-website/.*|packages/utopia/src/tokens/.*)$"; then
    echo "🎨 Validation des tokens du design system..."
    cd apps/utopia-website && npm run validate:design-system
fi

# Lint pour le package utopia
if git diff --cached --name-only | grep -q "^packages/utopia/.*\.(js|ts|vue)$"; then
    echo "🔍 Lint du package utopia..."
    cd packages/utopia && npm run lint
fi

echo "✅ Toutes les vérifications sont passées !"
EOF

chmod +x .husky/pre-commit

echo ""
echo "🎉 Configuration terminée !"
echo ""
echo "📝 Les vérifications suivantes s'exécuteront automatiquement à chaque commit :"
echo "   • 🔍 Lint (ESLint)"
echo "   • ✨ Format (Prettier)"
echo "   • 🔍 Type checking (TypeScript)"
echo "   • 🎨 Validation des tokens du design system"
echo "   • 📝 Vérifications des fichiers (trailing whitespace, etc.)"
echo ""
echo "🛠️  Commandes disponibles :"
echo "   npm run lint:all      - Lint tous les projets"
echo "   npm run format:all    - Format tous les fichiers"
echo "   npm run validate:all  - Valide tout le système"
echo ""
echo "⚡ Les hooks sont maintenant actifs !"