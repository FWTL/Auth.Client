const routes = [
  {
    path: "/register",
    name: "Register",
    component: () => import("@/modules/Account/Pages/Register.vue"),
    meta: { layout: "empty" },
  },
];

export default routes;
