<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

const props = defineProps({
    showModal: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const activeTab = ref('login'); // 'login' или 'register'
const emit = defineEmits(['close']); // закрытие модального окна

const registerEnd = (isRegister) => {
    if (isRegister) {
        activeTab.value = 'login';
    }
};

const loginEnd = (isLogin) => {
    if (isLogin) {
        emit('close');
    }
};
</script>

<template>
    <div v-if="props.showModal"
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
                            <a
                                :class="{'nav-link': true, 'active': activeTab === 'login'}"
                                @click="activeTab = 'login'"
                                @keyup.enter="activeTab = 'login'">
                                    Зайти
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                :class="{'nav-link': true, 'active': activeTab === 'register'}"
                                @click="activeTab = 'register'"
                                @keyup.enter="activeTab = 'register'">
                                    Зареєеструватись
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content alert alert-light">
                        <div v-show="activeTab === 'login'" class="tab-pane fade show active">
                            <!-- Форма авторизации -->
                            <LoginForm @login-end="loginEnd"/>
                        </div>
                        <div v-show="activeTab === 'register'" class="show">
                            <!-- Форма регистрации -->
                            <RegisterForm @register-end="registerEnd" />
                        </div>
                    </div>
              </div>
              <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="() => emit('close')">
                        Відміна
                    </button>
              </div>
          </div>
      </div>
    </div>
</template>

<style scoped>
a {
    cursor: pointer;
}
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
