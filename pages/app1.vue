<template>
  <div class="grid gap-4 h-[88vh] grid-cols-26 grid-rows-16">
    <div class="col-span-20 row-span-2 card"></div>
    <div class="col-span-6 col-start-21 row-span-full card"></div>
    <div class="col-span-5 row-span-4 card"></div>
    <div class="col-span-5 row-span-4 card"></div>
    <div class="col-span-5 row-span-4 card"></div>
    <div class="col-span-5 row-span-4 card"></div>
    <div class="col-span-12 row-span-10 card">
      <kpis-chart1></kpis-chart1>
    </div>
    <div class="col-span-8 row-span-10 card"></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply border-none shadow-sm dark:bg-dark-700 rounded-md dark:bg-opacity-60 bg-gray-300;
}
</style>
