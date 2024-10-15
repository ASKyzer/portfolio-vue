<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export interface ProjectCardComponentProps {
  imageUrl: string;
  projectUrl: string;
  name: string;
  description: string;
  stack: string[];
}

export default defineComponent({
  components: {
    ButtonComponent
  },
  props: {
    config: {
      type: Object as PropType<ProjectCardComponentProps>,
      default: () => ({})
    }
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="config.imageUrl" :alt="config.name" class="w-full h-48 object-cover border-b" />
    <div class="p-4 pb-8">
      <h3 class="section-title mb-4">{{ config.name }}</h3>
      <p class="text-[1rem] tracking-[1.5px] font-light mb-4">
        {{ config.description }}
      </p>
      <div class="mb-8">
        <span class="section-subtitle mb-2">Built with:</span>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="tech in config.stack"
            :key="tech"
            class="px-2 py-1 bg-white border border-primary rounded-full text-primary text-xs"
            >{{ tech }}</span
          >
        </div>
      </div>
      <a :href="config.projectUrl" target="_blank">
        <ButtonComponent text="View Project" theme="primary" size="sm" type="button" />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
