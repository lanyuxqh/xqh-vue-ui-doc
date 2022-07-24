<template>
  <div class="select-basic">
    <x-select placeholder="请选择" :options="selectOptions1" v-model="selectValue1" @change="handleSelectChange"></x-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectOptions1: [
        { label: "中国", value: "zhongguo" },
        { label: "俄罗斯", value: "eluosi" },
        { label: "美国", value: "meiguo" },
        { label: "澳大利亚", value: "aodaliya" },
        { label: "巴基斯坦", value: "bajisitan" },
      ],
      selectValue1: '',
    }
  },
  methods: {
    handleSelectChange (select, index) {
      console.log(select, index);
    },
  },
}
</script>
