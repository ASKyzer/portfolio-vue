<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export interface ProjectCardComponentProps {
  imageUrl?: string;
  projectUrl: string;
  name: string;
  description: string;
  stack: string[];
  hasBorder?: boolean;
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
    const defaultConfig = {
      name: 'Project Name',
      description: 'Project Description',
      hasBorder: false,
      imageUrl: '',
      projectUrl: '',
      stack: []
    };

    const mergedConfig = Object.assign({}, defaultConfig, props.config);

    return {
      mergedConfig
    };
  }
});
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden"
    :class="{ border: mergedConfig.hasBorder }"
  >
    <img
      v-if="mergedConfig.imageUrl"
      :src="mergedConfig.imageUrl"
      :alt="mergedConfig.name"
      class="w-full h-48 object-cover border-b"
    />
    <div class="p-6">
      {{ mergedConfig.imageUrl }}
      <h3 class="section-title mb-4">{{ mergedConfig.name }}</h3>
      <p class="text-[1rem] tracking-[1.5px] font-light mb-4">
        {{ mergedConfig.description }}
      </p>
      <div class="mb-8">
        <span class="section-subtitle mb-2">Built with:</span>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="tech in mergedConfig.stack"
            :key="tech"
            class="px-2 py-1 bg-white border border-primary rounded-full text-primary text-xs"
            >{{ tech }}</span
          >
        </div>
      </div>
      <a :href="mergedConfig.projectUrl" target="_blank">
        <ButtonComponent text="View Project" theme="primary" size="sm" type="button" />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
