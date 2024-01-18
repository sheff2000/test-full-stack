import { createRouter, createWebHistory } from 'vue-router';
import projectRoutes from './projectRoutes';
import userRoutes from './userRoutes';
import MainPage from '../views/MainPageView.vue';

const routes = [
    ...userRoutes,
    ...projectRoutes,
    {
        path: '/',
        name: 'home',
        component: MainPage,
        meta: {
            title: 'Система керування проектами',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
