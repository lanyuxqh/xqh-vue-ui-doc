# Toast 提示

### 基础用法

<br/>

<demo-block>
:::slot source
<toast-basic></toast-basic>
:::

:::slot highlight

```html
<template>
  <div class="toast-basic">
    <x-space>
      <x-button @click="toastShow1">默认toast</x-button>
      <x-button @click="toastShow2">自动关闭toast</x-button>
    </x-space>
  </div>
</template>
<script>
  export default {
    methods: {
      toastShow1() {
        console.log(this.$xToast)
        this.$xToast('message1')
      },
      toastShow2() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          autoClose: 3
        })
      }
    }
  }
</script>
```

:::
</demo-block>

### 位置

<br/>

<demo-block>
:::slot source
<toast-position></toast-position>
:::

:::slot highlight

```html
<template>
  <div class="toast-position">
    <x-space>
      <x-button @click="toastShow3">上toast</x-button>
      <x-button @click="toastShow4">左toast</x-button>
      <x-button @click="toastShow5">下toast</x-button>
      <x-button @click="toastShow6">右toast</x-button>
    </x-space>
  </div>
</template>
<script>
  export default {
    methods: {
      toastShow3() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          position: 'top'
        })
      },
      toastShow4() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          position: 'left'
        })
      },
      toastShow5() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          position: 'bottom'
        })
      },
      toastShow6() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          position: 'right'
        })
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
<toast-type></toast-type>
:::

:::slot highlight

```html
<template>
  <div class="toast-type">
    <x-space>
      <x-button @click="toastShow7" status="success">success</x-button>
      <x-button @click="toastShow8" status="info">info</x-button>
      <x-button @click="toastShow9" status="warning">warning</x-button>
      <x-button @click="toastShow10" status="danger">danger</x-button>
    </x-space>
  </div>
</template>
<script>
  export default {
    methods: {
      toastShow7() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          type: 'success'
        })
      },
      toastShow8() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          type: 'info'
        })
      },
      toastShow9() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          type: 'warning'
        })
      },
      toastShow10() {
        this.$xToast({
          message: '3S 后自动关闭',
          closeButton: {
            text: 'Close',
            callback() {
              console.log('Closed')
            }
          },
          enableHtml: true,
          autoClose: 3,
          type: 'danger'
        })
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明                     | 类型            | 可选值                               | 默认值 |
| :---------- | :----------------------- | :-------------- | :----------------------------------- | :----- |
| type        | 类型                     | String          | success/warning/info/error           | info   |
| autoClose   | 是否自动关闭             | Boolean, Number | -                                    | false  |
| closeButton | 自定义关闭按钮           | Object          | -                                    | -      |
| enableHtml  | 允许提示文字以 html 展示 | Boolean         | -                                    | false  |
| position    | 提示位置                 | String          | top / bottom / middle / right / left | top    |
