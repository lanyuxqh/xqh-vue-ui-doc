# Upload 上传文件

### 基础用法

<br/>

<demo-block>
:::slot source
<upload-basic></upload-basic>
:::

:::slot highlight

```html
<template>
  <div class="upload-basic">
    <x-upload
      :file-list="fileList"
      name="avatar"
      accept="image/jpeg,image/png"
      multiple
      :limit="3"
      action="http://localhost:3000/upload"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :before-upload="handleBeforeUpload"
    >
      <x-button icon="upload" icon-position="right">上传文件</x-button>
      <div slot="tip">只能上传jpeg、png文件，且大小不超过500kb</div>
    </x-upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [
          {
            name: 'avatar1.jpg',
            url: '1.jpg'
          },
          {
            name: 'avatar2.jpg',
            url: '2.jpg'
          }
        ]
      }
    },
    methods: {
      handleChange(file) {
        console.log('当前选择了文件', file)
      },
      handleExceed(files, fileList) {
        console.log('您已经超过文件上传个数限制了！')
      },
      handleBeforeUpload(file) {
        const limitSize = file.size / 1024 < 500 // 500Kb限制
        if (!limitSize) {
          console.log('上传图片大小不能超过 500kb!')
        }
        return limitSize
      },
      handleProgress(ev) {
        console.log('上传中...', ev)
      },
      handleSuccess(res) {
        console.log('上传成功！', res)
      },
      handleError(err) {
        console.log('上传失败,', err)
      }
    }
  }
</script>
```

:::
</demo-block>

### 拖拽上传

<br/>

<demo-block>
:::slot source
<upload-drag></upload-drag>
:::

:::slot highlight

```html
<template>
  <div class="upload-drag">
    <x-upload
      name="avatar"
      action="http://localhost:3000/upload"
      accept="image/jpeg,image/png"
      :limit="3"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :before-upload="handleBeforeUpload"
      :drag="true"
    >
      <div slot="tip">只能上传jpg、jpeg、png文件，且大小不超过500kb</div>
    </x-upload>
  </div>
</template>
<script>
  export default {
    methods: {
      handleChange(file) {
        console.log('当前选择了文件', file)
      },
      handleExceed(files, fileList) {
        console.log('您已经超过文件上传个数限制了！')
      },
      handleBeforeUpload(file) {
        const limitSize = file.size / 1024 < 500 // 500Kb限制
        if (!limitSize) {
          console.log('上传图片大小不能超过 500kb!')
        }
        return limitSize
      },
      handleProgress(ev) {
        console.log('上传中...', ev)
      },
      handleSuccess(res) {
        console.log('上传成功！', res)
      },
      handleError(err) {
        console.log('上传失败,', err)
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数          | 说明                                     | 类型     | 可选值       | 默认值 |
| :------------ | :--------------------------------------- | :------- | :----------- | :----- |
| action        | 上传的地址                               | String   | -            | -      |
| fileList      | 已经上传的文件列表                       | Array    | -            | []     |
| name          | 上传的文件字段名                         | String   | -            | file   |
| accept        | 接受上传的文件类型                       | String   | -            | -      |
| multiple      | 是否支持多选文件                         | Boolean  | true / false | false  |
| limit         | 最大允许上传个数                         | Number   | -            | -      |
| on-change     | 文件状态改变时的钩子                     | Function | -            | -      |
| on-exceed     | 文件超出个数限制时的钩子                 | Function | -            | -      |
| before-upload | 上传文件之前的钩子                       | Function | -            | -      |
| on-progress   | 文件上传时的钩子                         | Function | -            | -      |
| on-success    | 文件上传成功时的钩子                     | Function | -            | -      |
| on-error      | 文件上传失败时的钩子                     | Function | -            | -      |
| before-remove | 删除文件之前的钩子                       | Function | -            | -      |
| on-remove     | 文件列表移除文件时的钩子                 | Function | -            | -      |
| httpRequest   | 覆盖默认的上传行为，可以自定义上传的实现 | Function | -            | -      |
| drag          | 是否启用拖拽上传                         | Boolean  | true / false | false  |
