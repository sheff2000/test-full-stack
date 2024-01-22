// стор для работы-обработки и контроля токена авторизации
import { defineStore } from 'pinia';
import config from '@/config/config';
import router from '@/router';

const useTokenStore = defineStore('token', {
    state: () => ({
        token: null,
        tokenExpEnd: null, // токен просрочен или отсутствует если true
    }),
    getters: {
        // если получили от сервера что токен просрочен
        isTokenExpired: (state) => state.tokenExpEnd,
    },
    actions: {
        async setToken(newToken) {
            this.token = newToken;
            this.tokenExpEnd = false;
            localStorage.setItem(config.tokenLocalStorage, newToken);
        },
        clearToken() {
            this.token = null;
            this.tokenExpEnd = true;
            localStorage.removeItem(config.tokenLocalStorage);
            router.push('/');
            // router.push('/login');
        },
        async verifyToken() {
            if (!localStorage.getItem(config.tokenLocalStorage)) {
                // если токен НЕ существует
                this.clearToken();
            }
            // проверка срока действия токена
            const token = localStorage.getItem(config.tokenLocalStorage);
            if (token) {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const currentTime = Date.now() / 1000;

                if (payload.exp < currentTime) {
                    console.log('Токен истек');
                    this.clearToken();
                } else {
                    console.log('Токен действителен');
                    this.setToken(token);
                }
            }
        },
    },
});
export default useTokenStore;
