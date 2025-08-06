import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './domains/shared/router'

// Import du design system Utopia (styles des composants)
import '@club-employes/utopia/styles'

// // En mode développement, importer directement les tokens CSS
// if (import.meta.env.DEV) {
//   // Import direct des tokens pour le développement
//   import('../../packages/utopia/src/tokens/generated/club-employes/light.css')
// }

// Appliquer l'attribut data-theme par défaut
document.body.setAttribute('data-theme', 'club-employes-light')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
