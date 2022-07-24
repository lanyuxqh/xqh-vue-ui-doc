<template>
  <div class="modal-size">
    <x-space>
      <x-button @click="handleModalOpen2('xs')">xs</x-button>
      <x-button @click="handleModalOpen2('sm')">sm</x-button>
      <x-button @click="handleModalOpen2('md')">md</x-button>
      <x-button @click="handleModalOpen2('lg')">lg</x-button>
    </x-space>
    <x-modal :show="modalShow2" title="提示" :confirm="onConfirm2" :cancel="onCancel2" @close="onClose2" :size="size">
      <div :style="{'display':'flex','algin-items':'center','padding':'12px 0px'}">
        <x-icon icon="warning-circle-fill" color="#e6a23c" :style="{'margin-right':'8px'}"></x-icon>
        <span>此操作将永久删除该文件, 是否继续?</span>
      </div>
    </x-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modalShow2: false,
      size: 'md',
    }
  },
  methods: {
    handleModalOpen2 (size) {
      this.modalShow2 = true
      this.size = size
    },
    onConfirm2 () {
      console.log('confirm')
    },
    onCancel2 () {
      console.log('cancel')
    },
    onClose2 () {
      this.modalShow2 = false
    },
  },
}
</script>
