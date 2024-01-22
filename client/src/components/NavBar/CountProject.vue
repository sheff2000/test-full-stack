<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    countProject: {
        type: Number,
        required: false,
        default: 0,
    },
    countTask: {
        type: Number,
        required: false,
        default: 0,
    },
});
</script>

<template>
    <!-- Для больших экранов -->
    <a class="nav-link d-none d-lg-inline" href="#">My Projects: {{ props.countProject }}</a>
    <a class="nav-link d-none d-lg-inline" href="#">My Tasks: {{ props.countTask }}</a>

    <!-- Для мобильных устройств -->
    <a class="nav-link d-lg-none" href="#">
        <svg class="bi bi-check" width="16" height="16" fill="white">
            <use xlink:href="#check"/>
        </svg> {{ props.countProject }}
    </a>
    <a class="nav-link d-lg-none" href="#">
        <svg class="bi bi-check" width="16" height="16" fill="smoke">
            <use xlink:href="#check"/>
        </svg> {{ props.countTask }}
    </a>
</template>
