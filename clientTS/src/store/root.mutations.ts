import { MutationTree } from "vuex";
import { State } from "./root.state";

import { MUTATIONS } from "./mutation-types";
import { ErrorResponse } from "@/core/models/Response";

export const mutations: MutationTree<State> = {
  [MUTATIONS.LOADING_STARTED]: (state: State) => {
    state.processing = true;
  },

  [MUTATIONS.LOADING_FINISHED]: (state: State) => {
    state.processing = false;
  },

  [MUTATIONS.ERROR_HAS_OCCURRED]: (state: State, payload: ErrorResponse) => {
    console.log(payload);

    if (payload.status === 400) {
      payload.errors?.forEach((value: string[]) => {
        state.errors.push(...value);
      });
      return;
    }

    state.errors.push("Unexpected error");
    return;
  }
};
