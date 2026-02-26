<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import { BookOpen, Newspaper, Trophy, Lightbulb, ArrowLeft } from 'lucide-vue-next'

const categories = [
  { id: 'blog', name: 'Blog', icon: Newspaper },
  { id: 'guide', name: 'Guides', icon: BookOpen },
  { id: 'case-studies', name: 'Case Studies', icon: Lightbulb },
  { id: 'achievements', name: 'Achievements', icon: Trophy },
]

const activeCategory = ref('blog')
const selectedDoc = ref<any>(null)

// Dynamic import map
const contentModules = import.meta.glob('../content/**/*.md')

const docs = ref<any[]>([])

onMounted(() => {
  loadDocs()
})

const loadDocs = () => {
  const allDocs = []
  for (const path in contentModules) {
    const parts = path.split('/')
    const category = parts[2]
    const filename = parts[3]?.replace('.md', '')
    if (!filename) continue
    
    const title = filename.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    
    allDocs.push({
      id: filename,
      path,
      category,
      title,
      component: defineAsyncComponent(contentModules[path] as any)
    })
  }
  docs.value = allDocs
}

// Manually defining for now because docs.value might be tricky in script setup with glob
const filteredDocs = computed(() => {
  const all = []
  for (const path in contentModules) {
    const parts = path.split('/')
    const category = parts[2]
    if (category !== activeCategory.value) continue
    
    const filename = parts[3]?.replace('.md', '')
    if (!filename) continue
    
    const title = filename.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    
    all.push({
      id: filename,
      path,
      title,
      component: defineAsyncComponent(contentModules[path] as any)
    })
  }
  return all
})

const selectDoc = (doc: any) => {
  selectedDoc.value = doc
}

defineExpose({
  open: () => { /* Logic to open modal if handled by parent */ }
})
</script>

<template>
  <div class="min-h-[600px] flex flex-col bg-zinc-950 text-zinc-100 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
      <div class="flex items-center gap-2">
        <component :is="selectedDoc ? ArrowLeft : Newspaper" 
          class="w-5 h-5 text-cyan-500 cursor-pointer" 
          @click="selectedDoc = null" 
        />
        <h2 class="text-lg font-semibold tracking-tight">
          {{ selectedDoc ? selectedDoc.title : 'Resources Hub' }}
        </h2>
      </div>
    </div>

    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar Navigation (Only visible when no doc selected) -->
      <aside v-if="!selectedDoc" class="w-64 border-r border-zinc-800 bg-zinc-900/30 p-4 space-y-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all"
          :class="activeCategory === cat.id ? 'bg-zinc-800 text-white shadow-inner' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'"
        >
          <component :is="cat.icon" class="w-4 h-4" />
          {{ cat.name }}
        </button>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <!-- Document List -->
        <div v-if="!selectedDoc" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="doc in filteredDocs"
            :key="doc.id"
            @click="selectDoc(doc)"
            class="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 hover:bg-zinc-800/50 transition-all cursor-pointer relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 class="text-base font-medium mb-2 group-hover:text-cyan-400 transition-colors">{{ doc.title }}</h3>
            <p class="text-sm text-zinc-500 line-clamp-2">Learn more about {{ doc.title.toLowerCase() }} in the {{ activeCategory }} section.</p>
          </div>
          
          <div v-if="filteredDocs.length === 0" class="col-span-full py-20 text-center">
            <p class="text-zinc-600 italic">No articles found in this category yet.</p>
          </div>
        </div>

        <!-- Document Viewer -->
        <div v-else class="max-w-3xl mx-auto">
          <article class="prose prose-zinc dark:prose-invert prose-cyan max-w-none">
            <component :is="selectedDoc.component" />
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #3f3f46;
}

/* Shiki and custom markdown styles */
:deep(.prose pre) {
  @apply bg-zinc-900 border border-zinc-800 rounded-lg p-4 my-6 overflow-x-auto;
}
:deep(.prose code) {
  @apply text-cyan-400 font-mono text-sm;
}
:deep(.prose h1) {
  @apply text-3xl font-bold tracking-tight mb-8;
}
:deep(.prose h2) {
  @apply text-xl font-semibold mt-10 mb-4 text-zinc-100;
}
:deep(.prose p) {
  @apply text-zinc-400 leading-relaxed mb-4;
}
</style>
