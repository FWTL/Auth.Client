import { ApiClient, UsersApi } from "@/api/user/src/index";
import store from "@/store/index";

function response(req) {
  req.on("response", function(res) {
    store.commit('PROCESSING_STARTED')
  });
}

function request(req) {
  req.on("request", function() {
    store.commit('PROCESSING_FINISHED');
  });
}

var client = new ApiClient();
client.basePath = "http://localhost:5000";
client.plugins = [request, response];

export default new UsersApi(client);
