<script language="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true
    },
    flushed: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    }
  },
  setup(props) {
    const activeIndex = ref(0)

    const toggleAccordion = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index
    }

    return {
      activeIndex,
      toggleAccordion,
      props
    }
  }
})
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="">
      <div
        @click="toggleAccordion(index)"
        :class="[flushed ? 'px-0' : 'px-4']"
        class="cursor-pointer py-4"
        :style="{ backgroundColor: backgroundColor || 'inherit' }"
      >
        <div class="flex justify-between section-title space-x-6">
          <h2>
            {{ item.title }}
          </h2>
          <div class="text-primary">{{ activeIndex === index ? '-' : '+' }}</div>
        </div>
      </div>
      <div
        v-show="activeIndex === index"
        class="transition-max-height duration-300 ease-in-out overflow-hidden"
      >
        <div
          class="py-4 space-y-4"
          :class="[flushed ? 'px-0' : 'px-4']"
          :style="{ backgroundColor: backgroundColor || 'inherit' }"
        >
          <div v-for="(paragraph, idx) in item.content" :key="idx">
            <p class="text-[1rem] tracking-[1.5px] font-light">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
