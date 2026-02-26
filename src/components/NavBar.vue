<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-andb-dark/80 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="https://theandb.xyz" class="flex items-center space-x-2">
          <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span class="font-bold text-xl tracking-tight text-white">The Andb</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
          <a href="#pricing" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
          <a href="#resources" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">Resources</a>
          <a href="https://github.com/The-Andb/andb" class="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center">
            GitHub
            <span class="ml-1 opacity-50">↗</span>
          </a>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex items-center">
          <a href="#download" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
            Download Beta
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Simple static navbar for now
</script>
