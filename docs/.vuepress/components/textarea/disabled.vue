<template>
  <div class="textarea-disabled">
    <x-textarea disabled v-model="textareaValue2" placeholder="请输入内容"></x-textarea>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textareaValue2: 'hello'
    }
  }
}
</script>
