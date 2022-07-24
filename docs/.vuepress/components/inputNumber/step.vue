<template>
  <div class="inputNumber-step">
    <x-input-number v-model="inputNumberValue3" :step="2"></x-input-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputNumberValue3: 5,
    }
  }
}
</script>