import { computed, ref, watch } from 'vue'
import type { ThemeConfig } from '../theme-provider'
import { clubEmployesDark, clubEmployesLight } from '../themes/club-employes'
import { gifteoDark, gifteoLight } from '../themes/gifteo'

export type BrandTheme = 'club-employes' | 'gifteo'
export type ThemeMode = 'light' | 'dark'

// LocalStorage keys
const STORAGE_KEYS = {
  BRAND: 'utopia-theme-brand',
  MODE: 'utopia-theme-mode'
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

// Global theme state - initialized from localStorage
const currentBrand = ref<BrandTheme>(getStoredBrand())
const currentMode = ref<ThemeMode>(getStoredMode())

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
  toggleBrand: () => void
  toggleMode: () => void
  setBrand: (brand: BrandTheme) => void
  setMode: (mode: ThemeMode) => void
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

    // Actions
    toggleBrand,
    toggleMode,
    setBrand,
    setMode
  }
}