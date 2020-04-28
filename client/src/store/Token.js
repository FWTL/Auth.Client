import TokenService from "@/services/TokenService";

const actions = {
  getToken({ commit }, payload) {
    commit("PROCESSING_STARTED");

    return TokenService.ownerPassword(payload.userName, payload.password)
      .then((accessToken) => {
        commit("PROCESSING_FINISHED");
        commit("TOKEN_AQUIRED", accessToken);
        return accessToken;
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
  refreshToken({ commit, getters }) {
    return TokenService.refreshToken(getters.refreshToken)
      .then((token) => {
        commit("TOKEN_AQUIRED", { token });
        return token;
      })
      .catch((invalidGrant) => {
        return Promise.reject(invalidGrant);
      });
  },
  logOut({ commit }) {
    commit("USER_LOGGED_OUT");
  },
};

const state = {
  it: null,
};

const getters = {
  isAuthenticated: (state) => !!state.it && !state.it.isExpired,
  accessToken: (state) => state.it.token,
  refreshToken: (state) => state.it.refreshToken,
};

const mutations = {
  TOKEN_AQUIRED(state, accessToken) {
    state.it = accessToken;
  },
  USER_LOGGED_OUT(state) {
    state.it = null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
