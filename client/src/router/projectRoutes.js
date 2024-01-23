import useUserStore from '@/stores/authStore';

const projectRoutes = [
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/AboutView.vue'),
        meta: {
            requiresAuth: false, // предполагается наличие авторизации
            title: 'Список Проектов',
        },
    },
    {
        path: '/create-project',
        name: 'create-project',
        component: () => import('@/views/CreateProjectView.vue'),
        meta: {
            requiresAuth: true,
            title: 'Створення проекта',
        },
        beforeEnter: (to, from, next) => {
            const userStore = useUserStore();
            if (!userStore.isUserAuth) {
                next({ name: 'login' }); // Перенаправление на страницу входа
            } else {
                next(); // Продолжить навигацию
            }
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
