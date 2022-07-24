# Grid 布局

### 基础用法

<br/>

<demo-block>
:::slot source
<grid-basic></grid-basic>
:::

使用`offset`属性来设置偏移占用指定的列数。

:::slot highlight

```html

```

:::
</demo-block>

### Attributes 参数

| 参数     | 说明           | 类型  | 可选值 | 默认值 |
| :------- | :------------- | :---- | :----- | :----- |
| selected | 当前激活的面板 | Array | -      | -      |

### Event 事件

| 事件名 | 说明                            | 回调参数        |
| :----- | :------------------------------ | :-------------- |
| focus  | textarea 文本域在获取焦点时触发 | (event: Event)  |
| input  | textarea 文本域值变化时触发     | (value: String) |
