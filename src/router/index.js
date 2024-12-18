import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientView from '../views/ClientView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/clients/:id',
    name: 'clients',
    component: ClientView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router