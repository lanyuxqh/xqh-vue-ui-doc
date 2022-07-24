# Radio 单选

### 基础用法

<br/>

<demo-block>
:::slot source
<radio-basic></radio-basic>
:::

:::slot highlight

```html
<template>
  <div class="radio-basic">
    <x-radio label="1" v-model="radioValue1" @change="handleRadioChange">女</x-radio>
    <x-radio label="2" v-model="radioValue1" @change="handleRadioChange">男</x-radio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radioValue1: '1'
      }
    },
    methods: {
      handleRadioChange(value) {
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
<radio-disabled></radio-disabled>
:::

设置`disabled`属性实现禁用状态。

:::slot highlight

```html
<template>
  <div class="radio-disabled">
    <x-radio disabled v-model="radioValue2" label="1">女</x-radio>
    <x-radio disabled v-model="radioValue2" label="2">男</x-radio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radioValue2: '2'
      }
    }
  }
</script>
```

:::
</demo-block>

### 单选组合

<br/>

<demo-block>
:::slot source
<radio-group></radio-group>
:::

可以将多个 Radio 放入`x-radio-group`容器中。

:::slot highlight

```html
<template>
  <div class="radio-group">
    <x-radio-group v-model="radioValue3">
      <x-radio label="1">北京</x-radio>
      <x-radio label="2">上海</x-radio>
      <x-radio label="3">杭州</x-radio>
    </x-radio-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radioValue3: '2'
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数     | 说明                  | 类型    | 可选值       | 默认值 |
| :------- | :-------------------- | :------ | :----------- | :----- |
| value    | 单选绑定值            | String  | -            | -      |
| label    | 单选 label 展示字段名 | String  | -            | label  |
| disabled | 是否禁用              | Boolean | true / false | false  |

### Event 事件

| 事件名 | 说明     | 回调参数       |
| :----- | :------- | :------------- |
| change | 选中事件 | (value:String) |
