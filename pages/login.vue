<template>
  <div>
    <el-card class="!border-none !shadow-sm">
      <p class="text-center text-2xl">App Name</p>
      <el-input v-model="auth.auth.email" placeholder="Email" class="mt-5" />
      <el-input
        v-model="auth.auth.password"
        class="mt-5"
        placeholder="Password"
        type="password"
      />
      <div class="flex justify-center mt-5">
        <el-button :loading="auth.loading" type="primary" @click="auth.login">
          Login
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthUserStore } from '@/stores/auth'
definePageMeta({
  layout: 'login',
})

const auth = useAuthUserStore()
</script>
