<template>
  <div class="select-optdisabled">
    <x-select placeholder="请选择" :options="selectOptions4" v-model="selectValue4" labelFiled="cityName" valueFiled="cityCode"></x-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectOptions4: [
        { cityName: "北京", cityCode: "131" },
        { cityName: "天津", cityCode: "332" },
        { cityName: "上海", cityCode: "289", disabled: true },
        { cityName: "重庆", cityCode: "132" },
        { cityName: "深圳", cityCode: "340" },
      ],
      selectValue4: '132',
    }
  },
}
</script>
