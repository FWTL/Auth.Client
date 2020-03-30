import { configure } from "vee-validate";
import { extend, localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import { required, email, min, confirmed } from "vee-validate/dist/rules";

export default function() {
  const config = {
    mode: "eager"
  };
  configure(config);

  localize("en", en);
  extend("min", min);

  extend("confirmed", {
    ...confirmed,
    params: [...confirmed.params, "targetName"],
    message: "Value does not match {targetName}"
  });

  extend("email", {
    ...email,
    message: "Must be a valid email"
  });

  extend("required", {
    ...required,
    message: "This field is required"
  });
}
