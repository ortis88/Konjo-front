import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import MyUFO from '../views/CustomizeView.vue'
import Shop from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/customize',
      name: 'MyUFO',
      component: MyUFO
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
  ]
})

export default router
