<template>
  <el-scrollbar>
    <div class="m-2 rounded-md shadow-md">
      <img
        class="rounded-md"
        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
        alt="Logo"
      />
    </div>
    <el-menu :default-active="menuActive" class="!bg-transparent !border-none">
      <nuxt-link to="/" @click.stop="$emit('to')">
        <el-menu-item index="1">
          <el-icon><IconMenu /></el-icon>Dashboard
        </el-menu-item>
      </nuxt-link>

      <nuxt-link to="/kpis" @click.stop="$emit('to')">
        <el-menu-item index="2">
          <el-icon><Setting /></el-icon>KPIs
        </el-menu-item>
      </nuxt-link>

      <nuxt-link to="/alarms" @click.stop="$emit('to')">
        <el-menu-item index="3">
          <el-icon><message /></el-icon>Alarms
        </el-menu-item>
      </nuxt-link>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const route = useRoute()

const menuActive = ref(null)

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
</script>
