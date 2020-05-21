const mutations = {
  LOADING_STARTED(state) {
    state.processing = true;
  },
  LOADING_FINISHED(state) {
    state.processing = false;
  },
  ERROR_HAS_OCCURRED(state, payload) {
    const response = payload.response;
    const form = payload.form;

    if (response === undefined) {
      state.errors.push("Unexpected error");
      state.processing = false;
      return;
    }

    if (response.status === 400) {
      var errors = response.body;
      Object.entries(errors).forEach(function([key, value]) {
        if (form && [key] in form._data.refs) {
          form.setErrors({
            [key]: value,
          });
        } else {
          state.errors.push(...value);
        }
      });
      return;
    }

    state.errors.push("Unexpected error");
    return;
  },
};

export default mutations;
