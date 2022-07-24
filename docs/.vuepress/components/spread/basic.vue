<template>
  <div class="spread-basic">
    <x-button @click="spreadShow = !spreadShow">Click Me</x-button>
    <x-spread :duration="1000">
      <div class="spread" v-if="spreadShow"></div>
    </x-spread>
  </div>
</template>
<script>
export default {
  data () {
    return {
      spreadShow: false
    }
  }
}
</script>
<style lang="scss" scoped>
.spread {
  width: 100%;
  height: 100px;
  border-radius: 4px;
  background-color: #d3dce6;
  margin: 10px auto;
}
</style>