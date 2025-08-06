import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './domains/shared/router'

// Import du design system Utopia (styles des composants)
import '@club-employes/utopia/styles'

// Import SYNCHRONE des tokens CSS pour éviter le FOUC
import '@club-employes/utopia/tokens/club-employes/light'

// Appliquer l'attribut data-theme par défaut
document.body.setAttribute('data-theme', 'club-employes-light')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
