<template>
  <div class="input-clearable">
    <x-space>
      <x-input v-model="inputValue3" type="text" placeholder="请输入内容" name="username" clearable></x-input>
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue3: ''
    }
  },
}
</script>