import { Commit } from "vuex";
import { MUTATIONS } from "@/store/mutation-types";
import { ErrorResponse, UnknownResponse } from "@/core/models/Response";

async function apiHandler<T>(
  commit: Commit,
  callback: () => Promise<T>
): Promise<T> {
  try {
    commit(MUTATIONS.LOADING_STARTED);
    const result = await callback();
    commit(MUTATIONS.LOADING_FINISHED);
    return result;
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
}

export default apiHandler;
