import Vue from "vue";
import Vuex from "vuex";
import state from "./root.state";
import mutations from "./root.mutations";

import auth from "@/modules/Auth/Store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  modules: { auth },
});
