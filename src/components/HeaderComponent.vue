<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const handleNavItemClick = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      handleNavItemClick
    };
  }
});
</script>

<template>
  <div class="">
    <!-- Button to toggle menu on mobile -->
    <div class="menu-bar" :class="{ opened: isMenuOpen }">
      <span
        v-if="isMenuOpen"
        @click="toggleMenu"
        class="pr-4 float-end cursor-pointer font-light uppercase text-[3rem] w-auto"
        >X</span
      >
      <span
        v-else
        @click="toggleMenu"
        class="pl-2 'font-light uppercase cursor-pointer text-[3.5rem] w-auto'"
        >Menu</span
      >
    </div>

    <!-- Navigation menu -->
    <nav class="navigation" :class="{ opened: isMenuOpen }">
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
.navigation {
  display: none;
}

.navigation.opened {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #000;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.menu-bar {
  z-index: 102;
  color: white;
  height: 80px;
  width: 100%;
}

.menu-bar.opened {
  position: fixed;
  top: 0;
  left: 0;
}

.router-link:hover {
  scale: 1.025;
}

.router-link-active {
  color: var(--color-primary);
}

.router-link-active:hover {
  color: var(--color-primary);
  cursor: default;
  scale: 1;
}

.router-link:not(:first-of-type) {
  margin-top: 0 !important;
}

@media screen and (min-width: 1024px) {
  .navigation {
    display: flex;
    flex-direction: column;
    width: 420px;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

  .menu-bar {
    display: none;
  }
}
</style>
