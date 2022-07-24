<template>
  <div class="switch-color">
    <x-switch v-model="switchValue3" active-color="#13ce66" inactive-color="#ff4949"></x-switch>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switchValue3: true,
    }
  }
}
</script>
