# Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局。

### 基础用法

使用单一分栏创建基础的栅格布局。

<demo-block>
:::slot source
<grid-basic></grid-basic>
:::

通过`row`和`col`组件，并通过`col`组件的`span`属性我们就可以自由地组合布局。

:::slot highlight

```html
<template>
  <div class="grid-basic">
    <x-row>
      <x-col :span="24">
        <div class="grid-content bg-grey-dark">24</div>
      </x-col>
    </x-row>
    <br />
    <x-row>
      <x-col :span="12">
        <div class="grid-content bg-grey-dark">12</div>
      </x-col>
      <x-col :span="12">
        <div class="grid-content bg-grey-light">12</div>
      </x-col>
    </x-row>
    <br />
    <x-row>
      <x-col :span="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content bg-grey-light">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
    </x-row>
    <br />
    <x-row>
      <x-col :span="6">
        <div class="grid-content bg-grey-dark">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-light">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-dark">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-light">6</div>
      </x-col>
    </x-row>
  </div>
</template>
<style lang="scss" scoped>
  .grid-content {
    border-radius: 4px;
    height: 36px;
    color: white;
    text-align: center;
    line-height: 36px;
  }
  .bg-grey-dark {
    background: #99a9bf;
  }
  .bg-grey-light {
    background: #d3dce6;
  }
</style>
```

:::
</demo-block>

### 分栏间隔

分栏之间存在间隔

<demo-block>
:::slot source
<grid-gutter></grid-gutter>
:::

`row`组件提供`gutter`属性来指定每一栏之间的间隔，默认间隔为 0。

:::slot highlight

```html
<template>
  <div class="grid-gutter">
    <x-row :gutter="20">
      <x-col :span="6">
        <div class="grid-content bg-grey-dark">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-light">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-dark">6</div>
      </x-col>
      <x-col :span="6">
        <div class="grid-content bg-grey-light">6</div>
      </x-col>
    </x-row>
  </div>
</template>

<style lang="scss" scoped>
  .grid-content {
    border-radius: 4px;
    height: 36px;
    color: white;
    text-align: center;
    line-height: 36px;
  }
  .bg-grey-dark {
    background: #99a9bf;
  }
  .bg-grey-light {
    background: #d3dce6;
  }
</style>
```

:::
</demo-block>

### 分栏偏移

支持偏移指定的栏数

<demo-block>
:::slot source
<grid-offset></grid-offset>
:::

通过制定`col`组件的`offset`属性可以指定分栏偏移的栏数。

:::slot highlight

```html
<template>
  <div class="grid-offset">
    <x-row>
      <x-col :span="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8" :offset="8">
        <div class="grid-content bg-grey-dark">8</div>
      </x-col>
    </x-row>
  </div>
</template>
<style lang="scss" scoped>
  .grid-content {
    border-radius: 4px;
    height: 36px;
    color: white;
    text-align: center;
    line-height: 36px;
  }
  .bg-grey-dark {
    background: #99a9bf;
  }
</style>
```

:::
</demo-block>

### 对齐方式

通过 flex 布局来对分栏进行灵活的对齐

<demo-block>
:::slot source
<grid-flex></grid-flex>
:::

使用`justify`和`align`属性来设置 flex 布局下的水平和垂直排列方式。

:::slot highlight

```html
<template>
  <div class="grid-flex">
    <x-row justify="start">
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-light">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
    </x-row>
    <br />
    <x-row justify="end">
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-light">4</div>
      </x-col>
      <x-col :span="4">
        <div class="grid-content bg-grey-dark">4</div>
      </x-col>
    </x-row>
    <br />
    <x-row align="start">
      <x-col :span="8">
        <div class="grid-content grid-content-1 bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-2 bg-grey-light">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-3 bg-grey-dark">8</div>
      </x-col>
    </x-row>
    <br />
    <x-row align="center">
      <x-col :span="8">
        <div class="grid-content grid-content-1 bg-grey-dark">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-2 bg-grey-light">8</div>
      </x-col>
      <x-col :span="8">
        <div class="grid-content grid-content-3 bg-grey-dark">8</div>
      </x-col>
    </x-row>
    <br />
  </div>
</template>
<style lang="scss" scoped>
  .grid-content {
    border-radius: 4px;
    height: 36px;
    color: white;
    text-align: center;
    line-height: 36px;
    &-1 {
      height: 36px;
      line-height: 36px;
    }
    &-2 {
      height: 60px;
      line-height: 60px;
    }
    &-3 {
      height: 40px;
      line-height: 40px;
    }
  }
  .bg-grey-dark {
    background: #99a9bf;
  }
  .bg-grey-light {
    background: #d3dce6;
  }
</style>
```

:::
</demo-block>

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<demo-block>
:::slot source
<grid-responsive></grid-responsive>
:::

:::slot highlight

```html
<template>
  <div class="grid-responsive">
    <x-row :gutter="20">
      <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-grey-dark"></div>
      </x-col>
      <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-grey-light"></div>
      </x-col>
      <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-grey-dark"></div>
      </x-col>
      <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-grey-light"></div>
      </x-col>
    </x-row>
  </div>
</template>
<style lang="scss" scoped>
  .grid-content {
    border-radius: 4px;
    height: 36px;
    color: white;
    text-align: center;
    line-height: 36px;
  }
  .bg-grey-dark {
    background: #99a9bf;
  }
  .bg-grey-light {
    background: #d3dce6;
  }
</style>
```

:::
</demo-block>

### Row Attributes 参数

| 参数    | 说明                      | 类型   | 可选值                                              | 默认值 |
| :------ | :------------------------ | :----- | :-------------------------------------------------- | :----- |
| gutter  | 栅格间隔                  | Number | -                                                   | 0      |
| justify | flex 布局下的水平排列方式 | String | start / end / center / space-around / space-between | start  |
| align   | flex 布局下的垂直排列方式 | String | start / end / center                                | center |

### Col Attributes 参数

| 参数   | 说明                                   | 类型                                         | 可选值 | 默认值 |
| :----- | :------------------------------------- | :------------------------------------------- | :----- | :----- |
| span   | 栅格占据的列数                         | Number                                       | -      | 24     |
| offset | 栅格左侧的间隔格数                     | Number                                       | -      | 0      |
| xs     | `< 768px`响应式栅格数或者栅格属性对象  | Number/Object (例如：{ span: 4, offset: 4 }) | -      | -      |
| sm     | `≥ 768px`响应式栅格数或者栅格属性对象  | Number/Object (例如：{ span: 4, offset: 4 }) | -      | -      |
| md     | `≥ 992px`响应式栅格数或者栅格属性对象  | Number/Object (例如：{ span: 4, offset: 4 }) | -      | -      |
| lg     | `≥ 1200px`响应式栅格数或者栅格属性对象 | Number/Object (例如：{ span: 4, offset: 4 }) | -      | -      |
| xl     | `≥ 1920px`响应式栅格数或者栅格属性对象 | Number/Object (例如：{ span: 4, offset: 4 }) | -      | -      |
