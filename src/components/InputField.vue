<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 4
    },
    validation: {
      type: Object,
      default: () => ({})
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: '',
      error: '',
      isFocused: false
    };
  },
  computed: {
    inputId() {
      return `input-${getCurrentInstance()?.uid}`;
    }
  },
  watch: {
    clearInput(newValue) {
      if (newValue) {
        this.inputValue = '';
        this.$emit('update:modelValue', '');
      }
    }
  },
  methods: {
    updateValue(event: any) {
      const { value } = event.target;

      this.$emit('update:modelValue', value);
    },
    validate() {
      if (this.required && !this.inputValue) {
        this.error = 'This field is required.';
        return false;
      }
      if (this.validation.pattern && !new RegExp(this.validation.pattern).test(this.inputValue)) {
        this.error = 'Invalid format.';
        return false;
      }
      if (this.validation.minlength && this.inputValue.length < this.validation.minlength) {
        this.error = `Minimum length is ${this.validation.minlength}.`;
        return false;
      }
      if (this.validation.maxlength && this.inputValue.length > this.validation.maxlength) {
        this.error = `Maximum length is ${this.validation.maxlength}.`;
        return false;
      }
      this.error = '';
      return true;
    }
  }
};
</script>

<template>
  <div class="relative mb-6">
    <label
      :for="inputId"
      :class="[
        'absolute left-0 transition-all duration-300 ease-in-out cursor-text',
        {
          'top-4 input-placeholder': !inputValue && !isFocused,
          'top-[-1rem] input-label text-xs': inputValue || isFocused
        }
      ]"
    >
      {{ label }}
    </label>
    <input
      v-if="type !== 'textarea'"
      :id="inputId"
      :type="type"
      :required="required"
      :disabled="disabled"
      :name="name"
      v-bind="validation"
      v-model="inputValue"
      @input="updateValue($event)"
      @focus="isFocused = true"
      @blur="
        isFocused = false;
        validate();
      "
      :class="[
        'w-full py-2 px-2 border-b bg-transparent focus:outline-none focus:border-secondary input-text',
        { 'border-error': error, 'border-tertiary': !error }
      ]"
    />
    <textarea
      v-else
      :id="inputId"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :name="name"
      v-bind="validation"
      v-model="inputValue"
      @input="updateValue($event)"
      @focus="isFocused = true"
      @blur="
        isFocused = false;
        validate();
      "
      class="w-full py-2 px-2 border-b border-tertiary bg-transparent focus:outline-none focus:border-secondary input-text"
      :class="{ 'border-error': error }"
    ></textarea>
    <transition name="fade">
      <p v-if="error" class="error-message mt-1">{{ error }}</p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
