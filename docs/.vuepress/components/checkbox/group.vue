<template>
  <div class="check-group">
    <x-checkbox-group v-model="checkedList">
      <x-checkbox label="北京">北京</x-checkbox>
      <x-checkbox label="上海">上海</x-checkbox>
      <x-checkbox label="杭州">杭州</x-checkbox>
    </x-checkbox-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkedList: ['北京', '杭州']
    }
  }
}
</script>
