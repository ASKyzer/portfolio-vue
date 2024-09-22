<script lang="ts">
import { defineComponent, ref } from 'vue'
import AccordionComponent from './AccordionComponent.vue'

export default defineComponent({
  components: {
    AccordionComponent
  },
  setup() {
    const accordionItems = ref([
      {
        title: 'wefox - Engineering lead (2022 - present)',
        content: [
          'Led a team of 7, including Frontend and Backend developers, fostering both technical and professional growth.',
          'Provided guidance on best practices and coding standards, leveraging my frontend development expertise.',
          'Collaborated with cross-functional teams, aligning frontend, backend, and architectural decisions to optimize outcomes.',
          'Spearheaded the migration to modern frontend frameworks, utilizing tools like React, Angular, and TypeScript to improve performance and reduce technical debt.',
          'Worked with Git, GitHub, and GitLab for version control and project collaboration.'
        ]
      },
      {
        title: 'wefox - Frontend Developer (2019 - 2022)',
        content: [
          'Played a pivotal role in migrating a large-scale project from Backbone.js (with Underscore) to Angular, enhancing codebase maintainability and scalability.',
          "Rebranded Wefox's digital presence, creating a design system and building components with Lit and Stencil for modularity and reuse.",
          'Improved internationalization capabilities using JavaScript and TypeScript, enabling the platform to adapt to various markets.',
          'Developed dynamic forms and content based on regional and product-specific requirements, streamlining processes.'
        ]
      },
      {
        title: 'threde llc - Web Developer (2017 - 2029)',
        content: [
          'Led the redesign of the Ocean Tigers Dive House booking platform, focusing on HTML5, CSS3, and JavaScript to create a more user-friendly experience.',
          'Enhanced site performance and responsiveness through clean frontend development practices, ensuring cross-device compatibility.'
        ]
      },
      {
        title: 'Sugar House Day Spa and Salon - Hairstylist | Colorist (2006 - 2017)',
        content: [
          'While primarily focused on hairstyling and client consultations, this role developed critical soft skills that directly translate to leadership and frontend development. Skills like attention to detail, client satisfaction, and creating personalized experiences parallel the needs of user-focused web development.'
        ]
      }
    ])

    return {
      accordionItems
    }
  }
})
</script>

<template>
  <div class="p-8 w-full">
    <h2 class="main-header">What I Do</h2>
    <div class="flex flex-col space-y-4 mb-16">
      <AccordionComponent :items="accordionItems" backgroundColor="transparent" :flushed="true" />
    </div>
  </div>
</template>
