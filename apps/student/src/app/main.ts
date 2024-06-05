import '@spacelablms/components/style.css'
import './style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './providers'

const app = createApp(App)
app.use(router)
app.mount('#app')
