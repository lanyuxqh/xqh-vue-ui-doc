<template>
  <div class="inputNumber-disabled">
    <x-input-number v-model="inputNumberValue2" disabled></x-input-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputNumberValue2: 1,
    }
  }
}
</script>
