import { createRouter, createWebHashHistory } from "vue-router";
import Signup from "../components/SignUp.vue";

const routes = [{ path: "/login", component: Signup }];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
