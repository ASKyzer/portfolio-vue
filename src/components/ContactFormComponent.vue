<script>
import InputField from './InputField.vue';

export default {
  components: {
    InputField
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

      console.log('this.form', this.form);  

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
        .then((res) => {
          console.log('res', res);
          if (res.status !== 200) { 
            throw new Error('Form submission failed'); // Create custom modal to display error message
          }

          if (res.status === 200) {
            alert('Form successfully submitted'); // Create custom modal to display success message
            this.form = this.getInitialFormState();
            this.clearInput = true;
            
            setTimeout(() => {
              this.clearInput = false;
            }, 0);
          }
          })          
          .catch((error) => alert(error));
      } else {
        alert('The form is not valid. Please check the fields and try again.');
      }
    }
  }
};
</script>

<template>
  <div class="w-full">
    <form
      @submit.prevent="handleSubmit"
     
      class="mx-auto"
    >
      <!-- Honeypot field to prevent spam -->
      <div style="display:none;">
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
      <button
          type="submit"
          class="text-primary py-2 px-8 transition duration-300 mb-8 text-[1.5rem] tracking-[1.5px] font-light  bg-primary filter hover:brightness-90 text-white rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>    
      </form>
  </div>
</template>
