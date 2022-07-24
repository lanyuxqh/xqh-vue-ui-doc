<template>
  <div class="switch-disabled">
    <x-switch v-model="switchValue2" disabled></x-switch>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switchValue2: false,
    }
  }
}
</script>
