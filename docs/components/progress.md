# Progress 进度条

### 基础用法

<br/>

<demo-block>
:::slot source
<progress-basic></progress-basic>
:::

:::slot highlight

```html
<template>
  <div class="progress-basic">
    <x-progress type="bar" :width="10" :percentage="50" color="lightblue"></x-progress>
    <br />
    <x-progress type="bar" :width="15" :percentage="30" color="rgb(255, 193, 7)"></x-progress>
    <br />
    <x-progress
      type="circle"
      color="lightblue"
      backgroundColor="rgb(248, 220, 220)"
      :strokeWidth="10"
      :width="100"
      :percentage="30"
    ></x-progress>
  </div>
</template>
```

:::
</demo-block>

### Attributes 参数

| 参数            | 说明                                            | 类型    | 可选值       | 默认值 |
| :-------------- | :---------------------------------------------- | :------ | :----------- | :----- |
| type            | 进度条类型                                      | String  | bar / circle | bar    |
| width           | 进度条宽度                                      | Number  | -            | 10     |
| backgroundColor | 进度条背景颜色                                  | String  | -            | -      |
| color           | 进度条已完成颜色                                | String  | -            | -      |
| percentage      | 进度百分比                                      | Number  | -            | 0      |
| stroke-width    | type 为 circle 时使用，代表圆圈的宽度           | Number  | -            | 10     |
| isRound         | type 为 circle 时使用，代表已完成边框是否为圆弧 | Boolean | true / false | true   |
