import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '@/views/connexions/Login.vue'
import Forgotten from '@/views/connexions/Forgotten.vue'
import Home from '@/views/Home.vue'

const routes = [
   // Default route: Redirect to '/connexion/login'
   { path: '/', redirect: '/connexion/login' },

  // Connexions routes
  { path: '/connexion/login', name:"login" , component: Login },
  { path: '/connexion/forgotten', name:"forgotten" , component: Forgotten },
  { path: '/home', name:"home" , component: Home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router