<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const handleNavItemClick = () => {
      isMenuOpen.value = false
    }

    return {
      isMenuOpen,
      toggleMenu,
      handleNavItemClick
    }
  }
})
</script>

<template>
  <div class="h-0">
    <!-- Button to toggle menu on mobile -->
    <button
      @click="toggleMenu"
      class="lg:hidden w-full h-20 bg-black fixed z-50 top-0 left-0 font-light cursor-pointer whitespace-nowrap leading-none tracking-tight text-[4.5rem]"
      :class="[isMenuOpen ? '' : '']"
    >
      <span
        :class="[
          'font-light uppercase text-[3.5rem] flex',
          isMenuOpen ? 'pr-4 justify-end' : 'pl-2'
        ]"
        >{{ isMenuOpen ? 'X' : 'Menu' }}</span
      >
    </button>

    <!-- Navigation menu -->
    <nav
      :class="[
        'space-y-6 text-center flex flex-col items-center justify-center',
        'lg:relative lg:h-full lg:space-y-0 lg:flex-row ',
        isMenuOpen
          ? 'fixed inset-0 z-40 bg-black'
          : 'hidden lg:flex lg:flex-col lg:items-center lg:justify-center'
      ]"
    >
      <router-link @click="handleNavItemClick" to="/" class="router-link navigation-item"
        >Home</router-link
      >
      <router-link
        @click="handleNavItemClick"
        to="/content/about"
        class="router-link navigation-item mt-8 lg:mt-0"
        >About Me</router-link
      >
      <router-link
        @click="handleNavItemClick"
        to="/content/experience"
        class="router-link navigation-item"
        >Experience</router-link
      >
      <router-link
        @click="handleNavItemClick"
        to="/content/education"
        class="router-link navigation-item"
        >Education</router-link
      >
      <router-link
        @click="handleNavItemClick"
        to="/content/contact"
        class="router-link navigation-item"
        >Contact</router-link
      >
    </nav>
  </div>
</template>

<style scoped>
.router-link:hover {
  scale: 1.025;
}

.router-link-active {
  color: crimson;
}

.router-link-active:hover {
  color: crimson;
  scale: 1;
}

.router-link:not(:first-of-type) {
  margin-top: 0 !important;
}
</style>
