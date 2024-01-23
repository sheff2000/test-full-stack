import { defineStore } from 'pinia';
import userApiController from '@/api/userApiController';

const useProjectStore = defineStore('project', {
    state: () => ({
        projectsList: null,
    }),

    actions: {
        async getProjectList() {

        },

        async getProjectDetails() {

        },

        async createProject() {

        },

        async updateProject() {

        },

        async deleteProject() {

        },

        async searchProject() {

        },

    },
});

export default useProjectStore;
