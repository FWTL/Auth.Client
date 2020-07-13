import axios, { AxiosResponse } from "axios";

class AuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

// class InvalidGrant {
//   constructor(data) {
//     this.body = { [data.error]: [data.error_description.replace(/_/g, " ")] };
//     this.status = 400;
//   }
// }

interface LoginModel {
  username: string;
  password: string;
}

class OauthClient {
  tokenUrl: string;
  clientId: string;

  constructor(baseUrl: string, clientId: string) {
    this.tokenUrl = baseUrl + "/connect/token";
    this.clientId = clientId;
  }

  public async OwnerPassword(model: LoginModel): Promise<void> {
    try {
      const params = new URLSearchParams();
      params.append("grant_type", "password");
      params.append("username", model.username);
      params.append("password", model.password);
      params.append("client_id", this.clientId);
      const response = await axios.post<
        URLSearchParams,
        AxiosResponse<AuthResponse>
      >(this.tokenUrl, params);
      console.log(response.data.access_token);
    } catch {}
  }

  public async RefreshToken(refreshToken: string): Promise<void> {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);
    params.append("client_id", this.clientId);
    await axios.post(this.tokenUrl, params);
  }
}

export { OauthClient, LoginModel };
