const taskRoutes = [
    {
      path: '/tasks',
      name: 'login',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: false, // предполагается наличие авторизации
        title: 'Сторінка задач проекта',
      },
    },
  ];
  
  export default taskRoutes;
  