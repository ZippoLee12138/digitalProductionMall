<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期
        <v-date-picker @on-change="getStartDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        结束日期
        <v-date-picker @on-change="getEndDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        关键字
        <input type="text" v-model.lazy="query" class="order-query"  />
      </div>
    </div>

    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" @click="changeOrderType(head)"  :class="{active: head.active}">{{head.label}}</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '../components/base/selection'
import VDatePicker from "../components/base/datepicker";
import _ from 'lodash'
export default {
  components: {
    VSelection,
    VDatePicker
  },

  data () {
    return {
      query: '',
      productId: 0,
      startDate: '',
      endDate: '',
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId',
          active: false
        },
        {
          label: '购买产品',
          key: 'product',
          active: false
        },
        {
          label: '版本类型',
          key: 'version',
          active: false
        },
        {
          label: '有效时间',
          key: 'period',
          active: false
        },
        {
          label: '购买日期',
          key: 'date',
          active: false
        },
        {
          label: '数量',
          key: 'buyNum',
          active: false
        },
        {
          label: '总价',
          key: 'amount',
          active: false
        }
      ],
    }
  },
  watch: {
    query () {
        this.getList()      
    }
  },

  methods: {
    productChange (obj) {
      this.productId = obj.value
      
    },
    getStartDate (date) {
      this.startDate = date        
      this.getList()     
    },
    getEndDate (date) {
      this.endDate = date
      this.getList()     
    },
    getList () {

    },
    changeOrderType (headItem) {
      this.tableHeads.map((item) => {
        item.active = headItem.key == item.key
        return item
      })
      console.log(this.tableHeads);
      
    }
  }
}
</script>

<style scoped>

.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}

.order-list-option {
  display: inline-block;
  padding-left: 15px;
}

.order-query  {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}

.order-list-table {
  margin-top: 20px;
}

.order-list-table tr{
  border: 1px gray solid;
}

.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}

.order-list-table th {
  width: 140px;
  border: 1px #4fc08d solid;
  text-align: center;
  background-color:  #4fc08d;
  color: white;
  cursor: pointer;
}

.order-list-table th.active {
  background: #35495e;
}
</style>