<template>
  <div class="textarea-maxlength">
    <x-textarea v-model="textareaValue4" placeholder="请输入内容" focusColor="#ec3437"></x-textarea>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textareaValue4: ''
    }
  }
}
</script>