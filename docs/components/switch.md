# Switch 开关

### 基础用法

<br/>

<demo-block>
:::slot source
<switch-basic></switch-basic>
:::

:::slot highlight

```html
<template>
  <div class="switch-basic">
    <x-switch v-model="switchValue1" @change="handleSwitchChange"></x-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchValue1: true
      }
    },
    methods: {
      handleSwitchChange(value) {
        console.log(value)
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
<switch-disabled></switch-disabled>
:::

设置`disabled`属性实现禁用状态。

:::slot highlight

```html
<template>
  <div class="switch-disabled">
    <x-switch v-model="switchValue2" disabled></x-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchValue2: false
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义颜色

<br/>

<demo-block>
:::slot source
<switch-color></switch-color>
:::

设置`activeColor`和`inactiveColor`属性自定义关闭和开启时的背景颜色。

:::slot highlight

```html
<template>
  <div class="switch-color">
    <x-switch v-model="switchValue3" active-color="#13ce66" inactive-color="#ff4949"></x-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchValue3: true
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数          | 说明               | 类型    | 可选值       | 默认值 |
| :------------ | :----------------- | :------ | :----------- | :----- |
| value         | 开关状态           | Boolean | true / false | false  |
| disabled      | 是否禁用           | Boolean | true / false | false  |
| activeColor   | 开启状态时的背景色 | String  | -            | -      |
| inactiveColor | 关闭状态时的背景色 | String  | -            | -      |

### Event 事件

| 事件名 | 说明     | 回调参数        |
| :----- | :------- | :-------------- |
| change | 选中事件 | (value:Boolean) |
