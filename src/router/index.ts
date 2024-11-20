import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/views/connexions/Login.vue'
import Forgotten from '@/views/connexions/Forgotten.vue'
import ResetPassword from '@/views/connexions/ResetPassword.vue'
import Note from '@/views/notes/Note.vue'
import NoteDetail from '@/views/notes/NoteDetail.vue'
import CreateNote from '@/views/notes/CreateNote.vue'

const routes = [
   // Default route: Redirect to '/connexion/login'
   { path: '/', redirect: '/notes/note' },

  // Connexions routes
  { path: '/connexion/login', name:"login" , component: Login },
  { path: '/connexion/forgotten', name:"forgotten" , component: Forgotten },
  { path: '/connexion/reset', name:"resetPassword" , component: ResetPassword },
  
  // Notes routes
  { path: '/notes/note', name:"notes" , component: Note },
  { path: '/notes/note-detail/:id', name:"noteDetail" , component: NoteDetail },
  { path: '/notes/create-note', name:"createNote" , component: CreateNote },



  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router