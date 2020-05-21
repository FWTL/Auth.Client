const handlerBadRequest = function(response, form, commit) {
  commit(
    "ERROR_HAS_OCCURRED",
    {
      response,
      form,
    },
    root
  );
  throw 'abort';
};

const root = { root: true };

export { root, handlerBadRequest };
