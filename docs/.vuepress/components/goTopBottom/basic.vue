<template>
  <div class="goTopBottom-basic">
    <div class="wrapper">
      <div class="wrapper-content">
        <template>
          <x-go-top-bottom target=".wrapper" :bottom="50"></x-go-top-bottom>
        </template>
        <p v-for="i in 100" :key="i">content{{i}}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.goTopBottom-basic {
  .wrapper {
    height: 700px;
    overflow: auto;
    background-color: #d3dce6;
    .wrapper-content {
      height: 2000px;
      text-align: center;
    }
  }
}
</style>
