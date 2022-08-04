import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import configVant from './helpers/vant'
import routes from './router'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

configVant(app)

app.use(router).mount('#app')
