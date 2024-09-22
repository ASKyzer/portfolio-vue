<script>

export default {
  components: {
    
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
        name: '',
        email: '',
       
      };
    },
    validateForm() {
    //   this.errors = {};
    //   let isValid = true;

    //   console.log('this.form', this.form);  

    //   if (!this.form.firstName) {
    //     this.errors.firstName = 'First Name is required';
    //     isValid = false;
    //   }
    //   if (!this.form.lastName) {
    //     this.errors.lastName = 'Last Name is required';
    //     isValid = false;
    //   }
    //   if (!this.form.email || !/.+@.+\..+/.test(this.form.email)) {
    //     this.errors.email = 'Valid Email is required';
    //     isValid = false;
    //   }
    //   if (!this.form.subject) {
    //     this.errors.subject = 'Subject is required';
    //     isValid = false;
    //   }
    //   if (!this.form.message) {
    //     this.errors.message = 'Message is required';
    //     isValid = false;
    //   }

    //   return isValid;
    },
    handleSubmit() {
      if (this.form.botField) {
        // If the honeypot field is filled out, treat it as spam and do nothing
        return;
      }

      if (true) {
        // Submit the form to Netlify
        const form = this.$el.querySelector('form');
        const formData = new FormData(form);

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        .then((res) => {
          console.log('Form submitted', res);
          if (res.status !== 200) { 
            throw new Error('Form submission failed');
          }

          if (res.status === 200) {
            alert('Form successfully submitted');
            // Reset form data after successful submission
            this.form = this.getInitialFormState();
             // Toggle clearInput to true to clear the input fields
             this.clearInput = true;
            // Reset clearInput to false after a short delay
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
      </div>     
      <p>
      <label>Your Name: <input type="text" name="name"></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email"></label>
    </p>
    <p>
      <button type="submit">Submit</button>
    </p>  
      </form>
  </div>
</template>
