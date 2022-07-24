# Popover 弹出框

### 基础用法

<br/>

<demo-block>
:::slot source
<popover-basic></popover-basic>
:::

:::slot highlight

```html
<template>
  <div class="popover-basic">
    <x-space>
      <x-popover>
        <template v-slot:content="{close}">
          popover
          <x-button @click="close">close</x-button>
        </template>
        <x-button type="primary">click激活</x-button>
      </x-popover>
      <x-popover trigger="hover">
        <template slot="content">popover</template>
        <x-button type="primary">hover激活</x-button>
      </x-popover>
      <x-popover trigger="focus">
        <template slot="content">popover</template>
        <x-button type="primary">focus激活</x-button>
      </x-popover>
    </x-space>
  </div>
</template>
```

:::
</demo-block>

### 位置

<br/>

<demo-block>
:::slot source
<popover-position></popover-position>
:::

:::slot highlight

```html
<template>
  <div class="popover-position">
    <x-space>
      <x-popover trigger="hover" position="top">
        <template slot="content">popover</template>
        <x-button>上</x-button>
      </x-popover>
      <x-popover trigger="hover" position="bottom">
        <template slot="content">popover</template>
        <x-button>下</x-button>
      </x-popover>
      <x-popover trigger="hover" position="left">
        <template slot="content">popover</template>
        <x-button>左</x-button>
      </x-popover>
      <x-popover trigger="hover" position="right">
        <template slot="content">popover</template>
        <x-button>右</x-button>
      </x-popover>
    </x-space>
  </div>
</template>
```

:::
</demo-block>

### Attributes 参数

| 参数     | 说明     | 类型   | 可选值                      | 默认值 |
| :------- | :------- | :----- | :-------------------------- | :----- |
| trigger  | 触发方式 | String | click / hover / focus       | click  |
| position | 出现位置 | String | top / bottom / left / right | top    |
