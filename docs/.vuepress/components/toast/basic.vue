<template>
  <div class="toast-basic">
    <x-space>
      <x-button @click="toastShow1">默认toast</x-button>
      <x-button @click="toastShow2">自动关闭toast</x-button>
    </x-space>
  </div>
</template>
<script>
export default {
  methods: {
    toastShow1 () {
      console.log(this.$xToast)
      this.$xToast('message1')
    },
    toastShow2 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        autoClose: 3
      })
    },
  },
}
</script>
