<script setup lang="ts">
import { LayoutDashboard, DatabaseZap, Settings, Globe, Database, SplitSquareHorizontal, Activity, GitBranch, Cpu, Terminal } from 'lucide-vue-next'

const steps = [
  {
    id: '01',
    title: 'Workspace Dashboard',
    subtitle: '/dashboard',
    description: 'Organize your database environments into isolated, protected Workspaces. Zero risk of stray cross-environment executions.',
    image: '/screenshots/dashboard.png',
    icon: LayoutDashboard,
    color: 'from-blue-500 to-cyan-400',
    iconColor: 'text-blue-400',
    shadowColor: 'rgba(56, 189, 248, 0.4)'
  },
  {
    id: '02',
    title: 'Connection Manager',
    subtitle: '/connections',
    description: 'Centrally manage your database credentials with strict read/write policies. Define precisely who or what has access to modify schemas.',
    image: '/screenshots/settings.png',
    icon: DatabaseZap,
    color: 'from-indigo-500 to-purple-500',
    iconColor: 'text-indigo-400',
    shadowColor: 'rgba(99, 102, 241, 0.4)'
  },
  {
    id: '03',
    title: 'Project Settings',
    subtitle: '/project-settings',
    description: 'Configure synchronization rules, ignore patterns, and enforce strict mode. Granular control over how your diff engine responds to changes.',
    image: '/screenshots/settings.png',
    icon: Settings,
    color: 'from-purple-500 to-fuchsia-500',
    iconColor: 'text-purple-400',
    shadowColor: 'rgba(168, 85, 247, 0.4)'
  },
  {
    id: '04',
    title: 'Global Settings',
    subtitle: '/global-settings',
    description: 'Customize application-wide preferences, theme engines, default IDEs, and binary paths right from the master control panel.',
    image: '/screenshots/settings.png',
    icon: Globe,
    color: 'from-fuchsia-500 to-pink-500',
    iconColor: 'text-fuchsia-400',
    shadowColor: 'rgba(217, 70, 239, 0.4)'
  },
  {
    id: '05',
    title: 'Schema Explorer',
    subtitle: '/schema',
    description: 'Effortlessly browse tables, views, and routines. The analyzer generates highly detailed structural mappings without writing a single SHOW query.',
    image: '/screenshots/schema.png',
    icon: Database,
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-400',
    shadowColor: 'rgba(236, 72, 153, 0.4)'
  },
  {
    id: '06',
    title: 'True Precision Diffing',
    subtitle: '/compare',
    description: 'Watch the AST-powered engine calculate precise diffs. It doesn\'t just diff text—it automatically filters out safe engine-specific modifications.',
    image: '/screenshots/compare.png',
    icon: SplitSquareHorizontal,
    color: 'from-rose-500 to-orange-500',
    iconColor: 'text-rose-400',
    shadowColor: 'rgba(244, 63, 94, 0.4)'
  },
  {
    id: '07',
    title: 'Safe Execution',
    subtitle: '/history',
    description: 'Deploy the generated scripts directly to the target environment with one click. Every migration is tracked, giving you absolute confidence.',
    image: '/screenshots/history.png',
    icon: Activity,
    color: 'from-orange-500 to-amber-500',
    iconColor: 'text-orange-400',
    shadowColor: 'rgba(249, 115, 22, 0.4)'
  },
  {
    id: '08',
    title: 'Git Synchronization',
    subtitle: '/git-sync',
    description: 'Commit your schema migrations directly to Git. The engine synchronizes state automatically with your version control systems for seamless CI/CD.',
    image: '/screenshots/compare.png', // Temporary placeholder until script updates
    icon: GitBranch,
    color: 'from-amber-500 to-yellow-500',
    iconColor: 'text-amber-400',
    shadowColor: 'rgba(245, 158, 11, 0.4)'
  },
  {
    id: '09',
    title: 'MCP Server',
    subtitle: '/mcp',
    description: 'Turn your application into a Model Context Protocol endpoint. Let Agentic AI assistants access your database infrastructure securely and autonomously.',
    image: '/screenshots/settings.png', // Temporary placeholder
    icon: Cpu,
    color: 'from-yellow-400 to-lime-400',
    iconColor: 'text-yellow-400',
    shadowColor: 'rgba(234, 179, 8, 0.4)'
  },
  {
    id: '10',
    title: 'Command Line Tools',
    subtitle: 'andb-cli',
    description: 'Execute Diff & Sync operations headless in your CI/CD pipelines. Expose full automation capabilities outside the visual GUI.',
    image: '/screenshots/dashboard.png', // Temporary placeholder
    icon: Terminal,
    color: 'from-lime-400 to-green-500',
    iconColor: 'text-lime-400',
    shadowColor: 'rgba(163, 230, 53, 0.4)'
  }
]
</script>

