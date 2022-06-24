<template>
  <div>
    <el-card class="!border-none">
      <h1 class="text-2xl font-semibold text-rose-600 mb-3">CRUD - Product</h1>

      <el-form :model="form" label-width="120px" align="top">
        <el-row :gutter="10">
          <el-col class="mt-4 md:mt-0" :span="24" :md="12" :lg="8">
            <el-input v-model="form.name" placeholder="Name" />
          </el-col>
          <el-col class="mt-4 md:mt-0" :span="24" :md="12" :lg="6">
            <el-input v-model="form.price" placeholder="Price" type="number" />
          </el-col>
          <el-col class="mt-4 lg:mt-0" :span="24" :lg="10">
            <el-input v-model="form.desc" placeholder="Description" />
          </el-col>
          <el-col class="mt-4" :span="24">
            <el-input v-model="form.image" placeholder="URL Image" />
          </el-col>
        </el-row>
        <div class="mt-4 flex justify-end">
          <el-button class="ml-auto" type="primary" @click="save">
            {{ updateIndex != null ? 'Update' : 'Create' }}
          </el-button>
        </div>
      </el-form>
    </el-card>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="({ name, image, price, desc }, index) in products"
        :key="index"
        class="flex shadow-lg bg-white rounded-2xl dark:bg-gray-800 p-3 bg-opacity-50"
      >
        <div class="w-[30%] flex justify-center">
          <img
            class="w-24 h-24 object-cover rounded-3xl"
            :src="image"
            :alt="name"
          />
        </div>
        <div class="w-[70%] p-2">
          <p>
            <b>{{ name }}</b>
          </p>

          <p class="font-light">{{ desc }}</p>
        </div>
        <div class="w-[20%] flex flex-col justify-between">
          <p class="font-bold text-rose-500 text-xl text-right">${{ price }}</p>
          <div class="flex">
            <el-button
              type="primary"
              circle
              plain
              :icon="Edit"
              @click="edit(index, { image, name, price, desc })"
            >
            </el-button>

            <el-button
              :icon="Close"
              circle
              plain
              type="danger"
              @click="del(index)"
            ></el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Close, Edit } from '@element-plus/icons-vue'

import { Ref } from 'vue'

interface Item {
  name?: string
  image?: string
  desc?: string
  price?: string
}

const form: Ref<Item> = ref({})
const updateIndex: Ref<number> = ref(null)

const products: Ref<Item[]> = ref([])

const items = useCookie('products')

onMounted(() => {
  products.value = JSON.parse(items.value ? JSON.stringify(items.value) : '[]')
})

function save() {
  if (updateIndex.value !== null) {
    products.value.splice(updateIndex.value, 1, { ...form.value })
  } else {
    products.value.unshift({ ...form.value })
  }

  form.value = {}
  updateIndex.value = null

  updateCookie()
}

function del(index: number) {
  products.value.splice(index, 1)
  updateCookie()
}

function edit(index: number, data: Item) {
  updateIndex.value = index
  form.value = data
}

function updateCookie() {
  items.value = JSON.stringify(products.value)
}
</script>

<style lang="scss" scoped></style>
