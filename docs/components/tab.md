# Tab 标签页

### 基础用法

<br/>

<demo-block>
:::slot source
<tab-basic></tab-basic>
:::

:::slot highlight

```html
<template>
  <div class="tab-basic">
    <x-tab v-model="tabActive1" @tab-click="handleTabClick">
      <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
      <x-tab-pane label="配置管理" name="second" icon="setting">配置管理</x-tab-pane>
      <x-tab-pane label="角色管理" name="third" disabled>角色管理</x-tab-pane>
      <x-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</x-tab-pane>
    </x-tab>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabActive1: 'second'
      }
    },
    methods: {
      handleTabClick(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::
</demo-block>

### 选项卡样式

<br/>

<demo-block>
:::slot source
<tab-card></tab-card>
:::

设置`type`属性为 card 就可以使选项卡改变为标签风格。

:::slot highlight

```html
<template>
  <div class="tab-card">
    <x-tab v-model="tabActive2" type="card" @tab-click="handleTabClick">
      <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
      <x-tab-pane label="配置管理" name="second">配置管理</x-tab-pane>
      <x-tab-pane label="角色管理" name="third" disabled>角色管理</x-tab-pane>
      <x-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</x-tab-pane>
    </x-tab>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabActive2: 'first'
      }
    },
    methods: {
      handleTabClick(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数  | 说明     | 类型   | 可选值           | 默认值      |
| :---- | :------- | :----- | :--------------- | :---------- |
| value | 绑定值   | String | -                | -           |
| type  | 风格类型 | String | card/border-card | border-card |

### tab-pane Attributes

| 参数     | 说明       | 类型    | 可选值       | 默认值 |
| :------- | :--------- | :------ | :----------- | :----- |
| label    | 选项卡标题 | String  | -            | -      |
| name     | 选项卡别名 | String  | -            | -      |
| icon     | 选项卡图标 | String  | -            | -      |
| disabled | 是否禁用   | Boolean | true / false | false  |

### Event 事件

| 事件名    | 说明             | 回调参数       |
| :-------- | :--------------- | :------------- |
| tab-click | tab 被选中时触发 | (event: Event) |
