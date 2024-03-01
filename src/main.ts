import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

createApp(App)
  .use(router)
  .mount('#app')
