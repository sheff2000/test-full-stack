import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => ({
    showModal: false,
  }),
  actions: {
    toggleModal() {
      this.showModal = !this.showModal;
      console.log('toggle model - ', this.showModal);
    },
  },
});

export default useUserStore;
