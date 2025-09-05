# 🎨 Utopia Design System

[![npm version](https://badge.fury.io/js/@club-employes%2Futopia.svg)](https://www.npmjs.com/package/@club-employes/utopia)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)

> **Modern Vue 3 design system** with multi-brand theming, design tokens, and 30+ production-ready components. Built for **Club Employés** & **Gifteo** with full TypeScript support.

## ✨ Features

- 🧩 **30+ Vue 3 Components** - Atoms, Molecules, Organisms, Layouts
- 🎨 **Multi-brand Theming** - Club Employés & Gifteo brands
- 🌙 **Dark Mode Support** - Light/dark variants for all themes  
- 🎯 **Design Tokens** - CSS variables generated with Style Dictionary
- 📱 **Responsive** - Mobile-first approach with breakpoint utilities
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 🔧 **TypeScript** - Full type definitions included
- 🚀 **Tree Shakeable** - Import only what you need
- 📦 **Zero Config** - Works out of the box

## 🚀 Quick Start

### Basic Usage

```vue
<template>
  <ThemeProvider :theme="clubEmployesLight">
    <div class="app">
      <Button variant="primary" size="medium" @click="handleClick">
        Get Started
      </Button>
      
      <Card variant="elevated">
        <Icon name="heart" size="large" />
        <h2>Welcome to Utopia</h2>
        <p>Modern design system for Vue 3</p>
      </Card>
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { 
  Button, 
  Card, 
  Icon, 
  ThemeProvider, 
  clubEmployesLight 
} from '@club-employes/utopia'
import '@club-employes/utopia/styles'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### Import Styles

```javascript
// Import all styles (recommended)
import '@club-employes/utopia/styles'

// Or import specific theme tokens
import '@club-employes/utopia/tokens/club-employes/light'
import '@club-employes/utopia/tokens/gifteo/dark'
```

## 🎨 Available Themes

```javascript
import { 
  clubEmployesLight,   // Club Employés light theme
  clubEmployesDark,    // Club Employés dark theme
  gifteoLight,         // Gifteo light theme
  gifteoDark           // Gifteo dark theme
} from '@club-employes/utopia'
```

## 🧩 Components

### Atoms (Building Blocks)
- **Button** - Interactive buttons with variants
- **Icon** - 1200+ Lucide icons
- **Logo** - Multi-brand logos
- **Badge** - Status indicators
- **Card** - Content containers
- **Input** - Form controls
- **Checkbox** - Boolean inputs
- **Switch** - Toggle controls

### Molecules (Simple Combinations)
- **SearchBox** - Search input with icon
- **InputSelect** - Dropdown with filtering

### Organisms (Complex Components)
- **DataTable** - Advanced data tables
- **Header** - Navigation headers
- **Menu** - Sidebar navigation

### Layouts (Page Structures)
- **DefaultLayout** - Main application layout

## 🔧 Composables

```javascript
import { useTheme, useFavicon, useScrollShadows } from '@club-employes/utopia'

// Theme management
const { theme, setTheme } = useTheme()
setTheme('club-employes', 'dark')

// Dynamic favicon
const { setFavicon } = useFavicon()

// Scroll shadows
const { shadowTop, shadowBottom } = useScrollShadows(containerRef)
```

## 🎯 Design Tokens

All components use CSS custom properties (design tokens):

```css
.my-component {
  /* Colors */
  background: var(--utopia-color-surface);
  color: var(--utopia-color-text-primary);
  
  /* Spacing */
  padding: var(--utopia-space-md);
  margin: var(--utopia-space-lg);
  
  /* Typography */
  font-family: var(--utopia-font-family);
  font-size: var(--utopia-font-size-base);
  
  /* Borders */
  border-radius: var(--utopia-radius-md);
  border: 1px solid var(--utopia-color-border);
}
```

## 🌈 Theme Switching

```vue
<template>
  <div>
    <ThemeProvider :theme="currentTheme">
      <Button @click="toggleTheme">
        Switch to {{ isDark ? 'Light' : 'Dark' }} Mode
      </Button>
      <YourApp />
    </ThemeProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  ThemeProvider, 
  clubEmployesLight, 
  clubEmployesDark 
} from '@club-employes/utopia'

const isDark = ref(false)
const currentTheme = computed(() => 
  isDark.value ? clubEmployesDark : clubEmployesLight
)

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>
```

## 📦 Package Exports

```javascript
// Main export
import { Button, Icon, ThemeProvider } from '@club-employes/utopia'

// Styles
import '@club-employes/utopia/styles'

// Specific theme tokens
import '@club-employes/utopia/tokens/club-employes/light'
import '@club-employes/utopia/tokens/club-employes/dark'
import '@club-employes/utopia/tokens/gifteo/light'
import '@club-employes/utopia/tokens/gifteo/dark'

// Icons list (JSON)
import iconsList from '@club-employes/utopia/icons'
```

## 🏗️ Advanced Usage

### Custom Theme Configuration

```vue
<script setup lang="ts">
import { ThemeProvider } from '@club-employes/utopia'

const customTheme = {
  colors: {
    primary: '#your-brand-color',
    secondary: '#your-secondary-color'
  },
  // ... other theme properties
}
</script>
```

### Tree Shaking

```javascript
// Import only what you need
import { Button } from '@club-employes/utopia/components/Button'
import { Icon } from '@club-employes/utopia/components/Icon'
```

## 📱 Responsive Design

Components are mobile-first and responsive by default:

```vue
<template>
  <Button 
    size="small"           <!-- Mobile -->
    :size-md="'medium'"    <!-- Tablet -->
    :size-lg="'large'"     <!-- Desktop -->
  >
    Responsive Button
  </Button>
</template>
```

## ♿ Accessibility

All components follow WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast modes
- ✅ Focus management
- ✅ ARIA attributes

## 🔧 TypeScript Support

Full TypeScript definitions included:

```typescript
import type { ButtonProps, IconProps, ThemeConfig } from '@club-employes/utopia'

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
}
```

## 📊 Bundle Size

- **Full package**: ~150KB (minified + gzipped)
- **Single component**: ~5-15KB (tree-shaken)
- **Tokens only**: ~10KB (CSS variables)

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📚 Documentation & Resources

- 📖 **[Complete Documentation](https://ds-utopia.vercel.app/)** - Interactive examples and guides
- 🎨 **[Storybook](https://main--673cf2b1e9d0b7c5f2b7b7e7.chromatic.com/)** - Component stories and visual tests
- 🐙 **[GitHub Repository](https://github.com/club-employes/ds)** - Source code and issues
- 📦 **[NPM Package](https://www.npmjs.com/package/@club-employes/utopia)** - Package details

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/club-employes/ds/blob/main/CONTRIBUTING.md).

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## 📄 License

MIT © [Club Employés](https://github.com/club-employes)

---

<div align="center">

**Made with ❤️ by the Club Employés team**

[Website](https://ds-utopia.vercel.app/) • [GitHub](https://github.com/club-employes/ds) • [NPM](https://www.npmjs.com/package/@club-employes/utopia)

</div>