import Client from "@/api/oauth/index";

var oauthClient = new Client({
  baseUrl: "http://localhost:5000",
  clientId: "FWTL"
});

export default oauthClient;
