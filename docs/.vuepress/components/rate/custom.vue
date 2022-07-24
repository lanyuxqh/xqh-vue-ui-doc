<template>
  <div class="rate-custom">
    <x-rate v-model="rateValue3" :num="10" :total="10" icon="hot-fill" :size="25" dark-color="#99a9bf" bright-color="#f56c6c" score big>
      <span slot="score">热度: {{rateValue3.toFixed(1)}}</span>
    </x-rate>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rateValue3: 5.5,
    }
  },
}
</script>