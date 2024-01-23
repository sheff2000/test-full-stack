<script setup>
// нкопка должна быть самодостаточна! Возвращает тип клика - login/logout
// но данные о пользователе и авторизации берет сама из стора!
import { defineProps, defineEmits } from 'vue';
import router from '@/router';
import useAuthStore from '@/stores/authStore';
import useUserStore from '@/stores/userStore';

const props = defineProps({
    isUserAuth: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const authStore = useAuthStore();
const userStore = useUserStore();
const emit = defineEmits(['toggle']);

const logout = () => {
    emit('toggle');
    authStore.logout();
    router.push('/');
};
</script>

<template>
    <span v-if="props.isUserAuth">
        <span class="navbar-text">
            {{ userStore.userInfo.userName }}
        </span>
        <button
            class="btn btn-outline-light my-2 my-sm-0"
            @click="logout">
                Exit
        </button>
    </span>
    <button v-else
        class="btn btn-outline-success my-2 my-sm-0"
        @click="() => emit('toggle')">
        Login
    </button>
</template>
<style scoped>
    .navbar-text {
        margin-right: 15px;
    }
</style>
