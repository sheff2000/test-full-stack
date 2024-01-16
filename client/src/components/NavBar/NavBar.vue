<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthModal from '@/components/Login/AuthModal.vue';
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Project Manager</a>
      <div class="navbar-nav mr-auto">
        <!-- Для больших экранов -->
        <a class="nav-link d-none d-lg-inline" href="#">My Projects: 0</a>
        <a class="nav-link d-none d-lg-inline" href="#">My Tasks: 0</a>

        <!-- Для мобильных устройств -->
        <a class="nav-link d-lg-none" href="#">
        <svg class="bi bi-check" width="16" height="16" fill="white">
        <use xlink:href="#check"/>
        </svg> 0
        </a>
        <a class="nav-link d-lg-none" href="#">
        <svg class="bi bi-check" width="16" height="16" fill="smoke">
        <use xlink:href="#check"/>
        </svg> 0
        </a>
      </div>
      <button class="btn btn-outline-success my-2 my-sm-0"
        @click="userStore.toggleModal">
          Login
        </button>
    </div>
  </nav>
  <AuthModal />
</template>

<style scoped>
.bi-check {
  fill: #f8f9fa;
}
</style>
