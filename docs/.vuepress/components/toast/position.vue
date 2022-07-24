<template>
  <div class="toast-position">
    <x-space>
      <x-button @click="toastShow3">上toast</x-button>
      <x-button @click="toastShow4">左toast</x-button>
      <x-button @click="toastShow5">下toast</x-button>
      <x-button @click="toastShow6">右toast</x-button>
    </x-space>
  </div>
</template>
<script>
export default {
  methods: {
    toastShow3 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'top',
      })
    },
    toastShow4 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'left',
      })
    },
    toastShow5 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'bottom',
      })
    },
    toastShow6 () {
      this.$xToast({
        message: '3S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback () {
            console.log('Closed')
          }
        },
        enableHtml: true,
        autoClose: 3,
        position: 'right',
      })
    },
  },
}
</script>
