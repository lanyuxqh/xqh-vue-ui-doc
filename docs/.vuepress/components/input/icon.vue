<template>
  <div class="input-icon">
    <x-space>
      <x-input v-model="inputValue5" type="text" placeholder="请输入内容" name="username" prefix-icon="edit"></x-input>
      <x-input v-model="inputValue5" type="text" placeholder="请输入内容" name="username" suffix-icon="edit"></x-input>
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue5: ''
    }
  },
}
</script>