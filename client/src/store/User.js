import UserService from "@/services/UserService";

const handlerBadRequest = function(error, form, commit) {
  commit(
    "ERROR_HAS_OCCURED",
    {
      response: error.response,
      form,
    },
    { root: true }
  );
  return Promise.reject(error.response);
};

const actions = {
  register({ commit }, payload) {
    const { registerUser, form } = payload;
    return UserService.usersPost({
      registerUser,
    }).catch((error) => handlerBadRequest(error, form, commit));
  },
  usersMeGet({ state }) {
    return UserService.usersMeGet()
      .then((model) => {
        console.log(model);
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
