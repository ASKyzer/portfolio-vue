<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import LoadingThoughtBubbleComponent from './LoadingThoughtBubbleComponent.vue';
import { fetchQuote } from '@/services/apiService';

export default defineComponent({
  name: 'ContentViewComponent',
  components: {
    ButtonComponent,
    LoadingThoughtBubbleComponent
  },
  setup() {
    const quote = ref<{ quoteText: string; author: string } | null>(null);
    const categories = ref<string[]>([
      'Alone',
      'Attitude',
      'Best Life',
      'Fictional Characters',
      'Friendship',
      'Happiness',
      'Inspirational',
      'Leadership',
      'Life',
      'Love',
      'Motivational',
      'Nature',
      'Reading',
      'Relationship',
      'Smile',
      'Strength',
      'Success',
      'Time',
      'Trust',
      'Wisdom',
      'Woman'
    ]);
    const category = ref<string>('Motivational');

    const isLoading = ref(true);

    const getQuote = async () => {
      const index = Math.floor(Math.random() * categories.value.length);
      category.value = categories.value[index];
      isLoading.value = true;

      try {
        const data = await fetchQuote(import.meta.env.VITE_EVER_XP_API_KEY, category.value);
        console.log('🚀 ~ getQuote ~ response:', data);

        const text = data.heading;

        if (text) {
          let quoteText, author;
          const lastDashIndex = text.replace(/[–—]/g, '-').lastIndexOf('-');

          quoteText = text.slice(0, lastDashIndex).trim().slice(1, -1);
          author = text.slice(lastDashIndex + 1).trim();

          quote.value = {
            quoteText,
            author
          };
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      getQuote();
    });

    return {
      quote,
      getQuote,
      categories,
      category,
      isLoading,
      ButtonComponent,
      LoadingThoughtBubbleComponent
    };
  }
});
</script>

<template>
  <div class="p-0 lg:p-8 lg:mt-12">
    <div v-if="!isLoading" class="flex justify-center pb-4 pt-8 lg:pt-0">
      <p class="section-title">{{ category }}</p>
    </div>
    <div v-if="isLoading" class="flex justify-center my-16">
      <LoadingThoughtBubbleComponent />
    </div>
    <div v-else class="flex p-6 italic space-x-2">
      <span v-if="quote" class="text-primary text-5xl">"</span>
      <h1 class="italic text-tertiary text-3xl lg:text-4xl relative">
        {{ quote?.quoteText }}<span v-if="quote" class="text-primary text-5xl absolute"> "</span>
      </h1>
    </div>
    <p v-if="!isLoading" class="section-paragraph flex justify-end">- {{ quote?.author }}</p>
    <div class="pt-12 flex justify-center mb-6">
      <ButtonComponent @click="getQuote" text="Get Another Quote" theme="inverse" size="sm" />
    </div>
  </div>
</template>
