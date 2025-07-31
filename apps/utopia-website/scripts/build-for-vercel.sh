#!/bin/bash

# Script de build pour Vercel
# Construit d'abord le package utopia, puis l'installe localement avant de builder l'app

set -e

echo "🔨 Building utopia package..."
cd ../../packages/utopia
npm run build:tokens
npm run build

echo "📦 Packing utopia package..."
TARBALL=$(npm pack)
echo "Generated tarball: $TARBALL"

echo "💿 Installing utopia package locally..."
cd ../../apps/utopia-website
npm install --no-save "../../packages/utopia/$TARBALL"

echo "🏗️ Building website..."
npm run build

echo "✅ Build completed successfully!"