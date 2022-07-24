<template>
  <div class="collapse-single">
    <x-collapse single :selected.sync="selectedCollapse2">
      <x-collapse-item title="标题1" name="1">内容一</x-collapse-item>
      <x-collapse-item title="标题2" name="2">内容二</x-collapse-item>
      <x-collapse-item title="标题3" name="3">内容三</x-collapse-item>
    </x-collapse>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedCollapse2: [],
    }
  },
}
</script>