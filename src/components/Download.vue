<template>
  <section class="py-20 relative text-center" id="download">
    <div class="absolute inset-0 z-[-1] overflow-hidden">
      <div class="absolute bottom-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-2xl mx-auto px-4">
      <h2 class="text-3xl md:text-5xl font-bold mb-8">Ready to feel <span class="text-blue-400">safe</span> again?</h2>
      <p class="text-gray-400 text-lg mb-12">
        Join 10,000+ developers who trust The Andb to manage their database changes. It's free to try.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
          Download beta for macOS
          <span class="block text-xs font-normal text-gray-500 mt-1">Apple Silicon (M1/M2/M3)</span>
        </button>
        <button class="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition-all border border-gray-700">
           Download for Intel
          <span class="block text-xs font-normal text-gray-500 mt-1">Universal Binary</span>
        </button>
      </div>

      <div class="mt-8 text-sm text-gray-500">
        Also available via <code class="bg-white/5 px-2 py-1 rounded text-blue-300">brew install --cask the-andb</code>
      </div>

      <!-- macOS Fix Section -->
      <div class="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 text-left max-w-xl mx-auto">
        <h3 class="text-blue-400 font-semibold mb-2 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          {{ $t('guide.mac_fix_title') }}
        </h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          {{ $t('guide.mac_fix_desc') }}
        </p>
        <div class="flex items-center gap-2 group cursor-pointer" @click="copyFix">
          <div class="flex-1 bg-black/40 rounded-lg p-3 font-mono text-xs text-blue-300 border border-white/5 break-all group-hover:bg-black/60 transition-colors">
            xattr -cr /Applications/The\ Andb.app
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-3">
          {{ $t('guide.mac_fix_note') }}
          <a href="#resources" class="text-blue-400 hover:underline ml-1">{{ $t('guide.full_guide_btn') }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const copyFix = () => {
  navigator.clipboard.writeText('xattr -cr /Applications/The\\ Andb.app')
  // Optional: show toast
}
</script>
