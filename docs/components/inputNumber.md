# InputNumber 计数器

### 基础用法

<br/>

<demo-block>
:::slot source
<inputNumber-basic></inputNumber-basic>
:::

:::slot highlight

```html
<template>
  <div class="inputNumber-basic">
    <x-input-number
      v-model="inputNumberValue1"
      :min="1"
      :max="10"
      @change="handleInputNumberChange"
    ></x-input-number>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputNumberValue1: 1
      }
    },
    methods: {
      handleInputNumberChange(value) {
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
<inputNumber-disabled></inputNumber-disabled>
:::

设置`disabled`属性让计数器处于不可用状态。

:::slot highlight

```html
<template>
  <div class="inputNumber-disabled">
    <x-input-number v-model="inputNumberValue2" disabled></x-input-number>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputNumberValue2: 1
      }
    }
  }
</script>
```

:::
</demo-block>

### 步数

<br/>

<demo-block>
:::slot source
<inputNumber-step></inputNumber-step>
:::

设置`step`属性控制步长。

:::slot highlight

```html
<template>
  <div class="inputNumber-step">
    <x-input-number v-model="inputNumberValue3" :step="2"></x-input-number>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputNumberValue3: 5
      }
    }
  }
</script>
```

:::
</demo-block>

### 精度

<br/>

<demo-block>
:::slot source
<inputNumber-precision></inputNumber-precision>
:::

设置`precision`属性控制数值精度。

:::slot highlight

```html
<template>
  <div class="inputNumber-precision">
    <x-input-number
      v-model="inputNumberValue4"
      :precision="2"
      :step="0.1"
      :max="10"
    ></x-input-number>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputNumberValue4: 9
      }
    }
  }
</script>
```

:::
</demo-block>

### 尺寸

<br/>

<demo-block>
:::slot source
<inputNumber-size></inputNumber-size>
:::

:::slot highlight

```html
<template>
  <div class="inputNumber-size">
    <x-space>
      <x-input-number size="lg" v-model="inputNumberValue5"></x-input-number>
      <x-input-number size="md" v-model="inputNumberValue5"></x-input-number>
      <x-input-number size="sm" v-model="inputNumberValue5"></x-input-number>
      <x-input-number size="xs" v-model="inputNumberValue5"></x-input-number>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputNumberValue5: 1
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数      | 说明                   | 类型         | 可选值            | 默认值    |
| :-------- | :--------------------- | :----------- | :---------------- | :-------- |
| value     | 绑定值                 | Number       | -                 | -         |
| min       | 设置计数器允许的最小值 | Number       | -                 | -Infinity |
| max       | 设置计数器允许的最大值 | Number       | -                 | Infinity  |
| step      | 计数器步长             | Number       | -                 | 1         |
| precision | 计数器精度             | Number       | -                 | -         |
| disabled  | 是否禁用计数器         | true / false | -                 | false     |
| size      | 计数器尺寸             | String       | xs / sm / md / lg | md        |

### Event 事件

| 事件名 | 说明               | 回调参数        |
| :----- | :----------------- | :-------------- |
| change | 绑定值被改变时触发 | (value: String) |
