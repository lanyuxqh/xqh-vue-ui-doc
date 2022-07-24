<template>
  <div class="infiniteScroll-limit">
    <div class="infinite-list-wrapper">
      <ul class="list" v-infinite-scroll="infiniteScrollLoad2" infinite-scroll-disabled="disabled">
        <li class="list-item" v-for="i in count2" :key="i">{{i}}</li>
      </ul>
      <p v-if="infiniteScrollLoading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count2: 18,
      infiniteScrollLoading: false,
    }
  },
  computed: {
    noMore () {
      return this.count2 >= 20
    },
    disabled () {
      return this.infiniteScrollLoading || this.noMore
    }
  },
  methods: {
    infiniteScrollLoad2 () {
      this.infiniteScrollLoading = true
      setTimeout(() => {
        this.count2 += 2
        this.infiniteScrollLoading = false
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
.infinite-list-wrapper {
  overflow-y: scroll;
  border: 1px solid #ddd;
  height: 300px;
  text-align: center;
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #e9eef3;
      margin: 10px;
      color: #b3c0d1;
      & + .list-item {
        margin-top: 10px;
      }
    }
  }
}
</style>
