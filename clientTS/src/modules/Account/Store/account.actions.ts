import { ACTIONS } from "./action-types";
import { MUTATIONS } from "@/store/mutation-types";
import { ActionTree, Commit } from "vuex";
import { RegisterUser } from "@/api/fwtl";
import { usersApi } from "@/plugins/FwtlApiModule";

const derp = async function(commit: Commit, ff: any) {
  try {
    commit(MUTATIONS.LOADING_STARTED);
    const response = await ff();
    console.log(response);
    commit(MUTATIONS.LOADING_FINISHED);
    console.log("A");
  } catch (error) {
    console.log("AAAAA");
  }
};

export const actions: ActionTree<unknown, unknown> = {
  [ACTIONS.REGISTER_USER]: async ({ commit }, registerUser: RegisterUser) => {
    try {
      commit(MUTATIONS.LOADING_STARTED);
      await usersApi.usersPost(registerUser);
      commit(MUTATIONS.LOADING_FINISHED);
    } catch (error) {
      commit(MUTATIONS.ERROR_HAS_OCCURRED, error.response.data);
    }
  }
};

// // import AuthApi from "@/services/auth.api.js";
// // import UsersApi from "@/services/api.js";
// // import { root, handlerBadRequest } from "@/helpers/store";

// const actions = {
//   async get({ commit }, payload) {
//     try {
//       commit("LOADING_STARTED", null, root);
//       var accessToken = await AuthApi.ownerPassword(
//         payload.userName,
//         payload.password
//       );

//       commit("LOADING_FINISHED", null, root);
//       commit("TOKEN_ACQUIRED", accessToken);
//     } catch (invalidGrant) {
//       commit("LOADING_FINISHED", null, root);
//       handlerBadRequest(invalidGrant, payload.form, commit);
//     }
//   },
//   refresh({ commit, getters }) {
//     return AuthApi.refreshToken(getters.refreshToken)
//       .then((token) => {
//         commit("TOKEN_ACQUIRED", { token });
//         return token;
//       })
//       .catch((invalidGrant) => {
//         return Promise.reject(invalidGrant);
//       });
//   },
//   async register({ commit }, payload) {
//     const { registerUser, form } = payload;
//     try {
//       await UsersApi.usersPost({ registerUser });
//     } catch (error) {
//       handlerBadRequest(error.response, form, commit);
//     }
//   },
// };

// export default actions;
