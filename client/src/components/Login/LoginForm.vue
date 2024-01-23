<script setup>
import { ref, computed, defineEmits } from 'vue';
import useAuthStore from '@/stores/authStore';
import useAlertModalStore from '@/stores/alertModalStore';

const authStore = useAuthStore();
const alertModalStore = useAlertModalStore();
const emit = defineEmits(['loginEnd']);

const loginAuth = ref('');
const passwordAuth = ref('');

const isValidLoginAuth = ref('');

const validLogin = () => {
    isValidLoginAuth.value = authStore.validLogin(loginAuth.value);
};

const loginInputClasses = computed(() => {
    if (isValidLoginAuth.value === '') {
        return {};
    }
    return {
        'is-valid': isValidLoginAuth.value,
        'is-invalid': !isValidLoginAuth.value,
    };
});

const sendLoginForm = async () => {
    const result = await authStore.login({
        loginAuth: loginAuth.value,
        passwordAuth: passwordAuth.value,
    });
    if (result.err) {
        alertModalStore.openModal(result.message, result.status);
    } else {
        emit('loginEnd', true);
    }
};
</script>

<template>
    <form @submit.prevent="sendLoginForm">
        <div class="mb-3">
            <label for="login-username" class="form-label">Логін</label>
            <input
                type="text"
                class="form-control"
                :class="loginInputClasses"
                id="login-username"
                placeholder="Введіть ваш логін"
                v-model="loginAuth"
                @input="validLogin"
                required>
        </div>
        <div class="mb-3">
            <label for="login-password" class="form-label">Пароль</label>
            <input
                type="password"
                class="form-control"
                id="login-password"
                placeholder="Введіть ваш пароль"
                v-model="passwordAuth"
                required>
        </div>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Авторизація</button>
    </form>
</template>
