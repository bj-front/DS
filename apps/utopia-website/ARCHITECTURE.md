# Architecture Domain Driven Development

Cette application utilise une architecture **Domain Driven Development (DDD)** pour organiser le code de manière modulaire et maintenable.

## 📁 Structure des dossiers

```
src/
├── main.ts                     # Point d'entrée de l'application
├── App.vue                     # Composant racine avec ThemeProvider
├── assets/                     # Assets statiques
└── domains/                    # Organisation par domaines métier
    ├── design-system/          # 🎨 Domaine du design system
    │   ├── pages/              # Pages spécifiques au design system
    │   │   ├── PresentationPage.vue
    │   │   └── index.ts        # Exports du domaine
    │   ├── components/         # Composants spécifiques
    │   ├── composables/        # Logique métier réutilisable
    │   └── types/              # Types TypeScript
    ├── showcase/               # 🚀 Domaine des démonstrations
    │   ├── pages/
    │   │   └── ShowcasePage.vue
    │   ├── components/
    │   ├── composables/
    │   └── types/
    └── shared/                 # 🔧 Domaine partagé
        ├── components/         # Composants UI réutilisables
        │   └── AppLayout.vue
        ├── router/             # Configuration du routage
        │   ├── index.ts
        │   └── NotFoundPage.vue
        ├── stores/             # État global (Pinia)
        ├── composables/        # Logique transversale
        └── types/              # Types partagés
```

## 🎯 Principe DDD appliqué

### **Domaines métier identifiés :**

#### 1. **Design System** (`design-system/`)
- **Responsabilité** : Présentation et documentation des composants
- **Pages** : Page d'accueil du design system, documentation des tokens
- **Composants** : Éléments spécifiques à la présentation du DS

#### 2. **Showcase** (`showcase/`)
- **Responsabilité** : Démonstrations et exemples d'usage
- **Pages** : Galerie d'exemples, playground interactif
- **Composants** : Démos interactives, outils de test

#### 3. **Shared** (`shared/`)
- **Responsabilité** : Infrastructure et éléments transversaux
- **Composants** : Layout, navigation, éléments UI communs
- **Services** : Router, stores, utilitaires

## 🔗 Imports et exports

### **Pattern d'export en barrel**
Chaque domaine expose ses éléments via un fichier `index.ts` :

```typescript
// domains/design-system/index.ts
export * from './pages'
export * from './components' 
export * from './composables'
export * from './types'
```

### **Imports entre domaines**
```typescript
// ✅ Correct : Import depuis le domaine shared
import { AppLayout } from '../shared'

// ✅ Correct : Import depuis un autre domaine
import { PresentationPage } from '../design-system'

// ❌ Incorrect : Import direct dans un sous-dossier
import AppLayout from '../shared/components/AppLayout.vue'
```

## 🚀 Benefits de cette architecture

### **1. Séparation des responsabilités**
- Chaque domaine a une responsabilité claire et délimitée
- Le code est organisé par fonctionnalité métier, pas par type technique

### **2. Évolutivité**
- Facilité d'ajout de nouveaux domaines
- Isolation des changements dans un domaine spécifique

### **3. Réutilisabilité**
- Les éléments partagés sont centralisés dans `shared/`
- Pattern d'export cohérent facilite les imports

### **4. Maintenabilité**
- Structure prévisible et cohérente
- Facilité de navigation dans le code
- Tests organisés par domaine

## 🛠️ Développement

### **Ajouter un nouveau domaine :**

1. Créer la structure :
   ```bash
   mkdir -p src/domains/mon-domaine/{pages,components,composables,types}
   ```

2. Créer les fichiers d'export :
   ```typescript
   // src/domains/mon-domaine/index.ts
   export * from './pages'
   export * from './components'
   // etc.
   ```

3. Ajouter au router si nécessaire :
   ```typescript
   // src/domains/shared/router/index.ts
   {
     path: '/mon-domaine',
     component: () => import('../../mon-domaine/pages/MaPage.vue')
   }
   ```

### **Bonnes pratiques :**

- ✅ Un domaine ne doit dépendre que de `shared/` et de domaines explicitement autorisés
- ✅ Préférer la composition à l'héritage
- ✅ Garder les domaines métier découplés entre eux
- ✅ Centraliser la logique transversale dans `shared/`

## 📦 Integration avec Utopia

L'application consomme le design system `@club-employes/utopia` :

```typescript
import { Button, ThemeProvider, clubEmployesLight } from '@club-employes/utopia'
import '@club-employes/utopia/styles'
```

### **ThemeProvider global**
Le `ThemeProvider` est configuré au niveau de `App.vue` pour fournir le thème à toute l'application.

### **Composants Utopia**
Les composants du design system sont importés directement dans les pages et composants qui en ont besoin.

---

## 🔄 Évolution future

Cette architecture permet facilement d'ajouter :
- **Documentation interactive** (`docs/` domain)
- **Tests playground** (`testing/` domain)  
- **Design tokens editor** (`tokens/` domain)
- **Storybook integration** (`stories/` domain)

L'approche DDD garantit que chaque nouvelle fonctionnalité trouve naturellement sa place dans l'architecture.