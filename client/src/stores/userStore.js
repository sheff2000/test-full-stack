/**
 * Стор текущего авторизованного / либо нет юзера
 * Храниит различную его информацию о нем / проектах / тасках
 */
import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => ({
        isUserAuth: false,
        userInfo: {
            userName: null,
            userId: null,
        },
        userCountProjects: 0,
        userCountTasks: 0,
    }),

    actions: {
        setUserData({
            userName,
            userId,
            countProjects,
            countTasks,
        }) {
            this.userInfo.userId = userId;
            this.userInfo.userName = userName;
            this.userCountProjects = countProjects;
            this.userCountTasks = countTasks;
            this.isUserAuth = true;
            return true;
        },
        clear() {
            this.isUserAuth = false;
            this.userInfo = {
                userName: null,
                userId: null,
            };
            this.userCountProjects = 0;
            this.userCountTasks = 0;
        },
    },
});

export default useUserStore;
