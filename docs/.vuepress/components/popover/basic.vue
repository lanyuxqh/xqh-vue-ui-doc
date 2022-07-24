<template>
  <div class="popover-basic">
    <x-space>
      <x-popover>
        <template v-slot:content="{close}">popover <x-button @click="close">close</x-button></template>
        <x-button type="primary">click激活</x-button>
      </x-popover>
      <x-popover trigger="hover">
        <template slot="content">popover</template>
        <x-button type="primary">hover激活</x-button>
      </x-popover>
      <x-popover trigger="focus">
        <template slot="content">popover</template>
        <x-button type="primary">focus激活</x-button>
      </x-popover>
    </x-space>
  </div>
</template>
