import router from "@/router/index.ts"
import routes from "@/modules/Auth/Routes/index.ts"

export default class AuthModule {
  private router: any

  constructor() {
    this.router = router;
  }

  public install() : void {
    this.router.addRoutes(routes);
  }
}
