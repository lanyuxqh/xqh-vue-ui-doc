# Container 容器

用于布局的容器组件，方便快速搭建页面的基本结构。

### 常见页面布局

`<x-container>`：外层容器。当子元素中包含`<x-header>` 或 `<x-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<x-header>`：顶栏容器。

`<x-aside>`：侧边栏容器。

`<x-main>`：主要区域容器。

`<x-footer>`：底栏容器。

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<x-container>`的子元素只能是后四者，后四者的父元素也只能是`<x-container>`。

<demo-block>
:::slot source
<container-basic></container-basic>
:::

:::slot highlight

```html
<template>
  <div class="container-basic">
    <x-container>
      <x-header>Header</x-header>
      <x-main>Main</x-main>
    </x-container>
    <br />
    <x-container>
      <x-header>Header</x-header>
      <x-main>Main</x-main>
      <x-footer>Footer</x-footer>
    </x-container>
    <br />
    <x-container>
      <x-aside width="200px">Aside</x-aside>
      <x-main>Main</x-main>
    </x-container>
    <br />
    <x-container>
      <x-header>Header</x-header>
      <x-container>
        <x-aside width="200px">Aside</x-aside>
        <x-main>Main</x-main>
      </x-container>
    </x-container>
    <br />
    <x-container>
      <x-header>Header</x-header>
      <x-container>
        <x-aside width="200px" style="line-height:220px">Aside</x-aside>
        <x-container>
          <x-main>Main</x-main>
          <x-footer>Footer</x-footer>
        </x-container>
      </x-container>
    </x-container>
    <br />
    <x-container>
      <x-aside style="line-height:220px">Aside</x-aside>
      <x-container>
        <x-header>Header</x-header>
        <x-main>Main</x-main>
      </x-container>
    </x-container>
    <br />
    <x-container>
      <x-aside style="line-height:280px">Aside</x-aside>
      <x-container>
        <x-header>Header</x-header>
        <x-main>Main</x-main>
        <x-footer>Footer</x-footer>
      </x-container>
    </x-container>
  </div>
</template>
<style lang="scss" scoped>
  .x-header,
  .x-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .x-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .x-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
```

:::
</demo-block>

### Aside Attributes 参数

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| :---- | :--------- | :----- | :----- | :----- |
| width | 侧边栏宽度 | string | -      | 300px  |
