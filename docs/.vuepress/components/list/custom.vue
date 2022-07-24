<template>
  <div class="list-custom">
    <x-list :data="listData2" size="lg" border hover></x-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData2: [
        'God finds himself by creating.',
        'The dry river-bed finds no thanks for its past.',
        'Life finds its wealth by the claims of the world, and its worth by the claims of love.'
      ],
    }
  },
}
</script>

