<template>
  <div class="button-loading">
    <x-space>
      <x-button :loading="true"></x-button>
      <x-button :loading="true" type="primary">loading</x-button>
      <x-button :loading="true" type="link" status="success">loading</x-button>
    </x-space>
  </div>
</template>