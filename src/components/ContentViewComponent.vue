<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
  name: 'ContentViewComponent',
  components: {
    ButtonComponent
  },
  setup() {
    const quote = ref(null);

    const getQuote = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        quote.value = data;
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    onMounted(() => {
      getQuote();
    });

    return {
      quote,
      getQuote,
      ButtonComponent
    };
  }
});
</script>

<template>
  <div class="p-1 lg:p-8 lg:mt-12">
    <div class="flex p-6 italic space-x-4">
      <span v-if="quote" class="text-primary text-5xl">"</span>
      <h1 class="italic text-tertiary text-4xl">
        {{ quote?.quote }}<span v-if="quote" class="text-primary text-5xl"> "</span>
      </h1>
    </div>

    <p class="section-paragraph flex justify-end px-8">- {{ quote?.author }}</p>
    <div class="pt-12 flex justify-center">
      <ButtonComponent @click="getQuote" text="Get Another Quote" theme="inverse" size="sm" />
    </div>
  </div>
</template>
