import { ApiClient, UsersApi } from "@/api/user/src/index";
import store from "@/store/index";

function setAuth(req) {
  //console.log(store);
  console.log(store.getters);
  // if (store.getters.token.isAuthenticated) {
  //   req.set("Authorization", store.getters.token.accessToken);
  // }
}

function response(req) {
  req.on("response", function(res) {
    store.commit("PROCESSING_FINISHED");
  });
}

function request(req) {
  req.on("request", async function() {
    store.commit("PROCESSING_STARTED");
  });
}

var client = new ApiClient();
client.basePath = "http://localhost:5000";
client.plugins = [setAuth, request, response];

export default new UsersApi(client);
