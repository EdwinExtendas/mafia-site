import Vue from 'vue'

Vue.filter('money', function(money) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return formatter.format(money);
})
