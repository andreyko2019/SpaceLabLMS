import '@spacelablms/components/style.css'
import './style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './providers'
import { createPinia } from 'pinia'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { defaultLocal, language } from '@spacelablms/components'
import { createI18n, useI18n } from 'vue-i18n'

import { Skeletor } from 'vue-skeletor'
import 'vue-skeletor/dist/vue-skeletor.css'

const messages = Object.assign(language)
// const localStorageLang = localStorage.getItem('lang')
const i18n = createI18n({
  legacy: false,
  locale: defaultLocal,
  fallbackLocale: 'ua',
  messages,
})
const pinia = createPinia()

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
app.component(Skeletor.name, Skeletor)
app.use(i18n)
app.use(pinia)
app.use(router)
app.use(VueSweetalert2)

app.mount('#app')
