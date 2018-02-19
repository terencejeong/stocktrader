<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id">{{stock}}</app-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'getStockPortfolio'
    })
  }
}
</script>

<style>
</style>
