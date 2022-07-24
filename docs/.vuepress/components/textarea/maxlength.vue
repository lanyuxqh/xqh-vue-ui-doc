<template>
  <div class="textarea-maxlength">
    <x-textarea v-model="textareaValue3" placeholder="请输入内容" :maxlength="50"></x-textarea>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textareaValue3: 'hello'
    }
  }
}
</script>