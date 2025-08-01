# Correction du déploiement Vercel 🚀

## Problème résolu
✅ Erreur `Could not resolve "../../../packages/utopia/src/tokens/generated/club-employes/light.css"` lors du build Vercel

## Cause du problème
Le chemin relatif vers les tokens CSS ne fonctionnait pas dans l'environnement de build Vercel car la structure des dossiers est différente.

## Solutions appliquées

### 1. Modification du package `@club-employes/utopia`
- **Ajout des exports CSS** dans `package.json` :
```json
"exports": {
  "./tokens/club-employes/light": "./dist/tokens/club-employes/light.css",
  "./tokens/club-employes/dark": "./dist/tokens/club-employes/dark.css",
  "./tokens/gifteo/light": "./dist/tokens/gifteo/light.css",
  "./tokens/gifteo/dark": "./dist/tokens/gifteo/dark.css"
}
```

- **Copie des tokens** dans le dossier `dist/` lors du build :
```bash
"copy:tokens": "mkdir -p dist/tokens && cp -r src/tokens/generated/* dist/tokens/"
```

### 2. Correction de l'import CSS dans `App.vue`
```typescript
// AVANT (ne fonctionnait pas sur Vercel)
import '../../../packages/utopia/src/tokens/generated/club-employes/light.css'

// APRÈS (fonctionne partout)
import '@club-employes/utopia/tokens/club-employes/light'
```

### 3. Script de build dédié pour Vercel
Création de `apps/utopia-website/scripts/build-for-vercel.sh` qui :
1. Build le package `utopia` avec tokens
2. Installe localement via `npm pack`
3. Build l'application website

### 4. Configuration Vercel simplifiée
```json
{
  "buildCommand": "bash scripts/build-for-vercel.sh",
  "outputDirectory": "dist",
  "installCommand": "npm install && cd ../../packages/utopia && npm install"
}
```

## Résultat
✅ Les déploiements Vercel preview et production fonctionnent maintenant correctement
✅ L'architecture monorepo est properly gérée
✅ Les tokens CSS sont accessibles via les exports du package

## Commandes pour tester localement
```bash
# Tester le build du package
cd packages/utopia && npm run build

# Tester le script Vercel
cd apps/utopia-website && bash scripts/build-for-vercel.sh
```