<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { FileCode, Zap, Eye, MousePointer2 } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section class="py-32 px-4 relative overflow-hidden bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
            {{ t('dumps.title') }}
          </h2>
          <p class="text-xl text-slate-400 mb-12 font-light leading-relaxed">
            {{ t('dumps.subtitle') }}
          </p>

          <div class="space-y-8">
            <div class="flex gap-5">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                <Zap class="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 class="text-lg font-bold mb-1 text-slate-200">{{ t('dumps.feat1') }}</h4>
                <p class="text-slate-400 text-sm">{{ t('dumps.feat1_desc') }}</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                <Eye class="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 class="text-lg font-bold mb-1 text-slate-200">{{ t('dumps.feat2') }}</h4>
                <p class="text-slate-400 text-sm">{{ t('dumps.feat2_desc') }}</p>
              </div>
            </div>

             <div class="flex gap-5">
              <div class="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <MousePointer2 class="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 class="text-lg font-bold mb-1 text-slate-200">{{ t('dumps.feat3') }}</h4>
                <p class="text-slate-400 text-sm">{{ t('dumps.feat3_desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Representation -->
        <div class="relative group">
           <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur-3xl group-hover:opacity-100 transition-opacity opacity-50"></div>
           <div class="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden aspect-square flex flex-col justify-center items-center">
             <div class="flex items-center gap-6 mb-12">
               <div class="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
                 <FileCode class="w-12 h-12 text-indigo-400" />
                 <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">source.sql</span>
               </div>
               <div class="w-12 h-px bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30"></div>
                <div class="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
                 <FileCode class="w-12 h-12 text-purple-400" />
                 <span class="text-[10px] font-black uppercase tracking-widest text-slate-500">target.sql</span>
               </div>
             </div>
             <div class="w-full h-32 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex flex-col justify-center items-center text-center px-8">
               <h3 class="text-indigo-300 font-bold mb-2">Live Demo Ready</h3>
               <p class="text-indigo-400/60 text-xs">Pre-loaded datasets for instant exploration of schema differences.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
