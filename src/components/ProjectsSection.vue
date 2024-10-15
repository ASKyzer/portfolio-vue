<script lang="ts">
import { default as ProjectCardComponent } from './ProjectCardComponent.vue';

export default {
  components: {
    ProjectCardComponent
  },
  setup() {
    const projects = [
      {
        name: 'Dynamic Forms',
        description:
          'This site demonstrates the power of building forms dynamically using a user-friendly interface. Our form builder allows you to create complex forms without writing a single line of code!',
        stack: ['Angular 18', 'Tailwind', 'TypeScript', 'RxJS'],
        projectUrl: 'https://dynamic-forms-builder.netlify.app/'
      },
      {
        name: 'Ocean Tigers Dive House',
        description:
          'Ocean Tigers Dive House is a local dive shop in Cabo San Lucas, Mexico. I was responsible for the development of their new website which includes a redesign and payment system.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SEO'],
        projectUrl: 'https://oceantigers.com/'
      }
    ];

    return {
      projects
    };
  }
};
</script>

<template>
  <div class="p-8 w-full">
    <h1 class="main-header">What I've Built</h1>
    <div class="mt-12" :class="projects.length > 2 ? 'mx-auto' : 'max-w-[1200px]'">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ProjectCardComponent v-for="project in projects" :key="project.name" :config="project" />
      </div>
    </div>
  </div>
</template>
