<template>
  <div class="button-basic">
    <x-space>
      <x-button type="default">Default</x-button>
      <x-button type="primary">Primary</x-button>
      <x-button type="link">Link</x-button>
      <x-button type="ghost">Ghost</x-button>
      <x-button type="delicate">Delicate</x-button>
    </x-space>
    <x-space>
      <x-button type="default" status="success">success</x-button>
      <x-button type="default" status="info">info</x-button>
      <x-button type="default" status="warning">warning</x-button>
      <x-button type="default" status="danger">danger</x-button>
    </x-space>
    <x-space>
      <x-button type="primary" status="success">success</x-button>
      <x-button type="primary" status="info">info</x-button>
      <x-button type="primary" status="warning">warning</x-button>
      <x-button type="primary" status="danger">danger</x-button>
    </x-space>
    <x-space>
      <x-button type="primary" shape="square">square</x-button>
      <x-button type="primary" shape="square" icon="search"></x-button>
      <x-button type="primary" shape="round">round</x-button>
      <x-button type="primary" shape="circle" icon="edit"></x-button>
    </x-space>
  </div>
</template>