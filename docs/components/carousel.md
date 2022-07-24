# Carousel 轮播图

### 基础用法

<br/>

<demo-block>
:::slot source
<carousel-basic></carousel-basic>
:::

:::slot highlight

```html
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
```

:::
</demo-block>

### Attributes 参数

| 参数         | 说明                                  | 类型    | 可选值       | 默认值 |
| :----------- | :------------------------------------ | :------ | :----------- | :----- |
| height       | 走马灯的高度                          | String  | -            | 200px  |
| autoplay     | 是否自动切换                          | Boolean | true / false | true   |
| delay        | 自动切换的时间间隔，单位为毫秒        | Number  | -            | 3000   |
| initialIndex | 初始状态激活的幻灯片的索引，从 0 开始 | Number  | -            | 0      |
| loop         | 是否循环显示                          | Boolean | true / false | true   |
