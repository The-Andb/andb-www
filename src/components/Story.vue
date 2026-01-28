<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Github, Quote, Milestone } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- OUR STORY SECTION -->
    <section class="max-w-6xl mx-auto px-6 mb-32 mt-20 relative">
      <div class="absolute -top-40 -left-20 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full"></div>

      <div class="glass-card rounded-[3rem] p-8 md:p-16 border-indigo-500/20 relative overflow-hidden group">
        <!-- Decoration -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-5 blur-[40px] rounded-full"></div>

        <div class="flex flex-col lg:flex-row gap-16 items-start">
          <!-- Left: Profile & Badge -->
          <div class="shrink-0 w-full lg:w-auto text-center lg:text-left">
            <div class="relative inline-block w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-1 mb-8 rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl shadow-indigo-500/20 mx-auto">
              <div class="w-full h-full rounded-[2.25rem] bg-[#0f172a] light-bg-white flex items-center justify-center overflow-hidden">
                <img src="/favicon.png" alt="The Andb Icon" class="w-20 h-20 object-contain">
              </div>
              <!-- Floating Badge -->
              <div class="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-xl">
                {{ t('story.creator_badge') }}
              </div>
            </div>
            <h3 class="text-3xl font-black text-white light-text-slate-900 mb-1">Ph4n4n</h3>
            <p class="text-indigo-400 font-medium tracking-wide">{{ t('story.role') }}</p>

            <div class="mt-8 pt-8 border-t border-white/5 flex justify-center lg:justify-start gap-4">
              <a href="https://github.com/ph4n4n" class="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all hover:scale-110">
                <Github class="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>

          <!-- Right: Narrative -->
          <div class="flex-1">
            <div class="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              {{ t('story.vision_label') }}
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white light-text-slate-900 mb-8 leading-[1.15]">
              {{ t('story.quote_start') }} <br />
              <span class="text-indigo-400">{{ t('story.quote_highlight') }}</span>"
            </h2>

            <div class="space-y-6 text-slate-400 light-text-slate-600 text-lg leading-relaxed font-light text-left">
              <p>
                {{ t('story.p1_start') }}
                <span class="text-slate-200 light-text-slate-800 font-medium">{{ t('story.p1_highlight') }}</span>
                {{ t('story.p1_end') }}
              </p>
              <p>
                {{ t('story.p2_start') }}
                <span class="italic text-indigo-300">{{ t('story.p2_quote') }}</span>
              </p>
              <p>
                {{ t('story.p3_start') }}
                <span class="text-white light-text-slate-900 font-bold">The Andb</span>.
                {{ t('story.p3_end') }}
              </p>
            </div>

            <div class="mt-12 space-y-4">
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/m">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Quote class="w-5 h-5" />
                  </div>
                  <p class="text-sm font-medium text-slate-500 group-hover/m:text-slate-300 transition-colors">{{ t('story.milestone_note_2024') }}</p>
                </div>
                <Milestone class="w-6 h-6 text-indigo-500/20" />
              </div>
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/m">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Quote class="w-5 h-5" />
                  </div>
                  <p class="text-sm font-medium text-slate-500 group-hover/m:text-slate-300 transition-colors">{{ t('story.milestone_note_2025') }}</p>
                </div>
                <Milestone class="w-6 h-6 text-purple-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECT MILESTONES SECTION -->
    <div id="journey" class="w-full max-w-4xl mx-auto mt-32 px-6 mb-32">
        <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white light-text-slate-900">{{ t('journey.title') }}</h2>
        <p class="text-slate-400 light-text-slate-600">{{ t('journey.subtitle') }}</p>
        </div>

        <div class="relative border-l border-slate-800 light:border-slate-300 ml-4 md:ml-10 space-y-16">

        <!-- Milestone: Solid UI (Now) -->
        <div class="relative pl-8 group">
            <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-900 light:ring-white group-hover:scale-150 transition-transform"></div>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-10 sm:items-baseline">
            <div class="min-w-[120px] text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">{{ t('journey.m1_date') }}</div>
            <div>
                <h3 class="text-xl font-bold text-white light-text-slate-800 mb-2 group-hover:text-indigo-400 transition-colors">
                 {{ t('journey.m1_title') }}
                </h3>
                <p class="text-slate-400 light-text-slate-600 text-sm leading-relaxed mb-4">
                 {{ t('journey.m1_desc') }}
                </p>
                <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold border border-indigo-500/20">#DesktopApp</span>
                <span class="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold border border-indigo-500/20">#SQLite</span>
                </div>
            </div>
            </div>
        </div>

        <!-- Milestone: Core CLI -->
        <div class="relative pl-8 group">
            <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-900 light:ring-white group-hover:bg-indigo-500 transition-colors"></div>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-10 sm:items-baseline">
            <div class="min-w-[120px] text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">{{ t('journey.m2_date') }}</div>
            <div>
                <h3 class="text-xl font-bold text-slate-200 light-text-slate-800 mb-2">{{ t('journey.m2_title') }}</h3>
                <p class="text-slate-400 light-text-slate-600 text-sm leading-relaxed">
                 {{ t('journey.m2_desc') }}
                </p>
            </div>
            </div>
        </div>

        <!-- Milestone: The Spark -->
        <div class="relative pl-8 group opacity-80">
            <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-900 light:ring-white group-hover:bg-indigo-500 transition-colors"></div>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-10 sm:items-baseline">
            <div class="min-w-[120px] text-xs font-mono text-slate-600 font-bold uppercase tracking-wider">{{ t('journey.m3_date') }}</div>
            <div>
                <h3 class="text-xl font-bold text-slate-400 light-text-slate-800 mb-2 italic">{{ t('journey.m3_title') }}</h3>
                <p class="text-slate-500 light-text-slate-600 text-sm leading-relaxed">
                 {{ t('journey.m3_desc') }}
                 <span class="italic">"{{ t('journey.m3_quote') }}"</span>
                </p>
            </div>
            </div>
        </div>

        </div>
    </div>
  </div>
</template>

<style scoped>
:global(body.light-mode) .glass-card {
  @apply bg-white/60 border-black/5 shadow-xl;
}
:global(body.light-mode) .light-text-slate-900 {
  @apply text-slate-900;
}
:global(body.light-mode) .light-text-slate-800 {
  @apply text-slate-800;
}
:global(body.light-mode) .light-text-slate-600 {
  @apply text-slate-600;
}
:global(body.light-mode) .light-bg-white {
  @apply bg-white;
}
</style>
