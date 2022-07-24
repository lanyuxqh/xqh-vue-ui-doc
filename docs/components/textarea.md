# Textarea 文本域

### 基础用法

<br/>

<demo-block>
:::slot source
<textarea-basic></textarea-basic>
:::

:::slot highlight

```html
<template>
  <div class="textarea-basic">
    <x-textarea
      v-model="textareaValue1"
      placeholder="请输入内容"
      @input="handleTextareaInput"
    ></x-textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textareaValue1: ''
      }
    },
    methods: {
      handleTextareaInput(e) {
        console.log(e)
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
<textarea-disabled></textarea-disabled>
:::

使用`disabled`让文本域处于不可用状态。

:::slot highlight

```html
<template>
  <div class="textarea-disabled">
    <x-textarea disabled v-model="textareaValue2" placeholder="请输入内容"></x-textarea>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        textareaValue2: 'hello'
      }
    }
  }
</script>
```

:::
</demo-block>

### 限制长度

<br/>

<demo-block>
:::slot source
<textarea-maxlength></textarea-maxlength>
:::

使用`maxlength`属性限制文本域可输入长度。

:::slot highlight

```html
<template>
  <div class="textarea-maxlength">
    <x-textarea v-model="textareaValue3" placeholder="请输入内容" :maxlength="50"></x-textarea>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        textareaValue3: 'hello'
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义 Focus 颜色

<br/>

<demo-block>
:::slot source
<textarea-focusColor></textarea-focusColor>
:::

使用`focusColor`属性自定义 文本域 在获取焦点后的颜色。

:::slot highlight

```html
<template>
  <div class="textarea-maxlength">
    <x-textarea v-model="textareaValue4" placeholder="请输入内容" color="#ec3437"></x-textarea>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        textareaValue4: ''
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明                    | 类型    | 可选值       | 默认值 |
| :---------- | :---------------------- | :------ | :----------- | :----- |
| value       | textarea 文本域绑定值   | String  | -            | -      |
| placeholder | 输入框占位字符          | String  | -            | -      |
| disabled    | 是否禁用                | Boolean | true / false | false  |
| readonly    | 是否可读                | Boolean | true / false | false  |
| maxlength   | 文本区域的最大字符数    | Number  | -            | -      |
| focusColor  | 自定义 Focus 颜色的色值 | String  | -            | -      |
| resize      | 是否开启拉伸            | Boolean | true / false | true   |
| rows        | textarea 可见区域高度   | Number  | -            | 4      |
| cols        | textarea 可见区域宽度   | Number  | -            | 50     |
| form        | 原生属性，所属表单      | String  | -            | 50     |

### Event 事件

| 事件名 | 说明                            | 回调参数        |
| :----- | :------------------------------ | :-------------- |
| focus  | textarea 文本域在获取焦点时触发 | (event: Event)  |
| blur   | textarea 文本域在失去焦点时触发 | (event: Event)  |
| input  | textarea 文本域值变化时触发     | (value: String) |
