<template>
  <div class="upload-basic">
    <x-upload :file-list="fileList" name="avatar" accept="image/jpeg,image/png" multiple :limit="3" action="http://localhost:3000/upload" :on-exceed="handleExceed" :on-change="handleChange" :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress" :before-upload="handleBeforeUpload">
      <x-button icon="upload" icon-position="right">上传文件</x-button>
      <div slot="tip">只能上传jpeg、png文件，且大小不超过500kb</div>
    </x-upload>
  </div>
</template>
<script>
export default {
  data () {
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
      ],
    }
  },
  methods: {
    handleChange (file) {
      console.log('当前选择了文件', file)
    },
    handleExceed (files, fileList) {
      console.log('您已经超过文件上传个数限制了！')
    },
    handleBeforeUpload (file) {
      const limitSize = file.size / 1024 < 500; // 500Kb限制
      if (!limitSize) {
        console.log('上传图片大小不能超过 500kb!')
      }
      return limitSize;
    },
    handleProgress (ev) {
      console.log('上传中...', ev)
    },
    handleSuccess (res) {
      console.log('上传成功！', res)
    },
    handleError (err) {
      console.log('上传失败,', err)
    },
  },
}
</script>
