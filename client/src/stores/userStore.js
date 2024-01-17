import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => ({
    showModal: false,
    loginRgp: /^[A-Za-z0-9_-]+$/,
  }),
  actions: {
    toggleModal() {
      this.showModal = !this.showModal;
      console.log('toggle model - ', this.showModal);
    },
    register() {

    },
    login() {

    },
    logout() {

    },
  },
});

export default useUserStore;
