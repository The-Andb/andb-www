<template>
  <section class="py-32 relative" id="features">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-20">
        <h2 class="text-3xl font-bold tracking-tight mb-4" v-html="$t('features.section_title')"></h2>
        <p class="text-gray-400">
          {{ $t('features.section_subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Feature Tab 1: Compare -->
        <div class="glass-panel p-6 rounded-2xl border-white/5 hover:border-blue-500/30 transition-all group bg-gradient-to-br from-white/[0.02] to-transparent">
          <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <BoxSelect class="w-5 h-5 text-blue-400" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ $t('features.tab_compare_title') }}</h3>
          <p class="text-gray-400 text-xs leading-relaxed">
            {{ $t('features.tab_compare_desc') }}
          </p>
        </div>

        <!-- Feature Tab 2: Explore -->
        <div class="glass-panel p-6 rounded-2xl border-white/5 hover:border-indigo-500/30 transition-all group bg-gradient-to-br from-white/[0.02] to-transparent">
          <div class="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <SearchCode class="w-5 h-5 text-indigo-400" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ $t('features.tab_explore_title') }}</h3>
          <p class="text-gray-400 text-xs leading-relaxed">
            {{ $t('features.tab_explore_desc') }}
          </p>
        </div>

        <!-- Feature Tab 3: Monitor -->
        <div class="glass-panel p-6 rounded-2xl border-white/5 hover:border-green-500/30 transition-all group bg-gradient-to-br from-white/[0.02] to-transparent">
          <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <Activity class="w-5 h-5 text-green-400" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ $t('features.tab_monitor_title') }}</h3>
          <p class="text-gray-400 text-xs leading-relaxed">
            {{ $t('features.tab_monitor_desc') }}
          </p>
        </div>

        <!-- Feature Tab 4: Settings -->
        <div class="glass-panel p-6 rounded-2xl border-white/5 hover:border-purple-500/30 transition-all group bg-gradient-to-br from-white/[0.02] to-transparent">
          <div class="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <ShieldCheck class="w-5 h-5 text-purple-400" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ $t('features.tab_settings_title') }}</h3>
          <p class="text-gray-400 text-xs leading-relaxed">
            {{ $t('features.tab_settings_desc') }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Feature 1: Export DDL -->
        <div class="glass-panel p-8 rounded-3xl hover:border-blue-500/20 transition-all group bg-white/[0.01]">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
               <Download class="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature_export_title') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ $t('features.feature_export_desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 2: Offline Diff -->
        <div class="glass-panel p-8 rounded-3xl hover:border-indigo-500/20 transition-all group bg-white/[0.01]">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Zap class="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature_offline_title') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ $t('features.feature_offline_desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 3: Auto-Generate -->
        <div class="glass-panel p-8 rounded-3xl hover:border-green-500/20 transition-all group bg-white/[0.01]">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Code2 class="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature_migration_title') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ $t('features.feature_migration_desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 4: CI/CD Pipeline -->
        <div class="glass-panel p-8 rounded-3xl hover:border-purple-500/20 transition-all group bg-white/[0.01]">
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Terminal class="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('features.feature_pipeline_title') }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ $t('features.feature_pipeline_desc') }}
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Feature Map Ecosystem -->
      <div class="mt-20">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h3 class="text-2xl font-bold tracking-tight mb-2">The Andb Ecosystem</h3>
          <p class="text-gray-400 text-sm">
            A comprehensive overview of the architecture and features.
          </p>
        </div>
        <div class="glass-panel p-8 md:p-12 rounded-3xl border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent overflow-x-auto custom-scrollbar flex justify-center">
          <div class="mermaid text-center">
flowchart LR
    Root(("The Andb"))

    %% Categories
    Desktop["Desktop App"]
    Core["Core Engine"]
    CLI["CLI"]
    AI["AI Ecosystem"]
    Web["Cloud & Web"]

    %% Connect Root to Categories
    Root --- Desktop
    Root --- Core
    Root --- CLI
    Root --- AI
    Root --- Web

    %% Desktop App Features
    Desktop --- SComp["Schema Compare"]
      SComp --- SComp1["Contextual Tree"]
      SComp --- SComp2["Instant Code Compare"]
      SComp --- SComp3["Interactive ERD"]
    Desktop --- SIntel["Schema Intelligence"]
      SIntel --- SIntel1["Go To Definition"]
      SIntel --- SIntel2["AST Parsing"]
      SIntel --- SIntel3["Syntax Highlighting"]
    Desktop --- DepTools["Deployment Tools"]
      DepTools --- DepTools1["Pre-flight Checks"]
      DepTools --- DepTools2["1-Click Migration"]
      DepTools --- DepTools3["History & Logs"]

    %% Core Engine Features
    Core --- Orch["Orchestration"]
      Orch --- Orch1["Multi-env Routing"]
      Orch --- Orch2["Locking Strategies"]
    Core --- AST["AST Analysis"]
      AST --- AST1["Semantic Diffing"]
      AST --- AST2["Impact Scoring"]
      AST --- AST3["Safety Classification"]
    Core --- Trans["Transactions"]
      Trans --- Trans1["Async Execution"]
      Trans --- Trans2["Safe Rollback"]

    %% CLI Features
    CLI --- Head["Headless Orch"]
      Head --- Head1["Cross-env Compare"]
      Head --- Head2["Automations"]
    CLI --- Config["Configuration"]
      Config --- Config1["Env Interpolation"]
      Config --- Config2["andb.yaml Logic"]

    %% AI Ecosystem
    AI --- MCP["MCP Server"]
      MCP --- MCP1["Risk Assessment"]
      MCP --- MCP2["Context Passing"]
    AI --- Veo["Veo Video"]
      Veo --- Veo1["I2V Architecture"]
      Veo --- Veo2["V2V Marketing"]

    %% Cloud & Web
    Web --- Web1["Interactive Playground"]
    Web --- Web2["Analytics Dashboards"]
    Web --- Web3["Role-Based Access"]

    %% Styling
    classDef category fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#f8fafc;
    classDef feature fill:#0f172a,stroke:#475569,stroke-width:1px,color:#e2e8f0;
    
    class Desktop,Core,CLI,AI,Web category;
    class SComp,SIntel,DepTools,Orch,AST,Trans,Head,Config,MCP,Veo,Web1,Web2,Web3,SComp1,SComp2,SComp3,SIntel1,SIntel2,SIntel3,DepTools1,DepTools2,DepTools3,Orch1,Orch2,AST1,AST2,AST3,Trans1,Trans2,Head1,Head2,Config1,Config2,MCP1,MCP2,Veo1,Veo2 feature;
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import mermaid from 'mermaid';
import { 
  BoxSelect, 
  SearchCode, 
  Activity, 
  ShieldCheck, 
  Download, 
  Zap, 
  Code2, 
  Terminal 
} from 'lucide-vue-next';

onMounted(() => {
  mermaid.initialize({ 
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'inherit'
  });
  mermaid.run();
});
</script>
