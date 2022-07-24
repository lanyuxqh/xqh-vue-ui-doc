# Alert 警告

### 基础用法

<br/>

<demo-block>
:::slot source
<alert-basic></alert-basic>
:::

:::slot highlight

```html
<template>
  <div class="alert-basic">
    <x-alert
      :show.sync="alertShow1"
      closable
      type="success"
      message="Success Text"
      description="Success Description Success Description Success Description"
      icon="setting"
    ></x-alert>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        alertShow1: true
      }
    }
  }
</script>
```

:::
</demo-block>

### 类型

<br/>

<demo-block>
:::slot source
<alert-type></alert-type>
:::

:::slot highlight

```html
<template>
  <div class="alert-type">
    <x-alert type="info" message="Info Text" closable :show.sync="alertShow2"></x-alert>
    <br />
    <x-alert type="error" message="Error Text" icon="close-circle-fill"></x-alert>
    <br />
    <x-alert
      type="warning"
      message="Warning Text"
      closable
      closeText="close"
      :show.sync="alertShow3"
    ></x-alert>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        alertShow2: true,
        alertShow3: true
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明           | 类型    | 可选值                           | 默认值 |
| :---------- | :------------- | :------ | :------------------------------- | :----- |
| show        | 是否显示       | Boolean | true / false                     | true   |
| closable    | 是否允许关闭   | Boolean | true / false                     | false  |
| closeText   | 自定义关闭字符 | String  | -                                | -      |
| type        | 类型           | String  | info / success / warning / error | info   |
| icon        | 定义图标       | String  | -                                | -      |
| message     | alert 文字     | String  | -                                | -      |
| description | alert 描述     | String  | -                                | -      |
