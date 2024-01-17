<script setup>
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="register-username" class="form-label">Логин</label>
      <input type="text"
        class="form-control"
        id="register-username"
        placeholder="Выберите логин">
      <div id="register-username-help" class="form-text">
        Логін має містити латинські літери та/або "_" "-"
      </div>
    </div>
    <div class="mb-3">
      <label for="register-password" class="form-label">Пароль</label>
      <input type="password"
        class="form-control"
        id="register-password"
        placeholder="Выберите пароль">
    </div>
    <button type="button" class="btn btn-success">Регистрация</button>
  </form>
</template>
