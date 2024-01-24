import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Pokedex',
        component: () => import('./components/Pokedex.vue')
    },
    {
        path: '/pokemon/:id',
        name: 'DetailPokemon',
        component: () => import('./components/DetailPokemon.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;