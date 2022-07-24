<template>
  <div class="container-basic">
    <x-container>
      <x-header>Header</x-header>
      <x-main>Main</x-main>
    </x-container>
    <br>
    <x-container>
      <x-header>Header</x-header>
      <x-main>Main</x-main>
      <x-footer>Footer</x-footer>
    </x-container>
    <br>
    <x-container>
      <x-aside width="200px">Aside</x-aside>
      <x-main>Main</x-main>
    </x-container>
    <br>
    <x-container>
      <x-header>Header</x-header>
      <x-container>
        <x-aside width="200px">Aside</x-aside>
        <x-main>Main</x-main>
      </x-container>
    </x-container>
    <br>
    <x-container>
      <x-header>Header</x-header>
      <x-container>
        <x-aside width="200px" style="line-height:220px">Aside</x-aside>
        <x-container>
          <x-main>Main</x-main>
          <x-footer>Footer</x-footer>
        </x-container>
      </x-container>
    </x-container>
    <br>
    <x-container>
      <x-aside style="line-height:220px">Aside</x-aside>
      <x-container>
        <x-header>Header</x-header>
        <x-main>Main</x-main>
      </x-container>
    </x-container>
    <br>
    <x-container>
      <x-aside style="line-height:280px">Aside</x-aside>
      <x-container>
        <x-header>Header</x-header>
        <x-main>Main</x-main>
        <x-footer>Footer</x-footer>
      </x-container>
    </x-container>
  </div>
</template>
<style lang="scss" scoped>
.x-header,
.x-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.x-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.x-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>