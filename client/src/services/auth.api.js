import Client from "@/api/auth/index";

var oauthClient = new Client({
  baseUrl: "http://localhost:5000",
  clientId: "FWTL"
});

export default oauthClient;