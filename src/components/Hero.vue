<template>
  <section class="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
    <!-- Back Glow -->
    <div class="absolute inset-0 z-[-1] overflow-hidden">
      <div class="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-4 text-center z-10">
      <!-- Badge -->
      <a href="https://github.com/The-Andb/andb-desktop/releases/tag/v3.2.3" target="_blank" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 hover:bg-white/10 transition mb-4 animate-fade-in-up">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
        v3.2.3 is out! AIO Engine Bundle
      </a>

      <!-- i18n Version Line -->
      <div class="text-[10px] font-mono text-gray-500 mb-8 animate-fade-in-up">
        {{ $t('hero.version') }}
      </div>

      <!-- Headline -->
      <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 animate-fade-in-up delay-100">
        Stop Tracing Schema.<br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Master the DDL.</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium animate-fade-in-up delay-200">
        Stop manually hunting for differences. The Andb is the precision tool for database engineers who care about <b>Zero-Data-Loss</b> migrations.
      </p>

      <!-- CTA Group -->
      <div class="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-in-up delay-200">
        <a href="https://github.com/The-Andb/andb-desktop/releases/tag/v3.2.3" target="_blank" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          <span>{{ $t('hero.download_btn') }} <span class="opacity-70 text-sm font-normal">v3.2.3</span></span>
        </a>
        <a href="https://github.com/The-Andb/andb-cli" target="_blank" class="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-lg font-medium transition-all hover:text-white flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Explore CLI
        </a>
      </div>

      <!-- App Preview (Floating) -->
      <div class="mt-20 relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl animate-float">
        <!-- Window Controls -->
        <div class="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 rounded-t-xl flex items-center px-4 space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <!-- Main Mockup -->
        <div class="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-b-xl flex items-center justify-center pt-10 overflow-hidden">
           <img src="/images/hero-mockup.png" alt="The Andb App Preview" class="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-1000" />
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
