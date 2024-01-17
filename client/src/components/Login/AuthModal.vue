<script setup>
import useUserStore from '@/stores/userStore';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

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
          <div class="tab-content alert alert-light">
            <div class="tab-pane fade show active" id="login">
              <!-- Форма авторизации -->
              <LoginForm />
            </div>
            <div class="tab-pane fade" id="register">
            <!-- Форма регистрации -->
              <RegisterForm />
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
.modal-content {
  text-align: left;
  padding: 15px;
  background-color: #e9ecef;
}
.tab-content {
  padding: 40px;
  margin-top: 25px;
}
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
