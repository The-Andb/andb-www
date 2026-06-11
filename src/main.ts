import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './style.css'
import en from './locales/en.json'
import vi from './locales/vi.json'

// Detect Language Logic
const savedLocale = localStorage.getItem('user-locale')
let defaultLocale = savedLocale || 'en'

if (!savedLocale) {
  // Check browser language
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === 'vi') {
    defaultLocale = 'vi'
  }
}

const i18n = createI18n({
  legacy: false, // Usage with Composition API
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    vi
  }
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