<template>
  <div class="w-full relative mt-16 sm:mt-24">
    <!-- Header Section above the parallax flow -->
    <div class="text-center max-w-4xl mx-auto px-4 pt-16 mb-16 relative z-20">
      <h2 class="text-4xl md:text-6xl font-black mb-8 tracking-tight text-gray-900 dark:text-white">
        How It <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Works.</span>
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-400 font-medium">
        A seamless journey designed strictly for Database Engineers. No fluff. Just absolute control over your schema deployments.
      </p>
    </div>

    <!-- The Flow -->
    <section v-for="(step, i) in steps" :key="step.id" 
             class="sticky top-0 w-full h-[100svh] flex items-center overflow-hidden border-b border-gray-200 dark:border-white/5 shadow-inner">
      
      <!-- Parallax Background Image Array with Interactive Auto-Focus -->
      <div class="absolute inset-0 z-0 overflow-hidden bg-gray-50 dark:bg-[#05060A]">
         <!-- Dark Mode bg -->
         <img :src="step.image" class="absolute inset-0 w-full h-full object-cover hidden dark:block scale-100 will-change-transform animate-auto-focus" :class="i % 2 === 0 ? 'origin-top-left' : 'origin-bottom-right'" :style="`animation-delay: ${i * -3}s`" />
         <!-- Light Mode bg -->
         <img :src="step.image.replace('.png', '-light.png')" class="absolute inset-0 w-full h-full object-cover origin-top-left block dark:hidden scale-100 will-change-transform animate-auto-focus" :class="i % 2 === 0 ? 'origin-top-left' : 'origin-bottom-right'" :style="`animation-delay: ${i * -3}s`" />
      </div>

      <!-- Contrast Gradients for readibility -->
      <div class="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-r from-white/95 via-white/80 to-white/40 dark:from-[#05060A]/95 dark:via-[#05060A]/80 dark:to-transparent"
           :class="i % 2 === 1 ? 'md:bg-gradient-to-l md:from-white/95 md:via-white/80 md:to-white/20 md:dark:from-[#05060A]/95 md:dark:via-[#05060A]/80 md:dark:to-transparent' : ''"></div>
      <div class="absolute inset-0 z-10 bg-black/10 dark:bg-black/40"></div>

      <!-- Content Overlay -->
      <div class="relative z-20 container mx-auto px-4 sm:px-8 max-w-7xl h-full flex flex-col justify-end md:justify-center pb-24 md:pb-0"
           :class="i % 2 === 1 ? 'items-end text-right' : 'items-start text-left'">
        
        <div class="w-full md:w-5/12 relative group" :class="i % 2 === 1 ? 'text-right' : 'text-left'">
          <!-- Animated Glow behind the card -->
          <div class="absolute -inset-1 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-gradient-to-br" :class="step.color"></div>
          
          <!-- Card -->
          <div class="bg-white/80 dark:bg-[#0a0c10]/80 backdrop-blur-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <!-- Side color strip -->
            <div class="absolute top-0 bottom-0 w-1.5 bg-gradient-to-b" :class="[step.color, i % 2 === 1 ? 'right-0' : 'left-0']"></div>
            
            <div class="flex items-center gap-4 mb-6" :class="i % 2 === 1 ? 'justify-end' : 'justify-start'">
               <span class="text-3xl font-black font-mono tracking-tighter opacity-20 dark:opacity-30 self-end mr-2">{{ step.id }}</span>
               <span class="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-gray-900 dark:bg-white/10 rounded-full text-white dark:text-gray-300">
                 {{ step.subtitle }}
               </span>
               <component :is="step.icon" class="w-8 h-8" :class="step.iconColor" />
            </div>
            
            <h3 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">{{ step.title }}</h3>
            <p class="text-lg md:text-xl text-gray-700 dark:text-gray-400 leading-relaxed font-medium">
               {{ step.description }}
            </p>
          </div>
        </div>

      </div>

    </section>
  </div>
</template>

<style scoped>
/* Auto-focus zoom-in effect requested by user */
@keyframes auto-focus {
  0% { transform: scale(1.0); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1.0); }
}

.animate-auto-focus {
  animation: auto-focus 30s ease-in-out infinite alternate;
}
</style>
