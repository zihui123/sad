<template>
    <div class="customer">
      <h1>我是顧客</h1>
    </div>
    <div class="input">
        <h3>欲查詢產品編號：</h3>
        <input v-model="input" placeholder="Please input" :style="{ width: '250px' ,height:'25px'}" clearable/>
        <el-row>
            <el-button round :style="{ marginLeft: '6px' }" @click="search">搜尋</el-button>
        </el-row>
    </div>
    <div v-if="showForm">
    <h3>鞋子生產履歷</h3>
    <table class="production-history">
      <tbody>
        <tr>
          <td class="left-bar"><strong>型號和設計</strong></td>
          <td>{{ productionInfo.modelAndDesign }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>材料</strong></td>
          <td>{{ productionInfo.materials.join(', ') }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>生產日期和地點</strong></td>
          <td>{{ productionInfo.productionDate }} - {{ productionInfo.productionLocation }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>製造商和工廠信息</strong></td>
          <td>{{ productionInfo.manufacturer }} - {{ productionInfo.factory }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>生產流程</strong></td>
          <td>{{ productionInfo.productionProcess.join(', ') }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>檢驗和品質控制</strong></td>
          <td>{{ productionInfo.qualityControl }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>包裝和運輸</strong></td>
          <td>{{ productionInfo.packagingAndShipping }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>特殊說明</strong></td>
          <td>{{ productionInfo.specialInstructions }}</td>
        </tr>
        <tr>
          <td class="left-bar"><strong>最終檢驗</strong></td>
          <td>{{ productionInfo.finalInspection }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
    name: 'sellEr',
    data() {
    return {
        showForm: false,
      productionInfo: {
        modelAndDesign: '型號 Sacai x Ldv, 流線型設計',
        materials: ['鞋面材料', '鞋底材料', '鞋帶'],
        productionDate: '2023-01-15',
        productionLocation: '製造工廠 A',
        manufacturer: '製造商 A',
        factory: '工廠 A',
        productionProcess: ['裁剪', '縫紉', '黏合', '組裝'],
        qualityControl: '每個階段檢驗，符合標準即可通過',
        packagingAndShipping: '箱裝，運送公司: 郵遞公司，預計到達時間: 2023-01-25',
        specialInstructions: '特殊說明: 注意保存方式，避免陽光直射',
        finalInspection: '通過最終檢驗，合格出廠',
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
.production-history {
    margin-left: 500px;
  width: 850px;
  border-collapse: collapse;
  margin-top: 20px;
}

.production-history td {
  border: 1px solid #ddd;
  padding: 8px;
}

.left-bar {
  width: 200px;
  border-right: 1px solid #ddd;
  background-color: #f2f2f2;
}
</style>