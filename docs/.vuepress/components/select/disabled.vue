<template>
  <div class="select-disabled">
    <x-select placeholder="请选择" :options="selectOptions2" v-model="selectValue2" disabled></x-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectOptions2: [
        { label: "中国", value: "zhongguo" },
        { label: "俄罗斯", value: "eluosi", disabled: true },
        { label: "美国", value: "meiguo" },
        { label: "澳大利亚", value: "aodaliya", disabled: true },
        { label: "巴基斯坦", value: "bajisitan" },
      ],
      selectValue2: 'zhongguo',
    }
  },
}
</script>
