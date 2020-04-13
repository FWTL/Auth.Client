import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/User";
import token from "@/store/Token";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    processing: false,
    errors: []
  },
  mutations: {
    PROCESSING_STARTED(state) {
      state.processing = true;
    },
    PROCESSING_FINISHED(state) {
      state.processing = false;
    },
    ERROR_HAS_OCCURED(state, payload) {
      console.log(payload);
      const response = payload.response;
      const form = payload.form;

      if (response === undefined) {
        state.errors.push("Unexpected error");
        state.processing = false;
        return;
      }

      if (response.status === 500) {
        state.errors.push("Unexpected error");
        return;
      }

      if (response.status === 400) {
        var errors = response.body;
        Object.entries(errors).forEach(function([key, value]) {
          if ([key] in form._data.refs) {
            form.setErrors({
              [key]: value
            });
          } else {
            state.errors.push(...value);
          }
        });
        return;
      }
    }
  },
  actions: {},
  modules: {
    user,
    token
  }
});
