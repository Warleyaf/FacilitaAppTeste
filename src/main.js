import Vue from 'vue'
import App from './App.vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChartColumn, faCircleCheck, faGears, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

library.add(faChartColumn, faCircleCheck, faGears, faMagnifyingGlass, faEllipsisVertical, faTrashCan)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
