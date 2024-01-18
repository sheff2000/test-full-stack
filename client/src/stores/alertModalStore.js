import { defineStore } from 'pinia';

const useAlertModalStore = defineStore('alertModal', {
    state: () => ({
        showModal: false,
        message: '',
    }),
    actions: {
        openModal(msg) {
            this.message = msg;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
});

export default useAlertModalStore;
