<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Layers, Terminal, Monitor, ExternalLink } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'

const { t } = useI18n()
const mermaidContainer = ref<HTMLElement | null>(null)

const graphDefinition = `
flowchart LR
    Src[("SOURCE DB")]
    Dst[("TARGET DB")]

    subgraph ANDB["THE ANDB"]
        direction TB
        UI["UI"]
        CLI["CLI"]
        Core["CORE<br/>Diff & Migration Engine"]
        UI <--> Core
        CLI <--> Core
    end

    Src -->|Read schema| Core
    Core -->|Generate migration| Dst

    style Src fill:#011627,stroke:#22da6e,stroke-width:2px,color:#d6deeb
    style Dst fill:#011627,stroke:#ecc48d,stroke-width:2px,color:#d6deeb
    style ANDB fill:#011627,stroke:#82aaff,stroke-width:2.5px,color:#d6deeb
    style UI fill:#01111d,stroke:#7fdbca,stroke-width:1.5px,color:#c792ea,rx:8,ry:8
    style CLI fill:#01111d,stroke:#7fdbca,stroke-width:1.5px,color:#c792ea,rx:8,ry:8
    style Core fill:#0b253a,stroke:#82aaff,stroke-width:3px,color:#d6deeb,rx:12,ry:12
`

onMounted(async () => {
  mermaid.initialize({
    startOnLoad: false, // We render manually
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'Inter',
  })
  
  if (mermaidContainer.value) {
    const { svg } = await mermaid.render('mermaid-svg-id', graphDefinition)
    mermaidContainer.value.innerHTML = svg
  }
})
</script>

<template>
  <section id="architecture" class="w-full max-w-[1600px] mx-auto px-6 py-32 relative overflow-hidden">
    <div class="text-center mb-20">
      <h2 class="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white light-text-slate-900">{{ t('arch.title') }}</h2>
      <p class="text-xl text-slate-400 light-text-slate-600 max-w-3xl mx-auto">
        {{ t('arch.subtitle') }}
      </p>
    </div>

    <div class="space-y-12">
      <!-- Top: Components Info -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Core -->
        <div class="glass-card p-6 rounded-3xl border-indigo-500/20 hover:border-indigo-500/40 transition-all group">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
              <Layers class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-white light-text-slate-900">andb-core</h3>
          </div>
          <p class="text-slate-400 light-text-slate-600 leading-relaxed mb-4">
            {{ t('arch.core_desc') }}
          </p>
          <div class="flex items-center gap-4">
            <a href="https://github.com/The-Andb/andb-core" class="inline-flex items-center text-indigo-400 text-sm font-bold hover:underline gap-1">
              Explore Engine <ExternalLink class="w-3 h-3" />
            </a>
            <span class="text-slate-700">/</span>
            <a href="https://www.npmjs.com/package/@the-andb/core" target="_blank" class="inline-flex items-center text-red-400 text-sm font-bold hover:underline gap-1">
              NPM <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>

        <!-- CLI -->
        <div class="glass-card p-6 rounded-3xl border-slate-700/50 hover:border-indigo-500/40 transition-all group">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-slate-800 rounded-2xl text-slate-400 group-hover:text-indigo-400 transition-colors">
              <Terminal class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-white light-text-slate-900">andb-cli</h3>
          </div>
          <p class="text-slate-400 light-text-slate-600 leading-relaxed mb-4">
             {{ t('arch.cli_desc') }}
          </p>
          <div class="flex items-center gap-4">
            <a href="https://github.com/The-Andb/andb-cli" class="inline-flex items-center text-indigo-400 text-sm font-bold hover:underline gap-1">
              View CLI <ExternalLink class="w-3 h-3" />
            </a>
            <span class="text-slate-700">/</span>
            <a href="https://www.npmjs.com/package/@the-andb/cli" target="_blank" class="inline-flex items-center text-red-400 text-sm font-bold hover:underline gap-1">
              NPM <ExternalLink class="w-3 h-3" />
            </a>
          </div>
        </div>

        <!-- Desktop -->
        <div class="glass-card p-6 rounded-3xl border-slate-700/50 hover:border-indigo-500/40 transition-all group">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-slate-800 rounded-2xl text-slate-400 group-hover:text-indigo-400 transition-colors">
              <Monitor class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold text-white light-text-slate-900">Andb (GUI)</h3>
          </div>
          <p class="text-slate-400 light-text-slate-600 leading-relaxed mb-4">
             {{ t('arch.gui_desc') }}
          </p>
          <a href="https://github.com/The-Andb/andb" class="inline-flex items-center text-indigo-400 text-sm font-bold hover:underline gap-1">
            Discovery Andb <ExternalLink class="w-3 h-3" />
          </a>
        </div>
      </div>

      <!-- Bottom: Diagram (Full Width) -->
      <div class="w-full">
        <div class="glass-card p-4 md:p-8 rounded-[3rem] border-indigo-500/10 bg-slate-900/40 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-[3rem]"></div>
          
          <div ref="mermaidContainer" class="relative z-10 flex justify-center">
            <!-- Mermaid SVG will be rendered here -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:global(body.light-mode) .glass-card {
  @apply bg-white/60 border-black/5 shadow-xl;
}
:global(body.light-mode) .light-text-slate-900 {
  @apply text-slate-900;
}
:global(body.light-mode) .light-text-slate-600 {
  @apply text-slate-600;
}
</style>
