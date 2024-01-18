const userRoutes = [
    {
        path: '/user/login',
        name: 'login',
        component: () => import('../views/AboutView.vue'),
        meta: {
            requiresAuth: false, // предполагается наличие авторизации
            title: 'Авторизація користувача',
        },
    },
];

export default userRoutes;
