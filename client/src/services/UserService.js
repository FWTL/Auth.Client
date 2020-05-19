import { ApiClient, UsersApi } from "@/api/user/src/index";
import store from "@/store/index";

function setAuth(req) {
  console.log(store.getters["token/isAuthenticated"]);
  if (store.getters["token/isAuthenticated"] === true) {
    req.set("Authorization", "Bearer " + store.state.token.it.accessToken);
  }
}

function response(req) {
  req.on("response", function(res) {
    store.commit("PROCESSING_FINISHED");
  });
}

function request(req) {
  req.on("request", function() {
    store.commit("PROCESSING_STARTED");
  });
}

var client = new ApiClient();
client.basePath = "http://localhost:5000";
client.plugins = [setAuth, request, response];

export default new UsersApi(client);
