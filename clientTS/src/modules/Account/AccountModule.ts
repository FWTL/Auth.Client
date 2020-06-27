import router from "@/router/index";
import store from "@/store/index";

import routes from "@/modules/Account/Routes/index";
import module from "@/modules/Account/Store/index";

import VueRouter from "vue-router";
import { Store } from "vuex";

export default class AuthModule {
  private router: VueRouter;
  private store: Store<{}>;

  constructor() {
    this.router = router;
    this.store = store;
  }

  public install(): void {
    this.router.addRoutes(routes);
    this.store.registerModule("account", module);
  }
}
