import TokenService from "@/services/TokenService";

const actions = {
  getToken({ commit }, payload) {
    commit("PROCESSING_STARTED");

    TokenService.ownerPassword(payload.userName, payload.password)
      .then(token => {
        commit("PROCESSING_FINISHED");
        commit("TOKEN_AQUIRED", {
          response: token,
          form: payload.form
        });
      })
      .catch(invalidGrant => {
        commit("PROCESSING_FINISHED");
        commit("ERROR_HAS_OCCURED", {
          response: invalidGrant,
          form: payload.form
        });
      });
  }
};

export default {
  state: {},
  mutations: {
    TOKEN_AQUIRED(state, token) {
      console.log(token);
    }
  },
  actions,
  getters: {}
};
