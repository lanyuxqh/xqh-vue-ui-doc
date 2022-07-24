# Collapse 折叠面板

### 基础用法

<br/>

<demo-block>
:::slot source
<collapse-basic></collapse-basic>
:::

:::slot highlight

```html
<template>
  <div class="collapse-basic">
    <x-collapse :selected.sync="selectedCollapse1">
      <x-collapse-item title="标题1" name="1">内容一</x-collapse-item>
      <x-collapse-item title="标题2" name="2">内容二</x-collapse-item>
      <x-collapse-item title="标题3" name="3">内容三</x-collapse-item>
    </x-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectedCollapse1: ['1', '2']
      }
    }
  }
</script>
```

:::
</demo-block>

### 手风琴效果

每次只能展开一个面板。

<demo-block>
:::slot source
<collapse-single></collapse-single>
:::

通过`single`属性来设置是否以手风琴模式显示。

:::slot highlight

```html
<template>
  <div class="collapse-single">
    <x-collapse single :selected.sync="selectedCollapse2">
      <x-collapse-item title="标题1" name="1">内容一</x-collapse-item>
      <x-collapse-item title="标题2" name="2">内容二</x-collapse-item>
      <x-collapse-item title="标题3" name="3">内容三</x-collapse-item>
    </x-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectedCollapse2: []
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数     | 说明           | 类型    | 可选值 | 默认值 |
| :------- | :------------- | :------ | :----- | :----- |
| selected | 当前激活的面板 | Array   | -      | -      |
| single   | 是否手风琴模式 | Boolean | -      | false  |

### Collapse Item Attributes 参数

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| :---- | :--------- | :----- | :----- | :----- |
| title | 面板标题   | String | -      | -      |
| name  | 唯一标志符 | String | -      | -      |
