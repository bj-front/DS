import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './domains/shared/router'

// Import du design system Utopia (styles des composants)
import '@club-employes/utopia/styles'

// Charger le thème par défaut immédiatement pour éviter le FOUC
import defaultThemeCSS from '@club-employes/utopia/tokens/club-employes/light?inline'

// Injecter le CSS du thème par défaut avant l'initialisation de Vue
const defaultThemeStyle = document.createElement('style')
defaultThemeStyle.setAttribute('data-theme-css', 'true')
defaultThemeStyle.setAttribute('data-default-theme', 'true')
defaultThemeStyle.textContent = defaultThemeCSS
document.head.appendChild(defaultThemeStyle)

// Appliquer l'attribut data-theme par défaut
document.body.setAttribute('data-theme', 'club-employes-light')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
