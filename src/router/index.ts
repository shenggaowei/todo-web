const Home = () => import("../pages/Home/index.vue");
const Login = () => import("../pages/Login/index.vue");
const NotFound = () => import("../pages/NotFound/index.vue");
const Registry = () => import("../pages/Registry/index.vue");

const routes = [
  { path: "/", redirect: "/home", name: "root" },
  { path: "/home", component: Home, name: "home", props: { login: true } },
  { path: "/login", component: Login, name: "login" },
  { path: "/registry", component: Registry, name: "registry" },
  { path: "/not-found", component: NotFound, name: "not-found" },
];

export default routes;
