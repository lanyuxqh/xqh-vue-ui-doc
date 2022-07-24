# Input 输入框

通过键盘输入字符。

### 基础用法

<br/>

<demo-block>
:::slot source
<input-basic></input-basic>
:::

:::slot highlight

```html
<template>
  <div class="input-basic">
    <x-space>
      <x-input
        v-model="inputValue1"
        type="text"
        placeholder="请输入内容"
        name="username"
        @change="handInputChange"
      ></x-input>
      {{inputValue1}}
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputValue1: ''
      }
    },
    methods: {
      handInputChange(e) {
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
<input-disabled></input-disabled>
:::

使用`disabled`属性指定是否禁用 input 组件,使用`readonly`属性指定是否只读。

:::slot highlight

```html
<template>
  <div class="input-disabled">
    <x-space>
      <x-input
        v-model="inputValue2"
        type="text"
        placeholder="请输入内容"
        name="username"
        disabled
      ></x-input>
      <x-input
        v-model="inputValue2"
        type="text"
        placeholder="请输入内容"
        name="username"
        readonly
      ></x-input>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputValue2: 'lanyu'
      }
    }
  }
</script>
```

:::
</demo-block>

### 可清空

<br/>

<demo-block>
:::slot source
<input-clearable></input-clearable>
:::

使用`clearable`属性指定输入框可清空。

:::slot highlight

```html
<template>
  <div class="input-clearable">
    <x-space>
      <x-input
        v-model="inputValue3"
        type="text"
        placeholder="请输入内容"
        name="username"
        clearable
      ></x-input>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputValue3: ''
      }
    }
  }
</script>
```

:::
</demo-block>

### 密码框

<br/>

<demo-block>
:::slot source
<input-password></input-password>
:::

使用`clearable`属性指定输入框可清空。

:::slot highlight

```html
<template>
  <div class="input-password">
    <x-space>
      <x-input
        v-model="inputValue4"
        type="password"
        placeholder="请输入内容"
        name="password"
        show-password
      ></x-input>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputValue4: ''
      }
    }
  }
</script>
```

:::
</demo-block>

### 带图标

<br/>

<demo-block>
:::slot source
<input-icon></input-icon>
:::

使用`prefix-icon`和`suffix-icon`属性在输入框首部和尾部增加显示图标。

:::slot highlight

```html
<template>
  <div class="input-icon">
    <x-space>
      <x-input
        v-model="inputValue5"
        type="text"
        placeholder="请输入内容"
        name="username"
        prefix-icon="edit"
      ></x-input>
      <x-input
        v-model="inputValue5"
        type="text"
        placeholder="请输入内容"
        name="username"
        suffix-icon="edit"
      ></x-input>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputValue5: ''
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
<input-size></input-size>
:::

使用`size`属性指定输入框尺寸。

:::slot highlight

```html
<template>
  <div class="input-size">
    <x-space>
      <x-input size="lg" prefix-icon="edit"></x-input>
      <x-input size="md" prefix-icon="edit"></x-input>
      <x-input size="sm" prefix-icon="edit"></x-input>
      <x-input size="xs" prefix-icon="edit"></x-input>
    </x-space>
  </div>
</template>
```

:::
</demo-block>

### Attributes 参数

| 参数          | 说明                 | 类型    | 可选值            | 默认值 |
| :------------ | :------------------- | :------ | :---------------- | :----- |
| type          | 类型                 | String  | text、password 等 | text   |
| name          | 原生属性             | String  | -                 | -      |
| placeholder   | 输入框占位文本       | String  | -                 | -      |
| value         | 绑定值               | String  | -                 | -      |
| disabled      | 是否禁用             | Boolean | -                 | false  |
| readonly      | 是否只读             | Boolean | -                 | false  |
| clearable     | 是否可清空           | Boolean | -                 | false  |
| show-password | 是否显示切换密码图标 | Boolean | -                 | false  |
| prefix-icon   | 输入框前置图标       | String  | -                 | -      |
| suffix-icon   | 输入框后置图标       | String  | -                 | -      |
| size          | 尺寸                 | String  | xs / sm / md / lg | md     |

### Event 事件

| 事件名称 | 说明                        | 回调参数        |
| :------- | :-------------------------- | :-------------- |
| input    | 在 input 值改变时触发       | (value: String) |
| focus    | 在 input 获得焦点时触发     | (event: Event)  |
| blur     | 在 input 失去焦点时触发     | (event: Event)  |
| change   | 在 input 的值发生改变时触发 | (event: Event)  |
