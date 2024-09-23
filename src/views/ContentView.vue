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
    <div class="navigation-panel">
      <HeaderComponent />
    </div>

    <div class="content-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.navigation-panel {
  height: 100%;
}

.content-panel {
  width: auto;
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
  padding: 0.75rem;
  overflow-y: auto;
}

@media screen and (min-width: 1024px) {
  .navigation-panel {
    width: 420px;
    background-color: transparent;
  }

  .content-panel {
    width: auto;
    height: 100vh;
    background-color: var(--color-background);
    padding: 4rem;
    overflow-y: auto;
    margin-left: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1280px) {
  .content-panel {
    padding: 8rem;
  }
}
</style>
