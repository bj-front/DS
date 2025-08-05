import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './domains/shared/router'

// Import du design system Utopia (styles des composants)
// En production: utilise le package NPM, en dev: utilise les sources via l'alias Vite
import '@club-employes/utopia/utopia.css'

// Charger le thème par défaut immédiatement pour éviter le FOUC
// En production: utilise le package NPM, en dev: utilise les sources via l'alias Vite
import defaultThemeCSS from '@club-employes/utopia/tokens/generated/club-employes/light.css?inline'

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
