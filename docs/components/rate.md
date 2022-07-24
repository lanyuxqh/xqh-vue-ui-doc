# Rate 评分

### 基础用法

<br/>

<demo-block>
:::slot source
<rate-basic></rate-basic>
:::

:::slot highlight

```html
<template>
  <div class="rate-basic">
    <x-rate v-model="rateValue1" score></x-rate>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rateValue1: 2
      }
    }
  }
</script>
```

:::
</demo-block>

### 禁用状态

<br/>

<demo-block>
:::slot source
<rate-disabled></rate-disabled>
:::

设置`disabled`属性实现禁用状态。

:::slot highlight

```html
<template>
  <div class="rate-disabled">
    <x-rate v-model="rateValue2" disabled></x-rate>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rateValue2: 3
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义

自定义 rate 组件样式和属性。

<demo-block>
:::slot source
<rate-custom></rate-custom>
:::

:::slot highlight

```html
<template>
  <div class="rate-custom">
    <x-rate
      v-model="rateValue3"
      :num="10"
      :total="10"
      icon="hot-fill"
      :size="25"
      dark-color="#99a9bf"
      bright-color="#f56c6c"
      score
      big
    >
      <span slot="score">热度: {{rateValue3.toFixed(1)}}</span>
    </x-rate>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rateValue3: 5.5
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明               | 类型    | 可选值       | 默认值    |
| :---------- | :----------------- | :------ | :----------- | :-------- |
| value       | 绑定值             | Number  | -            | -         |
| num         | 图标数量           | Number  | -            | 5         |
| score       | 是否显示分值       | Boolean | true / false | false     |
| total       | 最大分值           | Number  | -            | 5         |
| one         | 是否只能完整显示   | Boolean | true / false | false     |
| disabled    | 是否禁用           | Boolean | true / false | false     |
| icon        | 自定义评分图标     | String  | -            | star-fill |
| size        | 自定义评分图标大小 | Number  | -            | 20        |
| darkColor   | 自定义暗色         | String  | -            | -         |
| brightColor | 自定义亮色         | String  | -            | -         |
| big         | 是否有变大效果     | Boolean | true / false | false     |
