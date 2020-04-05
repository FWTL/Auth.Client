import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import textFieldWithValidation from "./components/textFieldWithValidation";
import processingOverlay from "./components/processingOverlay";
import authApiInit from "./plugins/api/auth/index";
import ValidationPlugin from "./plugins/validators";

Vue.use(ValidationPlugin);
authApiInit("http://localhost:5000");

Vue.config.productionTip = false;

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("v-text-field-validation", textFieldWithValidation);
Vue.component("processing-overlay", processingOverlay);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
