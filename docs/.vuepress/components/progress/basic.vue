<template>
  <div class="progress-basic">
    <x-progress type="bar" :width="10" :percentage="50" color="lightblue"></x-progress>
    <br>
    <x-progress type="bar" :width="15" :percentage="30" color="rgb(255, 193, 7)"></x-progress>
    <br>
    <x-progress type="circle" color="lightblue" backgroundColor="rgb(248, 220, 220)" :strokeWidth="10" :width="100" :percentage="30"></x-progress>
  </div>
</template>