<template>
  <div class="grid-flex">
    <x-row justify="start">
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-light">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
    </x-row>
    <br>
    <x-row justify="end">
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-light">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
    </x-row>
    <br>
    <x-row align="start">
      <x-col :span="8">
        <div class="grid-content grid-content-1 bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-2 bg-grey-light">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-3 bg-grey-dark">8</div>
      </x-col>
    </x-row>
    <br>
    <x-row align="center">
      <x-col :span="8">
        <div class="grid-content grid-content-1 bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-2 bg-grey-light">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-3 bg-grey-dark">8</div>
      </x-col>
    </x-row>
    <br>
  </div>
</template>
<style lang="scss" scoped>
.grid-content {
  border-radius: 4px;
  height: 36px;
  color: white;
  text-align: center;
  line-height: 36px;
  &-1 {
    height: 36px;
    line-height: 36px;
  }
  &-2 {
    height: 60px;
    line-height: 60px;
  }
  &-3 {
    height: 40px;
    line-height: 40px;
  }
}
.bg-grey-dark {
  background: #99a9bf;
}
.bg-grey-light {
  background: #d3dce6;
}
</style>