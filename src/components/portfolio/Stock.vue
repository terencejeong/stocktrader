<template >
  <div class="col-sm-6 col-md-4">
      <div class="panel panel-info class">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{stock.name}}<small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
          </h3>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              >
          </div>
          <div class="pull-right">
            <button
                class="btn btn-info class"
                @click="sellStock"
                :disabled="quantity <= 0 || Number.isInteger(quantity)">
                Sell
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions(['SELLING_STOCKS']),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      this.SELLING_STOCKS(order)
    }
  }
}
</script>

<style>
</style>
