import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shows from '../views/Shows.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'




const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shows',
      name: 'shows',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/Shows.vue')
      component: Shows
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: HomeView },
  ]
})

export default router
