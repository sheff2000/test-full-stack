<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isUserAuth: {
        type: Boolean,
        required: false,
        default: false,
    },
    userInfo: {
        type: Object,
        required: false,
        default: () => ({
            userName: null,
        }),
    },
});

const emit = defineEmits(['login', 'logout']);
</script>

<template>
    <span v-if="props.isUserAuth">
        <span>
            {{ props.userInfo.userName }}
        </span>
        <button
            class="btn btn-outline-light my-2 my-sm-0"
            @click="() => emit('logout')">
                Exit
        </button>
    </span>
    <button v-else
        class="btn btn-outline-success my-2 my-sm-0"
        @click="() => emit('login')">
        Login
    </button>
</template>
