<script setup>

import { ref, computed } from 'vue';
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();
const loginAuth = ref('');
const passwordAuth = ref('');

const validLoginAuth = ref('');
const validPasswordAuth = ref('');

const validLogin = () => {
    validLoginAuth.value = userStore.loginRgp.test(loginAuth.value);
};
const validPassword = () => {
    validPasswordAuth.value = passwordAuth.value.length > 5;
};

const passwordInputClasses = computed(() => {
    if (validPasswordAuth.value === '') { // лдя начального вывода поля формы без стилей валидации
        return {}; // Возвращает пустой объект, если validPasswordRegister пусто
    }
    return {
        'is-valid': validPasswordAuth.value,
        'is-invalid': !validPasswordAuth.value,
    };
});
const loginInputClasses = computed(() => {
    if (validLoginAuth.value === '') {
        return {};
    }
    return {
        'is-valid': validLoginAuth.value,
        'is-invalid': !validLoginAuth.value,
    };
});
</script>

<template>
    <form @submit.prevent="">
        <div class="mb-3">
            <label for="login-username" class="form-label">Логін</label>
            <input type="text" class="form-control" :class="loginInputClasses" id="login-username"
                placeholder="Введіть ваш логін" v-model="loginAuth" @input="validLogin" required>
        </div>
        <div class="mb-3">
            <label for="login-password" class="form-label">Пароль</label>
            <input type="password" class="form-control"
                :class="passwordInputClasses"
                id="login-password"
                placeholder="Введіть ваш пароль"
                v-model="passwordAuth"
                @input="validPassword"
                required>
        </div>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Авторизація</button>
    </form>
</template>
