<template>
  <div class="flex justify-center items-center h-full">
    <div class="thought-bubble animate-pulse"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBubble'
};
</script>

<style scoped>
.thought-bubble {
  position: relative;
  width: 100px;
  height: 80px;
  background-color: var(--color-tertiary-lighter); /* light gray */
  filter: brightness(1);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.thought-bubble::after,
.thought-bubble::before {
  content: '';
  position: absolute;
  background-color: var(--color-tertiary-lighter); /* light gray */
  border-radius: 50%;
  filter: brightness(1);
}

.thought-bubble::before {
  width: 30px;
  height: 30px;
  bottom: -30px;
  left: 25px;
}

.thought-bubble::after {
  width: 15px;
  height: 15px;
  bottom: -40px;
  left: 10px;
}
</style>
