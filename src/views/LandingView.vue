<template>
  <div class="h-screen flex flex-col md:flex-row">
    <div class="md:w-1/2 bg-black text-white flex items-center justify-center p-8">
      <div
        class="space-y-6 text-center mx-8 lg:mx-24 flex flex-col items-center justify-center h-full"
      >
        <h1 class="mt-8 text-[4rem] lg:text-[4.5rem]">Hello, I'm</h1>
        <h1 class="title-name text-[4rem] lg:text-[4.5rem]">Adrian Kyzer!</h1>

        <p class="developer text-[1.3rem] lg:text-[1.5rem]">I AM A FRONTEND DEVELOPER</p>
        <p class="lead text-[1.3rem] lg:text-[1.5rem]">AND ENGINEERING LEAD</p>

        <router-link to="/content/about">
          <button
            class="text-[crimson] py-2 px-8 hover:text-[#949494] transition duration-300 mb-8 text-[1.5rem] tracking-[1.5px] font-light"
          >
            Let’s work together!
          </button>
        </router-link>
      </div>
    </div>

    <div class="md:w-1/2 flex-grow md:h-full">
      <img
        src="/src/assets/profile-pic.jpeg"
        alt="Adrian Kyzer"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles if necessary */
h1,
p {
  font-family: 'Inter', sans-serif;
  text-wrap: nowrap;
  font-weight: 300;
}

h1 {
  letter-spacing: -2px;
  line-height: 1;
}

.title-name {
  margin-top: 0 !important;
}

p {
  letter-spacing: 2px;
  line-height: 0.5;
}

p.developer {
  margin-top: 48px !important;
}

p.lead {
  margin-bottom: 40px !important;
}
</style>
