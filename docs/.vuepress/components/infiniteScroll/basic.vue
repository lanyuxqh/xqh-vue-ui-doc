<template>
  <div class="infiniteScroll-basic">
    <div class="infinite-list-wrapper">
      <ul class="list" v-infinite-scroll="infiniteScrollLoad1" :infinite-scroll-disabled="false" :infinite-scroll-delay="200" :infinite-scroll-distance="20" :infinite-scroll-immediate="true">
        <li class="list-item" v-for="i in count1" :key="i">{{i}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count1: 0
    }
  },
  methods: {
    infiniteScrollLoad1 () {
      this.count1 += 2
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
      background: #d3dce6;
      margin: 10px;
      color: #fff;
      & + .list-item {
        margin-top: 10px;
      }
    }
  }
}
</style>
