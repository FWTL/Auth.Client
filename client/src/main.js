import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import ValidationPlugin from "./plugins/validators";

import authApiInit from "./services/authService";

import VOverlayProcessing from "./components/v-overlay-processing";
import VTextFieldValidation from "./components/v-text-field-validation";
import VCardForm from "./components/v-card-form";

import Empty from "./components/layouts/empty-layout.vue";
Vue.component("empty-layout", Empty);

import Default from "./components/layouts/default-layout.vue";
Vue.component("default-layout", Default);

Vue.use(ValidationPlugin);
authApiInit("http://localhost:5000");

Vue.config.productionTip = false;

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("v-overlay-processing", VOverlayProcessing);
Vue.component("v-text-field-validation", VTextFieldValidation);
Vue.component("v-card-form", VCardForm);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
