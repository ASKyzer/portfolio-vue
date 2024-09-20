<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default defineComponent({
  components: {
    HeaderComponent
  },
  setup() {
    const isOpen = ref(false)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggleMenu
    }
  }
})
</script>

<template>
  <div class="flex flex-col lg:flex-row h-svh">
    <div
      class="w-full h-vls lg:h-auto lg:w-[700px] bg-black text-white lg:flex items-center justify-center p-8"
    >
      <HeaderComponent />
    </div>

    <div
      class="w-full flex-grow bg-[#fcfcfc] flex items-start lg:items-center justify-center lg:just px-2 md:px-8 py-8 lg:px-24 xl:px-48"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
