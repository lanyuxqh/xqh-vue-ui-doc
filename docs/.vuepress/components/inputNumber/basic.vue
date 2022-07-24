<template>
  <div class="inputNumber-basic">
    <x-input-number v-model="inputNumberValue1" :min="1" :max="10" @change="handleInputNumberChange"></x-input-number>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputNumberValue1: 1,
    }
  },
  methods: {
    handleInputNumberChange (value) {
      console.log(value)
    },
  },
}
</script>
