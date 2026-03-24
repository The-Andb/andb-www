<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-andb-dark/80 border-b border-gray-200 dark:border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="https://theandb.xyz" class="flex items-center space-x-2">
          <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span class="font-bold text-xl tracking-tight text-gray-900 dark:text-white">TheAndb</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium">Features</a>
          <a href="#releases" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium">Releases</a>
          <a href="#download" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium">Installation</a>
          <a href="https://github.com/The-Andb" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm font-medium flex items-center">
            GitHub
            <span class="ml-1 opacity-50">↗</span>
          </a>
        </div>

        <!-- CTA & Lang & Theme -->
        <div class="hidden md:flex items-center space-x-4">
          <button 
            @click="toggleTheme" 
            class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-xs border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <component :is="isDark ? Moon : Sun" class="w-4 h-4" />
          </button>
          <button 
            @click="toggleLang" 
            class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-xs font-mono border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {{ locale === 'en' ? 'EN' : 'VI' }}
          </button>
          <a href="https://github.com/The-Andb/andb-desktop/releases/tag/v3.2.3" target="_blank" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
            Download Beta
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Sun, Moon } from 'lucide-vue-next'

const { locale } = useI18n()
const isDark = ref(true)

onMounted(() => {
  // Default to dark mode if not explicitly set
  const savedTheme = localStorage.getItem('andb-theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('andb-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('andb-theme', 'light')
  }
}

const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'vi' : 'en'
  localStorage.setItem('user-locale', locale.value)
}
</script>
