const Todo = () => import("../pages/todo.vue")
const Login = () => import('../pages/Login/Login.vue')

const routes = [
  { path: '/home', component: Todo },
  { path: '/login', component: Login },
]

export default routes