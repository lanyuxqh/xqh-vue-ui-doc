<template>
  <div class="space-basic">
    <x-space>
      <x-button v-for="i in 10" :key="i">button{{i}}</x-button>
    </x-space>
  </div>
</template>