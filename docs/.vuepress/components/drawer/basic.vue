<template>
  <div class="drawer-basic">
    <x-space>
      <x-button @click="handleDrawerOpen1">从左向右打开Drawer</x-button>
      <x-button @click="handleDrawerOpen2">从右向左打开Drawer</x-button>
      <x-button @click="handleDrawerOpen3">从上到下打开Drawer</x-button>
      <x-button @click="handleDrawerOpen4">从下到上打开Drawer</x-button>
    </x-space>
    <x-drawer :direction="direction" :show="drawerShow" title="这是标题" :confirm="onConfirm3" :cancel="onCancel3" @close="onClose3">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </x-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawerShow: false,
      direction: 'ltr',
    }
  },
  methods: {
    handleDrawerOpen1 () {
      this.direction = 'ltr'
      this.drawerShow = true
    },
    handleDrawerOpen2 () {
      this.direction = 'rtl'
      this.drawerShow = true
    },
    handleDrawerOpen3 () {
      this.direction = 'ttb'
      this.drawerShow = true
    },
    handleDrawerOpen4 () {
      this.direction = 'btt'
      this.drawerShow = true
    },
    onConfirm3 () {
      console.log('confirm')
    },
    onCancel3 () {
      console.log('cancel')
    },
    onClose3 () {
      this.drawerShow = false
    },
  },
}
</script>
<style>
</style>
