import { ACTIONS } from "./action-types";
import { ActionTree } from "vuex";
import { RegisterUser, UsersApi } from "@/api/fwtl";

export const actions: ActionTree<unknown, unknown> = {
  [ACTIONS.REGISTER_USER]: async ({ commit }, registerUser: RegisterUser) => {
    console.log(registerUser);
    const api = new UsersApi();
    await api.usersPost(registerUser);
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
