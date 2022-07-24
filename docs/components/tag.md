# Tag 标签

### 基础用法

<br/>

<demo-block>
:::slot source
<tag-basic></tag-basic>
:::

:::slot highlight

```html
<template>
  <div class="tag-basic">
    <x-space>
      <x-tag>默认tag</x-tag>
      <x-tag
        v-for="(tag,index) in tagData"
        :key="tag.text"
        :type="tag.type"
        :size="tag.size"
        closable
        @close="handleTagClose(index)"
      >
        {{tag.text}}
      </x-tag>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tagData: [
          {
            text: 'tag1',
            type: 'success',
            size: 'lg'
          },
          {
            text: 'tag2',
            type: 'info',
            size: 'md'
          },
          {
            text: 'tag3',
            type: 'warning',
            size: 'sm'
          },
          {
            text: 'tag4',
            type: 'danger',
            size: 'xs'
          }
        ]
      }
    },
    methods: {
      handleTagClose(index) {
        this.tagData.splice(index, 1)
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
<tag-custom></tag-custom>
:::

:::slot highlight

```html
<x-tag color="pink" type="info">
  <a style="color:white" target="_blank" href="https://www.baidu.com">Link</a>
</x-tag>
```

:::
</demo-block>

### Attributes 参数

| 参数     | 说明       | 类型    | 可选值                                      | 默认值  |
| :------- | :--------- | :------ | :------------------------------------------ | :------ |
| type     | 标签类型   | String  | primary / success / info / warning / danger | primary |
| size     | 标签尺寸   | String  | xs / sm / md / lg                           | md      |
| closable | 是否可关闭 | Boolean | true / false                                | false   |
| color    | 背景颜色   | String  | -                                           | -       |

### Event 事件

| 事件名 | 说明           | 回调参数       |
| :----- | :------------- | :------------- |
| close  | 标签关闭时触发 | (event: Event) |
| click  | 标签点击时触发 | (event: Event) |
