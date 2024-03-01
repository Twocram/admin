import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("./views/UsersView.vue"),
        },
        {
            path: "/lots",
            component: () => import('./views/LotsView.vue'),
        },
        {
            path: "/transactions",
            component: () => import('./views/TransactionsView.vue'),
        }
    ]
})