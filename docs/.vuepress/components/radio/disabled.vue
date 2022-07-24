<template>
  <div class="radio-disabled">
    <x-radio disabled v-model="radioValue2" label="1">女</x-radio>
    <x-radio disabled v-model="radioValue2" label="2">男</x-radio>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radioValue2: "2"
    }
  }
}
</script>