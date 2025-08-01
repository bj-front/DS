import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './domains/shared/router'

// Import du design system Utopia
import '@club-employes/utopia/styles'
import '@club-employes/utopia/tokens/club-employes/light'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
