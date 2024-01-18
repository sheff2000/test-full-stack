<script setup>
import { ref, computed } from 'vue';
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();
const loginRegister = ref('');
const passwordRegister = ref('');

const validLoginRegister = ref('');
const validPasswordRegister = ref('');

const validLogin = () => {
    validLoginRegister.value = userStore.loginRgp.test(loginRegister.value);
};
const validPassword = () => {
    validPasswordRegister.value = passwordRegister.value.length > 5;
};

const passwordInputClasses = computed(() => {
    if (validPasswordRegister.value === '') { // лдя начального вывода поля формы без стилей валидации
        return {}; // Возвращает пустой объект, если validPasswordRegister пусто
    }
    return {
        'is-valid': validPasswordRegister.value,
        'is-invalid': !validPasswordRegister.value,
    };
});
const loginInputClasses = computed(() => {
    if (validLoginRegister.value === '') {
        return {};
    }
    return {
        'is-valid': validLoginRegister.value,
        'is-invalid': !validLoginRegister.value,
    };
});
</script>

<template>
    <form @submit.prevent="">
        <div class="mb-3">
            <label for="register-username" class="form-label">Логін</label>
            <input type="text"
                class="form-control"
                :class="loginInputClasses"
                id="register-username"
                placeholder="Введіть логін"
                v-model="loginRegister"
                @input="validLogin">
            <div id="register-username-help" class="form-text">
                Логін має містити латинські літери та/або "_" "-"
            </div>
        </div>
        <div class="mb-3">
              <label for="register-password" class="form-label">Пароль</label>
              <input type="password"
                  class="form-control"
                  :class="passwordInputClasses"
                  id="register-password"
                  placeholder="Введіть пароль"
                  v-model="passwordRegister"
                  @input="validPassword">
            <div id="register-username-help" class="form-text">
                Пароль - не менше 6 символів
            </div>
        </div>
        <button class="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            Реєстрація
        </button>
    </form>
</template>
