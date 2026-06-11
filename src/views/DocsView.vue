<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  BookOpen,
  Newspaper,
  Trophy,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  FileText,
  Compass,
  Laptop,
  Terminal,
  GitCommit,
  ArrowLeft
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const categories = [
  { id: 'guide', name: 'Guides', icon: BookOpen },
  { id: 'case-studies', name: 'Case Studies', icon: Lightbulb },
  { id: 'achievements', name: 'Achievements', icon: Trophy },
  { id: 'blog', name: "What's New", icon: Newspaper },
  { id: 'releases', name: 'Releases', icon: GitCommit }
]

// Expand state for each category in the tree view
const expandedCategories = ref<Record<string, boolean>>({
  guide: true,
  'case-studies': true,
  achievements: true,
  blog: true,
  releases: true
})

// Tab navigation state for installation instructions (macOS / Linux)
const installTab = ref<'macos' | 'linux'>('macos')

// Dynamic import map
const contentModules = import.meta.glob('../content/**/*.md')
const releaseModules = import.meta.glob('../../releases/*.md')

const allDocs = ref<any[]>([])
const selectedDoc = ref<any>(null)

// Format slug/filename to pretty title
const formatTitle = (filename: string) => {
  if (filename === 'mac-os-fix') return 'macOS Damaged App Fix'
  if (filename === 'v310-release') return 'v3.1.0 Release Update'
  return filename
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// Helper to compare semver versions in descending order
const compareVersions = (a: string, b: string) => {
  const clean = (v: string) => v.replace(/^v/, '')
  const partsA = clean(a).split('.').map(Number)
  const partsB = clean(b).split('.').map(Number)
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const valA = partsA[i] || 0
    const valB = partsB[i] || 0
    if (valA !== valB) {
      return valB - valA
    }
  }
  return 0
}

onMounted(() => {
  const docsList: any[] = []
  
  // Load standard documentation
  for (const path in contentModules) {
    const parts = path.split('/')
    const category = parts[2]
    const filename = parts[3]?.replace('.md', '')
    if (!filename) continue
    
    docsList.push({
      id: filename,
      path,
      category,
      title: formatTitle(filename),
      component: defineAsyncComponent(contentModules[path] as any)
    })
  }

  // Load releases dynamically
  const releaseList: any[] = []
  for (const path in releaseModules) {
    const filename = path.split('/').pop()?.replace('.md', '')
    if (!filename) continue

    releaseList.push({
      id: filename,
      path,
      category: 'releases',
      title: `Version ${filename}`,
      component: defineAsyncComponent(releaseModules[path] as any)
    })
  }
  // Sort releases descendingly by version number
  releaseList.sort((a, b) => compareVersions(a.id, b.id))

  // Combine both lists
  docsList.push(...releaseList)
  allDocs.value = docsList

  // Select document based on route query parameter if available
  const docId = route.query.doc as string
  if (docId) {
    const doc = docsList.find(d => d.id === docId)
    if (doc) {
      selectedDoc.value = doc
    }
  }

  // Fallback to quick-start guide if no doc selected
  if (!selectedDoc.value && docsList.length > 0) {
    const defaultDoc = docsList.find(d => d.id === 'quick-start') || docsList[0]
    selectedDoc.value = defaultDoc
  }
})

// Watch route changes to sync selected document
watch(
  () => route.query.doc,
  (newDocId) => {
    if (newDocId) {
      const doc = allDocs.value.find(d => d.id === newDocId)
      if (doc) {
        selectedDoc.value = doc
      }
    }
  }
)

const selectDoc = (doc: any) => {
  selectedDoc.value = doc
  router.push({ path: '/docs', query: { doc: doc.id } })
}

