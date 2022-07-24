<template>
  <div class="tag-basic">
    <x-space>
      <x-tag>默认tag</x-tag>
      <x-tag v-for="(tag,index) in tagData" :key="tag.text" :type="tag.type" :size="tag.size" closable @close="handleTagClose(index)">{{tag.text}}</x-tag>
    </x-space>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tagData: [
        {
          text: 'tag1',
          type: 'success',
          size: 'lg'
        },
        {
          text: 'tag2',
          type: 'info',
          size: 'md'
        },
        {
          text: 'tag3',
          type: 'warning',
          size: 'sm'
        },
        {
          text: 'tag4',
          type: 'danger',
          size: 'xs'
        },
      ],
    }
  },
  methods: {
    handleTagClose (index) {
      this.tagData.splice(index, 1);
    },
  }
}
</script>
