<template>
  <div class="modal-basic">
    <x-button @click="handleModalOpen1">打开Modal</x-button>
    <x-modal :show="modalShow1" title="这是标题" :confirm="onConfirm1" :cancel="onCancel1" @close="onClose1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </x-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modalShow1: false,
    }
  },
  methods: {
    handleModalOpen1 () {
      this.modalShow1 = true;
    },
    onConfirm1 () {
      console.log('confirm')
    },
    onCancel1 () {
      console.log('cancel')
    },
    onClose1 () {
      this.modalShow1 = false
    },
  },
}
</script>
