# Card 卡片

### 基础用法

<br/>

<demo-block>
:::slot source
<card-basic></card-basic>
:::

:::slot highlight

```html
<template>
  <div class="card-basic">
    <x-card style="width:480px">
      <div slot="header">
        <span>卡片名称</span>
        <x-button style="float: right; padding: 3px 0" type="delicate">操作按钮</x-button>
      </div>
      <div v-for="i in 4" :key="i" style="margin-bottom: 18px; font-size: 14px">
        {{'列表内容 ' + i }}
      </div>
    </x-card>
  </div>
</template>
```

:::
</demo-block>

### 带图片

<br/>

<demo-block>
:::slot source
<card-img></card-img>
:::

:::slot highlight

```html
<template>
  <div class="card-img">
    <x-card body-style="padding: 0px">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
      <div class="text">
        <span>好吃的汉堡</span>
        <div>
          <time class="time">{{ currentDate }}</time>
          <x-button type="delicate" class="button">操作按钮</x-button>
        </div>
      </div>
    </x-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentDate: new Date().toLocaleString()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .card-img {
    .x-card {
      width: 300px;
      img {
        width: 100%;
        display: block;
      }
      .text {
        position: relative;
        padding: 14px;
        .time {
          font-size: 13px;
          color: #999;
        }
        .button {
          position: absolute;
          right: 10px;
          bottom: 10px;
          color: #409eff;
        }
      }
    }
  }
</style>
```

:::
</demo-block>

### 卡片阴影

<br/>

<demo-block>
:::slot source
<card-shadow></card-shadow>
:::

通过`shadow`属性设置卡片阴影出现的时机：always、never 或 hover。

:::slot highlight

```html
<template>
  <div class="card-shadow">
    <x-space>
      <x-card shadow="always">总是显示</x-card>
      <x-card shadow="never">从不显示</x-card>
      <x-card shadow="hover">鼠标悬浮时显示</x-card>
    </x-space>
  </div>
</template>
```

:::
</demo-block>

### Attributes 参数

| 参数       | 说明             | 类型   | 可选值                 | 默认值              |
| :--------- | :--------------- | :----- | :--------------------- | :------------------ |
| body-style | 设置 body 的样式 | Object | -                      | { padding: '20px' } |
| shadow     | 设置阴影显示时机 | String | always / hover / never | always              |
