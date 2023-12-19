<template>
    <div class="seller">
      <h1>經銷商</h1>
    </div>
    <div class="input">
        <h3>經銷商產品編號：</h3>
        <el-input  v-model="input" placeholder="Please input" :style="{ width: '250px' }" clearable/>
        <el-row>
            <el-button round :style="{ marginLeft: '6px' }" @click="search">搜尋</el-button>
        </el-row>
    </div>
    <div v-if="showForm">
    <h3>加工商交付給經銷商資訊表</h3>
    <div class="form-container">
    <div class="table-column">
    <table class="form-table">
      <tr>
        <td class="left-bar"><strong>出貨單號</strong></td>
        <td >{{ deliveryInfo.shippingNumber }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>產品明細</strong></td>
        <td>{{ deliveryInfo.products }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>生產日期</strong></td>
        <td>{{ deliveryInfo.productionDate }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>產品狀態</strong></td>
        <td>{{ deliveryInfo.productStatus }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>運送資訊</strong></td>
        <td>{{ deliveryInfo.shippingInfo }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>發票</strong></td>
        <td>{{ deliveryInfo.invoiceInfo }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>包裝資訊</strong></td>
        <td>{{ deliveryInfo.packagingInfo }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>品質檢驗報告</strong></td>
        <td>{{ deliveryInfo.qualityReport }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>特殊說明</strong></td>
        <td>{{ deliveryInfo.specialInstructions }}</td>
      </tr>
      <tr>
        <td class="left-bar"><strong>聯絡資訊</strong></td>
        <td>{{ deliveryInfo.contactInfo }}</td>
      </tr>
    </table>
</div>
    <div class="invoice-column">
      <img src="@/assets/invoice.png" alt="invoice">
    </div>
  </div>
  </div>
 

  </template>

  <script>
    export default {
    name: 'sellEr',
    data() {
    return {
        showForm: false,
      deliveryInfo: {
        shippingNumber: 'SH123456',
        products:'Product A-50' ,
        productionDate: '2023-02-15',
        productStatus: '新品',
        shippingInfo: '運送公司: 郵運 運送方式: 快遞 預計到達時間: 2023-02-20',
        invoiceInfo: '發票號碼: INV789 開立日期: 2023-02-15 金額: $5000',
        packagingInfo: '包裝方式: 箱裝 尺寸: 30x20x10 cm 重量: 2 kg',
        qualityReport: '合格',
        specialInstructions: '特殊說明: 請小心處理外包裝',
        contactInfo: '加工商聯絡資訊: Manufacturing Co., 聯絡人: 陳榜, 電話: 093-193-4832',
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
  .form-table {
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 300px;
  width: 800px;
  border-collapse: separate;
  border-spacing: 0; /* 設置表格的間距為0 */
}

.form-table td {
  padding: 10px;
  border: 1px solid #ddd; /* 添加每個單元格的邊框 */
  border-radius: 5px; /* 添加圓角 */
}

.left-bar {
  width: 400px;
  border-right: 1px solid #ddd; /* 添加左側標題欄的邊框 */
}
.form-container {
  display: flex;
  justify-content: space-between;
}

.table-column {
  flex: 1;
}

.invoice-column {
    display: flex;
}
</style>