import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '@/views/connexions/Login.vue'
import Forgotten from '@/views/connexions/Forgotten.vue'

const routes = [
   // Default route: Redirect to '/connexion/login'
   { path: '/', redirect: '/connexion/login' },

  // Connexions routes
  { path: '/connexion/login', name:"login" , component: Login },
  { path: '/connexion/forgotten', name:"forgotten" , component: Forgotten },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router