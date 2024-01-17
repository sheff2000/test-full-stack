<script setup>
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="login-username" class="form-label">Логин</label>
      <input type="text"
        class="form-control"
        id="login-username"
        placeholder="Введите ваш логин"
        required>
    </div>
    <div class="mb-3">
      <label for="login-password" class="form-label">Пароль</label>
      <input type="password"
        class="form-control"
        id="login-password"
        placeholder="Введите ваш пароль"
        required>
    </div>
    <button type="button" class="btn btn-primary">Авторизация</button>
  </form>
</template>
