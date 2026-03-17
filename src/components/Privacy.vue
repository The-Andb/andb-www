<template>
  <section class="py-24" id="privacy">
    <div class="container mx-auto px-4">
      <div class="glass-panel p-12 rounded-[2.5rem] relative overflow-hidden group border-white/5 bg-white/[0.01]">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div class="max-w-3xl relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
            <Lock class="w-3 h-3" />
            Zero-Cloud Policy
          </div>
          
          <h2 class="text-4xl font-bold tracking-tight mb-8" v-html="$t('privacy.title')"></h2>
          
          <p class="text-xl text-gray-400 mb-10 leading-relaxed">
            {{ $t('privacy.description') }}
          </p>

          <div class="flex items-start gap-4 p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 mb-10">
             <AlertTriangle class="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
             <p class="text-sm text-yellow-500/80 leading-relaxed italic">
               {{ $t('privacy.backup_disclaimer') }}
             </p>
          </div>

          <div class="flex flex-wrap gap-8 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
              No Data Export
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
              Local Database Drivers
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-indigo-500/50"></div>
              Premium Desktop UI
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Lock, AlertTriangle } from 'lucide-vue-next';
</script>
