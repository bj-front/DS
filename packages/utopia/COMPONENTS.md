# Utopia Design System - Components Documentation

## Overview
Utopia is a Vue 3 design system with multi-brand theming support (Club Employés & Gifteo) and light/dark modes.

## Installation
```bash
npm install @club-employes/utopia
```

## Usage
```vue
<script setup>
import { Button, Card, Icon } from '@club-employes/utopia'
</script>
```

---

## ATOMS

### Button
**Purpose**: Interactive button component with multiple variants and states.

**Props**:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'  // Default: 'primary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'        // Default: 'md'
  disabled?: boolean                              // Default: false
  loading?: boolean                               // Default: false
  icon?: string                                   // Icon name
  iconPosition?: 'left' | 'right'                 // Default: 'left'
}
```

**Usage**:
```vue
<Button variant="primary" size="md" @click="handleClick">
  Click me
</Button>

<Button variant="secondary" icon="Plus" loading>
  Loading...
</Button>
```

### Card
**Purpose**: Container component for grouping related content.

**Props**:
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined'   // Default: 'default'
  size?: 'small' | 'medium' | 'large'            // Default: 'medium'
  disabled?: boolean                              // Default: false
  interactive?: boolean                           // Default: false
  active?: boolean                                // Default: false
}
```

**Usage**:
```vue
<Card variant="elevated" interactive>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Checkbox
**Purpose**: Binary input control for selections.

**Props**:
```typescript
interface CheckboxProps {
  modelValue?: boolean                            // v-model
  label?: string                                 // Label text
  disabled?: boolean                             // Default: false
  size?: 'small' | 'medium' | 'large'           // Default: 'medium'
  state?: 'default' | 'error' | 'valid'         // Default: 'default'
  message?: string                               // Helper/error message
  required?: boolean                             // Default: false
}
```

**Usage**:
```vue
<Checkbox v-model="isChecked" label="Accept terms" />
```

### Chip
**Purpose**: Compact element representing an input, attribute, or action.

**Props**:
```typescript
interface ChipProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'           // Default: 'medium'
  disabled?: boolean                             // Default: false
  removable?: boolean                            // Default: false
  leftIcon?: string                              // Icon name
  actionable?: boolean                           // Default: false
}
```

**Usage**:
```vue
<Chip variant="primary" removable @remove="handleRemove">
  Tag
</Chip>

<Chip variant="success" leftIcon="Check" actionable>
  Completed
</Chip>
```

### Icon
**Purpose**: SVG icon component with theming support.

**Props**:
```typescript
interface IconProps {
  name: string                                   // Required: Icon name
  size?: 'small' | 'medium' | 'large'           // Default: 'medium'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'
  strokeWidth?: number | string                  // Default: 2
  alt?: string                                   // Accessibility label
  class?: string                                 // Custom CSS classes
}
```

**Usage**:
```vue
<Icon name="user" size="large" color="primary" />
<Icon name="general/home" stroke-width="1.5" />
```

### InputText
**Purpose**: Text input field with validation states.

**Props**:
```typescript
interface InputTextProps {
  modelValue?: string                            // v-model
  label?: string                                // Label text
  placeholder?: string                          // Placeholder text
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  size?: 'small' | 'medium' | 'large'          // Default: 'medium'
  state?: 'default' | 'error' | 'valid'        // Default: 'default'
  disabled?: boolean                            // Default: false
  readonly?: boolean                            // Default: false
  message?: string                              // Helper/error message
  required?: boolean                            // Default: false
  maxLength?: number                            // Max character limit
}
```

**Usage**:
```vue
<InputText 
  v-model="email" 
  label="Email" 
  type="email" 
  placeholder="Enter your email"
  required 
