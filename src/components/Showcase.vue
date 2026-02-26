<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  Database, 
  Download, 
  FileCode, 
  Zap, 
  CheckCircle2,
  RefreshCcw,
  Search,
  Code2
} from 'lucide-vue-next'

const dumpAContent = ref('')
const dumpBContent = ref('')
const isComparing = ref(false)
const comparisonDone = ref(false)
const activeTab = ref('source') // 'source' | 'target' | 'diff'

const fetchDumps = async () => {
  try {
    const [resA, resB] = await Promise.all([
      fetch('/samples/dump_a.sql'),
      fetch('/samples/dump_b.sql')
    ])
    dumpAContent.value = await resA.text()
    dumpBContent.value = await resB.text()
  } catch (e) {
    console.error('Failed to fetch samples', e)
  }
}

const runCompare = () => {
  isComparing.value = true
  comparisonDone.value = false
  setTimeout(() => {
    isComparing.value = false
    comparisonDone.value = true
    activeTab.value = 'diff'
  }, 1500)
}

onMounted(() => {
  fetchDumps()
})
</script>

<template>
  <section id="showcase" class="py-24 relative overflow-hidden bg-andb-dark">
    <!-- Background Accents -->
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-600/10 blur-[100px] -z-10 rounded-full"></div>

    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          The <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Interactive</span> Showcase
        </h2>
        <p class="text-lg text-gray-400 leading-relaxed">
          Don't just take our word for it. Explore the engine's precision directly in your browser. 
          Compare legacy dumps and see the magic of auto-generation.
        </p>
      </div>

      <!-- Playground GUI -->
      <div class="max-w-6xl mx-auto bg-[#0a0c10] rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
        <!-- Toolbar -->
        <div class="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div class="hidden md:flex items-center space-x-1 text-xs font-mono text-gray-500 bg-black/30 px-3 py-1.5 rounded-full">
              <span class="text-blue-400">andb</span>
              <span>--compare</span>
              <span class="text-green-400">./dump_a.sql</span>
              <span class="text-indigo-400">./dump_b.sql</span>
            </div>
          </div>
          <div class="flex items-center space-x-3">
             <a href="/samples/dump_a.sql" download class="p-2 text-gray-400 hover:text-white transition-colors" title="Download Dump A">
                <Download class="w-4 h-4" />
             </a>
             <button @click="runCompare" class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-blue-600/20">
                <Zap v-if="!isComparing" class="w-4 h-4" />
                <RefreshCcw v-else class="w-4 h-4 animate-spin" />
                <span>{{ isComparing ? 'Comparing...' : 'Run Simulation' }}</span>
             </button>
          </div>
        </div>

        <div class="grid lg:grid-cols-12 min-h-[500px]">
          <!-- Sidebar Nav (Mini) -->
          <div class="lg:col-span-1 border-r border-white/5 bg-black/20 flex lg:flex-col items-center py-6 px-2 space-y-6">
             <button @click="activeTab = 'source'" :class="activeTab === 'source' ? 'text-blue-400 bg-blue-400/10' : 'text-gray-500 hover:text-gray-300'" class="p-3 rounded-xl transition-all">
                <Database class="w-6 h-6" />
             </button>
             <button @click="activeTab = 'target'" :class="activeTab === 'target' ? 'text-indigo-400 bg-indigo-400/10' : 'text-gray-500 hover:text-gray-300'" class="p-3 rounded-xl transition-all">
                <FileCode class="w-6 h-6" />
             </button>
             <button @click="activeTab = 'diff'" :class="activeTab === 'diff' ? 'text-green-400 bg-green-400/10' : 'text-gray-500 hover:text-gray-300'" class="p-3 rounded-xl transition-all">
                <Search class="w-6 h-6" />
             </button>
          </div>

          <!-- Main Editor Area -->
          <div class="lg:col-span-11 relative">
             <!-- Source A -->
             <div v-if="activeTab === 'source'" class="h-full flex flex-col p-6 animate-in fade-in duration-500">
                <div class="flex items-center justify-between mb-4">
                   <div class="flex items-center space-x-2">
                      <span class="text-xs uppercase tracking-widest text-gray-500 font-bold">Source Database</span>
                      <span class="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded ring-1 ring-blue-400/20">dump_a.sql</span>
                   </div>
                </div>
                <div class="flex-1 overflow-auto rounded-xl bg-black/40 border border-white/5 p-4 font-mono text-sm text-gray-300 leading-relaxed whitespace-pre">
                   <div v-for="(line, i) in dumpAContent.split('\n')" :key="i" class="flex">
                      <span class="w-8 text-gray-700 select-none">{{ i + 1 }}</span>
                      <span>{{ line }}</span>
                   </div>
                </div>
             </div>

             <!-- Target B -->
             <div v-if="activeTab === 'target'" class="h-full flex flex-col p-6 animate-in fade-in duration-500">
                <div class="flex items-center justify-between mb-4">
                   <div class="flex items-center space-x-2">
                      <span class="text-xs uppercase tracking-widest text-gray-500 font-bold">Target Database</span>
                      <span class="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded ring-1 ring-indigo-400/20">dump_b.sql</span>
                   </div>
                </div>
                <div class="flex-1 overflow-auto rounded-xl bg-black/40 border border-white/5 p-4 font-mono text-sm text-gray-300 leading-relaxed whitespace-pre">
                   <div v-for="(line, i) in dumpBContent.split('\n')" :key="i" class="flex">
                      <span class="w-8 text-gray-700 select-none">{{ i + 1 }}</span>
                      <span>{{ line }}</span>
                   </div>
                </div>
             </div>

             <!-- Diff Simulation -->
             <div v-if="activeTab === 'diff'" class="h-full flex flex-col p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div v-if="!comparisonDone && !isComparing" class="flex-1 flex flex-col items-center justify-center text-center p-12 opacity-50">
                    <Zap class="w-16 h-16 text-gray-700 mb-6" />
                    <h3 class="text-xl font-bold text-gray-400 mb-2">Ready to Compare</h3>
                    <p class="text-sm text-gray-500">Click the "Run Simulation" button to see the engine in action.</p>
                </div>

                <div v-if="isComparing" class="flex-1 flex flex-col items-center justify-center space-y-4">
                    <div class="relative">
                        <div class="w-16 h-16 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin"></div>
                        <Database class="absolute inset-0 m-auto w-6 h-6 text-blue-500" />
                    </div>
                    <p class="text-blue-400 font-mono text-sm animate-pulse tracking-widest uppercase">Analyzing Schema...</p>
                </div>

                <div v-if="comparisonDone" class="flex-1 flex flex-col">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center space-x-3">
                           <div class="flex items-center px-4 py-2 bg-green-500/10 rounded-xl border border-green-500/20">
                              <CheckCircle2 class="w-5 h-5 text-green-500 mr-2" />
                              <span class="text-sm font-bold text-green-400">Analysis Complete</span>
                           </div>
                           <span class="text-xs text-gray-500">Detected: <b class="text-white">2</b> changes found</span>
                        </div>
                    </div>

                    <div class="flex-1 grid md:grid-cols-2 gap-6 h-full">
                       <!-- Diff Results -->
                       <div class="flex flex-col space-y-3">
                          <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Logic Breakdown</label>
                          <div class="space-y-2">
                             <div class="group p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all cursor-default relative overflow-hidden">
                                <span class="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors"></span>
                                <h4 class="text-sm font-bold text-blue-400 mb-1">Mismatched Columns</h4>
                                <p class="text-xs text-gray-400 mb-3">Table <code>users</code> email field expanded.</p>
                                <div class="font-mono text-[10px] p-2 bg-black/40 rounded border border-red-500/10 text-red-400 line-through mb-1">email varchar(100)</div>
                                <div class="font-mono text-[10px] p-2 bg-black/40 rounded border border-green-500/10 text-green-400">email varchar(150)</div>
                             </div>
                             <div class="group p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all cursor-default relative overflow-hidden">
                                <span class="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-colors"></span>
                                <h4 class="text-sm font-bold text-indigo-400 mb-1">Missing Object</h4>
                                <p class="text-xs text-gray-400 mb-2">Table <code>posts</code> found in target only.</p>
                                <div class="flex items-center text-[10px] font-bold text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded inline-block">ACTION: CREATE TABLE</div>
                             </div>
                          </div>
                       </div>

                       <!-- Generated Script -->
                       <div class="flex flex-col">
                           <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center">
                              <Code2 class="w-3 h-3 mr-1.5" /> Generated Sync Script
                           </label>
                           <div class="flex-1 bg-[#1a1c24] rounded-2xl border border-white/10 p-5 font-mono text-xs text-gray-300 leading-relaxed shadow-inner overflow-auto group relative">
                              <button class="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-all opacity-0 group-hover:opacity-100 uppercase text-[8px] font-bold">Copy SQL</button>
                              <div class="text-blue-400">-- Generated by Andb Engine</div>
                              <div class="text-gray-500">ALTER TABLE <span class="text-white">`users`</span></div>
                              <div class="pl-4">MODIFY <span class="text-white">`email`</span> varchar(150) NOT NULL,</div>
                              <div class="pl-4">MODIFY <span class="text-white">`status`</span> enum('active','inactive','deleted') DEFAULT 'active';</div>
                              <br/>
                              <div class="text-gray-500">CREATE TABLE <span class="text-white">`posts`</span> (</div>
                              <div class="pl-4">`id` int(11) NOT NULL AUTO_INCREMENT,</div>
                              <div class="pl-4">`user_id` int(11) NOT NULL,</div>
                              <div class="pl-4">PRIMARY KEY (`id`)</div>
                              <div class="text-gray-500">) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;</div>
                           </div>
                       </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        <!-- Footer / Download Bar -->
        <div class="px-6 py-4 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <div class="flex items-center space-x-3">
              <span class="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Engine Status:</span>
              <div class="flex items-center space-x-1.5 px-2 py-1 bg-green-500/5 rounded-full ring-1 ring-green-500/20">
                 <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 <span class="text-[10px] font-mono text-green-500 leading-none">v3.0.0-NEST</span>
              </div>
           </div>
           <div class="flex items-center space-x-4">
              <p class="hidden lg:block text-xs text-gray-500">Ready to test these dumps on your Desktop?</p>
              <div class="flex space-x-2">
                 <a href="/samples/dump_a.sql" download class="flex items-center space-x-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-bold text-gray-300 border border-white/5 transition-all">
                    <Download class="w-3 h-3" />
                    <span>DUMP_A</span>
                 </a>
                 <a href="/samples/dump_b.sql" download class="flex items-center space-x-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-bold text-gray-300 border border-white/5 transition-all">
                    <Download class="w-3 h-3" />
                    <span>DUMP_B</span>
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
b { font-weight: 800; }
code { background:rgba(255,255,255,0.05); padding: 2px 4px; border-radius: 4px; }
</style>
