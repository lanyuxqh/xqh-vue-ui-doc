# Icon 图标

提供了一套常用的图标集合。

### 基础用法

<br />

<demo-block>
:::slot source
<icon-basic></icon-basic>
:::

使用`icon`属性来定义图标的样式

:::slot highlight

```html
<template>
  <div class="icon-basic">
    <x-space>
      <x-icon icon="location" @click="handleClickIcon"></x-icon>
      <x-icon icon="check-square"></x-icon>
      <x-icon icon="left-circle-fill" :size="26"></x-icon>
      <x-icon icon="star-fill" color="pink"></x-icon>
      <x-icon icon="calendar"></x-icon>
    </x-space>
  </div>
</template>
<script>
  export default {
    methods: {
      handleClickIcon(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::
</demo-block>

### 图标集合

<br />

<demo-block>
:::slot source
<icon-collection></icon-collection>
:::

</demo-block>

### Attributes 参数

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| :---- | :------- | :----- | :----- | :----- |
| icon  | 图标类名 | String | -      | -      |
| color | 图标颜色 | String | -      | black  |
| size  | 图标大小 | Number | -      | 24     |

### Event 事件

| 事件名 | 说明             | 回调参数       |
| :----- | :--------------- | :------------- |
| click  | 图标在点击时触发 | (event: Event) |
