import { ApiClient } from "../../../api/auth/src/index";
import store from "../../../store/index";

export default function init(basePath) {
  ApiClient.instance.basePath = basePath;

  function response(req) {
    req.on("response", function(res) {
      store.state.processing = false;
    });
  }

  function request(req) {
    req.on("request", function() {
      store.state.processing = true;
    });
  }

  ApiClient.instance.plugins = [request, response];
}
