<template>
  <div class="pagination-basic">
    <x-pagination :total="10" :pager-count="7" :current-page.sync="currentPage"></x-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 5,
    }
  }
}
</script>

