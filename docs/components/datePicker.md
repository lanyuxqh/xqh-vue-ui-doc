# DatePicker 日期选择器

### 基础用法

<br/>

<demo-block>
:::slot source
<datePicker-basic></datePicker-basic>
:::

:::slot highlight

```html
<template>
  <div class="datePicker-basic">
    <x-date-picker v-model="datePickerValue"></x-date-picker>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        datePickerValue: new Date()
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数  | 说明   | 类型 | 可选值 | 默认值 |
| :---- | :----- | :--- | :----- | :----- |
| value | 绑定值 | Date | -      | -      |
