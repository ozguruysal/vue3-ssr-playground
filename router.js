import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

import TeleportTest from "./TeleportTest.vue";

const routes = [
  {
    path: "/",
    name: "teleport-test",
    component: TeleportTest,
  },
];

const history =
  process.env.VUE_ENV === "server" ? createMemoryHistory() : createWebHistory();

export function initRouter() {
  const router = createRouter({
    history,

    routes,
  });

  return router;
}
