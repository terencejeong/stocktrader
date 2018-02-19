<template>
  <div>
<app-stock v-for="stock in stocks" :stock="stock" :key="stock.id">{{stock}}</app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stocks'
    })
  },
  beforeMount(){
      this.$store.dispatch('INIT_STOCKS')
      console.log('Mounted!')
  }
}
</script>

<style>
</style>
