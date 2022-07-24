<template>
  <div class="rate-basic">
    <x-rate v-model="rateValue1" score></x-rate>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rateValue1: 2,
    }
  },
}
</script>
