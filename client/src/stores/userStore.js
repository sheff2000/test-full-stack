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
        },
        async register(registerData) {
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

            if (!this.validLogin(registerData.loginRegister)) {
                return { err: true, message: 'Логін некорректний чи відсутній', status: '422' };
            }
            if (!this.validPassword(registerData.passwordRegister)) {
                return { err: true, message: 'Пароль некорректний чи відсутній', status: '422' };
            }
            const resultRegister = await userApiController.register(registerData);
            console.log('Result register - ', resultRegister);
            if (resultRegister.err) {
                return resultRegister;
            }
            // тут надо принять токен
            return resultRegister;
        },
        login() {

        },
        logout() {

        },
        validLogin(login) {
            if (this.loginRgp.test(login) && login.length > 0) {
                return true;
            }
            return false;
        },
        validPassword(password) {
            if (password.length > 6) {
                console.log('Valid password. Password - ', password, ' - its > 6 ');
                return true;
            }
            console.log('Password (', password, ') - its NO > 6 ');
            return false;
        },
    },
});

export default useUserStore;
