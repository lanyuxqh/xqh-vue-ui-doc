# Spread 展开动画

### 基础用法

<br/>

<demo-block>
:::slot source
<spread-basic></spread-basic>
:::

:::slot highlight

```html
<template>
  <div class="spread-basic">
    <x-button @click="spreadShow = !spreadShow">Click Me</x-button>
    <x-spread :duration="1000">
      <div class="spread" v-if="spreadShow"></div>
    </x-spread>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        spreadShow: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .spread {
    width: 100%;
    height: 100px;
    border-radius: 4px;
    background-color: #d3dce6;
    margin: 10px auto;
  }
</style>
```

:::
</demo-block>

### Attributes 参数

| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| :------- | :------- | :----- | :----- | :----- |
| duration | 过渡时间 | Number | -      | -      |
