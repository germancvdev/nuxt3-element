<template>
  <div>
    Alarms
    <el-row :gutter="20">
      <el-col :span="12"> <alarms-chart1></alarms-chart1> </el-col>
      <el-col :span="12">
        <kpis-chart1></kpis-chart1>
      </el-col>

      <el-col :span="24">
        <el-card class="!border-none !shadow-sm mt-5">
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 7 }).fill(item))
</script>

<style lang="scss" scoped></style>
