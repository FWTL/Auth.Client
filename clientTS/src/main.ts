import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { ValidationProvider, ValidationObserver } from "vee-validate";

import VOverlayProcessing from "./core/components/v-card-form.vue"
import VTextFieldValidation from "./core/components/v-text-field-validation.vue";
import VCardForm from "./core/components/v-card-form.vue";

//import AuthModule from "./modules/Auth/AuthModule"

Vue.config.productionTip = false;

import Empty from "./core/layouts/empty-layout.vue";
Vue.component("empty-layout", Empty);

import Default from "./core/layouts/default-layout.vue";
Vue.component("default-layout", Default);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.component("v-overlay-processing", VOverlayProcessing);
Vue.component("v-text-field-validation", VTextFieldValidation);
Vue.component("v-card-form", VCardForm);

//new AuthModule().install();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
