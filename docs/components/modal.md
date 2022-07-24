# Modal 弹窗

### 基础用法

<br/>

<demo-block>
:::slot source
<modal-basic></modal-basic>
:::

:::slot highlight

```html
<template>
  <div class="modal-basic">
    <x-button @click="handleModalOpen1">打开Modal</x-button>
    <x-modal
      :show="modalShow1"
      title="这是标题"
      :confirm="onConfirm1"
      :cancel="onCancel1"
      @close="onClose1"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </x-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modalShow1: false
      }
    },
    methods: {
      handleModalOpen1() {
        this.modalShow1 = true
      },
      onConfirm1() {
        console.log('confirm')
      },
      onCancel1() {
        console.log('cancel')
      },
      onClose1() {
        this.modalShow1 = false
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
<modal-size></modal-size>
:::

:::slot highlight

```html
<template>
  <div class="modal-size">
    <x-space>
      <x-button @click="handleModalOpen2('xs')">xs</x-button>
      <x-button @click="handleModalOpen2('sm')">sm</x-button>
      <x-button @click="handleModalOpen2('md')">md</x-button>
      <x-button @click="handleModalOpen2('lg')">lg</x-button>
    </x-space>
    <x-modal
      :show="modalShow2"
      title="提示"
      :confirm="onConfirm2"
      :cancel="onCancel2"
      @close="onClose2"
      :size="size"
    >
      <div :style="{'display':'flex','algin-items':'center','padding':'12px 0px'}">
        <x-icon icon="warning-circle-fill" color="#e6a23c" :style="{'margin-right':'8px'}"></x-icon>
        <span>此操作将永久删除该文件, 是否继续?</span>
      </div>
    </x-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modalShow2: false,
        size: 'md'
      }
    },
    methods: {
      handleModalOpen2(size) {
        this.modalShow2 = true
        this.size = size
      },
      onConfirm2() {
        console.log('confirm')
      },
      onCancel2() {
        console.log('cancel')
      },
      onClose2() {
        this.modalShow2 = false
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数    | 说明         | 类型     | 可选值            | 默认值 |
| :------ | :----------- | :------- | :---------------- | :----- |
| show    | 是否显示弹窗 | Boolean  | -                 | false  |
| size    | 弹窗尺寸     | String   | xs / sm / md / lg | md     |
| title   | 弹窗标题     | String   | -                 | -      |
| confirm | 确认回调函数 | Function | -                 | -      |
| cancel  | 取消回调函数 | Function | -                 | -      |
