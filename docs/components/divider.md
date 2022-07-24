# Divider 分割线

### 基础用法

<br/>

<demo-block>
:::slot source
<divider-basic></divider-basic>
:::

:::slot highlight

```html
<template>
  <div class="divider-basic">
    <span>有些爱像断线纸鸢 结局悲余手中线</span>
    <x-divider></x-divider>
    <span>有些恨像是一个圈 冤冤相报不了结</span>
  </div>
</template>
```

:::
</demo-block>

### 垂直分割

<br/>

<demo-block>
:::slot source
<divider-vertical></divider-vertical>
:::

通过设置`direction`属性为 vertical。

:::slot highlight

```html
<span>雨纷纷</span>
<x-divider direction="vertical"></x-divider>
<span>旧故里</span>
<x-divider direction="vertical"></x-divider>
<span>草木深</span>
```

:::
</demo-block>

### 文案位置

<br/>

<demo-block>
:::slot source
<divider-position></divider-position>
:::

通过设置`content-position`属性定义分割线文案的位置。

:::slot highlight

```html
<x-divider content-position="left">半城烟沙</x-divider>
<x-divider>
  <x-icon icon="heart"></x-icon>
</x-divider>
<x-divider content-position="right">随风而下</x-divider>
```

:::
</demo-block>

### Attributes 参数

| 参数             | 说明             | 类型   | 可选值                | 默认值     |
| :--------------- | :--------------- | :----- | :-------------------- | :--------- |
| direction        | 分割线方向       | String | horizontal / vertical | horizontal |
| content-position | 分割线文案的位置 | String | left / right / center | center     |
