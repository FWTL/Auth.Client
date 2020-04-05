import { configure } from "vee-validate";
import { extend, localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import { required, email, min, confirmed } from "vee-validate/dist/rules";
import store from "../store/index";

const ValidationPlugin = {
  install(Vue) {
    initDefaults();

    Vue.prototype.$decorateResponse = decorate;
  },
};

function decorate(method, callback, form) {
  method((error, data, response) => {
    if (error && response === undefined) {
      console.log(error);
      store.state.errors.push("Unexpected error");
      store.state.processing = false;
      return;
    }

    if (response.status === 500) {
      store.state.errors.push("Unexpected error");
      return;
    }

    if (response.status === 400) {
      var errors = response.body;
      Object.entries(errors).forEach(function ([key, value]) {
        if ([key] in form._data.refs) {
          form.setErrors({
            [key]: value,
          });
        } else {
          store.state.errors.push(...value);
        }
      });
      return;
    }

    if (response.status === 200) {
      callback(data);
    }
  });
}

function initDefaults() {
  const config = {
    mode: "eager",
  };
  configure(config);

  localize("en", en);
  extend("min", min);

  extend("confirmed", {
    ...confirmed,
    params: [...confirmed.params, "targetName"],
    message: "Value does not match {targetName}",
  });

  extend("email", {
    ...email,
    message: "Must be a valid email",
  });

  extend("required", {
    ...required,
    message: "This field is required",
  });
}

export default ValidationPlugin;
