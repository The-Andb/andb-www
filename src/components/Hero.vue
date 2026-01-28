<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Apple, Package } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import Lenis from 'lenis'

const { t } = useI18n()
const heroRef = ref<HTMLElement | null>(null)

// Parallax Logic using Lenis Scroll
onMounted(() => {
  const lenis = new Lenis()

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  lenis.on('scroll', ({ scroll }: { scroll: number }) => {
    if (heroRef.value) {
        // Simple parallax: Move hero content slower than scroll
        heroRef.value.style.transform = `translateY(${scroll * 0.5}px)`
        heroRef.value.style.opacity = `${1 - scroll / 700}`
    }
    
    // Parallax background blobs
    const blobs = document.querySelectorAll('.blob') as NodeListOf<HTMLElement>
    blobs.forEach((blob, index) => {
        const speed = index % 2 === 0 ? 0.2 : 0.4
        blob.style.transform = `translateY(${scroll * speed}px)`
    })
  })
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
     <!-- Background Blobs (Absolute) -->
    <div class="blob w-[600px] h-[600px] top-[-150px] left-[-150px] bg-indigo-600/30 animate-pulse opacity-40"></div>
    <div class="blob w-[500px] h-[500px] bottom-[-100px] right-[-100px] bg-purple-600/30 animate-pulse animation-delay-2000 opacity-40"></div>

    <!-- Hero Content (Parallaxed) -->
    <div ref="heroRef" class="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 pb-20 max-w-5xl mx-auto will-change-transform">
        
        <div class="flex flex-row flex-wrap justify-center items-center gap-4 mb-12">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium backdrop-blur-md shadow-lg shadow-indigo-500/10">
                <span class="flex h-2.5 w-2.5 rounded-full bg-indigo-400 mr-2.5 animate-ping"></span>
                {{ t('hero.version') }}
            </div>
            <a href="https://github.com/The-Andb/andb" target="_blank"
                class="inline-flex items-center px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium backdrop-blur-md hover:bg-green-500/20 transition-all shadow-lg shadow-green-500/10 group">
                <i data-lucide="github" class="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform"></i>
                {{ t('hero.opensource') }}
            </a>
            <a href="https://www.npmjs.com/org/the-andb" target="_blank"
                class="inline-flex items-center px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium backdrop-blur-md hover:bg-red-500/20 transition-all shadow-lg shadow-red-500/10 group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" class="w-8 mr-2 opacity-80 group-hover:opacity-100" />
                Registry
            </a>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight">
            <span class="light-text-slate-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-slate-400">
                {{ t('hero.title_line1') }}
            </span>
            <br />
            <span class="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                {{ t('hero.title_line2') }}
            </span>
        </h1>

        <p class="max-w-2xl text-xl text-slate-400 light-text-slate-600 mb-12 leading-relaxed font-light">
            {{ t('hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-5 w-full max-w-lg mx-auto mb-16">
            <a href="https://github.com/The-Andb/andb/releases/download/v2.3.0/The-Andb-2.3.0-arm64.dmg" class="group flex-1 flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-indigo-500/20 border border-white/20">
                <Apple class="w-6 h-6 mr-3 fill-current" />
                <div class="text-left">
                    <div class="text-xs font-medium text-slate-500 uppercase tracking-wider">{{ t('hero.download_mac') }}</div>
                    <div class="leading-none text-indigo-600">v2.3.0 (DMG)</div>
                </div>
            </a>
            
            <a href="https://github.com/The-Andb/andb/releases/download/v2.3.0/The-Andb-2.3.0-mac.zip" class="group flex-1 flex items-center justify-center px-8 py-4 glass-card text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                <Package class="w-6 h-6 mr-3 text-indigo-400" />
                <div class="text-left">
                     <div class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ t('hero.download_portable') }}</div>
                     <div class="leading-none opacity-80">v2.3.0 (ZIP)</div>
                </div>
            </a>
        </div>
        
        <div class="text-xs text-slate-500 opacity-60">
             {{ t('hero.os_req') }}
        </div>
    </div>
  </div>
</template>

<style>
:global(body.light-mode) .light-text-slate-900 {
  color: #0f172a !important;
  background: none !important;
  -webkit-text-fill-color: initial !important;
}

:global(body.light-mode) .light-text-slate-600 {
  color: #334155 !important; /* slate-700 */
}

:global(body.light-mode) .glass-card {
  background-color: rgba(255, 255, 255, 0.9) !important;
  border-color: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}

:global(body.light-mode) .bg-slate-900\/50 {
  background-color: rgba(248, 250, 252, 0.8) !important; /* slate-50 */
}
</style>
