<script setup>
import AlertAllInfoModal from '@/components/ModalWindow/AlertAllInfoModal.vue';
</script>

<template>
    <router-view/>
    <AlertAllInfoModal ref="alertModal"/>
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
