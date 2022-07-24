# Avatar 头像

### 基础用法

<br/>

<demo-block>
:::slot source
<avatar-basic></avatar-basic>
:::

:::slot highlight

```html
<template>
  <div class="avatar-basic">
    <x-space>
      <x-avatar size="lg">LG</x-avatar>
      <x-avatar size="md">MD</x-avatar>
      <x-avatar size="sm">SM</x-avatar>
      <x-avatar size="xs">XS</x-avatar>
    </x-space>
    <x-space>
      <x-avatar size="lg" shape="circle">LG</x-avatar>
      <x-avatar size="md" shape="circle">MD</x-avatar>
      <x-avatar size="sm" shape="circle">SM</x-avatar>
      <x-avatar size="xs" shape="circle">XS</x-avatar>
    </x-space>
  </div>
</template>
```

:::
</demo-block>

### 展示类型

支持三种类型：图标、图片和字符

<br/>

<demo-block>
:::slot source
<avatar-type></avatar-type>
:::

:::slot highlight

```html
<template>
  <div class="avatar-type">
    <x-space>
      <x-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></x-avatar>
      <x-badge value="99+">
        <x-avatar>
          <x-icon icon="user" color="white"></x-icon>
        </x-avatar>
      </x-badge>
      <x-avatar>user</x-avatar>
    </x-space>
  </div>
</template>
```

:::
</demo-block>

### Attributes 参数

| 参数  | 说明               | 类型   | 可选值            | 默认值 |
| :---- | :----------------- | :----- | :---------------- | :----- |
| size  | 头像的尺寸         | String | xs / sm / md / lg | md     |
| shape | 头像的形状         | String | circle / square   | square |
| src   | 图片头像的资源地址 | String | -                 | -      |
| alt   | 描述图像的替换文本 | String | -                 | -      |
