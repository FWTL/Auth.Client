import { ApiClient, UsersApi } from "@/api/user/src/index";
import store from "@/store/index";

function response(req) {
  req.on("response", function(res) {
    store.commit("PROCESSING_FINISHED");
  });
}

function request(req) {
  req.on("request", function() {
    if (store.getters.isAuthenticated) {
      if (store.state.accessToken.isExpired) {
        store.dispatch("refreshToken");
      }
      request.set({ Authorization: store.token.accessToken });
    }
    store.commit("PROCESSING_STARTED");
  });
}

var client = new ApiClient();
client.basePath = "http://localhost:5000";
client.plugins = [request, response];

export default new UsersApi(client);
