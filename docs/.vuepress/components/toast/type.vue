<template>
  <div class="toast-type">
    <x-space>
      <x-button @click="toastShow7" status="success">success</x-button>
      <x-button @click="toastShow8" status="info">info</x-button>
      <x-button @click="toastShow9" status="warning">warning</x-button>
      <x-button @click="toastShow10" status="danger">danger</x-button>
    </x-space>
  </div>
</template>
<script>
export default {
  methods: {
    toastShow7 () {
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
        type: 'success',
      })
    },
    toastShow8 () {
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
        type: 'info',
      })
    },
    toastShow9 () {
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
        type: 'warning',
      })
    },
    toastShow10 () {
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
        type: 'danger',
      })
    },
  }
}
</script>
