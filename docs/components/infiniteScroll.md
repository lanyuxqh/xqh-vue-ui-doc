# InfiniteScroll 无限滚动

### 基础用法

<br/>

<demo-block>
:::slot source
<infiniteScroll-basic></infiniteScroll-basic>
:::

:::slot highlight

```html
<template>
  <div class="infiniteScroll-basic">
    <div class="infinite-list-wrapper">
      <ul
        class="list"
        v-infinite-scroll="infiniteScrollLoad1"
        :infinite-scroll-disabled="false"
        :infinite-scroll-delay="200"
        :infinite-scroll-distance="20"
        :infinite-scroll-immediate="true"
      >
        <li class="list-item" v-for="i in count1" :key="i">{{i}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        count1: 0
      }
    },
    methods: {
      infiniteScrollLoad1() {
        this.count1 += 2
      }
    }
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
```

:::
</demo-block>

### 禁用加载

<br/>

<demo-block>
:::slot source
<infiniteScroll-limit></infiniteScroll-limit>
:::

:::slot highlight

```html
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
    data() {
      return {
        count2: 18,
        infiniteScrollLoading: false
      }
    },
    computed: {
      noMore() {
        return this.count2 >= 20
      },
      disabled() {
        return this.infiniteScrollLoading || this.noMore
      }
    },
    methods: {
      infiniteScrollLoad2() {
        this.infiniteScrollLoading = true
        setTimeout(() => {
          this.count2 += 2
          this.infiniteScrollLoading = false
        }, 2000)
      }
    }
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
```

:::
</demo-block>

### Attributes 参数

| 参数                      | 说明                                                 | 类型    | 可选值 | 默认值 |
| :------------------------ | :--------------------------------------------------- | :------ | :----- | :----- |
| infinite-scroll-delay     | 节流时延，单位为 ms                                  | Number  | -      | 200    |
| infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器 | Boolean | -      | true   |
| infinite-scroll-distance  | 触发加载的距离阈值，单位为 px                        | Number  | -      | 10     |
| infinite-scroll-disabled  | 是否禁用                                             | Boolean | -      | false  |
