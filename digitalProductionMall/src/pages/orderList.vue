<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期
      </div>

      <div class="order-list-option">
        结束日期
      </div>

      <div class="order-list-option">
        关键字
      </div>
    </div>

    <div class="order-list-table">

    </div>
  </div>
</template>

<script>
import VSelection from '../components/base/selection'

export default {
  components: {
    VSelection,
  },

  data () {
    return {
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
      ]
    }
  },

  methods: {
    productChange (obj) {
      this.productId = obj.value
      
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

</style>