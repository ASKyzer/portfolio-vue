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
    <div class="h-full lg:w-[420px] lg:bg-transparent">
      <HeaderComponent />
    </div>
    <div
      class="w-auto min-h-[calc(100vh-80px)] bg-[var(--color-background)] p-3 overflow-y-auto lg:h-screen lg:p-16 lg:ml-[420px] lg:flex lg:justify-center lg:items-center xl:p-32"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
