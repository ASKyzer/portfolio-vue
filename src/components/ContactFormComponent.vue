<script>
import InputField from './InputField.vue';

export default {
  components: {
    InputField
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        botField: '' // Honeypot field
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.form.firstName) {
        this.errors.firstName = 'First Name is required';
        isValid = false;
      }
      if (!this.form.lastName) {
        this.errors.lastName = 'Last Name is required';
        isValid = false;
      }
      if (!this.form.email || !/.+@.+\..+/.test(this.form.email)) {
        this.errors.email = 'Valid Email is required';
        isValid = false;
      }
      if (!this.form.subject) {
        this.errors.subject = 'Subject is required';
        isValid = false;
      }
      if (!this.form.message) {
        this.errors.message = 'Message is required';
        isValid = false;
      }

      return isValid;
    },
    handleSubmit() {
      if (this.form.botField) {
        // If the honeypot field is filled out, treat it as spam and do nothing
        return;
      }
      
      if (this.validateForm()) {
        // Submit the form to Netlify
        const form = this.$el.querySelector('form');
        const formData = new FormData(form);

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
          .then(() => alert('Form successfully submitted'))
          .catch((error) => alert(error));
      } else {
        // Trigger error status on input fields
        Object.keys(this.errors).forEach((key) => {
          this.$refs[key].validate();
        });
      }
    }
  }
};
</script>

<template>
  <div class="w-full">
    <form
      @submit.prevent="handleSubmit"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      class="mx-auto"
    >
    <input type="hidden" name="form-name" value="contact" />
      <!-- Honeypot field to prevent spam -->
      <div style="display:none;">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" v-model="form.botField" />
        </label>
      </div>      <div class="md:flex md:space-x-4">
        <div class="md:flex-1">
          <InputField
            label="First Name"
            v-model="form.firstName"
            :validation="{ required: true }"
            required
            name="first-name"
          />
        </div>
        <div class="md:flex-1">
          <InputField
            label="Last Name"
            v-model="form.lastName"
            :validation="{ required: true }"
            required
            name="last-name"
          />
        </div>
      </div>
      <div class="mb-6">
        <InputField
          type="email"
          label="Email"
          v-model="form.email"
          :validation="{ required: true, pattern: '.+@.+\\..+' }"
          required
          name="email"
        />
      </div>
      <div class="mb-6">
        <InputField
          label="Subject"
          v-model="form.subject"
          :validation="{ required: true }"
          required
          name="subject"
        />
      </div>
      <div class="mb-6">
        <InputField
          type="textarea"
          label="Message"
          v-model="form.message"
          :validation="{ required: true }"
          required
          name="message"
        />
      </div>
      <button
          type="submit"
          class="bg-primary filter hover:brightness-90 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>    
      </form>
  </div>
</template>
