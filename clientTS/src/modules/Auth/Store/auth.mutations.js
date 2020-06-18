const mutations = {
  TOKEN_ACQUIRED(state, accessToken) {
    state.it = accessToken;
    window.localStorage.setItem("token", JSON.stringify(accessToken));
  },
};

export default mutations;
