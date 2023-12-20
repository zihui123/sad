<template>
    <div class="material">
      <h1>原料廠</h1>
    </div>
    <div class="input">
        <h3>原料廠產品編號：</h3>
        <input v-model="input" placeholder="Please input" :style="{ width: '250px' ,height:'25px'}" clearable/>
        <el-row>
            <el-button round :style="{ marginLeft: '6px' }" @click="search">搜尋</el-button>
        </el-row>
    </div>
    <el-table class="form" v-if="showForm" 
      :data="materialList"
      style="width: 100%">
      <el-table-column
        prop="materialName"
        label="材料名稱">
      </el-table-column>
      <el-table-column
        prop="purchaseDate"
        label="購買時間">
      </el-table-column>
      <el-table-column
        prop="origin"
        label="產地">
      </el-table-column>
      <el-table-column
        prop="deliveryTime"
        label="運送時間">
      </el-table-column>
      <el-table-column
        prop="additionalInfo"
        label="其他信息">
      </el-table-column>
    </el-table>
  </template>
  
  <script>
    // import { Search } from '@element-plus/icons-vue'
    export default {
        name: 'MaterialPage',
        data() {
            return {
            showForm: false,
               materialList: [
        {
          materialName: '鞋帶',
          purchaseDate: '2023-01-15',
          origin: '台灣',
          deliveryTime: '2 天',
          additionalInfo: '長度：120 公分，顏色：黑色',
        },
        {
          materialName: '金屬環',
          purchaseDate: '2023-02-20',
          origin: '中國',
          deliveryTime: '5 天',
          additionalInfo: '直徑：2 公分，材質：不鏽鋼',
        },
        {
          materialName: '皮革',
          purchaseDate: '2023-03-10',
          origin: '義大利',
          deliveryTime: '7 天',
          additionalInfo: '顏色：棕色，厚度：3 毫米',
        },
        {
          materialName: '橡膠底',
          purchaseDate: '2023-04-05',
          origin: '越南',
          deliveryTime: '4 天',
          additionalInfo: '尺寸：男鞋號 10，顏色：白色',
        },
        {
          materialName: '布料',
          purchaseDate: '2023-05-12',
          origin: '印度',
          deliveryTime: '6 天',
          additionalInfo: '材質：棉布，花紋：印度風格',
        },
      ],
    };
            
        },
        methods: {
            search() {
                this.showForm = true;
            },
        },
    }
  </script>
  <style>
  
  .input{
   margin-left: 700px;
    display: flex;
    align-items: center;
  }
  .form{
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>