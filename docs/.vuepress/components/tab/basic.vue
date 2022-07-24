<template>
  <div class="tab-basic">
    <x-tab v-model="tabActive1" @tab-click="handleTabClick">
      <x-tab-pane label="用户管理" name="first">用户管理</x-tab-pane>
      <x-tab-pane label="配置管理" name="second" icon="setting">配置管理</x-tab-pane>
      <x-tab-pane label="角色管理" name="third" disabled>角色管理</x-tab-pane>
      <x-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</x-tab-pane>
    </x-tab>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabActive1: 'second',
    }
  },
  methods: {
    handleTabClick (e) {
      console.log(e)
    },
  },
}
</script>
