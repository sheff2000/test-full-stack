const projectRoutes = [
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: true, // предполагается наличие авторизации
      title: 'Список Проектов',
    },
  },
];
/*
  {
    path: '/projects/:projectId',
    name: 'project-details',
    component: ProjectDetails,
    meta: {
      requiresAuth: true,
      title: 'Детали Проекта'
    },
    child: [
        ...taskRoutes
    ],
  },
  {
    path: '/projects/:projectId/tasks',
    name: 'project-tasks',
    component: TaskList,
    meta: {
      requiresAuth: true,
      title: 'Задачи Проекта'
    }
  },
  {
    path: '/projects/:projectId/tasks/:taskId',
    name: 'task-details',
    component: TaskDetails,
    meta: {
      requiresAuth: true,
      title: 'Детали Задачи'
    }
  }
]; */

export default projectRoutes;
