<template>
  <div class="inputNumber-size">
    <x-space>
      <x-input-number size="lg" v-model="inputNumberValue5"></x-input-number>
      <x-input-number size="md" v-model="inputNumberValue5"></x-input-number>
      <x-input-number size="sm" v-model="inputNumberValue5"></x-input-number>
      <x-input-number size="xs" v-model="inputNumberValue5"></x-input-number>
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputNumberValue5: 1,
    }
  }
}
</script>