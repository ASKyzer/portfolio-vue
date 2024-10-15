import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import ContentViewComponent from '@/components/ContentViewComponent.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContentView from '@/views/ContentView.vue';
import LandingView from '@/views/LandingView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingView },
    {
      path: '/content',

      component: ContentView,
      children: [
        {
          path: '',
          component: ContentViewComponent
        },
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
          path: 'projects',
          component: ProjectsSection
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

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
