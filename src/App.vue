<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import FeatureStory from './components/FeatureStory.vue'
import ReleaseHistory from './components/ReleaseHistory.vue'
import Download from './components/Download.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative w-full overflow-x-hidden bg-[#fafafa] dark:bg-andb-dark text-gray-900 dark:text-white font-sans antialiased transition-colors duration-300">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>

    <NavBar />

    <main class="space-y-32 pb-32 pt-10">
      <Hero />
      <FeatureStory />
      <ReleaseHistory />
      <Download />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
