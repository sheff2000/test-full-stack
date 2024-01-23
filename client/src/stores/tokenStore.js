/*
* Стор для токена авторизации
* хранит токен / проверяет его актуальность
*/
import { defineStore } from 'pinia';

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
        },
        clearToken() {
            this.token = null;
            this.tokenExpEnd = true;
            return true;
        },
        async verifyToken(token) {
            // проверка срока действия токена
            if (token) {
                const payload = JSON.parse(atob(token.split('.')[1]));
                const currentTime = Date.now() / 1000;

                if (payload.exp < currentTime) {
                    console.log('Токен истек');
                    return false;
                }
                console.log('Токен действителен');
                return true;
            }
            return false;
        },
    },
});
export default useTokenStore;
