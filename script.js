new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    filters: {
        // filter currency.rate_float data by fixing the numbers after the decimal point to two
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
        // get data from the API 
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.info = response.data.bpi
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        // when calling API is complete set loading value to false
        .finally(() => this.loading = false)
    }
  })