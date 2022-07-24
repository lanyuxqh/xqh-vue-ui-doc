<template>
  <div class="select-searchable">
    <x-select placeholder="请选择" :options="selectOptions5" v-model="selectValue5" searchable></x-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectOptions5: [
        { label: "HTML", value: "HTML", disabled: true },
        { label: "CSS", value: "CSS" },
        { label: "Javascript", value: "Javascript" },
        { label: "Npm", value: "Npm" },
        { label: "Webpack", value: "Webpack" },
        { label: "Node", value: "Node" },
        { label: "Java", value: "Java" },
        { label: "XML", value: "XML" },
        { label: "xqh-vue-ui", value: "xqh-vue-ui" },
      ],
      selectValue5: '',
    }
  }
}
</script>
