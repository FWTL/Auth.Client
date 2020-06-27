import { MutationTree } from "vuex";
import { State } from "./root.state";

import { MUTATIONS } from "./mutation-types";

export const mutations: MutationTree<State> = {
  [MUTATIONS.LOADING_STARTED]: (state: State) => {
    state.processing = true;
  },

  [MUTATIONS.LOADING_FINISHED]: (state: State) => {
    state.processing = false;
  },

  [MUTATIONS.ERROR_HAS_OCCURRED]: (state: State, payload: any) => {
    const response = payload.response;

    if (response === undefined) {
      state.errors.push("Unexpected error");
      state.processing = false;
      return;
    }

    if (response.status === 400) {
      const errors = response.body;
      return;
    }

    state.errors.push("Unexpected error");
    return;
  }
};
