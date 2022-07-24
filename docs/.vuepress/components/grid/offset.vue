<template>
  <div class="grid-offset">
    <x-row>
      <x-col :span="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8" :offset="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
    </x-row>
  </div>
</template>
<style lang="scss" scoped>
.grid-content {
  border-radius: 4px;
  height: 36px;
  color: white;
  text-align: center;
  line-height: 36px;
}
.bg-grey-dark {
  background: #99a9bf;
}
</style>