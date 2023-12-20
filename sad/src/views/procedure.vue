
<!-- eslint-disable -->
<template>
    <div class="procedure">
      <h1>This is an Blame system</h1>
      <h2>請選擇咎責流程</h2>
      <el-select v-model="value" class="m-2" placeholder="Select" size="large" :style="{ width: '250px' }" @change="handleChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    </el-select>
    <el-row class="mb-4">
        <el-button type="warning" @click="search">GO</el-button>
    </el-row>
    </div>
  </template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const value = ref('')
const router = useRouter();
const options = [
  {
    value: '廠商',
    label: '廠商',
  },
  {
    value: '顧客',
    label: '顧客',
  },
  
]
const search = () => {
  switch (value.value) {
    case '廠商':
      router.push('/feedBack')
      break
    case '顧客':
      router.push('/customer')
      break
    
    default:
      break
  }
}

</script>
<style>
.procedure {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h1 {
  color: #333;
}
.mb-4{
    margin-left: 500px;
}
</style>