<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthModal from '@/components/Login/AuthModal.vue';
import CountProject from '@/components/NavBar/CountProject.vue';
import ButtonLoginExit from '@/components/NavBar/ButtonLoginExit.vue';
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Project Manager</a>
            <div class="navbar-nav mr-auto">
                <CountProject
                    :count-project="userStore.userCountProjects"
                    :count-task="userStore.userCountTasks"/>
            </div>
            <div class="navbar-nav mr-auto">
                <ButtonLoginExit
                    :is-user-auth="userStore.isUserAuth"
                    :user-info="userStore.userInfo"
                    @login="userStore.toggleModal"
                    @logout="userStore.logout"/>
            </div>
        </div>
    </nav>
    <AuthModal />
</template>

<style scoped>
.bi-check {
    fill: #f8f9fa;
}
</style>
