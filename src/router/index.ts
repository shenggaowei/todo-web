const Home = () => import("../pages/Home/index.vue")
const Login = () => import('../pages/Login/index.vue')

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
]

export default routes