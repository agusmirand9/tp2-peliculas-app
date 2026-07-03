import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/pelicula/:id',
    name: 'detalle',
    component: () => import('@/views/DetalleView.vue'),
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: () => import('@/views/FavoriteView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router