<template>
  <el-scrollbar>
    <div class="relative h-screen w-full">
      <bj-mode class="absolute top-0 right-0"></bj-mode>

      <main class="flex justify-center items-center w-full h-full">
        <slot></slot>
      </main>
    </div>
  </el-scrollbar>
</template>

<script setup></script>
