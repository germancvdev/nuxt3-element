<script setup>
const chart1 = ref()
const { $api } = useNuxtApp()

const {
  pending,
  data: items,
  refresh,
  error,
} = useLazyAsyncData('kpisChart', () => $api('/charts-categories/'), {
  initialCache: false,
  server: false,
})

const { data, el, drawing, dispose } = usePieChart()

watch(items, (v) => {
  if (!v) return
  data.value = items.value
  el.value = chart1.value
  loadData(drawing, dispose)
})

function loadData(drawing, dispose) {
  dispose()
  drawing()
}
</script>

<template>
  <div class="h-full w-full">
    <div v-if="error">
      {{ error.message }}
    </div>

    <el-skeleton
      v-if="pending"
      animated
      style="width: 100%; height: 100%"
      class="!rounded-md"
    >
      <template #template>
        <el-skeleton-item
          class="!rounded-md"
          variant="image"
          style="width: 100%; height: 100%"
        />
      </template>
    </el-skeleton>
    <div ref="chart1" class="w-full h-full"></div>
  </div>
</template>
