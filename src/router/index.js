import { createRouter, createWebHistory } from 'vue-router';
import HomeViewVue from '@/view/HomeView.vue';
import NosotrosViewVue from '@/view/NosotrosView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeViewVue },
    { path: '/nosotros', component: NosotrosViewVue }
   
    
  ]
})

export default router