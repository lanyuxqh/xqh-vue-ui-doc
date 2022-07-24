<template>
  <div class="textarea-basic">
    <x-textarea v-model="textareaValue1" placeholder="请输入内容" @input="handleTextareaInput"></x-textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textareaValue1: '',
    }
  },
  methods:{
    handleTextareaInput(e){
      console.log(e)
    }
  }
}
</script>

