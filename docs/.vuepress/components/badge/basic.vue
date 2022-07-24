<template>
  <div class="badge-basic">
    <x-space :size="[10,20]">
      <x-badge :value="1">
        <x-button>回复</x-button>
      </x-badge>
      <x-badge :value="30" :max="20" type="">
        <x-button>关注</x-button>
      </x-badge>
      <x-badge value="hot">
        <x-button>评论</x-button>
      </x-badge>
      <x-badge isDot>
        <x-icon icon="setting"></x-icon>
      </x-badge>
      <x-badge isDot color="#e6a23c">更新</x-badge>
    </x-space>
  </div>
</template>