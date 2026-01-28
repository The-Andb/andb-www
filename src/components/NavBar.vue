<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Sun, Moon, Github } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

const { t, locale } = useI18n()
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light-mode',
})
const toggleDark = useToggle(isDark)

const toggleLocales = () => {
  const newLocale = locale.value === 'en' ? 'vi' : 'en'
  locale.value = newLocale
  localStorage.setItem('user-locale', newLocale)
  document.documentElement.lang = newLocale
}
</script>

<template>
  <nav class="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
        <img src="/favicon.png" alt="The Andb Logo" class="w-7 h-7 object-contain">
      </div>
      <span class="text-2xl font-bold tracking-tight dark-heading">
        The Andb
      </span>
    </div>

    <!-- Menu -->
    <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
      <a href="#features" class="hover:text-white transition-colors relative group">
        {{ t('nav.features') }}
      </a>
      <a href="#architecture" class="hover:text-white transition-colors relative group">
        {{ t('nav.architecture') }}
      </a>
      <a href="#roadmap" class="hover:text-white transition-colors relative group">
        {{ t('nav.roadmap') }}
      </a>
      <a href="#guide" class="hover:text-white transition-colors relative group">
        {{ t('nav.guide') }}
      </a>
      
      <!-- Github -->
      <a href="https://github.com/The-Andb/andb" class="hover:text-white transition-colors">
        <Github class="w-5 h-5" />
      </a>

      <!-- Lang Switcher -->
       <button @click="toggleLocales" class="px-2 py-1 rounded bg-slate-800 border border-slate-700 hover:bg-slate-700 text-xs font-bold uppercase w-8">
        {{ locale }}
      </button>

      <!-- Theme Toggle -->
      <button @click="toggleDark()" class="p-2 rounded-full bg-slate-800 text-yellow-400 hover:bg-slate-700 border border-slate-700 transition-all">
        <Sun v-if="!isDark" class="w-4 h-4" />
        <Moon v-else class="w-4 h-4" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.dark-heading {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400;
}
:global(body.light-mode) .dark-heading {
  @apply text-slate-900 bg-none !important;
  color: #0f172a !important;
  -webkit-text-fill-color: currentcolor !important;
}
:global(body.light-mode) .text-slate-300 {
  @apply text-slate-700;
}
:global(body.light-mode) a:hover {
  @apply text-indigo-600;
}
</style>
