<template>
    <div class="feedBack">
      <h1>This is an feedBack system</h1>
      <h2>請選擇身份</h2>
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
    value: '原料廠',
    label: '原料廠',
  },
  {
    value: '加工廠',
    label: '加工廠',
  },
  {
    value: '經銷商',
    label: '經銷商',
  },
  {
    value: '顧客',
    label: '顧客',
  },
  
]
const search = () => {
  // 根據選擇的 value 導航到不同的頁面
  switch (value.value) {
    case '原料廠':
      router.push('/material')
      break
    case '經銷商':
      router.push('/seller')
      break
    case '加工廠':
      router.push('/process')
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
.feedBack {
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