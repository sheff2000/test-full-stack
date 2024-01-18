<script setup>
import useAlertModalStore from '@/stores/alertModalStore';

const { showModal, message, closeModal } = useAlertModalStore();
</script>

<template>
    <div
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="alertModalLabel"
        aria-hidden="true"
        :class="{ 'show-modal': showModal }">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="alertModalLabel">Уведомление</h5>
                    <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        @click="closeModal">
                    </button>
                </div>
                <div class="modal-body">
                    {{ message }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeModal">ОК</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 576px) {
    .show-modal {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top: unset;
        width: 100%;
        margin: 0;
        display: block;
    }
    .modal-dialog {
        margin: 0;
    }
    .modal-content {
        min-height: auto;
        border-radius: 0;
    }
}
</style>
