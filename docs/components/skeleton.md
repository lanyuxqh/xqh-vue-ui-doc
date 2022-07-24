# Skeleton 骨架屏

### 基础用法

<br/>

<demo-block>
:::slot source
<skeleton-basic></skeleton-basic>
:::

:::slot highlight

```html
<template>
  <div class="skeleton-basic">
    <x-space>
      <x-button @click="handleShowSkeleton(1)">骨架屏样式一</x-button>
      <x-button @click="handleShowSkeleton(2)">骨架屏样式二</x-button>
      <x-button @click="handleShowSkeleton(3)">骨架屏样式三</x-button>
      <x-button @click="handleShowSkeleton(4)">骨架屏样式四</x-button>
      <x-skeleton v-if="skeletonShow" :type="skeletonType"></x-skeleton>
    </x-space>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        skeletonShow: false,
        skeletonType: 1
      }
    },
    methods: {
      handleShowSkeleton(type) {
        this.skeletonType = type
        this.skeletonShow = true
        setTimeout(() => {
          this.skeletonShow = false
        }, 3000)
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数 | 说明           | 类型   | 可选值 | 默认值 |
| :--- | :------------- | :----- | :----- | :----- |
| type | 骨架屏样式类型 | Number | -      | 1      |
