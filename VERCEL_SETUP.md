# 🚀 Configuration Vercel pour utopia-website

## 📋 Étapes de configuration

### 1. 🔗 Connecter Vercel à GitHub

1. Va sur [vercel.com](https://vercel.com)
2. Connecte-toi avec ton compte GitHub
3. Importe ton repository `bj-front/DS`
4. Configure le projet avec ces paramètres :
   - **Framework Preset:** `Vite`
   - **Root Directory:** `apps/utopia-website`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### 2. 🔑 Récupérer les identifiants Vercel

#### A. Token d'API Vercel
1. Va dans **Settings** → **Tokens**
2. Clique sur **Create Token**
3. Donne un nom : `GitHub Actions`
4. Copie le token généré

#### B. Organization ID
1. Va dans **Settings** → **General**
2. Dans la section **Organization**, copie l'ID

#### C. Project ID
1. Dans ton projet Vercel, va dans **Settings** → **General**
2. Dans la section **Project**, copie l'ID
3. **Important:** Assure-toi que le projet Vercel a le bon "Root Directory" configuré à `apps/utopia-website`

### 3. 🔒 Ajouter les secrets GitHub

Va dans ton repository GitHub → **Settings** → **Secrets and variables** → **Actions**

Ajoute ces **Repository secrets** :

```
Name                | Value
--------------------|------------------------------------------
VERCEL_TOKEN        | [Token d'API Vercel]
VERCEL_ORG_ID       | [Organization ID de Vercel]
VERCEL_PROJECT_ID   | [Project ID de Vercel]
```

### 4. ⚙️ Configuration automatique (optionnel)

Tu peux aussi utiliser la CLI Vercel pour récupérer automatiquement ces valeurs :

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Dans le dossier utopia-website
cd apps/utopia-website

# Lier le projet (suit les instructions)
vercel link

# Récupérer les IDs
cat .vercel/project.json
```

## 🎯 Résultat attendu

Une fois configuré, voici ce qui se passera :

### 📱 **Feature Branches (Preview)**
- Chaque push sur une feature branch déploie automatiquement sur Vercel
- Une URL de preview unique est créée
- Un commentaire avec l'URL est ajouté automatiquement à la PR

### 🌟 **Main Branch (Production)**
- Chaque merge sur `main` déploie automatiquement en production
- Le site de production est mis à jour avec les derniers changements
- Un commentaire de succès est ajouté à la dernière PR mergée

## 🔗 URLs

- **Production :** `https://[project-name].vercel.app`
- **Preview :** `https://[project-name]-[branch-hash].vercel.app`

## 🚨 Dépannage

### Erreur "The provided path does not exist"

Si tu vois cette erreur :
```
Error: The provided path "~/work/DS/DS/apps/utopia-website/packages/utopia" does not exist
```

**Solution :**
1. Va dans ton projet Vercel → **Settings** → **General**
2. Dans la section **Build & Development Settings** :
   - **Root Directory :** change vers `apps/utopia-website`
   - **Build Command :** `npm run build`
   - **Output Directory :** `dist`
3. Sauvegarde les changements

### Autres problèmes

Si les déploiements échouent :

1. Vérifier que tous les secrets sont bien configurés
2. Vérifier que le build fonctionne localement :
   ```bash
   cd apps/utopia-website
   npm install
   npm run build
   ```
3. Vérifier les logs dans l'onglet **Actions** de GitHub

## 📞 Support

Si tu as des problèmes, vérifie :
- Les logs des GitHub Actions
- Les logs de déploiement dans le dashboard Vercel
- Que le package `@club-employes/utopia` est bien publié sur npm
