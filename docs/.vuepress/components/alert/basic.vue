<template>
  <div class="alert-basic">
    <x-alert :show.sync="alertShow1" closable type="success" message="Success Text" description="Success Description Success Description Success Description" icon="setting"></x-alert>
  </div>
</template>
<script>
export default {
  data () {
    return {
      alertShow1: true
    }
  }
}
</script>