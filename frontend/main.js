import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './main.css'
import "tailwindcss/tailwind.css"

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {}
})

createApp(App).use(i18n).mount('#app')
