<template>
  <div class="checkbox-basic">
    <x-checkbox v-model="checkValue1" @change="handleCheckChange">同意</x-checkbox>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkValue1: true,
    }
  },
  methods: {
    handleCheckChange (value) {
      console.log(value)
    }
  }
}
</script>

