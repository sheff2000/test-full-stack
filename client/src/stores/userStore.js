import { defineStore } from 'pinia';
import config from '@/config/config';
import userApiController from '@/api/userApiController';
import useTokenStore from './tokenStore';

const useUserStore = defineStore('user', {
    state: () => ({
        showModal: false,
        loginRgp: /^[A-Za-z0-9_-]+$/,
        isUserAuth: false,
        userInfo: {
            userName: null,
            userId: null,
        },
        userCountProjects: 0,
        userCountTasks: 0,
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
            // и отправляем сразу на авторизацию
            const resultLogin = await this.login({
                loginAuth: registerData.loginRegister,
                passwordAuth: registerData.passwordRegister,
            });

            return resultLogin;
        },
        async login(loginData) {
            /*
            * Авторизация
            * @param loginData {object} = loginAuth, passwordAuth
            * 1 - валидация
            * 2 - отпарвка на сервер
            * 3 - проверка ошибки от сервера - вывод модалки с ошибкой
            * 4 - ошибки нет - сохранить данные в локалСтор + сюда
            * - передать токен в токенСтор
            * - закрыть окно авторизации
            */
            if (!this.validLogin(loginData.loginAuth)) {
                return { err: true, message: 'Логін некорректний чи відсутній', status: '422' };
            }
            if (!this.validPassword(loginData.passwordAuth)) {
                return { err: true, message: 'Пароль некорректний чи відсутній', status: '422' };
            }
            const resultLogin = await userApiController.login(loginData);
            console.log('ERROR LOGIN - ', resultLogin);
            if (resultLogin.err) {
                return resultLogin;
            }

            const tokenStore = useTokenStore();
            tokenStore.setToken(resultLogin.res.token);

            this.setUserData({
                userId: resultLogin.res.userInfo.userId,
                userName: resultLogin.res.userInfo.userName,
            });

            this.showModal = false;
            return true;
        },
        logout() {
            this.isUserAuth = false;
            this.user = null;
            localStorage.removeItem(config.userInfoLocalStorage);
            const tokenStore = useTokenStore();
            tokenStore.clearToken();
        },
        validLogin(login) {
            if (this.loginRgp.test(login) && login.length > 0) {
                return true;
            }
            return false;
        },
        validPassword(password) {
            if (password.length > 5) {
                return true;
            }
            return false;
        },
        setUserData(userData) { // устанавливаем начальные данные пользователя
            localStorage.setItem(config.userInfoLocalStorage, JSON.stringify(userData));
            this.userInfo = { ...userData };
            this.isUserAuth = true;
            return true;
        },
        setUserDataFromLocalStorage() {
            if (!localStorage.getItem(config.userInfoLocalStorage)) {
                return false;
            }
            this.userInfo = JSON.parse(localStorage.getItem(config.userInfoLocalStorage));
            this.isUserAuth = true;
            return true;
        },
        async initializeUser() {
            try {
                const tokenStore = useTokenStore();
                await tokenStore.verifyToken();
                if (!this.setUserDataFromLocalStorage()) {
                    this.logout();
                }
            } catch (error) {
                this.clearToken();
            }
        },
    },
});

export default useUserStore;
