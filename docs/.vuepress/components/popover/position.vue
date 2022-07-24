<template>
  <div class="popover-position">
    <x-space>
      <x-popover trigger="hover" position="top">
        <template slot="content">popover</template>
        <x-button>上</x-button>
      </x-popover>
      <x-popover trigger="hover" position="bottom">
        <template slot="content">popover</template>
        <x-button>下</x-button>
      </x-popover>
      <x-popover trigger="hover" position="left">
        <template slot="content">popover</template>
        <x-button>左</x-button>
      </x-popover>
      <x-popover trigger="hover" position="right">
        <template slot="content">popover</template>
        <x-button>右</x-button>
      </x-popover>
    </x-space>
  </div>
</template>