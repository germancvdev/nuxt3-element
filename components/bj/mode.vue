<template>
  <div class="ml-2">
    <el-button
      v-if="$colorMode.preference == 'light'"
      :icon="Moon"
      circle
      text
      @click="$colorMode.preference = 'dark'"
    />
    <el-button
      v-else
      :icon="Sunny"
      circle
      text
      @click="$colorMode.preference = 'light'"
    />
  </div>
</template>

<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
