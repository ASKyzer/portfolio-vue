import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import ContentView from '@/views/ContentView.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FormTestComponent from '@/components/FormTestComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingView },
    {
      path: '/content',
      component: ContentView,
      children: [
        {
          path: '/content/about',
          component: AboutSection
        },
        {
          path: '/content/experience',
          component: ExperienceSection
        },
        {
          path: '/content/education',
          component: EducationSection
        },
        {
          path: '/content/contact',
          component: ContactSection
        },
        {
          path: '/content/test',
          component: FormTestComponent
        }
      ]
    }
  ]
})

export default router
