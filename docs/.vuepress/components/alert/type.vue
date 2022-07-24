<template>
  <div class="alert-type">
    <x-alert type="info" message="Info Text" closable :show.sync="alertShow2"></x-alert>
    <br>
    <x-alert type="error" message="Error Text" icon="close-circle-fill"></x-alert>
    <br>
    <x-alert type="warning" message="Warning Text" closable closeText="close" :show.sync="alertShow3"></x-alert>
  </div>
</template>
<script>
export default {
  data () {
    return {
      alertShow2: true,
      alertShow3: true,
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
