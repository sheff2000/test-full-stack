/*
* центральный стор аутинтификации / регистрации
* управлет стором токенов и информации о пользователе
*/

import { defineStore } from 'pinia';
import config from '@/config/config';
import userApiController from '@/api/userApiController';
import useTokenStore from './tokenStore';
import useUserStore from './userStore';

const useAuthStore = defineStore('auth', {
    state: () => ({
        loginRgp: config.validLoginRgp,
        passwordMinLen: config.validPassword.minLen,
    }),

    actions: {
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
            return resultRegister;
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
            console.log('resultLogin LOGIN - ', resultLogin);

            if (resultLogin.err) {
                return resultLogin;
            }

            const tokenStore = useTokenStore();
            const userStore = useUserStore();
            tokenStore.setToken(resultLogin.res.token);
            localStorage.setItem(config.tokenLocalStorage, resultLogin.res.token);

            const toUserInfo = {
                userId: resultLogin.res.userInfo.userId,
                userName: resultLogin.res.userInfo.userName,
                countProjects: 0,
                countTasks: 0,
            };

            userStore.setUserData(toUserInfo);
            localStorage.setItem(config.userInfoLocalStorage, JSON.stringify(toUserInfo));
            // this.showModal = false;
            return resultLogin;
        },
        logout() {
            const tokenStore = useTokenStore();
            const userStore = useUserStore();

            localStorage.removeItem(config.userInfoLocalStorage);
            localStorage.removeItem(config.tokenLocalStorage);

            userStore.clear();
            tokenStore.clearToken();
        },
        validLogin(login) {
            if (this.loginRgp.test(login) && login.length > 0) {
                return true;
            }
            return false;
        },
        validPassword(password) {
            if (password.length > this.passwordMinLen) {
                return true;
            }
            return false;
        },
        async initializeUser() {
            try {
                // проверяем наличие локалСтореджа
                const localToken = localStorage.getItem(config.tokenLocalStorage);
                // console.log('INIT USER REFRESH. Token - ', localToken);
                if (!localToken) {
                    // токена нет - на всякий случай удаляем возможныеданные
                    // console.log('NOT ISSET token - logout');
                    this.logout();
                    return false;
                }
                // console.log('Token isset');
                const tokenStore = useTokenStore();
                const userStore = useUserStore();
                // передаем токен с него на верификацию
                const isTokenVerify = await tokenStore.verifyToken(localToken);
                // console.log('Verify token  - ', isTokenVerify);
                if (!isTokenVerify) {
                    console.log('ERROR verify');
                    this.logout();
                    return false;
                }

                // запрашиваем обновленные данные юзера с сервера
                const tempUserInfo = await userApiController.getUserInfoByToken(localToken);
                if (tempUserInfo.err) {
                    return tempUserInfo;
                }
                console.log('Return from server userInfo - ', tempUserInfo);
                userStore.setUserData(tempUserInfo.res);
                // устанавливаем данные в сторы
                tokenStore.setToken(localToken);
                return true;
            } catch (error) {
                console.log('CATCH ERROR - ', error);
                this.logout();
                return false;
            }
        },
    },
});

export default useAuthStore;
