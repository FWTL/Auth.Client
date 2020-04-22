import TokenService from "@/services/TokenService";

const actions = {
  getToken({ commit }, payload) {
    commit("PROCESSING_STARTED");

    return TokenService.ownerPassword(payload.userName, payload.password)
      .then((token) => {
        commit("PROCESSING_FINISHED");
        commit("TOKEN_AQUIRED", { token });
        return token;
      })
      .catch((invalidGrant) => {
        commit("PROCESSING_FINISHED");
        commit("ERROR_HAS_OCCURED", {
          response: invalidGrant,
          form: payload.form,
        });
        return Promise.reject(invalidGrant);
      });
  },
  refreshToken({ commit, state }) {
    return TokenService.refreshToken(state.accessToken.token)
      .then((token) => {
        commit("TOKEN_AQUIRED", { token });
        return token;
      })
      .catch((invalidGrant) => {
        return Promise.reject(invalidGrant);
      });
  },
};

const state = {
  accessToken: null,
};

const getters = {
  isAuthenticated: (state) => !!state.accessToken,
};

const mutations = {
  TOKEN_AQUIRED(state, token) {
    state.accessToken = true;
  },
  USER_LOGGED_OUT(state) {
    state.accessToken = null;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
