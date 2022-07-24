<template>
  <div class="select-multiple">
    <x-select placeholder="请选择" :options="selectOptions6" v-model="selectValue6" multiple @change="handleSelectChange" width="400px" height="60px"></x-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectOptions6: [
        { label: "HTML", value: "HTML" },
        { label: "CSS", value: "CSS" },
        { label: "Javascript", value: "Javascript" },
        { label: "Npm", value: "Npm" },
        { label: "Webpack", value: "Webpack" },
        { label: "Node", value: "Node" },
        { label: "Java", value: "Java" },
        { label: "XML", value: "XML" },
        { label: "xqh-vue-ui", value: "xqh-vue-ui" },
      ],
      selectValue6: ['HTML', 'CSS', 'Node'],
    }
  },
  methods: {
    handleSelectChange (select, index) {
      console.log(select, index)
    }
  }
}
</script>
