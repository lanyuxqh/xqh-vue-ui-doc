<template>
  <div class="space-vertical">
    <x-space :inline="false">
      <x-button v-for="i in 5" :key="i">button{{i}}</x-button>
    </x-space>
  </div>
</template>