import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue'),
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue'),
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: () => import('../views/FavoritosView.vue'),
      },
    {
        path: '/:pathMatch(.*)*', //Expresione regular
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue'),
      },
  ],
});

export default router
