import UserService from "@/services/UserService";

const actions = {
  register({ commit }, payload) {
    return UserService.usersPost({
      registerUser: payload.registerUser,
    }).catch((error) => {
      commit(
        "ERROR_HAS_OCCURED",
        {
          response: error.response,
          form: payload.form,
        },
        { root: true }
      );
      return Promise.reject(error.response);
    });
  },
  usersMeGet({ state }) {
    return UserService.usersMeGet()
      .then((model) => {
        state.me = model;
      })
      .catch((error) => {
        return Promise.reject(error.response);
      });
  },
};

export default {
  namespaced: true,
  state: {
    me: null,
  },
  mutations: {},
  actions,
  getters: {},
};
