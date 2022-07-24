<template>
  <div class="icon-basic">
    <x-space>
      <x-icon icon="location" @click="handleClickIcon"></x-icon>
      <x-icon icon="check-square"></x-icon>
      <x-icon icon="left-circle-fill" :size="26"></x-icon>
      <x-icon icon="star-fill" color="pink"></x-icon>
      <x-icon icon="calendar" ></x-icon>
    </x-space>
  </div>
</template>
<script>
export default {
  methods: {
    handleClickIcon (e) {
      console.log(e)
    }
  }
}
</script>