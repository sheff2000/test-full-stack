import { defineStore } from 'pinia';
import userApiController from '@/api/userApiController';

const useUserStore = defineStore('user', {
    state: () => ({
        showModal: false,
        loginRgp: /^[A-Za-z0-9_-]+$/,
    }),

    actions: {
        toggleModal() {
            this.showModal = !this.showModal;
            console.log('toggle model - ', this.showModal);
        },
        register(registerData) {
            /*
            * Регистрация юзера - отправка данных на сервер
            * @param {object} registerData
            * @param {string} registerData.loginRegister
            * @param {string} registerData.passwordRegister
            *
            * 1 - validation register data
            * 2 - send to api controller
            * 3 - reciev result from answer
            */
        },
        login() {

        },
        logout() {

        },
    },
});

export default useUserStore;
