import { ApiClient } from "../../../api/auth/src/index";
import store from "../../../store/index";

export default function init(basePath) {
  ApiClient.instance.basePath = basePath;

  function response(req) {
    req.on("response", function(res) {
      store.state.processing = false;
      
      if (res.status === 400) {
        var response = JSON.parse(res.xhr.response);
        Object.entries(response).forEach(function([key, value]) {
          store.state.errors.push(...value);
        });
      }
    });
  }

  function request(req) {
    req.on("request", function() {
      store.state.processing = true;
    });
  }

  ApiClient.instance.plugins = [request, response];
}
