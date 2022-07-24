<template>
  <div class="space-size">
    <x-space :size=[15,5]>
      <x-button v-for="i in 15" :key="i">button{{i}}</x-button>
    </x-space>
  </div>
</template>