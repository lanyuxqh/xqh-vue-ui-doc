<template>
  <div class="upload-drag">
    <x-upload name="avatar" action="http://localhost:3000/upload" accept="image/jpeg,image/png" :limit="3" :multiple="true" :on-exceed="handleExceed" :on-change="handleChange" :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress" :before-upload="handleBeforeUpload" :drag="true">
      <div slot="tip">只能上传jpg、jpeg、png文件，且大小不超过500kb</div>
    </x-upload>
  </div>
</template>
<script>
export default {
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
