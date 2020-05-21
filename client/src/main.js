import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import install from "./plugins/validators";

import VOverlayProcessing from "./core/components/v-overlay-processing";
import VTextFieldValidation from "./core/components/v-text-field-validation";
import VCardFormNavigation from "./core/components/v-card-form-navigation";

import Empty from "./core/layouts/empty-layout.vue";
Vue.component("empty-layout", Empty);

import Default from "./core/layouts/default-layout.vue";
Vue.component("default-layout", Default);

install();

Vue.config.productionTip = false;

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("v-overlay-processing", VOverlayProcessing);
Vue.component("v-text-field-validation", VTextFieldValidation);
Vue.component("v-card-form-navigation", VCardFormNavigation);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
