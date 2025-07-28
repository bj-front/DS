#!/bin/bash

# 1. Créer le repo turbo
npx create-turbo@latest utopia --no-install
cd utopia

# 2. Initialiser avec npm
npm init -y

# 3. Créer la structure monorepo
mkdir -p apps/storybook
mkdir -p packages/utopia/src/components/{atoms,molecules,organisms}
mkdir -p packages/utopia/src/{tokens/themes,composables,theme-provider}
touch packages/utopia/src/index.ts

# 4. Initialiser Vue 3 + Vite dans le design system
cd packages/utopia
npm create vite@latest . -- --template vue-ts
npm install
cd ../../

# 5. Initialiser Storybook Vue 3
cd apps/storybook
npx storybook@latest init --builder vite --type vue3
cd ../../

# 6. Ajouter Changesets et Chromatic
cd packages/utopia
npm install --save-dev @changesets/cli chromatic
npx changeset init
cd ../../

# 7. Ajouter turbo.json
cat <<EOF > turbo.json
{
  "\$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {},
    "test": {}
  }
}
EOF

# 8. Ajouter scripts dans package.json du design system
node -e "
const fs = require('fs');
const path = './packages/utopia/package.json';
const pkg = JSON.parse(fs.readFileSync(path));
pkg.scripts = {
  ...pkg.scripts,
  \"dev\": \"vite\",
  \"build\": \"vite build\",
  \"storybook\": \"storybook dev -p 6006\",
  \"build-storybook\": \"storybook build\",
  \"chromatic\": \"chromatic --project-token=chpt_31b87a32083cc96\",
  \"changeset\": \"changeset\",
  \"version-packages\": \"changeset version\",
  \"publish-packages\": \"changeset publish\"
};
fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
"

echo "✅ Utopia Design System ready !"
echo "➡️  cd utopia"
echo "➡️  npm install"
echo "➡️  npm run dev --workspace=apps/storybook"
