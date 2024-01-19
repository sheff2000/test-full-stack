// стор для работы-обработки и контроля токена авторизации
import { defineStore } from 'pinia';
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
            localStorage.setItem('authToken', newToken);
        },
        async clearToken() {
            this.token = null;
            this.tokenExpEnd = true;
            localStorage.removeItem('authToken');
            router.push('/login');
        },
        async verifyToken() {
            if (!localStorage.getItem('authToken')) {
                // если токен НЕ существует
                await this.clearToken();
            }
            // проверка срока действия токена
            const token = localStorage.getItem('authToken');
            if (token) {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const currentTime = Date.now() / 1000;

                if (payload.exp < currentTime) {
                    console.log('Токен истек');
                    await this.clearToken();
                } else {
                    console.log('Токен действителен');
                    await this.setToken(token);
                }
            }
        },
    },
});
export default useTokenStore;
