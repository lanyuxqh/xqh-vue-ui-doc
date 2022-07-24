<template>
  <div class="input-basic">
    <x-space>
      <x-input v-model="inputValue1" type="text" placeholder="请输入内容" name="username" @change="handInputChange"></x-input>{{inputValue1}}
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue1: ''
    }
  },
  methods: {
    handInputChange (e) {
      console.log(e)
    }
  }
}
</script>