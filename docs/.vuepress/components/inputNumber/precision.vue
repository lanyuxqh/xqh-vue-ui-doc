<template>
  <div class="inputNumber-precision">
    <x-input-number v-model="inputNumberValue4" :precision="2" :step="0.1" :max="10"></x-input-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputNumberValue4: 9,
    }
  }
}
</script>