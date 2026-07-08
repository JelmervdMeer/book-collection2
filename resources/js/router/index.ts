import { createRouter, createWebHistory } from 'vue-router'

import { bookRoutes } from '../domains/books/routes'
import { authorRoutes } from '../domains/authors/routes'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...bookRoutes,
        ...authorRoutes,
        {
    path: '/books/:id',
    name: 'books.show',
    component: () => import('../domains/books/pages/Show.vue')
}
    ],
})