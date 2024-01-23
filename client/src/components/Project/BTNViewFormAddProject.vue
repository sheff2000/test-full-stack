<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToCreateProject = () => {
    router.push({ name: 'create-project' }); // Используйте имя маршрута, определенное в вашем роутере
};
</script>

<template>
    <button class="btn btn-outline-light" @click="redirectToCreateProject">
        +
    </button>
</template>
