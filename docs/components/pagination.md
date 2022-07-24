# Pagination 分页

### 基础用法

<br/>

<demo-block>
:::slot source
<pagination-basic></pagination-basic>
:::

:::slot highlight

```html
<template>
  <div class="pagination-basic">
    <x-pagination :total="10" :pager-count="7" :current-page.sync="currentPage"></x-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 5
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明                                     | 类型   | 可选值 | 默认值 |
| :---------- | :--------------------------------------- | :----- | :----- | :----- |
| total       | 总条目数                                 | Number | -      | 1      |
| pagerCount  | 页码按钮的数量，当总页数超过该值时会折叠 | Number | -      | 7      |
| currentPage | 当前页数                                 | Number | -      | 1      |
