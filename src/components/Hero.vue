<template>
  <section class="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
    <!-- Back Glow -->
    <div class="absolute inset-0 z-[-1] overflow-hidden">
      <div class="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-4 text-center z-10">
      <!-- Badge -->
      <a href="#github" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 hover:bg-white/10 transition mb-8 animate-fade-in-up">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        v3.0.0 Public Beta is Live
      </a>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
        Stop Guessing. <br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Start Orchestrating.</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
        The intelligent database client that compares, syncs, and safeguards your schemas across environments.
        <span class="text-white font-medium block mt-2">Local-first & privacy-focused.</span>
      </p>

      <!-- CTA Group -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
        <button class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Download for macOS (Silicon)
        </button>
        <button class="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg font-medium transition-all hover:text-white flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          Star on GitHub
        </button>
      </div>

      <!-- App Preview (Floating) -->
      <div class="mt-20 relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl animate-float">
        <!-- Window Controls -->
        <div class="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 rounded-t-xl flex items-center px-4 space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <!-- Placeholder for Screenshot -->
        <div class="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-b-xl flex items-center justify-center pt-10 overflow-hidden">
           <!-- Ideally, use generate_image to create a mockup and place it here -->
           <div class="text-white/20 font-mono text-sm">[ Application UI Screenshot Placeholder ]</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

// Animation logic can be added here
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
