#!/bin/bash

# ⚠️  OBSOLÈTE : Ce script n'est plus utilisé avec Turborepo
# 
# Maintenant Vercel utilise directement :
# - installCommand: "cd ../.. && npm ci"
# - buildCommand: "cd ../.. && npx turbo build --filter=...utopia-website"
#
# Cette nouvelle approche :
# ✅ Utilise les workspaces NPM
# ✅ Exploite le cache Turborepo
# ✅ Gère automatiquement les dépendances
# ✅ Plus rapide et plus fiable

echo "⚠️  Ce script est obsolète depuis la migration Turborepo"
echo "✅ Vercel utilise maintenant Turborepo directement"
exit 1