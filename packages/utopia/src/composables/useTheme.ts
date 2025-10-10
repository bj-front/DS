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

// Global theme state - will be initialized lazily
let currentBrand: ReturnType<typeof ref<BrandTheme>> | undefined = undefined
let currentMode: ReturnType<typeof ref<ThemeMode>> | undefined = undefined
let menuCollapsed: ReturnType<typeof ref<boolean>> | undefined = undefined
let isBrandLocked: ReturnType<typeof ref<boolean>> | undefined = undefined

/**
 * Get the initial brand and mode, checking for preloaded theme first
 * This is called lazily when useTheme() is first invoked
 */
function getInitialTheme(): { brand: BrandTheme; mode: ThemeMode; isLocked: boolean } {
  // Check if a theme was preloaded via initializeTheme()
  if (typeof window !== 'undefined') {
    const preloadedElement = document.querySelector('style[data-theme-preloaded]')
    const preloadedTheme = preloadedElement?.getAttribute('data-theme-preloaded')
    
    if (preloadedTheme) {
      const lastDashIndex = preloadedTheme.lastIndexOf('-')
      const brand = preloadedTheme.substring(0, lastDashIndex) as BrandTheme
      const mode = preloadedTheme.substring(lastDashIndex + 1) as ThemeMode
      
      console.log('🎨 useTheme: Using preloaded theme:', { brand, mode })
      console.log('🔒 Brand is locked (initialized via initializeTheme)')
      return { brand, mode, isLocked: true }
    }
  }
  
  // Fallback to localStorage
  return {
    brand: getStoredBrand(),
    mode: getStoredMode(),
    isLocked: false
  }
}

/**
 * Initialize the global state (called once on first useTheme() invocation)
 */
function initializeGlobalState(): void {
  if (currentBrand !== undefined) return // Already initialized
  
  const initialTheme = getInitialTheme()
  currentBrand = ref<BrandTheme>(initialTheme.brand)
  currentMode = ref<ThemeMode>(initialTheme.mode)
  menuCollapsed = ref<boolean>(getStoredMenuCollapsed())
  isBrandLocked = ref<boolean>(initialTheme.isLocked)
  
  // Cast refs for TypeScript (they're guaranteed to be non-undefined after assignment)
  const brand = currentBrand as ReturnType<typeof ref<BrandTheme>>
  const mode = currentMode as ReturnType<typeof ref<ThemeMode>>
  const collapsed = menuCollapsed as ReturnType<typeof ref<boolean>>
  const locked = isBrandLocked as ReturnType<typeof ref<boolean>>
  
  // Listen for unlock events
  if (typeof window !== 'undefined') {
    window.addEventListener('utopia:brand-unlocked', () => {
      locked.value = false
      console.log('🎨 useTheme: Brand unlocked')
    })
  }
  
  // Watch for changes and save to localStorage
  // Don't save brand if it's locked
  watch(() => brand.value, (newBrand) => {
    if (!locked.value && newBrand) {
      saveBrandToStorage(newBrand as BrandTheme)
    }
  }, { immediate: false })

  // Mode can always be saved
  watch(() => mode.value, (newMode) => {
    if (newMode) {
      saveModeToStorage(newMode as ThemeMode)
    }
  }, { immediate: false })

  watch(() => collapsed.value, (newCollapsed) => {
    if (newCollapsed !== undefined) {
      saveMenuCollapsedToStorage(newCollapsed as boolean)
    }
  }, { immediate: false })
}

/**
 * Assert that global state is initialized (for TypeScript)
 * After calling this, all global refs are guaranteed to be non-undefined
 */
function assertInitialized(): void {
  if (currentBrand === undefined || currentMode === undefined || 
      menuCollapsed === undefined || isBrandLocked === undefined) {
    throw new Error('useTheme: Global state not initialized. This should never happen.')
  }
}

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
  isBrandLocked: import('vue').ComputedRef<boolean>
  toggleBrand: () => void
  toggleMode: () => void
  setBrand: (brand: BrandTheme) => void
  setMode: (mode: ThemeMode) => void
  toggleMenuCollapsed: () => void
  setMenuCollapsed: (collapsed: boolean) => void
} {
  // Initialize global state lazily on first call
  initializeGlobalState()
  assertInitialized()
  
  // Now we can safely use the refs (they're guaranteed to be initialized)
  // Use non-null assertions since assertInitialized() guarantees they're defined
  const brand = currentBrand as ReturnType<typeof ref<BrandTheme>>
  const mode = currentMode as ReturnType<typeof ref<ThemeMode>>
  const collapsed = menuCollapsed as ReturnType<typeof ref<boolean>>
  const locked = isBrandLocked as ReturnType<typeof ref<boolean>>
  
  // Computed current theme config
  const currentTheme = computed(() => {
    return themes[brand.value as BrandTheme][mode.value as ThemeMode]
  })

  // Get theme display name
  const currentBrandName = computed(() => {
    return themes[brand.value as BrandTheme].name
  })

  // Switch between brands (only if not locked)
  const toggleBrand = (): void => {
    if (locked.value) {
      console.warn('⚠️ Brand is locked and cannot be changed. Brand is determined by the domain.')
      return
    }
    brand.value = brand.value === 'club-employes' ? 'gifteo' : 'club-employes'
  }

  // Switch between light/dark modes
  const toggleMode = (): void => {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
  }

  // Set specific brand (only if not locked)
  const setBrand = (newBrand: BrandTheme): void => {
    if (locked.value) {
      console.warn('⚠️ Brand is locked and cannot be changed. Brand is determined by the domain.')
      return
    }
    brand.value = newBrand
  }

  // Set specific mode
  const setMode = (newMode: ThemeMode): void => {
    mode.value = newMode
  }

  // Toggle menu collapsed state
  const toggleMenuCollapsed = (): void => {
    collapsed.value = !collapsed.value
  }

  // Set specific menu collapsed state
  const setMenuCollapsed = (newCollapsed: boolean): void => {
    collapsed.value = newCollapsed
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
    currentBrand: computed(() => brand.value) as import('vue').ComputedRef<BrandTheme>,
    currentMode: computed(() => mode.value) as import('vue').ComputedRef<ThemeMode>,
    currentBrandName,
    availableBrands,
    menuCollapsed: computed(() => collapsed.value) as import('vue').ComputedRef<boolean>,
    isBrandLocked: computed(() => locked.value) as import('vue').ComputedRef<boolean>,

    // Actions
    toggleBrand,
    toggleMode,
    setBrand,
    setMode,
    toggleMenuCollapsed,
    setMenuCollapsed
  }
}