<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { Database, GitCommit, Shield } from 'lucide-vue-next'
import mermaid from 'mermaid'

const mdComponents = import.meta.glob('../../releases/*.md', { eager: true, import: 'default' })
const mdRaw = import.meta.glob('../../releases/*.md', { eager: true, query: '?raw', import: 'default' })

const parsedReleases = Object.keys(mdComponents)
  .filter(path => /\d+\.\d+\.\d+/.test(path)) // Only parse files containing a semver version
  .map(path => {
  const Component = mdComponents[path] as any
  const rawText = (mdRaw[path] as string) || ''
  
  // Extract version from filename
  const filename = path.split('/').pop() || ''
  const version = filename.replace('.md', '')
  
  // Extract title from H1
  const titleMatch = rawText.match(/^#\s+(.+)$/m)
  const title = titleMatch && titleMatch[1] ? titleMatch[1].replace(/TheAndb Desktop |v\d+\.\d+\.\d+\s*/g, '').trim() : 'Release Update'
  
  return {
    version,
    date: 'Update',
    status: 'SYSTEM',
    title,
    Component,
    icon: Database,
    glowColor: 'bg-indigo-500/10 hover:shadow-[0_0_30px_-5px_#6366f1]',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-400',
    borderClass: ''
  }
}).sort((a, b) => b.version.localeCompare(a.version))

const latest = parsedReleases[0]
if (latest) {
  latest.status = 'LATEST'
  latest.glowColor = 'bg-cyan-500/10 shadow-[0_0_30px_-5px_cyan]'
  latest.borderColor = 'border-cyan-500/50'
  latest.textColor = 'text-cyan-400'
  latest.borderClass = 'ring-1 ring-cyan-500/20'
  latest.icon = Shield
}

const releases = parsedReleases
const leftReleases = parsedReleases.filter((_, i) => i % 2 === 0)
const rightReleases = parsedReleases.filter((_, i) => i % 2 === 1)

onMounted(async () => {
  await nextTick()
  const isDark = document.documentElement.classList.contains('dark')
  mermaid.initialize({
    startOnLoad: false,
    theme: isDark ? 'dark' : 'default',
    securityLevel: 'loose'
  })

  // Find pre blocks that wrap a language-mermaid code block
  const mermaidNodes = document.querySelectorAll('.dynamic-markdown pre code.language-mermaid')
  
  mermaidNodes.forEach(async (node, i) => {
    try {
      const code = node.textContent?.trim()
      if (!code) return
      
      const preNode = node.parentElement
      if (!preNode) return

      const graphId = `mermaid-graph-${Date.now()}-${i}`
      const { svg } = await mermaid.render(graphId, code)
      
      const wrapper = document.createElement('div')
      wrapper.className = 'w-full overflow-x-auto flex justify-center py-4 my-6 bg-white/5 dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10'
      wrapper.innerHTML = svg
      
      preNode.replaceWith(wrapper)
    } catch (e) {
      console.error('Failed to render mermaid', e)
    }
  })
})
</script>

<template>
  <section id="releases" class="py-24 relative overflow-hidden bg-[#fafafa] dark:bg-andb-dark transition-colors duration-300">
    <!-- Grid Background to simulate a terminal/database graph -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>

    <div class="container mx-auto px-4 relative z-10 w-full">
      <div class="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight flex items-center justify-center gap-4">
          <GitCommit class="w-10 h-10 text-cyan-400" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">The Evolution Story</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 font-mono text-sm max-w-xl mx-auto">
          Building the perfect migration tool didn't happen overnight. Follow our step-by-step journey of engine upgrades and architectural milestones.
        </p>
      </div>

      <div class="max-w-6xl mx-auto relative w-full pb-10">
        
        <!-- Mobile Timeline (Single Column) -->
        <div class="md:hidden space-y-12">
          <div v-for="release in releases" :key="release.version" class="relative group w-full">
            <!-- Mobile Node Pin Context -->
            <div class="flex items-center gap-4 mb-4 mt-6">
                <div class="w-10 h-10 rounded-xl bg-white dark:bg-black border-2 flex items-center justify-center shadow-lg" :class="[release.borderColor, release.glowColor]">
                    <component :is="release.icon" class="w-4 h-4 flex-shrink-0" :class="release.textColor" />
                </div>
                <span class="text-lg font-bold font-mono tracking-wider" :class="release.textColor">{{ release.version }}</span>
                <span class="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500">{{ release.status }}</span>
            </div>

            <!-- Mobile Card -->
            <div class="w-full pl-6 border-l-2 border-cyan-500/30">
               <div class="w-full bg-white dark:bg-[#0a0c10] border border-gray-200 dark:border-white/5 rounded-2xl p-5 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ release.title }}</h3>
                  
                  <!-- Terminal Logs -->
                  <div class="bg-gray-50 dark:bg-black/80 rounded-xl border border-gray-200 dark:border-white/10 p-4 pb-5 font-mono text-[11px]">
                     <div class="flex items-center gap-2 mb-3 px-2">
                         <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                     </div>
                     <div class="dynamic-markdown px-2 overflow-x-auto"><component :is="release.Component" /></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <!-- Desktop Staggered Masonry -->
        <div class="hidden md:flex relative w-full items-start">
            <!-- Central Spine -->
            <div class="absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/50 via-indigo-500/30 to-white/5 -translate-x-1/2 rounded-full"></div>

            <!-- Left Column (Even Indexes) -->
            <div class="w-1/2 flex flex-col pr-16 space-y-16">
                <div v-for="release in leftReleases" :key="release.version" class="relative items-end w-full group">
                   
                   <!-- Node Pin on spine -->
                   <div class="absolute -right-[88px] top-8 w-12 h-12 rounded-xl bg-white dark:bg-black border-2 flex items-center justify-center z-10 transition-all duration-300"
                        :class="[release.borderColor, release.glowColor]">
                        <component :is="release.icon" class="w-5 h-5 flex-shrink-0" :class="release.textColor" />
                   </div>
                   <!-- Connective Branch -->
                   <div class="absolute -right-16 top-[54px] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 w-16 z-0"></div>

                   <!-- Card -->
                   <div class="w-full bg-white/80 dark:bg-[#0a0c10]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-xl relative z-20 transition-all hover:-translate-y-1 hover:shadow-2xl">
                      <div class="flex flex-wrap items-center justify-between mb-4 border-b border-gray-100 dark:border-white/5 pb-4 gap-2">
                         <span class="text-sm font-bold font-mono tracking-wider" :class="release.textColor">{{ release.version }}</span>
                         <div class="flex items-center gap-2">
                            <span class="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500">{{ release.status }}</span>
                            <span class="text-xs text-gray-500 font-mono">{{ release.date }}</span>
                         </div>
                      </div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ release.title }}</h3>
                      
                      <div class="bg-gray-50 dark:bg-black/80 rounded-xl border border-gray-200 dark:border-white/10 p-4 font-mono text-[11px] md:text-xs">
                         <div class="flex items-center gap-2 mb-3 px-2">
                             <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                             <span class="ml-2 text-[10px] text-gray-500 uppercase font-bold">COMMIT LOG</span>
                         </div>
                         <div class="dynamic-markdown px-2 overflow-x-auto"><component :is="release.Component" /></div>
                      </div>
                   </div>
                </div>
            </div>

            <!-- Right Column (Odd Indexes) -->
            <div class="w-1/2 flex flex-col pl-16 space-y-16 mt-64"> <!-- Stagger Offset -->
                <div v-for="release in rightReleases" :key="release.version" class="relative items-start w-full group">
                   
                   <!-- Node Pin on spine -->
                   <div class="absolute -left-[88px] top-8 w-12 h-12 rounded-xl bg-white dark:bg-black border-2 flex items-center justify-center z-10 transition-all duration-300"
                        :class="[release.borderColor, release.glowColor]">
                        <component :is="release.icon" class="w-5 h-5 flex-shrink-0" :class="release.textColor" />
                   </div>
                   <!-- Connective Branch -->
                   <div class="absolute -left-16 top-[54px] h-[2px] bg-gradient-to-l from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 w-16 z-0"></div>

                   <!-- Card -->
                   <div class="w-full bg-white/80 dark:bg-[#0a0c10]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-xl relative z-20 transition-all hover:-translate-y-1 hover:shadow-2xl">
                      <div class="flex flex-wrap items-center justify-between mb-4 border-b border-gray-100 dark:border-white/5 pb-4 gap-2">
                         <span class="text-sm font-bold font-mono tracking-wider" :class="release.textColor">{{ release.version }}</span>
                         <div class="flex items-center gap-2">
                            <span class="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500">{{ release.status }}</span>
                            <span class="text-xs text-gray-500 font-mono">{{ release.date }}</span>
                         </div>
                      </div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ release.title }}</h3>
                      
                      <div class="bg-gray-50 dark:bg-black/80 rounded-xl border border-gray-200 dark:border-white/10 p-4 font-mono text-[11px] md:text-xs">
                         <div class="flex items-center gap-2 mb-3 px-2">
                             <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div><div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                             <span class="ml-2 text-[10px] text-gray-500 uppercase font-bold">COMMIT LOG</span>
                         </div>
                         <div class="dynamic-markdown px-2 overflow-x-auto"><component :is="release.Component" /></div>
                      </div>
                   </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.dynamic-markdown) ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
}
:deep(.dynamic-markdown) ul li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #4b5563; /* text-gray-600 */
  opacity: 0.8;
  transition: opacity 0.2s;
}
:root.dark :deep(.dynamic-markdown) ul li {
  color: #cbd5e1; /* text-slate-300 */
}
:deep(.dynamic-markdown) ul li:hover {
  opacity: 1;
}
:deep(.dynamic-markdown) ul li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: #9ca3af; /* text-gray-400 */
  font-weight: bold;
}
:root.dark :deep(.dynamic-markdown) ul li::before {
  color: #4b5563; /* text-gray-600 */
}
:deep(.dynamic-markdown) h1 { 
  display: none; 
}
:deep(.dynamic-markdown) h2, :deep(.dynamic-markdown) h3 {
  color: #60a5fa;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
}
:deep(.dynamic-markdown) strong {
  color: #93c5fd;
  font-weight: bold;
  letter-spacing: 0.05em;
}
:deep(.dynamic-markdown) p {
  margin-bottom: 1rem;
  color: #9ca3af;
}
</style>
