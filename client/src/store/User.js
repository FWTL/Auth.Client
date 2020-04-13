import UserService from "@/services/UserService";

const actions = {
  registerUser({ commit }, payload) {
    UserService.apiUsersPost({ registerUser: payload.registerUser }).catch(
      error =>
        commit("ERROR_HAS_OCCURED", {
          response: error.response,
          form: payload.form
        })
    );
  }
};

export default {
  state: {},
  mutations: {},
  actions,
  getters: {}
};
