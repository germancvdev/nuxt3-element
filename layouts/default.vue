<template>
  <el-container class="h-screen">
    <el-aside width="200px" class="shadow-sm">
      <el-scrollbar>
        <div class="m-2 rounded-md shadow-md">
          <img
            class="rounded-md"
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            alt="Logo"
          />
        </div>
        <el-menu
          :default-active="menuActive"
          class="!bg-transparent !border-none"
        >
          <nuxt-link to="/">
            <el-menu-item index="1">
              <el-icon><IconMenu /></el-icon>Dashboard
            </el-menu-item>
          </nuxt-link>

          <nuxt-link to="/kpis">
            <el-menu-item index="2">
              <el-icon><Setting /></el-icon>KPIs
            </el-menu-item>
          </nuxt-link>

          <nuxt-link to="/alarms">
            <el-menu-item index="3">
              <el-icon><message /></el-icon>Alarms
            </el-menu-item>
          </nuxt-link>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header class="transition-all shadow-sm flex items-center">
        <div class="flex justify-between items-center w-full">
          <h1>App Name</h1>
          <div class="flex items-center">
            <el-dropdown>
              <el-icon><Setting /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>

            <bj-mode></bj-mode>
          </div>
        </div>
      </el-header>

      <el-scrollbar>
        <el-main>
          <slot></slot>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const route = useRoute()

const menuActive = ref(null)
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}

onMounted(() => {
  switch (route.path) {
    case '/':
      menuActive.value = '1'

      break
    case '/kpis':
      menuActive.value = '2'

      break
    case '/alarms':
      menuActive.value = '3'

      break

    default:
      break
  }
})
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
