import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import du design system Utopia
import '@club-employes/utopia/styles'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
