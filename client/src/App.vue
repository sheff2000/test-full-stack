<script setup>
import { onMounted } from 'vue';
import AlertAllInfoModal from '@/components/ModalWindow/AlertAllInfoModal.vue';
import useUserStore from './stores/userStore';

const userStore = useUserStore();

onMounted(() => {
    userStore.initializeUser();
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
