<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Showcase from './components/Showcase.vue'
import SetupDemo from './components/SetupDemo.vue'
import Features from './components/Features.vue'
import TrustMetrics from './components/TrustMetrics.vue'
import Comparisons from './components/Comparisons.vue'
import Privacy from './components/Privacy.vue'
import Download from './components/Download.vue'
import Resources from './components/Resources.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative w-full overflow-x-hidden bg-andb-dark text-white font-sans antialiased">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>

    <NavBar />

    <main class="space-y-32 pb-32">
      <Hero />
      <Showcase />
      <SetupDemo />
      <TrustMetrics />
      <Comparisons />
      <Features />
      
      <!-- Resources Hub -->
      <section id="resources" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div class="mb-12 text-center">
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Product <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Resources</span>
          </h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">
            Deep dives into our architecture, success stories from the field, and a comprehensive guide to mastering your database migrations.
          </p>
        </div>
        <Resources />
      </section>

      <Privacy />
      <Download />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
