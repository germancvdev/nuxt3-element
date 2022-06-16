<template>
  <el-card class="!border-none !shadow-sm">
    <div ref="chart1" class="h-96 w-full"></div>
  </el-card>
</template>

<script setup>
const chart1 = ref()
const data = [
  {
    category: 'Lithuania',
    value: 501.9,
  },
  {
    category: 'Czechia',
    value: 301.9,
  },
  {
    category: 'Ireland',
    value: 201.1,
  },
  {
    category: 'Germany',
    value: 165.8,
  },
  {
    category: 'Australia',
    value: 139.9,
  },
  {
    category: 'Austria',
    value: 128.3,
  },
  {
    category: 'UK',
    value: 99,
  },
]

onMounted(() => {
  const { drawing } = usePieChart(chart1.value, data)
  drawing()
})
</script>

<style lang="scss" scoped></style>
