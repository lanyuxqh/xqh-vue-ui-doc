<template>
  <div class="button-disabled">
    <x-space>
      <x-button :disabled="true">disable</x-button>
      <x-button :disabled="true" type="primary" status="success">disable</x-button>
    </x-space>
  </div>
</template>