<!-- eslint-disable no-unreachable -->
<script>
import InputField from './InputField.vue';
import { useModalStore } from '../store/useModalStore';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    InputField,
    ButtonComponent
  },
  data() {
    return {
      form: this.getInitialFormState(),
      errors: {},
      clearInput: false
    };
  },
  methods: {
    getInitialFormState() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        botField: '' // Honeypot field
      };
    },
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
        const { openModal } = useModalStore();

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
          .then((res) => {
            if (res.status !== 200) {
              openModal({
                message:
                  'Something went wrong with your submission. Please try again in a few moments.  If the problem persists, please reach out to me directly at adriankyzer@gmail.com',
                title: 'Oops!',
                buttonText: 'Close'
              });
              return;
            }

            form.submit();

            openModal({
              message: 'Thank you for reaching out! I will get back to you soon.',
              title: 'Success!',
              buttonText: 'Close'
            });

            this.form = this.getInitialFormState();
            this.clearInput = true;

            setTimeout(() => {
              this.clearInput = false;
            }, 0);
          })
          .catch((error) => alert(error));
      } else {
        openModal({
          message: 'The form is not valid. Please check the fields and try again.',
          title: 'Something wwent wrong!',
          buttonText: 'Close'
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
      method="POST"
      data-netlify="true"
      name="contact"
      netlify-honeypot="bot-field"
      class="mx-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <!-- Honeypot field to prevent spam -->
      <div style="display: none">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" v-model="form.botField" />
        </label>
      </div>
      <div class="md:flex md:space-x-4">
        <div class="md:flex-1">
          <InputField
            :clearInput="clearInput"
            label="First Name"
            v-model="form.firstName"
            :validation="{ required: true }"
            required
            name="firstName"
          />
        </div>
        <div class="md:flex-1">
          <InputField
            :clearInput="clearInput"
            label="Last Name"
            v-model="form.lastName"
            :validation="{ required: true }"
            required
            name="lastName"
          />
        </div>
      </div>
      <div class="mb-6">
        <InputField
          :clearInput="clearInput"
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
          :clearInput="clearInput"
          label="Subject"
          v-model="form.subject"
          :validation="{ required: true }"
          required
          name="subject"
        />
      </div>
      <div class="mb-6">
        <InputField
          :clearInput="clearInput"
          type="textarea"
          label="Message"
          v-model="form.message"
          :validation="{ required: true }"
          required
          name="message"
        />
      </div>
      <ButtonComponent text="Submit" type="submit" />
    </form>
  </div>
</template>
