<template>
  <div class="grid-basic">
    <x-row>
      <x-col :span="24">
        <div class="grid-content bg-grey-dark">24</div>
      </x-col>
    </x-row>
    <br>
    <x-row>
      <x-col :span="12">
        <div class="grid-content bg-grey-dark">12</div>
      </x-col>
      <x-col :span="12">
        <div class="grid-content bg-grey-light">12</div>
      </x-col>
    </x-row>
    <br>
    <x-row>
      <x-col :span="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content bg-grey-light">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
    </x-row>
    <br>
    <x-row>
      <x-col :span="6">
        <div class="grid-content bg-grey-dark">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-light">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-dark">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-light">6</div>
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
.bg-grey-light {
  background: #d3dce6;
}
</style>