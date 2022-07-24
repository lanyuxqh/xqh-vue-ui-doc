<template>
  <div class="grid-responsive">
    <x-row :gutter="20">
      <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-grey-dark"></div>
      </x-col>
      <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-grey-light"></div>
      </x-col>
      <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-grey-dark"></div>
      </x-col>
      <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-grey-light"></div>
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