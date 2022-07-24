<template>
<div class="rate-disabled">
        <x-rate v-model="rateValue2" disabled></x-rate>
      </div>
</template>
<script>
export default {
  data () {
    return {
     rateValue2: 3,
    }
  },
}
</script>