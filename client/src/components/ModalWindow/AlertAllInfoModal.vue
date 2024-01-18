<script setup>
import useAlertModalStore from '@/stores/alertModalStore';

const alertModalStore = useAlertModalStore();
</script>

<template>
    <div v-if="alertModalStore.showModal"
    class="modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
        style="display: block; background-color: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    {{ alertModalStore.message }}
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="alertModalStore.closeModal">
                            ОК
                    </button>
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