/>
```

### Logo
**Purpose**: Brand logo component with multiple variants.

**Props**:
```typescript
interface LogoProps {
  brand?: 'club-employes' | 'gifteo'            // Default: 'club-employes'
  variant?: 'light' | 'dark' | 'monochrome'     // Default: 'light'
  size?: 'small' | 'medium' | 'large' | 'xl'    // Default: 'medium'
  class?: string                                // Custom CSS classes
}
```

**Usage**:
```vue
<Logo brand="club-employes" variant="light" size="large" />
<Logo brand="gifteo" variant="dark" />
```

### Skeleton
**Purpose**: Loading placeholder component.

**Props**:
```typescript
interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular'  // Default: 'text'
  width?: string | number                        // Width (CSS value)
  height?: string | number                       // Height (CSS value)
  animation?: 'pulse' | 'wave' | 'none'         // Default: 'pulse'
  lines?: number                                 // Number of text lines
}
```

**Usage**:
```vue
<Skeleton variant="text" lines="3" />
<Skeleton variant="rectangular" width="200px" height="100px" />
```

### Switch
**Purpose**: Toggle switch component.

**Props**:
```typescript
interface SwitchProps {
  modelValue?: boolean                           // v-model
  label?: string                                // Label text
  disabled?: boolean                            // Default: false
  size?: 'small' | 'medium' | 'large'          // Default: 'medium'
  state?: 'default' | 'error' | 'valid'        // Default: 'default'
  message?: string                              // Helper/error message
}
```

**Usage**:
```vue
<Switch v-model="isEnabled" label="Enable notifications" />
```

---

## MOLECULES

### DropDown
**Purpose**: Select dropdown with search and multi-select support.

**Props**:
```typescript
interface DropDownProps {
  modelValue?: string | number | (string | number)[]  // v-model
  label?: string                                      // Label text
  placeholder?: string                                // Placeholder text
  options?: DropDownOption[]                          // Options array
  state?: 'default' | 'error' | 'valid' | 'incomplete' | 'completed'
  size?: 'small' | 'medium' | 'large'               // Default: 'medium'
  disabled?: boolean                                 // Default: false
  readonly?: boolean                                 // Default: false
  multiple?: boolean                                 // Default: false
  searchable?: boolean                               // Default: false
  clearable?: boolean                                // Default: false
  message?: string                                   // Helper/error message
  required?: boolean                                 // Default: false
  maxHeight?: string                                 // Max dropdown height
}

interface DropDownOption {
  value: string | number
  label: string
  disabled?: boolean
}
```

**Usage**:
```vue
<DropDown 
  v-model="selectedValue"
  label="Choose option"
  :options="options"
  searchable
  clearable
/>
```

### InputCode
**Purpose**: Multi-digit code input component.

**Props**:
```typescript
interface InputCodeProps {
  modelValue?: string                              // v-model
  label?: string                                  // Label text
  length?: number                                 // Number of digits
  type?: 'text' | 'number'                        // Default: 'text'
  size?: 'small' | 'medium' | 'large'            // Default: 'medium'
  state?: 'default' | 'error' | 'valid'          // Default: 'default'
  disabled?: boolean                              // Default: false
  message?: string                                // Helper/error message
  required?: boolean                              // Default: false
  autoFocus?: boolean                             // Default: false
}
```

**Usage**:
```vue
<InputCode 
  v-model="code"
  label="Verification code"
  :length="6"
  type="number"
/>
```

### SearchBox
**Purpose**: Search input with integrated search functionality.

**Props**:
```typescript
interface SearchBoxProps {
  modelValue?: string                             // v-model
  placeholder?: string                            // Default: 'Search...'
  size?: 'small' | 'medium' | 'large'           // Default: 'medium'
  disabled?: boolean                             // Default: false
  clearable?: boolean                            // Default: true
  debounce?: number                              // Debounce delay in ms
}
```

**Usage**:
```vue
<SearchBox 
  v-model="searchQuery"
  placeholder="Search products..."
  :debounce="300"
/>
```

### Slider
**Purpose**: Carousel/slider component for content display.

**Props**:
```typescript
interface SliderProps {
  slides: any[]                                   // Required: Array of slide data
  direction?: 'horizontal' | 'vertical'          // Default: 'horizontal'
  autoplay?: boolean                             // Default: false
  autoplayDelay?: number                         // Default: 5000ms
  showControls?: boolean                         // Default: true
  showDots?: boolean                             // Default: true
  loop?: boolean                                 // Default: true
  alwaysShowControls?: boolean                   // Default: false
}
```

**Usage**:
```vue
<Slider 
  :slides="slides"
  :autoplay="true"
  :autoplay-delay="3000"
  show-dots
