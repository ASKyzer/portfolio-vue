<template>
  <div class="p-8 w-full">
    <h1 class="main-header mb-12">Get In Touch</h1>
    <div>
      <p class="section-title mb-6">
        Message me
      </p>
      <ContactFormComponent />
    </div>
    <div class="mt-12">
      <p class="section-title mb-4">
       Reach me online
      </p>
      <div class="social-icons mt-8 flex space-x-4 w-full">
      <a href="https://www.linkedin.com/in/adrian-kyzer-a19211139/" target="_blank" rel="noopener noreferrer" class="cursor-pointer scale-105 hover:scale-110">
        <img src="@/assets/social-media/linkedin.svg" alt="LinkedIn" class="w-10 h-10" />
      </a>
      <a href="https://github.com/askyzer" target="_blank" rel="noopener noreferrer" class="cursor-pointer hover:scale-105">
        <img src="@/assets/social-media/github.svg" alt="GitHub" class="w-10 h-10" />
      </a>
      <a href="https://www.instagram.com/adriansander" target="_blank" rel="noopener noreferrer" class="cursor-pointer hover:scale-105">
        <img src="@/assets/social-media/instagram.svg" alt="Instagram" class="w-10 h-10" />
      </a>
      <a href="https://www.threads.net/adriansander" target="_blank" rel="noopener noreferrer" class="cursor-pointer hover:scale-105">
        <img src="@/assets/social-media/threads.svg" alt="Threads" class="w-10 h-10" />
      </a>
    </div>
  </div>
  </div>
</template>

<script>
import ContactFormComponent from './ContactFormComponent.vue';

export default {
  components: {
    ContactFormComponent
  },
}
</script>
