import Vue from "vue";
import Vuex from "vuex";
import { state } from "@/store/root.state";
import { mutations } from "@/store/root.mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {}
});
