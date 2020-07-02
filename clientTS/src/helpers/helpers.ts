import { Commit } from "vuex";
import { MUTATIONS } from "@/store/mutation-types";
import { ErrorResponse, UnknownResponse } from "@/core/models/Response";

export const apiHandler = async function(commit: Commit, fn: any) {
  try {
    commit(MUTATIONS.LOADING_STARTED);
    await fn();
    commit(MUTATIONS.LOADING_FINISHED);
  } catch (error) {
    commit(MUTATIONS.LOADING_FINISHED);
    let response: ErrorResponse;
    if (error.response) {
      response = {
        errors: new Map(Object.entries(error.response.data)),
        status: error.response.status
      };
    } else {
      response = new UnknownResponse();
    }
    commit(MUTATIONS.ERROR_HAS_OCCURRED, response);
    throw response;
  }
};
