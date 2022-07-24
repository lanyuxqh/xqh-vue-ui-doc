<template>
  <div class="loading-function">
    <x-button @click="handleLoadingShow2">方法调用</x-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleLoadingShow2 () {
      this.$xShowLoading({
        text: 'Loading...',
        opacity: 0.6,
        curtainColor: 'lightgrey',
        textColor: 'white',
        textFontSize: 20,
        iconColor: 'white',
        iconName: 'sync',
        iconSize: 30,
      })
      setTimeout(() => {
        this.$xHideLoading();
      }, 2000);
    },
  },
}
</script>
