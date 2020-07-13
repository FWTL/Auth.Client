const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/modules/Auth/Pages/Login.vue"),
    meta: { layout: "empty" }
  }
];

export default routes;
