<template>
  <div class="card-img">
    <x-card body-style="padding: 0px">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
      <div class="text">
        <span>好吃的汉堡</span>
        <div>
          <time class="time">{{ currentDate }}</time>
          <x-button type="delicate" class="button">操作按钮</x-button>
        </div>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentDate: new Date().toLocaleString(),
    }
  }
}
</script>
<style lang="scss" scoped>
.card-img {
  .x-card {
    width: 300px;
    img {
      width: 100%;
      display: block;
    }
    .text {
      position: relative;
      padding: 14px;
      .time {
        font-size: 13px;
        color: #999;
      }
      .button {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #409eff;
      }
    }
  }
}
</style>