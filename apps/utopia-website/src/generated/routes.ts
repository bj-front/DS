import type { RouteRecordRaw } from 'vue-router'

// Routes générées automatiquement pour les composants du design system
export const generatedRoutes: RouteRecordRaw[] = [
  {
    path: '/design-system/atoms/button',
    name: 'atoms-Button',
    component: () => import('@/generated/pages/atoms/ButtonPage.vue'),
    meta: {"title":"Button","section":"Atoms"}
  },
  {
    path: '/design-system/atoms/checkbox',
    name: 'atoms-Checkbox',
    component: () => import('@/generated/pages/atoms/CheckboxPage.vue'),
    meta: {"title":"Checkbox","section":"Atoms"}
  },
  {
    path: '/design-system/layouts/defaultlayout',
    name: 'layouts-DefaultLayout',
    component: () => import('@/generated/pages/layouts/DefaultLayoutPage.vue'),
    meta: {"title":"Default Layout","section":"Layouts"}
  }
,
  {
    path: '/design-system/atoms/switch',
    name: 'atoms-Switch',
    component: () => import('@/generated/pages/atoms/SwitchPage.vue'),
    meta: {"title":"Switch","section":"Atoms"}
  }
,
  {
    path: '/design-system/atoms/inputtext',
    name: 'atoms-InputText',
    component: () => import('@/generated/pages/atoms/InputTextPage.vue'),
    meta: {"title":"InputText","section":"Atoms"}
  }
,
  {
    path: '/design-system/atoms/card',
    name: 'atoms-Card',
    component: () => import('@/generated/pages/atoms/CardPage.vue'),
    meta: {"title":"Card","section":"Atoms"}
  }
,
  {
    path: '/design-system/atoms/chip',
    name: 'atoms-Chip',
    component: () => import('@/generated/pages/atoms/ChipPage.vue'),
    meta: {"title":"Chip","section":"Atoms"}
  }
,
  {
    path: '/design-system/atoms/dropdown',
    name: 'atoms-DropDown',
    component: () => import('@/generated/pages/atoms/DropDownPage.vue'),
    meta: {"title":"DropDown","section":"Atoms"}
  }
]

// Dernière mise à jour: 2025-08-08T13:47:00.793Z
