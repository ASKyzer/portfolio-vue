<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const educationItems = ref([
      {
        title: 'The George Washington University - College of Professional Studies',
        description: 'Full Stack Web Development, Computer Programming (2018)'
      },
      {
        title: 'General Assembly',
        description: 'Front End Web Development (2016)'
      },
      {
        title: 'University of Virginia',
        description: 'B.A., Biology/Biological Sciences (2000)'
      }
    ]);

    return {
      educationItems
    };
  }
});
</script>

<template>
  <div class="p-8 w-full">
    <h2 class="main-header">Where I Studied</h2>
    <div v-for="(item, index) of educationItems" :key="index" class="flex flex-col space-y-4 mb-16">
      <h2 class="section-title">
        {{ item.title }}
      </h2>
      <p class="section-paragraph">{{ item.description }}</p>
    </div>
  </div>
</template>
