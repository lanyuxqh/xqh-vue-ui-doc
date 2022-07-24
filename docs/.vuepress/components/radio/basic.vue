<template>
  <div class="radio-basic">
    <x-radio label="1" v-model="radioValue1" @change="handleRadioChange">女</x-radio>
    <x-radio label="2" v-model="radioValue1" @change="handleRadioChange">男</x-radio>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radioValue1: "1"
    }
  },
  methods: {
    handleRadioChange (value) {
      console.log(value)
    },
  }
}
</script>
