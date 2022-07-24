<template>
  <div class="datePicker-basic">
    <x-date-picker v-model="datePickerValue"></x-date-picker>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datePickerValue: new Date(),
    }
  },
}
</script>
