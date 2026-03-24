<template>
  <section class="py-20 relative text-center" id="download">
    <div class="absolute inset-0 z-[-1] overflow-hidden">
      <div class="absolute bottom-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-2xl mx-auto px-4">
      <h2 class="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Ready to feel <span class="text-blue-600 dark:text-blue-400">safe</span> again?</h2>
      <p class="text-gray-600 dark:text-gray-400 text-lg mb-12">
        Join 10,000+ developers who trust TheAndb to manage their database changes. It's free to try.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://github.com/The-Andb/andb-desktop/releases/tag/v3.2.3" target="_blank" class="block w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20 dark:shadow-white/5 cursor-pointer">
          Download beta for macOS
          <span class="block text-xs font-normal text-gray-400 dark:text-gray-500 mt-1">Apple Silicon (M1/M2/M3)</span>
        </a>
        <a href="https://github.com/The-Andb/andb-desktop/releases/tag/v3.2.3" target="_blank" class="block w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-bold transition-all border border-gray-300 dark:border-gray-700 cursor-pointer">
           Download for Intel
          <span class="block text-xs font-normal text-gray-500 mt-1">Universal Binary</span>
        </a>
      </div>

      <div class="mt-8 text-sm text-gray-600 dark:text-gray-500">
        <span class="bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded mr-2 uppercase tracking-wider">{{ $t('guide.brew_title') }}</span>
        {{ $t('guide.brew_desc') }} <code class="bg-gray-200 dark:bg-white/5 px-2 py-1 rounded text-blue-600 dark:text-blue-300">brew tap The-Andb/tap && brew install --cask the-andb</code>
      </div>

      <!-- macOS Fix Section -->
      <div class="mt-16 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-left max-w-xl mx-auto">
        <h3 class="text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          {{ $t('guide.mac_fix_title') }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {{ $t('guide.mac_fix_desc') }}
        </p>
        <div class="flex items-center gap-2 group cursor-pointer" @click="copyFix">
          <div class="flex-1 bg-gray-200 dark:bg-black/40 rounded-lg p-3 font-mono text-xs text-blue-600 dark:text-blue-300 border border-gray-300 dark:border-white/5 break-all group-hover:bg-gray-300 dark:group-hover:bg-black/60 transition-colors">
            xattr -cr /Applications/TheAndb.app
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-3">
          {{ $t('guide.mac_fix_note') }}
          <a href="#resources" class="text-blue-600 dark:text-blue-400 hover:underline ml-1">{{ $t('guide.full_guide_btn') }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const copyFix = () => {
  navigator.clipboard.writeText('xattr -cr /Applications/TheAndb.app')
  // Optional: show toast
}
</script>
