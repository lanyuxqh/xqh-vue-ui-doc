<template>
  <div class="switch-basic">
    <x-switch v-model="switchValue1" @change="handleSwitchChange"></x-switch>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switchValue1: true,
    }
  },
  methods: {
    handleSwitchChange (value) {
      console.log(value)
    },
  },
}
</script>
