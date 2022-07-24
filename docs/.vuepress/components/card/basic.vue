<template>
  <div class="card-basic">
    <x-card style="width:480px">
      <div slot="header">
        <span>卡片名称</span>
        <x-button style="float: right; padding: 3px 0" type="delicate">操作按钮</x-button>
      </div>
      <div v-for="i in 4" :key="i" style="margin-bottom: 18px; font-size: 14px">
        {{'列表内容 ' + i }}
      </div>
    </x-card>
  </div>
</template>