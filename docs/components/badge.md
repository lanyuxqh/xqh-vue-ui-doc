# Badge 标记

### 基础用法

<br/>

<demo-block>
:::slot source
<badge-basic></badge-basic>
:::

:::slot highlight

```html
<x-space :size="[10,20]">
  <x-badge :value="1">
    <x-button>回复</x-button>
  </x-badge>
  <x-badge :value="30" :max="20" type="">
    <x-button>关注</x-button>
  </x-badge>
  <x-badge value="hot">
    <x-button>评论</x-button>
  </x-badge>
  <x-badge isDot>
    <x-icon icon="setting"></x-icon>
  </x-badge>
  <x-badge isDot color="#e6a23c">更新</x-badge>
</x-space>
```

:::
</demo-block>

### Attributes 参数

| 参数   | 说明                              | 类型           | 可选值       | 默认值 |
| :----- | :-------------------------------- | :------------- | :----------- | :----- |
| value  | 显示值                            | String, Number | -            | -      |
| max    | 最大值，超过最大值会显示 '{max}+' | Number         | -            | -      |
| is-dot | 小圆点                            | Boolean        | true / false | false  |
| hidden | 隐藏                              | Boolean        | true / false | false  |
| color  | 背景颜色                          | String         | -            | -      |
