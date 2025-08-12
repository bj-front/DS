import { computed, ref, watch } from 'vue'
import type { ThemeConfig } from '../theme-provider'
import { clubEmployesDark, clubEmployesLight } from '../themes/club-employes'
import { gifteoDark, gifteoLight } from '../themes/gifteo'

export type BrandTheme = 'club-employes' | 'gifteo'
export type ThemeMode = 'light' | 'dark'

// LocalStorage keys
const STORAGE_KEYS = {
  BRAND: 'utopia-theme-brand',
  MODE: 'utopia-theme-mode',
  MENU_COLLAPSED: 'utopia-menu-collapsed'
} as const

// Helper functions for localStorage
const getStoredBrand = (): BrandTheme => {
  if (typeof window === 'undefined') return 'club-employes'
  const stored = localStorage.getItem(STORAGE_KEYS.BRAND)
  return (stored === 'club-employes' || stored === 'gifteo') ? stored : 'club-employes'
}

const getStoredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEYS.MODE)
  return (stored === 'light' || stored === 'dark') ? stored : 'light'
}

const saveBrandToStorage = (brand: BrandTheme): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.BRAND, brand)
  }
}

const saveModeToStorage = (mode: ThemeMode): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.MODE, mode)
  }
}

const getStoredMenuCollapsed = (): boolean => {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem(STORAGE_KEYS.MENU_COLLAPSED)
  return stored === 'true'
}

const saveMenuCollapsedToStorage = (collapsed: boolean): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.MENU_COLLAPSED, collapsed.toString())
  }
}

// Global theme state - initialized from localStorage
const currentBrand = ref<BrandTheme>(getStoredBrand())
const currentMode = ref<ThemeMode>(getStoredMode())
const menuCollapsed = ref<boolean>(getStoredMenuCollapsed())

// Available themes configuration
const themes = {
  'club-employes': {
    light: clubEmployesLight,
    dark: clubEmployesDark,
    name: 'Club Employés'
  },
  'gifteo': {
    light: gifteoLight,
    dark: gifteoDark,
    name: 'Gifteo'
  }
} as const

export function useTheme(): {
  currentTheme: import('vue').ComputedRef<ThemeConfig>
  currentBrand: import('vue').ComputedRef<BrandTheme>
  currentMode: import('vue').ComputedRef<ThemeMode>
  currentBrandName: import('vue').ComputedRef<string>
  availableBrands: import('vue').ComputedRef<Array<{ key: BrandTheme; name: string }>>
  menuCollapsed: import('vue').ComputedRef<boolean>
  toggleBrand: () => void
  toggleMode: () => void
  setBrand: (brand: BrandTheme) => void
  setMode: (mode: ThemeMode) => void
  toggleMenuCollapsed: () => void
  setMenuCollapsed: (collapsed: boolean) => void
} {
  // Computed current theme config
  const currentTheme = computed(() => {
    return themes[currentBrand.value][currentMode.value]
  })

  // Get theme display name
  const currentBrandName = computed(() => {
    return themes[currentBrand.value].name
  })

  // Watch for changes and save to localStorage
  watch(currentBrand, (newBrand) => {
    saveBrandToStorage(newBrand)
  }, { immediate: false })

  watch(currentMode, (newMode) => {
    saveModeToStorage(newMode)
  }, { immediate: false })

  watch(menuCollapsed, (collapsed) => {
    saveMenuCollapsedToStorage(collapsed)
  }, { immediate: false })

  // Switch between brands
  const toggleBrand = (): void => {
    currentBrand.value = currentBrand.value === 'club-employes' ? 'gifteo' : 'club-employes'
  }

  // Switch between light/dark modes
  const toggleMode = (): void => {
    currentMode.value = currentMode.value === 'light' ? 'dark' : 'light'
  }

  // Set specific brand
  const setBrand = (brand: BrandTheme): void => {
    currentBrand.value = brand
  }

  // Set specific mode
  const setMode = (mode: ThemeMode): void => {
    currentMode.value = mode
  }

  // Toggle menu collapsed state
  const toggleMenuCollapsed = (): void => {
    menuCollapsed.value = !menuCollapsed.value
  }

  // Set specific menu collapsed state
  const setMenuCollapsed = (collapsed: boolean): void => {
    menuCollapsed.value = collapsed
  }

  // Get all available brands
  const availableBrands = computed(() => {
    return Object.keys(themes).map(key => ({
      key: key as BrandTheme,
      name: themes[key as BrandTheme].name
    }))
  })

  return {
    // State
    currentTheme,
    currentBrand: computed(() => currentBrand.value),
    currentMode: computed(() => currentMode.value),
    currentBrandName,
    availableBrands,
    menuCollapsed: computed(() => menuCollapsed.value),

    // Actions
    toggleBrand,
    toggleMode,
    setBrand,
    setMode,
    toggleMenuCollapsed,
    setMenuCollapsed
  }
}