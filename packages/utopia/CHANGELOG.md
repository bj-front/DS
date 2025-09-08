# @club-employes/utopia

## 4.8.0

### Minor Changes

- 3f6ca45: Add ghost variant support to Chip component

  - Add ghost prop to Chip component interface
  - Implement ghost styles for all variants (default, primary, secondary, success, warning, danger)
  - Add ghost hover states and dark mode support
  - Update Chip documentation page with ghost examples

- 9325c03: Updates from branch feat/CI/npm:
  - Design system components updated
- 1af109f: Updates from branch feat/CI/npm:
  - Design system components updated

## 4.7.0

### Minor Changes

- 677703b: Updates from branch feat/CI/npm:
  - Design system components updated
- 2bfa192: Updates from branch feat/CI/npm:
  - Design system components updated
- ae37fd7: Updates from branch feat/CI/npm:
  - Design system components updated
- ## 🚀 Version 4.7.0

  ### ✨ Nouvelles fonctionnalités

  - Ajout des exports manquants pour les composants Skeleton (SkeletonAvatar, SkeletonText)
  - Amélioration des types TypeScript pour les composants Skeleton
  - Simplification du workflow de publication npm

  ### 🔧 Améliorations

  - Workflow GitHub Actions optimisé pour publication directe
  - Gestion automatique des tags Git existants
  - Synchronisation des versions locales avec npm

  ### 📦 Composants

  - **Skeleton** : Exports complets disponibles
  - **SkeletonAvatar** : Nouveau composant exporté
  - **SkeletonText** : Nouveau composant exporté

## 3.1.0

### Minor Changes

- 2d81ec5: Updates from branch feat/atoms/chip:
  - Design system components updated
- 7755745: Updates from branch feat/atoms/chip:
  - Design system components updated

## 3.0.0

### Major Changes

- 096eb4c: AuthLayout and Slider components added

## 2.16.0

### Minor Changes

- ## ✨ New Features & Components

  ### Atoms

  - **Skeleton Component**: Added comprehensive skeleton loading component with text, rectangular, and circular variants
  - **Chip Component**: Enhanced with actionable prop for interactive chips
  - **Button Component**: Improved with loading states and icon positioning
  - **Icon Component**: Enhanced with better theming and accessibility support

  ### Molecules

  - **DropDown Component**: Moved to molecules with advanced features (search, multi-select, clearable)
  - **InputCode Component**: New multi-digit code input component
  - **Slider Component**: Enhanced carousel component with touch support and controls

  ### Layouts

  - **DefaultLayout**: Enhanced with better navigation and responsive design
  - **AuthLayout**: Improved authentication layout with better theming

  ## 🔧 Improvements

  - **Automated Changeset**: Implemented automatic changeset creation on design system changes
  - **Component Documentation**: Added comprehensive COMPONENTS.md for AI-assisted development
  - **Build Process**: Optimized token generation and build pipeline
  - **Accessibility**: Enhanced ARIA support across all components

  ## 🧹 Cleanup

  - Removed unused scripts and test components
  - Cleaned up changeset files
  - Optimized component exports and types

## 2.15.1

### Patch Changes

- 31f9848: Update design system components from branch feat/atoms/chip

## 2.15.0

### Minor Changes

- 66c6dbe: Update design system components from branch bj/feat/button_update

## 2.14.0

### Minor Changes

- 7abb6ad: Improve mobile experience and touch interactions

  - **Mobile Responsiveness**: Reduced paddings across all website pages for better mobile UX

    - HomePage, ColorsPage, LogosPage, PresentationPage, SpacingPage, IconsPage now have optimized mobile paddings
    - DefaultLayout main content padding reduced for mobile (768px: spacing-4, 480px: spacing-2)
    - ComponentLayout optimized for mobile (768px: spacing-2, 480px: spacing-1)

  - **Touch Interactions**: Fixed mobile touch highlight issues

    - Removed webkit-tap-highlight-color artifacts on all interactive elements
    - Fixed mobile zoom issues on iOS by setting font-size: 16px on inputs
    - Improved touch experience for Button, Input, Checkbox, and navigation elements
    - Added comprehensive mobile-specific CSS resets in global styles

  - **Typography Updates**:

    - Updated font family from Inter to Figtree for better readability
    - Enhanced TypographyPage documentation with Figtree information
    - Added copy-to-clipboard functionality on IconsPage icon cards

  - **Technical Improvements**:
    - Added missing release script in utopia package.json for proper CI/CD
    - Enhanced responsive design across all major design system pages

## 2.13.0

### Minor Changes

- 7abb6ad: Improve mobile experience and touch interactions

  - **Mobile Responsiveness**: Reduced paddings across all website pages for better mobile UX

    - HomePage, ColorsPage, LogosPage, PresentationPage, SpacingPage, IconsPage now have optimized mobile paddings
    - DefaultLayout main content padding reduced for mobile (768px: spacing-4, 480px: spacing-2)
    - ComponentLayout optimized for mobile (768px: spacing-2, 480px: spacing-1)

  - **Touch Interactions**: Fixed mobile touch highlight issues

    - Removed webkit-tap-highlight-color artifacts on all interactive elements
    - Fixed mobile zoom issues on iOS by setting font-size: 16px on inputs
    - Improved touch experience for Button, Input, Checkbox, and navigation elements
    - Added comprehensive mobile-specific CSS resets in global styles

  - **Technical Improvements**:
    - Added missing release script in utopia package.json for proper CI/CD
    - Enhanced responsive design across all major design system pages

## 2.12.0

### Minor Changes

- f26d194: Add new Header layout component

  - Add Header component in `packages/utopia/src/components/layouts/`
  - Header uses slot-based architecture with `left` and `right` slots for maximum flexibility
  - Updated AppLayout in website to use the new Header component from design system
  - Added proper TypeScript definitions and exports

## 2.11.0

### Minor Changes

- fd51aea: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

- 06ba0f7: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

### Patch Changes

- 9e2764e: Update components from feature branch feat/auto-deploy
- 1e8246a: Update components from feature branch feat/auto-deploy
- 53ebc13: Update components from feature branch feat/auto-deploy

## 2.10.0

### Minor Changes

- e15b485: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.9.0

### Minor Changes

- f8b7f75: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.8.0

### Minor Changes

- bc7eff3: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.7.0

### Minor Changes

- ef2eaab: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.6.0

### Minor Changes

- 37ad1f8: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.5.0

### Minor Changes

- 7663b8f: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.4.0

### Minor Changes

- 47a6042: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.3.0

### Minor Changes

- c777269: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.2.2

### Patch Changes

- 7455f35: Fix badge alignment in Badge.vue component

  - 🔧 Component update: Badge alignment improved
  - 📦 Files changed: packages/utopia/src/components/atoms/Badge/Badge.vue

- 7455f35: Test workflow fix for changeset processing

  - 🔧 Workflow improvement: Fix release process
  - 🚀 Test: Verify GitHub release creation

## 2.2.1

### Patch Changes

- 0a5edbf: Fix badge alignment in Badge.vue component

  - �� Component update: Badge alignment improved
  - 📦 Files changed: packages/utopia/src/components/atoms/Badge/Badge.vue

## 2.2.0

### Minor Changes

- f013359: Add new components

  - Components changed: 1
  - Tokens changed: 0
  - New components: 1

## 2.1.0

### Minor Changes

- 009133e: Update design tokens

  - Components changed: 0
  - Tokens changed: 8
  - New components: 0

## 2.0.0

### Major Changes

- Init DS
