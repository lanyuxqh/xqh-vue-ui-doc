# Space 间距

### 基础用法

<br/>

<demo-block>
:::slot source
<space-basic></space-basic>
:::

:::slot highlight

```html
<x-space>
  <x-button v-for="i in 10" :key="i">button{{i}}</x-button>
</x-space>
```

:::
</demo-block>

### 纵向间距

<br/>

<demo-block>
:::slot source
<space-vertical></space-vertical>
:::

设置`inline`属性为 false

:::slot highlight

```html
<x-space :inline="false">
  <x-button v-for="i in 5" :key="i">button{{i}}</x-button>
</x-space>
```

:::
</demo-block>

### 自定义间距大小

<br/>

<demo-block>
:::slot source
<space-size></space-size>
:::

设置`size`属性自定义间距大小。

:::slot highlight

```html
<x-space :size="[15,5]">
  <x-button v-for="i in 15" :key="i">button{{i}}</x-button>
</x-space>
```

:::
</demo-block>

### Attributes 参数

| 参数   | 说明                                                                                                                    | 类型    | 可选值       | 默认值   |
| :----- | :---------------------------------------------------------------------------------------------------------------------- | :------ | :----------- | :------- |
| inline | 是否为水平或者垂直                                                                                                      | Boolean | true / false | true     |
| size   | 自定义间距大小，接收两个参数，第一个为垂直间距，第二个为水平间距，当 inline 为 false 是，只需要一个参数设置垂直间距即可 | Array   | -            | [20, 20] |
