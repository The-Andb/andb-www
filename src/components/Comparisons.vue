<template>
  <section class="py-20 relative bg-black/50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-10"><span class="text-gray-400">vs</span> The Old Way</h2>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- The Old Way -->
        <div class="p-8 rounded-2xl bg-red-500/5 border border-red-500/10 text-left relative overflow-hidden group">
          <div class="absolute top-0 right-0 p-4 opacity-50"><span class="text-5xl">❌</span></div>
          <h3 class="text-xl font-bold text-red-300 mb-4">Manual Scripts</h3>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-center gap-2"><span class="text-red-400">•</span> Copy-pasting DDL from DBeaver</li>
            <li class="flex items-center gap-2"><span class="text-red-400">•</span> Forgetting `AUTO_INCREMENT`</li>
            <li class="flex items-center gap-2"><span class="text-red-400">•</span> "Wait, did I run this on Prod?"</li>
            <li class="flex items-center gap-2"><span class="text-red-400">•</span> No history, no undo button</li>
          </ul>
        </div>

        <!-- The Andb Way -->
        <div class="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-left relative overflow-hidden shadow-2xl shadow-blue-500/10">
          <div class="absolute top-0 right-0 p-4 opacity-50"><span class="text-5xl">✅</span></div>
          <h3 class="text-xl font-bold text-blue-300 mb-4">The Andb Way</h3>
          <ul class="space-y-3 text-gray-300 text-sm">
             <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Offline structural comparison</li>
             <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Auto-generated `ALTER` scripts from drift</li>
             <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> CI/CD integration hooks</li>
             <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Zero telemetry, zero cloud calls</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
