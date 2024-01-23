import { defineStore } from 'pinia';

const useAlertModalStore = defineStore('alertModal', {
    state: () => ({
        showModal: false,
        classViewStatusCode: 'text-bg-info',
        message: '',
    }),
    actions: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
        openModal(msg, statusCode) {
            if (statusCode >= 200 && statusCode < 300) {
                this.classViewStatusCode = 'text-bg-success';
            }
            if (statusCode >= 400 && statusCode < 500) {
                this.classViewStatusCode = 'text-bg-warning';
            }
            if (statusCode >= 500 && statusCode < 600) {
                this.classViewStatusCode = 'text-bg-danger';
            }
            this.message = msg;
            this.showModal = true;
        },
        closeModal() {
            this.message = '';
            this.classViewStatusCode = 'text-bg-info';
            this.showModal = false;
        },
    },
});

export default useAlertModalStore;
