import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

import Button from "primevue/button"

const pinia = createPinia();

createApp(App)
.use(router)
.use(pinia)
.use(PrimeVue, {
  theme: {
    preset: definePreset(Aura)
  }
})
.component('Button', Button)
.mount('#app')