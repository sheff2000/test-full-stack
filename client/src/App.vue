<script setup>
import { onMounted } from 'vue';
import AlertAllInfoModal from '@/components/ModalWindow/AlertAllInfoModal.vue';
import useAuthStore from './stores/authStore';

const authStore = useAuthStore();

onMounted(async () => {
    await authStore.initializeUser();
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
