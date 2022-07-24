# Loading 加载

### 基础用法

<br/>

<demo-block>
:::slot source
<loading-basic></loading-basic>
:::

:::slot highlight

```html
<template>
  <div class="loading-basic">
    <x-button @click="handleLoadingShow1">自定义loading</x-button>
    <x-loading v-show="loadingShow" text="马不停蹄加载中..."></x-loading>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loadingShow: false
      }
    },
    methods: {
      handleLoadingShow1() {
        this.loadingShow = true
        setTimeout(() => {
          this.loadingShow = false
        }, 2000)
      }
    }
  }
</script>
```

:::
</demo-block>

### $xShowLoading 方法调用

<br/>

<demo-block>
:::slot source
<loading-function></loading-function>
:::

:::slot highlight

```html
<template>
  <div class="loading-function">
    <x-button @click="handleLoadingShow2">方法调用</x-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleLoadingShow2() {
        this.$xShowLoading({
          text: 'Loading...',
          opacity: 0.6,
          curtainColor: 'lightgrey',
          textColor: 'white',
          textFontSize: 20,
          iconColor: 'white',
          iconName: 'sync',
          iconSize: 30
        })
        setTimeout(() => {
          this.$xHideLoading()
        }, 2000)
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数         | 说明             | 类型   | 可选值               | 默认值  |
| :----------- | :--------------- | :----- | :------------------- | :------ |
| curtainColor | 加载时背景颜色   | String | -                    | black   |
| opacity      | 加载时背景透明度 | Number | -                    | 0.8     |
| position     | 加载位置         | String | CSS 的 position 属性 | fixed   |
| zIndex       | 加载堆叠顺序     | Number | CSS 的 zIndex 属性   | 100     |
| iconName     | 加载图标         | String | -                    | loading |
| iconColor    | 加载图标颜色     | String | -                    | -       |
| iconSize     | 加载图标大小     | String | -                    | -       |
| text         | 加载文字         | String | -                    | -       |
| textColor    | 加载文字颜色     | String | -                    | -       |
| textFontSize | 加载文字大小     | String | -                    | -       |
