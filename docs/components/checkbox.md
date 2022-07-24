# Checkbox 多选

### 基础用法

<br/>

<demo-block>
:::slot source
<checkbox-basic></checkbox-basic>
:::

:::slot highlight

```html
<template>
  <div class="checkbox-basic">
    <x-checkbox v-model="checkValue1" @change="handleCheckChange">同意</x-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkValue1: true
      }
    },
    methods: {
      handleCheckChange(value) {
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
<checkbox-disabled></checkbox-disabled>
:::

设置`disabled`属性实现禁用状态。

:::slot highlight

```html
<template>
  <div class="checkbox-disabled">
    <x-checkbox v-model="checkValue2" disabled>同意</x-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkValue2: true
      }
    }
  }
</script>
```

:::
</demo-block>

### 多选组合

<br/>

<demo-block>
:::slot source
<checkbox-group></checkbox-group>
:::

可以将多个 Checkbox 放入`x-check-group`容器中。

:::slot highlight

```html
<template>
  <div class="check-group">
    <x-checkbox-group v-model="checkedList">
      <x-checkbox label="北京">北京</x-checkbox>
      <x-checkbox label="上海">上海</x-checkbox>
      <x-checkbox label="杭州">杭州</x-checkbox>
    </x-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkedList: ['北京', '杭州']
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
| value    | 多选绑定值            | Boolean  | true / false          | false      |
| label    | 单选 label 展示字段名 | String  | -            | label  |
| disabled | 是否禁用              | Boolean | true / false | false  |

### Event 事件

| 事件名 | 说明     | 回调参数       |
| :----- | :------- | :------------- |
| change | 选中事件 | (value:String) |

