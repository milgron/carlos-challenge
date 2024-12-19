import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button';
import Popover from 'primevue/popover';
const pinia = createPinia();

createApp(App)
.use(router)
.use(pinia)
.use(PrimeVue, {
  theme: {
    preset: definePreset(Aura, {
      semantic: {
        primary: {
          50: "{yellow.50}",
          100: "{yellow.100}",
          200: "{yellow.200}",
          300: "{yellow.300}",
          400: "{yellow.400}",
          500: "{yellow.500}",
          600: "{yellow.600}",
          700: "{yellow.700}",
          800: "{yellow.800}",
          900: "{yellow.900}",
        }
      }
    })
  }
})
.directive('tooltip', Tooltip)
.component('DataTable', DataTable)
.component('InputText', InputText)
.component('Button', Button)
.component('Popover', Popover)
.mount('#app')
