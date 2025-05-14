import AboutView from '@/views/AboutView.vue'
import ContactUs from '@/views/ContactUs.vue'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => AboutView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/contact',
    name: 'contactUs',
    component: ContactUs
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
