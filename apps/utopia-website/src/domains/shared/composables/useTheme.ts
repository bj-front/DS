import { ref, computed } from 'vue'
import { 
  clubEmployesLight, 
  clubEmployesDark,
  gifteoLight, 
  gifteoDark 
} from '@club-employes/utopia'

export type BrandTheme = 'club-employes' | 'gifteo'
export type ThemeMode = 'light' | 'dark'

// Global theme state
const currentBrand = ref<BrandTheme>('club-employes')
const currentMode = ref<ThemeMode>('light')

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

export function useTheme() {
  // Computed current theme config
  const currentTheme = computed(() => {
    return themes[currentBrand.value][currentMode.value]
  })

  // Get theme display name
  const currentBrandName = computed(() => {
    return themes[currentBrand.value].name
  })

  // Switch between brands
  const toggleBrand = () => {
    console.log('🔄 Toggling brand from:', currentBrand.value)
    currentBrand.value = currentBrand.value === 'club-employes' ? 'gifteo' : 'club-employes'
    console.log('🔄 Toggled brand to:', currentBrand.value)
  }

  // Switch between light/dark modes
  const toggleMode = () => {
    console.log('🌓 Toggling mode from:', currentMode.value)
    currentMode.value = currentMode.value === 'light' ? 'dark' : 'light'
    console.log('🌓 Toggled mode to:', currentMode.value)
  }

  // Set specific brand
  const setBrand = (brand: BrandTheme) => {
    console.log('🎯 Setting brand to:', brand)
    currentBrand.value = brand
  }

  // Set specific mode
  const setMode = (mode: ThemeMode) => {
    console.log('🎯 Setting mode to:', mode)
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