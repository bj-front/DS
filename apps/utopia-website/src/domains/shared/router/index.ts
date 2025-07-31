import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Import pages from domains
import { PresentationPage } from '../../design-system'
// Dynamic import for lazy loading  
const NotFoundPage = () => import('./NotFoundPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PresentationPage,
    meta: {
      title: 'Utopia Design System',
      description: 'Système de design modulaire et cohérent'
    }
  },
  {
    path: '/design-system',
    name: 'design-system',
    component: PresentationPage,
    meta: {
      title: 'Design System - Utopia',
      description: 'Découvrez les composants et tokens du design system Utopia'
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