<template>
    <div class="process">
      <h1>加工廠</h1>
    </div>
    <div class="input">
        <h3>加工廠產品編號：</h3>
        <el-input  v-model="input" placeholder="Please input" :style="{ width: '250px' }" clearable/>
        <el-row>
            <el-button round :style="{ marginLeft: '6px' }" @click="search">搜尋</el-button>
        </el-row>
    </div>
    <div v-if="showForm">
    <h3>鞋子資訊表 第一階段通過</h3>
    <table class="form-table">
      <tr>
        <td class="left-bar"><strong>型號</strong></td>
        <td>{{ shoeInfo.model }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>產地</strong></td>
        <td>{{ shoeInfo.origin }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>材料</strong></td>
        <td>{{ shoeInfo.material }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>顏色</strong></td>
        <td>{{ shoeInfo.color }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>原料廠</strong></td>
        <td>{{ shoeInfo.factory }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>生產日期</strong></td>
        <td>{{ shoeInfo.productionDate }}</td>
      </tr>
    </table>
    </div>
  </template>

  <script>
export default {
    name: 'proCess',

    data() {
        return {
            showForm: false,
            shoeInfo: {
                model: 'Sacai x Ldv',
                origin: 'Taiwan',
                material: 'Leather',
                factory: '原料廠 Shoes Co.',
                productionDate: '2023-11-21',
                color:'閃電 灰白',
                // 其他鞋子的詳細資訊
            },
      
        };
    },
    methods: {
            search() {
                this.showForm = !this.showForm;
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
  .custom-table th {
  text-align: left;
}
.form-table {
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 690px;
  width: 500px;
  border-collapse: separate;
  border-spacing: 0; /* 設置表格的間距為0 */
}

.form-table td {
  padding: 10px;
  border: 1px solid #ddd; /* 添加每個單元格的邊框 */
  border-radius: 5px; /* 添加圓角 */
}

.left-bar {
  width: 150px;
  border-right: 1px solid #ddd; /* 添加左側標題欄的邊框 */
}
</style>