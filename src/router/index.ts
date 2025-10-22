import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShopPage from '../views/shop/ShopPage.vue'
import ContactPage from '../views/ContactPage.vue'
import UserPage from '@/views/UserPage.vue'
import FavoritPage from '../views/shop/components/FavoritPage.vue'
import Card from '@/views/shop/components/Card.vue'

const routes: RouteRecordRaw[] = [
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/shop', name: 'Shop', component: ShopPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/user', name: 'User', component: UserPage },
  { path: '/favorit', name: 'Favorit', component: FavoritPage },
  { path: '/card', name: 'Card', component: Card },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
