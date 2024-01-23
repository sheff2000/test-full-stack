<script setup>
import { ref } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import config from '@/config/config';
import AuthModal from '@/components/Login/AuthModal.vue';
import CountProject from '@/components/NavBar/CountProject.vue';
import ButtonLoginExit from '@/components/NavBar/ButtonLoginExit.vue';
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();
const showModalAuth = ref(false); // окно авторизации или регистрации

const viewLoginForm = () => {
    showModalAuth.value = !showModalAuth.value;
};
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">{{ config.nameProject }}</router-link>
            <div class="navbar-nav mr-auto">
                <CountProject
                    :count-project="userStore.userCountProjects"
                    :count-task="userStore.userCountTasks"
                    :is-user-auth="userStore.isUserAuth"/>
            </div>
            <div class="navbar-nav mr-auto">
                <ButtonLoginExit
                    :is-user-auth="userStore.isUserAuth"
                    @toggle="viewLoginForm"/>
            </div>
        </div>
    </nav>
    <AuthModal :show-modal="showModalAuth" @close="viewLoginForm"/>
</template>

<style scoped>
.bi-check {
    fill: #f8f9fa;
}
</style>
