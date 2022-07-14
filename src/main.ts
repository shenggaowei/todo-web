import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import { createRouter, createWebHashHistory } from '@ionic/vue-router'
import routes from './router'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router).use(IonicVue).mount('#app')
