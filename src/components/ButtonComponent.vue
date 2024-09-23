<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String as () => 'sm' | 'md' | 'lg',
      default: 'md'
    },
    type: {
      type: String as () => 'button' | 'reset' | 'submit',
      default: 'button'
    },
    theme: {
      type: String as () => 'primary' | 'secondary' | 'inverse',
      default: 'primary'
    }
  },
  setup(props) {
    return props;
  }
});
</script>

<template>
  <button :type="type" :class="['button-' + theme, size]">
    {{ text }}
  </button>
</template>

<style scoped>
.sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.lg {
  padding: 0.875rem 2rem;
  font-size: 1.5rem;
}
</style>
