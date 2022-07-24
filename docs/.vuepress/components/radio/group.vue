<template>
  <div class="radio-group">
    <x-radio-group v-model="radioValue3">
      <x-radio label="1">北京</x-radio>
      <x-radio label="2">上海</x-radio>
      <x-radio label="3">杭州</x-radio>
    </x-radio-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radioValue3: '2',
    }
  }
}
</script>

