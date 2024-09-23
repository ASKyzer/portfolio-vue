<script type="module" lang="ts">
import { useModalStore } from '../store/useModalStore';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent
  },
  setup() {
    const { state, closeModal } = useModalStore(); // Import the modal store
    const buttonClickHandler = (type: String) => {
      if (type === 'primary') {
        state.buttonAction();
      } else {
        state.buttonActionSecondary();
      }

      if (state.closeOnAction) closeModal();
    };

    return {
      state,
      closeModal,
      buttonClickHandler
    };
  }
};
</script>

<template>
  <div
    v-if="state.showModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
      <div class="flex justify-between">
        <h2 class="text-[1.75rem] font-semibold mb-4 flex">{{ state.title }}</h2>
        <span @click="closeModal()" class="text-lg cursor-pointer">X</span>
      </div>
      <p class="mb-6 section-paragraph">{{ state.message }}</p>
      <div class="flex justify-end space-x-4">
        <ButtonComponent
          v-if="state.buttonTextSecondary"
          @click="() => buttonClickHandler('secondary')"
          :text="state.buttonTextSecondary"
          class="mr-2"
          theme="inverse"
          size="sm"
        />
        <ButtonComponent
          @click="() => buttonClickHandler('primary')"
          :text="state.buttonText"
          class="ml-2"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>
