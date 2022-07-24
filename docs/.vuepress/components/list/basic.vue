<template>
  <div class="list-basic">
    <x-list :data="listData1"></x-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData1: [
        'God finds himself by creating.',
        'The dry river-bed finds no thanks for its past.',
        'Life finds its wealth by the claims of the world, and its worth by the claims of love.'
      ]
    }
  },
}
</script>