const toggleCategory = (catId: string) => {
  expandedCategories.value[catId] = !expandedCategories.value[catId]
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Sidebar: Tree View Navigation -->
      <aside class="lg:col-span-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#090b0e] rounded-2xl p-5 shadow-sm space-y-4 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
        <div class="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-2">
          <Compass class="w-5 h-5 text-blue-500" />
          <h3 class="font-bold text-zinc-900 dark:text-white text-sm uppercase tracking-wider">Explorer</h3>
        </div>

        <div class="space-y-3">
          <!-- Back to Home Link -->
          <router-link 
            to="/" 
            class="w-full flex items-center gap-2 text-left text-xs font-semibold text-zinc-500 hover:text-blue-500 py-1.5 px-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-white/5 transition-all border-b border-zinc-100 dark:border-zinc-900 pb-2 mb-1"
          >
            <ArrowLeft class="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </router-link>

          <!-- Tree Category Node -->
          <div v-for="cat in categories" :key="cat.id" class="space-y-1">
            <button 
              @click="toggleCategory(cat.id)"
              class="w-full flex items-center justify-between text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-500 py-1.5 px-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-white/5 transition-all"
            >
              <div class="flex items-center gap-2">
                <component :is="cat.icon" class="w-4 h-4 text-zinc-400" />
                <span>{{ cat.name }}</span>
              </div>
              <component :is="expandedCategories[cat.id] ? ChevronDown : ChevronRight" class="w-3.5 h-3.5 text-zinc-400" />
            </button>

            <!-- Leaf Nodes (Articles) -->
            <div v-if="expandedCategories[cat.id]" class="pl-6 space-y-0.5 border-l border-zinc-100 dark:border-zinc-800 ml-4">
              <button
                v-for="doc in allDocs.filter(d => d.category === cat.id)"
                :key="doc.id"
                @click="selectDoc(doc)"
                class="w-full text-left text-xs py-1.5 px-3 rounded-lg flex items-center gap-2 transition-all"
                :class="selectedDoc?.id === doc.id 
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-white/5'"
              >
                <FileText class="w-3.5 h-3.5 opacity-60" />
                <span class="truncate">{{ doc.title }}</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <!-- Center/Right Content Area -->
      <main class="lg:col-span-9 bg-white dark:bg-[#090b0e] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 lg:p-12 shadow-sm min-h-[600px] transition-colors duration-300">
        
        <!-- Tabbed installer toggle at the top of installation/quick-start pages -->
        <div v-if="selectedDoc?.id === 'installation-and-setup' || selectedDoc?.id === 'quick-start'" class="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
          <div>
            <h1 class="text-3xl font-extrabold text-zinc-950 dark:text-white">{{ selectedDoc.title }}</h1>
            <p class="text-xs text-zinc-400 mt-1 font-mono">Select your deployment platform target:</p>
          </div>
          
          <!-- Tabs Guide Toggle -->
          <div class="flex bg-zinc-100 dark:bg-zinc-900/80 p-1 rounded-xl border border-zinc-200/50 dark:border-zinc-800/80">
            <button 
              @click="installTab = 'macos'"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              :class="installTab === 'macos' 
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
            >
              <Laptop class="w-3.5 h-3.5" />
              <span>macOS</span>
            </button>
            <button 
              @click="installTab = 'linux'"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              :class="installTab === 'linux' 
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
            >
              <Terminal class="w-3.5 h-3.5" />
              <span>Linux</span>
            </button>
          </div>
        </div>

        <!-- Document Viewer Content Area -->
        <article class="prose prose-zinc dark:prose-invert prose-cyan max-w-none">
          <div v-if="selectedDoc">
            
            <!-- Injects Tab Selection Filters into Content -->
            <div v-if="selectedDoc.id === 'installation-and-setup' || selectedDoc.id === 'quick-start'">
              <div v-if="installTab === 'macos'" class="animate-in fade-in duration-300">
                <!-- Helper message for macOS -->
                <div class="bg-blue-500/5 border border-blue-500/20 text-blue-600 dark:text-blue-400 p-4 rounded-xl text-xs mb-6 font-mono leading-relaxed">
                  💡 <b>macOS Target Active:</b> Instructions below are tailored for Apple Silicon (M1/M2/M3) and Intel Core chips.
                </div>
              </div>
              <div v-else class="animate-in fade-in duration-300">
                <!-- Helper message for Linux -->
                <div class="bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-4 rounded-xl text-xs mb-6 font-mono leading-relaxed">
                  🐧 <b>Linux Target Active:</b> Instructions below detail the portable AppImage package and Debian/Ubuntu .deb installs.
                </div>
              </div>
            </div>

            <component :is="selectedDoc.component" />
          </div>
          <div v-else class="py-20 text-center">
            <p class="text-zinc-400 italic">Select a document from the explorer tree to begin reading.</p>
          </div>
        </article>

      </main>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e4e4e7;
  border-radius: 10px;
}
:root.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #27272a;
}

/* Shiki & Custom Markdown typography */
:deep(.prose pre) {
  @apply bg-zinc-950 border border-zinc-800/80 rounded-xl p-5 my-6 overflow-x-auto text-zinc-100 shadow-lg;
}
:deep(.prose code) {
  @apply text-cyan-600 dark:text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800;
}
:deep(.prose pre code) {
  @apply border-none p-0 bg-transparent text-zinc-100;
}
:deep(.prose h1) {
  @apply text-3xl font-extrabold tracking-tight mb-8 text-zinc-950 dark:text-white border-b border-zinc-100 dark:border-zinc-900 pb-4;
}
:deep(.prose h2) {
  @apply text-xl font-bold mt-10 mb-4 text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-900 pb-2 flex items-center gap-2;
}
:deep(.prose h3) {
  @apply text-base font-bold mt-6 mb-3 text-zinc-800 dark:text-zinc-200;
}
:deep(.prose p) {
  @apply text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 text-sm;
}
:deep(.prose ul), :deep(.prose ol) {
  @apply text-zinc-600 dark:text-zinc-400 mb-5 pl-6 list-disc text-sm;
}
:deep(.prose li) {
  @apply mb-2;
}
:deep(.prose blockquote) {
  @apply border-l-4 border-blue-500 bg-blue-500/5 text-blue-700 dark:text-blue-300 p-4 rounded-r-xl font-mono text-xs my-6 not-italic leading-relaxed;
}
:deep(.prose blockquote p) {
  @apply m-0 text-xs text-blue-700 dark:text-blue-300;
}
</style>
