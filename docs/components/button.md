# Button 按钮

网页常用 button 按钮，常用于响应一个事件或处理某个逻辑。

### 基础用法

<br/>

<demo-block>
:::slot source
<button-basic></button-basic>
:::

使用`type`、`status`和`shape`属性来定义 Button 的样式。

:::slot highlight

```html
<x-space>
  <x-button type="default">Default</x-button>
  <x-button type="primary">Primary</x-button>
  <x-button type="link">Link</x-button>
  <x-button type="ghost">Ghost</x-button>
  <x-button type="delicate">Delicate</x-button>
</x-space>
<x-space>
  <x-button type="default" status="success">success</x-button>
  <x-button type="default" status="info">info</x-button>
  <x-button type="default" status="warning">warning</x-button>
  <x-button type="default" status="danger">danger</x-button>
</x-space>
<x-space>
  <x-button type="primary" status="success">success</x-button>
  <x-button type="primary" status="info">info</x-button>
  <x-button type="primary" status="warning">warning</x-button>
  <x-button type="primary" status="danger">danger</x-button>
</x-space>
<x-space>
  <x-button type="primary" shape="square">square</x-button>
  <x-button type="primary" shape="square" icon="search"></x-button>
  <x-button type="primary" shape="round">round</x-button>
  <x-button type="primary" shape="circle" icon="edit"></x-button>
</x-space>
```

:::
</demo-block>

### 按钮尺寸

<br/>

<demo-block>
:::slot source
<button-size></button-size>
:::

使用`size`属性来定义 Button 的尺寸。

:::slot highlight

```html
<x-space>
  <x-button size="xs">xs</x-button>
  <x-button size="sm">sm</x-button>
  <x-button size="md">md</x-button>
  <x-button size="lg">lg</x-button>
</x-space>
```

:::
</demo-block>

### 图标按钮

<br/>

<demo-block>
:::slot source
<button-icon></button-icon>
:::

使用`icon`和`iconPosition`属性在 Button 内嵌入 Icon。

:::slot highlight

```html
<x-space>
  <x-button type="primary" status="success" shape="circle" icon="check"></x-button>
  <x-button type="primary" icon="search">search</x-button>
  <x-button icon="edit" iconPosition="right">edit</x-button>
</x-space>
```

:::
</demo-block>

### 加载状态

<br/>

<demo-block>
:::slot source
<button-loading></button-loading>
:::

使用`loading`让按钮处于加载状态。

:::slot highlight

```html
<x-space>
  <x-button :loading="true"></x-button>
  <x-button :loading="true" type="primary">loading</x-button>
  <x-button :loading="true" type="link" status="success">loading</x-button>
</x-space>
```

:::
</demo-block>

### 禁用状态

<br/>

<demo-block>
:::slot source
<button-disabled></button-disabled>
:::

使用`disabled`让按钮处于不可用状态。

:::slot highlight

```html
<x-space>
  <x-button :disabled="true">disable</x-button>
  <x-button :disabled="true" type="primary" status="success">disable</x-button>
</x-space>
```

:::
</demo-block>

### 按钮组合

<br/>

<demo-block>
:::slot source
<button-group></button-group>
:::

可以将多个 Button 放入 `x-button-group` 容器中。

:::slot highlight

```html
<x-space>
  <x-button-group>
    <x-button type="primary" icon="left" icon-position="left">上一页</x-button>
    <x-button type="primary" icon="right" icon-position="right">下一页</x-button>
  </x-button-group>
  <x-button-group>
    <x-button icon="search"></x-button>
    <x-button icon="setting"></x-button>
    <x-button icon="edit"></x-button>
  </x-button-group>
</x-space>
```

:::
</demo-block>

### Attributes 参数

| 参数         | 说明           | 类型    | 可选值                                      | 默认值  |
| :----------- | :------------- | :------ | :------------------------------------------ | :------ |
| type         | 按钮类型       | String  | default / primary / link / ghost / delicate | default |
| status       | 按钮状态       | String  | success / info / warning / danger           | default |
| shape        | 按钮形状       | String  | square / round / circle                     | square  |
| size         | 按钮尺寸       | String  | xs / ms / md / lg                           | md      |
| icon         | 图标按钮       | String  | 和图标的值一样                              | —       |
| iconPosition | 图标位置       | String  | left / right                                | left    |
| loading      | 是否为加载状态 | Boolean | —                                           | false   |
| disabled     | 是否为禁用状态 | Boolean | —                                           | false   |

### Event 事件

| 事件名 | 说明             | 回调参数       |
| :----- | :--------------- | :------------- |
| click  | 按钮在点击时触发 | (event: Event) |
