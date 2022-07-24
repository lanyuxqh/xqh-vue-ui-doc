<template>
  <div class="input-password">
    <x-space>
      <x-input v-model="inputValue4" type="password" placeholder="请输入内容" name="password" show-password></x-input>
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue4: ''
    }
  },
}
</script>