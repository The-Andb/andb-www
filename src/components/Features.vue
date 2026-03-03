<template>
  <section class="py-32 relative" id="features">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-20">
        <h2 class="text-3xl font-bold tracking-tight mb-4">
          <span class="text-blue-400">Core</span> Value Proposition
        </h2>
        <p class="text-gray-400">
          Built for teams that demand absolute certainty when touching production databases.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Feature 1: Export DDL -->
        <div class="glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-all group">
          <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Export DDL to Local</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Extract tables, procedures, functions, and triggers directly to structured flat files for version control and safe keeping.
          </p>
        </div>

        <!-- Feature 2: Offline Diff -->
        <div class="glass-panel p-8 rounded-2xl hover:border-indigo-500/30 transition-all group">
           <div class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Offline Schema Diff</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Compare environments entirely locally. Your schemas and data are never sent to a cloud service. Precision parsing catches structural drift hidden from simple text diffs.
          </p>
        </div>

        <!-- Feature 3: Auto-Generate -->
        <div class="glass-panel p-8 rounded-2xl hover:border-green-500/30 transition-all group">
           <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Auto-Generate Migrations</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Instantly get accurate <code class="text-green-300">ALTER</code> scripts derived directly from structural differences between your Dev, Stage, and Prod environments.
          </p>
        </div>

        <!-- Feature 4: CI/CD Pipeline -->
        <div class="glass-panel p-8 rounded-2xl hover:border-purple-500/30 transition-all group">
           <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Integrate with CI/CD</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Hooks directly into your CI/CD pipelines via CLI to catch drift before deployment and give AI agents safe access via the MCP server.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
