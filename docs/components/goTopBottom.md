# GoTopBottom 返回顶部/底部

### 基础用法

<br/>

<demo-block>
:::slot source
<goTopBottom-basic></goTopBottom-basic>
:::

:::slot highlight

```html
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
```

:::
</demo-block>

### Attributes 参数

| 参数                  | 说明                               | 类型   | 可选值 | 默认值 |
| :-------------------- | :--------------------------------- | :----- | :----- | :----- |
| target                | 触发滚动的对象                     | String | -      | -      |
| goTopVisibilityHeight | 滚动高度达到此参数值才出现返回顶部 | Number | -      | 200    |
| tobotVisibilityHeight | 滚动高度达到此参数值才出现返回底部 | Number | -      | 200    |
| right                 | 控制其显示位置, 距离页面右边距     | Number | -      | 40     |
| bottom                | 控制其显示位置, 距离页面底部距离   | Number | -      | 40     |
