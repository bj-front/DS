#!/bin/bash

# 🤖 Script de configuration de l'automatisation GitHub Actions
# pour le Design System Utopia

echo "🚀 Configuration de l'automatisation GitHub Actions"
echo "================================================="

# Vérifications préliminaires
echo "📋 Vérifications préliminaires..."

# Vérifier si nous sommes dans un repo git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Erreur: Ce script doit être exécuté dans un repository Git"
    exit 1
fi

# Vérifier si GitHub CLI est installé
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI n'est pas installé"
    echo "   Installez-le avec: brew install gh (sur macOS)"
    echo "   Ou visitez: https://cli.github.com/"
fi

# Vérifier si l'utilisateur est connecté à npm
echo "🔐 Vérification de la connexion npm..."
if npm whoami > /dev/null 2>&1; then
    NPM_USER=$(npm whoami)
    echo "✅ Connecté à npm en tant que: $NPM_USER"
else
    echo "❌ Vous devez être connecté à npm"
    echo "   Exécutez: npm login"
    exit 1
fi

# Vérifier l'organisation club-employes
echo "🏢 Vérification de l'organisation npm..."
if npm org ls club-employes > /dev/null 2>&1; then
    echo "✅ Organisation @club-employes trouvée"
else
    echo "❌ Vous n'avez pas accès à l'organisation @club-employes"
    echo "   Créez l'organisation sur https://npmjs.com"
    exit 1
fi

echo ""
echo "🎯 Configuration des secrets GitHub"
echo "=================================="

echo "Pour automatiser la publication, vous devez configurer un token npm."
echo ""
echo "📝 Étapes à suivre:"
echo "1. Allez sur https://www.npmjs.com/settings/tokens"
echo "2. Créez un nouveau token 'Automation'"
echo "3. Sélectionnez les permissions:"
echo "   ✅ Read and write packages"
echo "   ✅ Read and write to any organization"
echo "4. Copiez le token généré"
echo ""

read -p "Avez-vous créé et copié votre token npm? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "⏸️  Veuillez créer le token et relancer ce script"
    exit 1
fi

echo ""
read -s -p "🔑 Collez votre token npm ici: " NPM_TOKEN
echo ""

if [[ -z "$NPM_TOKEN" ]]; then
    echo "❌ Token vide, abandon"
    exit 1
fi

# Configurer le secret GitHub si GitHub CLI est disponible
if command -v gh &> /dev/null; then
    echo "🔧 Configuration du secret GitHub..."
    if gh secret set NPM_TOKEN --body "$NPM_TOKEN"; then
        echo "✅ Secret NPM_TOKEN configuré avec succès"
    else
        echo "❌ Erreur lors de la configuration du secret"
        echo "   Configurez manuellement dans Settings > Secrets > Actions"
    fi
else
    echo "⚠️  Configurez manuellement le secret GitHub:"
    echo "   1. Allez dans Settings > Secrets and variables > Actions"
    echo "   2. Créez un secret nommé: NPM_TOKEN"
    echo "   3. Utilisez la valeur du token que vous avez créé"
fi

echo ""
echo "🧪 Test de la configuration"
echo "=========================="

# Tester le build
echo "📦 Test du build..."
if npm run ci:build > /dev/null 2>&1; then
    echo "✅ Build réussi"
else
    echo "❌ Échec du build"
    echo "   Vérifiez: npm run ci:build"
fi

# Vérifier les changesets
echo "📝 Vérification des changesets..."
if npm run changeset status > /dev/null 2>&1; then
    echo "✅ Changesets configurés"
else
    echo "❌ Problème avec les changesets"
    echo "   Vérifiez: npm run changeset status"
fi

echo ""
echo "🎉 Configuration terminée!"
echo "========================"
echo ""
echo "✅ Votre design system est maintenant automatisé!"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Créez une branche: git checkout -b feature/test-automation"
echo "2. Modifiez un composant ou token"
echo "3. Créez une Pull Request"
echo "4. Observez l'automatisation en action dans l'onglet Actions"
echo ""
echo "📚 Documentation complète: .github/AUTOMATION.md"
echo ""