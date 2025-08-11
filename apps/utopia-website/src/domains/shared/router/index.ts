import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// Import pages from domains
import {
  ColorsPage,
  ColorsTokenPage,
  HomePage,
  IconsPage,
  LogosPage,
  SpacingPage,
  TypographyPage
} from '../../design-system'

// Import generated routes for design system components
import { generatedRoutes } from '@/generated/routes'

// Dynamic import for lazy loading  
const NotFoundPage = (): Promise<typeof import('./NotFoundPage.vue')> => import('./NotFoundPage.vue')
const HomePageCustom = (): Promise<typeof import('@/pages/HomePage.vue')> => import('@/pages/HomePage.vue')


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Utopia Design System',
      description: 'Système de design modulaire et cohérent'
    }
  },
  {
    path: '/home',
    name: 'home-page',
    component: HomePageCustom,
    meta: {
      title: 'Home',
      description: 'Page Home générée automatiquement'
    }
  },
  // Design System pages
  {
    path: '/design-system',
    name: 'design-system',
    component: HomePage,
    meta: {
      title: 'Design System - Utopia',
      description: 'Découvrez les composants et tokens du design system Utopia'
    }
  },
  {
    path: '/design-system/colors',
    name: 'design-system-colors',
    component: ColorsPage,
    meta: {
      title: 'Couleurs - Design System Utopia',
      description: 'Palette de couleurs et tokens du design system'
    }
  },
  {
    path: '/design-system/colors-tokens',
    name: 'design-system-colors-tokens',
    component: ColorsTokenPage,
    meta: {
      title: 'Tokens de Couleurs - Design System Utopia',
      description: 'Référence complète des tokens de couleurs avec valeurs hexa et correspondances light/dark'
    }
  },
  {
    path: '/design-system/typography',
    name: 'design-system-typography',
    component: TypographyPage,
    meta: {
      title: 'Typographie - Design System Utopia',
      description: 'Système typographique complet'
    }
  },
  {
    path: '/design-system/spacing',
    name: 'design-system-spacing',
    component: SpacingPage,
    meta: {
      title: 'Espacement - Design System Utopia',
      description: 'Échelle d\'espacement et layout'
    }
  },
  {
    path: '/design-system/logos',
    name: 'design-system-logos',
    component: LogosPage,
    meta: {
      title: 'Logos - Design System Utopia',
      description: 'Identités visuelles et logos'
    }
  },
  {
    path: '/design-system/icons',
    name: 'design-system-icons',
    component: IconsPage,
    meta: {
      title: 'Icônes - Design System Utopia',
      description: 'Bibliothèque complète des icônes disponibles'
    }
  },
  // Future routes
  {
    path: '/showcase',
    name: 'showcase',
    component: () => import('../../showcase/pages').then(m => m.ShowcasePage),
    meta: {
      title: 'Showcase - Utopia',
      description: 'Exemples et démonstrations des composants'
    }
  },
  // Generated routes for design system components
  ...generatedRoutes,
  // Catch all route - 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: '404 - Page non trouvée',
      description: 'La page que vous cherchez n\'existe pas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_, __, savedPosition) {
    // Always scroll to top when changing routes
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Global navigation guards
router.beforeEach((to, _, next) => {
  // Update document title
  if (to.meta?.title) {
    document.title = to.meta.title
  }

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (to.meta?.description && descriptionMeta) {
    descriptionMeta.setAttribute('content', to.meta.description)
  }

  next()
})

export default router