<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { onMounted, watchEffect } from 'vue';

const title = 'Мой заголовок страницы';
const description = 'Описание моей страницы';
const keywords = 'ключевые, слова, моей, страницы';

onMounted(() => {
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute('content', description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
});

watchEffect(() => {
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute('content', description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
});
</script>

<template>
  <div class="container text-center">
    <img alt="Vue logo" src="../assets/logo.png">fdgdfgfg
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
