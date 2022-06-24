<template>
  <div class="image">
    <el-container
      class="h-screen bg-transparent backdrop-filter bg-opacity-50 backdrop-blur-xl"
    >
      <ClientOnly>
        <el-drawer
          v-model="drawer"
          :show-close="true"
          direction="ltr"
          :with-header="false"
          size="200px"
          append-to-body
          custom-class="p-0 m-0"
        >
          <bj-menu @to="drawer = false"> </bj-menu>
        </el-drawer>
      </ClientOnly>
      <el-aside width="200px" class="hidden md:block shadow-sm">
        <el-scrollbar>
          <bj-menu> </bj-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header class="transition-all shadow-sm flex items-center">
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center">
              <div class="block md:hidden mr-2">
                <el-button :icon="Expand" circle @click="drawer = true">
                </el-button>
              </div>
              <h1>App Name</h1>
            </div>
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
            <slot />
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Expand } from '@element-plus/icons-vue'
const drawer = ref(false)

definePageMeta({
  keepalive: false,
})
</script>

<style scoped lang="scss">
.dark .image {
  background-image: url(https://images.unsplash.com/photo-1538720079720-f805a65cdf02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
  background-repeat: no-repeat;
  background-size: cover;
}

.light .image {
  background-image: url(https://images.unsplash.com/photo-1568805647297-df963b524678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
