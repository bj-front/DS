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
    path: '/design-system/molecules/dropdown',
    name: 'molecules-DropDown',
    component: () => import('@/generated/pages/molecules/DropDownPage.vue'),
    meta: {"title":"DropDown","section":"Molecules"}
  }
,
  {
    path: '/design-system/molecules/inputcode',
    name: 'molecules-InputCode',
    component: () => import('@/generated/pages/molecules/InputCodePage.vue'),
    meta: {"title":"InputCode","section":"Molecules"}
  }
,
  {
    path: '/design-system/layouts/authlayout',
    name: 'layouts-AuthLayout',
    component: () => import('@/generated/pages/layouts/AuthLayoutPage.vue'),
    meta: {"title":"AuthLayout","section":"Layouts"}
  },
  {
    path: '/design-system/molecules/slider',
    name: 'molecules-Slider',
    component: () => import('@/generated/pages/molecules/SliderPage.vue'),
    meta: {"title":"Slider","section":"Molecules"}
  }
,
  {
    path: '/design-system/atoms/skeleton',
    name: 'atoms-Skeleton',
    component: () => import('@/generated/pages/atoms/SkeletonPage.vue'),
    meta: {"title":"Skeleton","section":"Atoms"}
  }
,
  {
    path: '/design-system/organisms/balancecard',
    name: 'organisms-BalanceCard',
    component: () => import('@/generated/pages/organisms/BalanceCardPage.vue'),
    meta: {"title":"BalanceCard","section":"Organisms"}
  }
]

// Dernière mise à jour: 2025-08-08T13:47:00.793Z
