<template>
  <el-card class="!border-none !shadow-sm">
    <div ref="chart2" class="h-96 w-full"></div>
  </el-card>
</template>

<script setup>
const chart2 = ref()
const data = [
  {
    country: 'Lithuania',
    litres: 501.9,
    bottles: 1500,
  },
  {
    country: 'Czech Republic',
    litres: 301.9,
    bottles: 990,
  },
  {
    country: 'Ireland',
    litres: 201.1,
    bottles: 785,
  },
  {
    country: 'Germany',
    litres: 165.8,
    bottles: 255,
  },
  {
    country: 'Australia',
    litres: 139.9,
    bottles: 452,
  },
  {
    country: 'Austria',
    litres: 128.3,
    bottles: 332,
  },
  {
    country: 'UK',
    litres: 99,
    bottles: 150,
  },
  {
    country: 'Belgium',
    litres: 60,
    bottles: 178,
  },
  {
    country: 'The Netherlands',
    litres: 50,
    bottles: 50,
  },
]

onMounted(() => {
  const { drawing } = usedonutChart(chart2.value, data)
  drawing()
})
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped></style>
