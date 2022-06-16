<template>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>

    <el-row :gutter="20" class="my-3">
      <el-col :span="16"><div class="bg-purple-300 h-10 w-full" /></el-col>
      <el-col :span="8"><div class="bg-purple-300 h-10 w-full" /></el-col>
    </el-row>
    <el-row :gutter="20" class="my-3">
      <el-col :span="8"><div class="bg-purple-300 h-10 w-full" /></el-col>
      <el-col :span="8"><div class="bg-purple-300 h-10 w-full" /></el-col>
      <el-col :span="4"><div class="bg-purple-300 h-10 w-full" /></el-col>
      <el-col :span="4"><div class="bg-purple-300 h-10 w-full" /></el-col>
    </el-row>
    <el-row :gutter="20" class="my-3">
      <el-col :span="4"><div class="bg-purple-300 h-10 w-full" /></el-col>
      <el-col :span="16"><div class="bg-purple-300 h-10 w-full" /></el-col>
      <el-col :span="4"><div class="bg-purple-300 h-10 w-full" /></el-col>
    </el-row>

    <el-row :gutter="20" class="my-3">
      <el-col
        v-for="item in 6"
        :key="item"
        :span="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="4"
        class="mb-4"
      >
        <el-card
          :border="0"
          class="!border-none"
          :body-style="{ padding: '0px' }"
        >
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="w-full h-40 p-0 m-0"
          />
          <div class="p-4">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">date</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
