import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '@/views/LandingView.vue';
import ContentView from '@/views/ContentView.vue';
import AboutSection from '../components/AboutSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import ContactSection from '@/components/ContactSection.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingView },
    {
      path: '/content',

      component: ContentView,
      children: [
        {
          path: 'about',
          component: AboutSection
        },
        {
          path: 'experience',
          component: ExperienceSection
        },
        {
          path: 'education',
          component: EducationSection
        },
        {
          path: 'contact',
          component: ContactSection
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});

export default router;
