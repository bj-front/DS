import type { RouteRecordRaw } from 'vue-router'

// Routes générées automatiquement pour les composants du design system
export const generatedRoutes: RouteRecordRaw[] = [
  {
    path: '/design-system/atoms/badge',
    name: 'atoms-Badge',
    component: () => import('@/generated/pages/atoms/BadgePage.vue'),
    meta: {"title":"Badge","section":"Atoms"}
  },
  {
    path: '/design-system/atoms/button',
    name: 'atoms-Button',
    component: () => import('@/generated/pages/atoms/ButtonPage.vue'),
    meta: {"title":"Button","section":"Atoms"}
  },
  {
    path: '/design-system/atoms/card',
    name: 'atoms-Card',
    component: () => import('@/generated/pages/atoms/CardPage.vue'),
    meta: {"title":"Card","section":"Atoms"}
  },
  {
    path: '/design-system/atoms/icon',
    name: 'atoms-Icon',
    component: () => import('@/generated/pages/atoms/IconPage.vue'),
    meta: {"title":"Icon","section":"Atoms"}
  },
  {
    path: '/design-system/atoms/logo',
    name: 'atoms-Logo',
    component: () => import('@/generated/pages/atoms/LogoPage.vue'),
    meta: {"title":"Logo","section":"Atoms"}
  },
  {
    path: '/design-system/layouts/defaultlayout',
    name: 'layouts-DefaultLayout',
    component: () => import('@/generated/pages/layouts/DefaultLayoutPage.vue'),
    meta: {"title":"Default Layout","section":"Layouts"}
  },

  {
    path: '/design-system/atoms/checkbox',
    name: 'atoms-Checkbox',
    component: () => import('@/generated/pages/atoms/CheckboxPage.vue'),
    meta: {"title":"Checkbox","section":"Atoms"}
  }
]

// Dernière mise à jour: 2025-08-08T13:47:00.793Z
