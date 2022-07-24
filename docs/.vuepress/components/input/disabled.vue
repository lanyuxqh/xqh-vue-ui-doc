<template>
  <div class="input-disabled">
    <x-space>
      <x-input v-model="inputValue2" type="text" placeholder="请输入内容" name="username" disabled></x-input>
      <x-input v-model="inputValue2" type="text" placeholder="请输入内容" name="username" readonly></x-input>
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue2: 'lanyu'
    }
  },
}
</script>