<template>
  <div class="loading-basic">
    <x-button @click="handleLoadingShow1">自定义loading</x-button>
    <x-loading v-show="loadingShow" text="马不停蹄加载中..."></x-loading>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loadingShow: false
    }
  },
  methods: {
    handleLoadingShow1 () {
      this.loadingShow = true;
      setTimeout(() => {
        this.loadingShow = false;
      }, 2000);
    },
  },
}
</script>
