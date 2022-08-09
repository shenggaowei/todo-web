const Home = () => import("../pages/Home/index.vue")
const Login = () => import('../pages/Login/index.vue')

const routes = [
  { path: '/home', component: Home, name: 'home', props: { login: true } },
  { path: '/login', component: Login, name: 'login' },
]

export default routes