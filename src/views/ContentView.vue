<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  components: {
    HeaderComponent
  },
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleMenu
    };
  }
});
</script>

<template>
  <div class="min-h-screen">
    <div class="h-full lg:w-[420px]">
      <HeaderComponent />
    </div>
    <div
      class="w-auto mt-[80px] lg:mt-0 min-h-[calc(100vh-80px)] lg:min-h-[100vh] bg-[var(--color-background)] p-3 overflow-y-auto lg:h-full lg:p-16 lg:ml-[420px] lg:flex lg:justify-center lg:items-center xl:p-32"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
