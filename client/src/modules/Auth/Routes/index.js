const routes = [
  {
    path: "/register",
    name: "Register",
    component: () => import("@/modules/Auth/Pages/Register.vue"),
    meta: { layout: "empty" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/modules/Auth/Pages/Login.vue"),
    meta: { layout: "empty" },
  },
];

export default routes;