/>
```

---

## ORGANISMS

### DataTable
**Purpose**: Advanced data table with sorting, filtering, and pagination.

**Props**:
```typescript
interface DataTableProps {
  data: any[]                                    // Required: Table data
  columns: DataTableColumn[]                     // Required: Column definitions
  loading?: boolean                              // Default: false
  sortable?: boolean                             // Default: true
  filterable?: boolean                           // Default: false
  selectable?: boolean                           // Default: false
  pagination?: boolean                           // Default: false
  pageSize?: number                              // Default: 10
}

interface DataTableColumn {
  key: string
  label: string
  sortable?: boolean
  filterable?: boolean
  width?: string
  align?: 'left' | 'center' | 'right'
}
```

**Usage**:
```vue
<DataTable 
  :data="users"
  :columns="columns"
  :loading="isLoading"
  selectable
  pagination
  :page-size="20"
/>
```

---

## LAYOUTS

### DefaultLayout
**Purpose**: Main application layout with header, navigation, and content area.

**Props**:
```typescript
interface DefaultLayoutProps {
  title?: string                                 // Page title
  showHeader?: boolean                           // Default: true
  showSidebar?: boolean                          // Default: true
  sidebarCollapsed?: boolean                     // Default: false
}
```

**Usage**:
```vue
<DefaultLayout title="Dashboard">
  <template #header>
    <!-- Custom header content -->
  </template>
  
  <template #sidebar>
    <!-- Custom sidebar content -->
  </template>
  
  <!-- Main content -->
  <div>Page content</div>
</DefaultLayout>
```

### AuthLayout
**Purpose**: Authentication pages layout.

**Props**:
```typescript
interface AuthLayoutProps {
  title?: string                                 // Page title
  subtitle?: string                              // Page subtitle
  showLogo?: boolean                             // Default: true
}
```

**Usage**:
```vue
<AuthLayout title="Sign In" subtitle="Welcome back">
  <!-- Auth form content -->
</AuthLayout>
```

---

## THEMING

### Theme Provider
```vue
<script setup>
import { ThemeProvider } from '@club-employes/utopia'

// Available themes: 'club-employes-light', 'club-employes-dark', 'gifteo-light', 'gifteo-dark'
</script>

<template>
  <ThemeProvider theme="club-employes-light">
    <!-- App content -->
  </ThemeProvider>
</template>
```

### CSS Variables
The design system uses CSS custom properties for theming:
- `--color-brand-primary-*`: Primary brand colors
- `--color-brand-secondary-*`: Secondary brand colors
- `--color-semantic-*`: Semantic colors (success, warning, danger)
- `--spacing-*`: Spacing tokens
- `--typography-*`: Typography tokens

---

## COMPOSABLES

### useTheme
```typescript
import { useTheme } from '@club-employes/utopia'

const { theme, setTheme, isDark } = useTheme()
```

### useFavicon
```typescript
import { useFavicon } from '@club-employes/utopia'

useFavicon('/path/to/favicon.ico')
```

---

## ICONS

Icons are available via the `Icon` component. Icon names follow the pattern:
- `category/name` (e.g., `general/home`, `navigation/menu`)
- `name` (e.g., `user`, `search`)

Common icons: `user`, `search`, `menu`, `close`, `check`, `plus`, `minus`, `chevron-left`, `chevron-right`, `loader-2`

---

## ACCESSIBILITY

All components include:
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

---

## EXAMPLES

### Complete Form
```vue
<template>
  <Card variant="elevated">
    <h2>User Registration</h2>
    
    <InputText 
      v-model="form.email"
      label="Email"
      type="email"
      required
      :state="emailState"
      :message="emailMessage"
    />
    
    <InputText 
      v-model="form.password"
      label="Password"
      type="password"
      required
    />
    
    <DropDown 
      v-model="form.country"
      label="Country"
      :options="countries"
      searchable
    />
    
    <Checkbox 
      v-model="form.terms"
      label="I accept the terms and conditions"
      required
    />
    
    <Button 
      variant="primary" 
      size="large"
      :loading="isSubmitting"
      @click="submitForm"
    >
      Register
    </Button>
  </Card>
</template>
```

### Data Display
```vue
<template>
  <div>
    <SearchBox v-model="searchQuery" />
    
    <DataTable 
      :data="filteredData"
      :columns="columns"
      :loading="isLoading"
      selectable
      pagination
    />
  </div>
</template>
```
