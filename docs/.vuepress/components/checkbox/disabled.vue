<template>
  <div class="checkbox-disabled">
    <x-checkbox v-model="checkValue2" disabled>同意</x-checkbox>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkValue2: true,
    }
  }
}
</script>