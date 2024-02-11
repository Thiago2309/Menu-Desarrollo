import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import AboutView from '../views/AboutView.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'INICIO',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'PERFIL',
      component: Profile
    },
    {
      path: '/galery',
      name: 'FOTOGRAFIA',
      component: Gallery
    },
    {
      path: '/about',
      name: 'ALBUM',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'NOSOTROS',
      component: Contact
    },
  ]
})

export default router
