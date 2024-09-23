<script lang="ts">
import { RouterView } from 'vue-router';
import ModalComponent from './components/ModalComponent.vue';

export default {
  components: {
    RouterView,
    ModalComponent
  }
};
</script>

<template>
  <div>
    <RouterView />
  </div>

  <!-- Global Components -->
  <ModalComponent />
</template>
