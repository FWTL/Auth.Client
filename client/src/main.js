import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import textFieldWithValidation from "./components/textFieldWithValidation";

import validatorsInit from './validators/init'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('v-text-field-validation', textFieldWithValidation);
validatorsInit();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
