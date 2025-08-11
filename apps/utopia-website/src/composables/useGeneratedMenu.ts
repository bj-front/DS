import menuConfig from '@/config/menu.json'
import { computed, type ComputedRef } from 'vue'

export interface MenuItem {
  key: string
  label: string
  icon: string
  to: string
}

export interface MenuSection {
  key: string
  type: 'section'
  label: string
}

export type MenuItemOrSection = MenuItem | MenuSection

/**
 * Composable pour utiliser le menu statique
 * basé sur la configuration JSON
 */
export function useGeneratedMenu(): {
  menuItems: ComputedRef<MenuItemOrSection[]>
} {
  // Menu items depuis la configuration JSON
  const menuItems = computed<MenuItemOrSection[]>(() => {
    return menuConfig.menuItems as MenuItemOrSection[]
  })

  return {
    menuItems
  }
}