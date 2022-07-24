<template>
  <div class="carousel-basic">
    <x-carousel height="200px" :autoplay="true" :delay="2000" :initial-index="0" :loop="true">
      <x-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </x-carousel-item>
    </x-carousel>
  </div>
</template>
<style lang="scss" scoped>
.x-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}
.x-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.x-carousel-item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
</style>