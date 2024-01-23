<script setup>
import { onMounted } from 'vue';
import AlertAllInfoModal from '@/components/ModalWindow/AlertAllInfoModal.vue';
import useAlertModalStore from './stores/alertModalStore';
import useAuthStore from './stores/authStore';

onMounted(async () => {
    const authStore = useAuthStore();
    const alertModalStore = useAlertModalStore();

    const resAuth = await authStore.initializeUser();
    if (resAuth.err) {
        alertModalStore.openModal(resAuth.message, resAuth.status);
    }
});
</script>

<template>
    <router-view/>
    <AlertAllInfoModal />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
