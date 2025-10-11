import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShopPage from '../views/shop/ShopPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/shop', name: 'Shop', component: ShopPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


