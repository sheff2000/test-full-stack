<script setup>
import useUserStore from '@/stores/userStore';

const userStore = useUserStore();

</script>

<template>
  <div v-if="userStore.showModal"
       class="modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="authModalLabel"
       aria-hidden="true"
       style="display: block; background-color: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#login" data-bs-toggle="tab">Зайти</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#register" data-bs-toggle="tab">Зареєеструватись</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="login">
              <!-- Форма авторизации -->
              <form class="mt-3">
                <div class="mb-3">
                  <label for="login-username" class="form-label">Логин</label>
                  <input type="text"
                    class="form-control"
                    id="login-username"
                    placeholder="Введите ваш логин">
                </div>
                <div class="mb-3">
                  <label for="login-password" class="form-label">Пароль</label>
                  <input type="password"
                    class="form-control"
                    id="login-password"
                    placeholder="Введите ваш пароль">
                </div>
                <button type="button" class="btn btn-primary">Авторизация</button>
              </form>
            </div>
            <div class="tab-pane fade" id="register">
            <!-- Форма регистрации -->
              <form class="mt-3">
                <div class="mb-3">
                  <label for="register-username" class="form-label">Логин</label>
                  <input type="text"
                    class="form-control"
                    id="register-username"
                    placeholder="Выберите логин">
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
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="userStore.toggleModal">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 576px) {
  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }
  .modal-content {
    min-height: 100vh;
  }
}
</style>
