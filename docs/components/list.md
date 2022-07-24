# List 列表

### 基础用法

<br/>

<demo-block>
:::slot source
<list-basic></list-basic>
:::

:::slot highlight

```html
<template>
  <div class="list-basic">
    <x-list :data="listData1"></x-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        listData1: [
          'God finds himself by creating.',
          'The dry river-bed finds no thanks for its past.',
          'Life finds its wealth by the claims of the world, and its worth by the claims of love.'
        ]
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义

<br/>

<demo-block>
:::slot source
<list-custom></list-custom>
:::

:::slot highlight

```html
<template>
  <div class="list-custom">
    <x-list :data="listData2" size="lg" border hover></x-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        listData2: [
          'God finds himself by creating.',
          'The dry river-bed finds no thanks for its past.',
          'Life finds its wealth by the claims of the world, and its worth by the claims of love.'
        ]
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数   | 说明           | 类型    | 可选值            | 默认值 |
| :----- | :------------- | :------ | :---------------- | :----- |
| data   | 列表数据       | Array   | -                 | []     |
| size   | 尺寸           | String  | xs / sm / md / lg | md     |
| border | 是否有边框     | Boolean | true / false      | false  |
| hover  | 是否有悬停样式 | Boolean | true / false      | false  |
