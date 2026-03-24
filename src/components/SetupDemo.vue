<script setup lang="ts">
import { ref, computed } from 'vue'
import { ShieldCheck, Lock, CheckCircle2, AlertCircle, Copy, Download } from 'lucide-vue-next'

const currentStep = ref(1)
const setupMode = ref<'auto' | 'manual'>('auto')
const isExecuting = ref(false)
const executionDone = ref(false)
const isVerifying = ref(false)
const verificationDone = ref(false)

const permissions = ref({
  read: true,
  writeAlter: false,
  writeView: false,
  writeRoutine: false
})

const adminCredentials = ref({
  host: 'demo.mysql.local',
  port: 3306,
  database: 'production_db',
  username: 'root',
  password: ''
})

const executionLogs = ref<string[]>([])

const verificationResults = ref({
  baseConn: 'pending' as 'pending' | 'pass' | 'fail',
  schemaRead: 'pending' as 'pending' | 'pass' | 'fail',
  sandboxTest: 'pending' as 'pending' | 'pass' | 'fail'
})

const activeLevel = computed(() => {
  if (!permissions.value.writeAlter && !permissions.value.writeView && !permissions.value.writeRoutine) return 1
  if (permissions.value.writeAlter || permissions.value.writeView || permissions.value.writeRoutine) return 2
  return 3
})

const levelName = computed(() => {
  if (activeLevel.value === 1) return 'READ-ONLY (Safest)'
  if (activeLevel.value === 2) return 'ALTER SUPPORT'
  return 'FULL DDL (Power Mode)'
})

const levelColor = computed(() => {
  if (activeLevel.value === 1) return 'text-green-600'
  if (activeLevel.value === 2) return 'text-yellow-600'
  return 'text-orange-600'
})

const sqlScript = computed(() => {
  let sql = `-- TheAndb Restricted User Setup Script
-- Generated: ${new Date().toISOString()}
-- Safety Level: ${levelName.value}

-- Step 1: Create User
CREATE USER IF NOT EXISTS 'the_andb'@'%' IDENTIFIED BY 'ComplexPassword_123';

-- Step 2: Grant Base Permissions
GRANT SELECT ON ${adminCredentials.value.database}.* TO 'the_andb'@'%';
GRANT SHOW VIEW ON ${adminCredentials.value.database}.* TO 'the_andb'@'%';
`

  if (permissions.value.writeAlter) {
    sql += `GRANT ALTER ON ${adminCredentials.value.database}.* TO 'the_andb'@'%';\n`
  }
  if (permissions.value.writeView) {
    sql += `GRANT CREATE VIEW ON ${adminCredentials.value.database}.* TO 'the_andb'@'%';\n`
  }
  if (permissions.value.writeRoutine) {
    sql += `GRANT CREATE ROUTINE, ALTER ROUTINE ON ${adminCredentials.value.database}.* TO 'the_andb'@'%';\n`
  }

  sql += `\n-- Step 3: Apply Changes\nFLUSH PRIVILEGES;\n`
  return sql
})

const executeAuto = async () => {
  isExecuting.value = true
  executionLogs.value = []
  
  const addLog = (msg: string) => {
    executionLogs.value.push(msg)
  }

  try {
    addLog('🔐 Connecting to demo.mysql.local as root...')
    await new Promise(r => setTimeout(r, 1200))
    addLog('✅ Admin connection established.')
    
    addLog('👤 Initializing restricted user: the_andb...')
    await new Promise(r => setTimeout(r, 1000))
    addLog('✅ User created successfully.')
    
    addLog(`🔧 Applying ${levelName.value} permission profile...`)
    await new Promise(r => setTimeout(r, 1500))
    addLog('✅ Privileges updated successfully.')
    
    addLog('🗑️  Discarding Admin credentials from memory...')
    await new Promise(r => setTimeout(r, 800))
    addLog('✅ DONE. System is ready.')
    
    executionDone.value = true
  } finally {
    isExecuting.value = false
  }
}

const verify = async () => {
  isVerifying.value = true
  verificationDone.value = false
  verificationResults.value = {
    baseConn: 'pending',
    schemaRead: 'pending',
    sandboxTest: 'pending'
  }
  
  try {
    await new Promise(r => setTimeout(r, 1000))
    verificationResults.value.baseConn = 'pass'
    
    await new Promise(r => setTimeout(r, 800))
    verificationResults.value.schemaRead = 'pass'
    
    if (permissions.value.writeAlter || permissions.value.writeView || permissions.value.writeRoutine) {
      await new Promise(r => setTimeout(r, 1200))
      verificationResults.value.sandboxTest = 'pass'
    } else {
      verificationResults.value.sandboxTest = 'pass'
    }
    
    verificationDone.value = true
  } finally {
    isVerifying.value = false
  }
}

const nextStep = () => {
  if (currentStep.value < 4) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const reset = () => {
  currentStep.value = 1
  setupMode.value = 'auto'
  isExecuting.value = false
  executionDone.value = false
  isVerifying.value = false
  verificationDone.value = false
  permissions.value = {
    read: true,
    writeAlter: false,
    writeView: false,
    writeRoutine: false
  }
  executionLogs.value = []
  verificationResults.value = {
    baseConn: 'pending',
    schemaRead: 'pending',
    sandboxTest: 'pending'
  }
}

const copySQL = () => {
  navigator.clipboard.writeText(sqlScript.value)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-6">
          <ShieldCheck class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <span class="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Secure Configuration Assistant</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Interactive Demo
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          See how TheAndb provisions restricted database credentials locally without exposing root access.
        </p>
      </div>

      <!-- Main Card -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <!-- Progress Steps -->
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
          <div class="flex justify-between items-center">
            <div v-for="step in 4" :key="step" class="flex items-center">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all"
                :class="currentStep >= step ? 'bg-white text-indigo-600' : 'bg-indigo-500 text-white opacity-50'"
              >
                {{ step }}
              </div>
              <div v-if="step < 4" class="w-16 h-1 mx-2" :class="currentStep > step ? 'bg-white' : 'bg-indigo-500 opacity-50'"></div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <p class="text-white text-sm font-bold">
              {{ currentStep === 1 ? 'Admin Credentials' : currentStep === 2 ? 'Mode & Permissions' : currentStep === 3 ? 'Execution' : 'Verification' }}
            </p>
          </div>
        </div>

        <!-- Content -->
        <div class="p-8">
          <!-- Step 1: Admin Credentials -->
          <div v-if="currentStep === 1" class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <div class="flex items-start gap-3">
                <Lock class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <p class="text-sm font-bold text-blue-900 dark:text-blue-100">Absolute Peace of Mind</p>
                  <p class="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    Admin privileges are used only once to prepare the environment. Your password is processed in volatile memory and discarded immediately after setup.
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">HOST</label>
                <input v-model="adminCredentials.host" type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">PORT</label>
                <input v-model.number="adminCredentials.port" type="number" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">DATABASE</label>
                <input v-model="adminCredentials.database" type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">USERNAME</label>
                <input v-model="adminCredentials.username" type="text" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
            </div>
          </div>

          <!-- Step 2: Mode & Permissions -->
          <div v-if="currentStep === 2" class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <!-- Mode Selection -->
            <div>
              <h3 class="text-lg font-black text-gray-900 dark:text-white mb-4">Setup Mode</h3>
              <div class="grid grid-cols-2 gap-4">
                <button 
                  @click="setupMode = 'auto'"
                  class="p-4 rounded-xl border-2 transition-all text-left"
                  :class="setupMode === 'auto' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-200 dark:border-gray-700'"
                >
                  <p class="font-bold text-sm text-gray-900 dark:text-white">Automatic (Recommended)</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">We'll handle everything with precision</p>
                </button>
                <button 
                  @click="setupMode = 'manual'"
                  class="p-4 rounded-xl border-2 transition-all text-left"
                  :class="setupMode === 'manual' ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-200 dark:border-gray-700'"
                >
                  <p class="font-bold text-sm text-gray-900 dark:text-white">Manual (DBA Mode)</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">You maintain full control</p>
                </button>
              </div>
            </div>

            <!-- Permissions -->
            <div>
              <h3 class="text-lg font-black text-gray-900 dark:text-white mb-4">How can TheAndb assist you?</h3>
              <div class="space-y-3">
                <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-sm text-gray-900 dark:text-white">READ-ONLY MODE (Required)</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Understand your database structure without modifying data</p>
                    </div>
                    <input type="checkbox" v-model="permissions.read" disabled class="w-5 h-5" />
                  </div>
                </div>
                <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-sm text-gray-900 dark:text-white">SCHEMA CHANGE SUPPORT</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Allow table modifications for synchronization</p>
                    </div>
                    <input type="checkbox" v-model="permissions.writeAlter" class="w-5 h-5" />
                  </div>
                </div>
                <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-sm text-gray-900 dark:text-white">VIEW MANAGEMENT</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Update view definitions across environments</p>
                    </div>
                    <input type="checkbox" v-model="permissions.writeView" class="w-5 h-5" />
                  </div>
                </div>
                <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-bold text-sm text-gray-900 dark:text-white">ROUTINE MANAGEMENT</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Update stored procedures and functions</p>
                    </div>
                    <input type="checkbox" v-model="permissions.writeRoutine" class="w-5 h-5" />
                  </div>
                </div>
              </div>

              <!-- Safety Meter -->
              <div class="mt-6 p-4 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs font-bold text-gray-700 dark:text-gray-300">SAFETY LEVEL</p>
                    <p :class="levelColor" class="text-lg font-black mt-1">{{ levelName }}</p>
                  </div>
                  <ShieldCheck :class="levelColor" class="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Execution -->
          <div v-if="currentStep === 3" class="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <!-- Auto Mode -->
            <div v-if="setupMode === 'auto'">
              <h3 class="text-lg font-black text-gray-900 dark:text-white mb-4">Automatic Setup</h3>
              
              <div v-if="!executionDone" class="space-y-4">
                <button 
                  @click="executeAuto" 
                  :disabled="isExecuting"
                  class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {{ isExecuting ? 'Setting up...' : 'Start Secure Setup' }}
                </button>

                <div v-if="executionLogs.length > 0" class="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div v-for="(log, i) in executionLogs" :key="i" class="text-green-400 mb-1">
                    {{ log }}
                  </div>
                </div>
              </div>

              <div v-else class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                <CheckCircle2 class="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <p class="font-bold text-green-900 dark:text-green-100">Setup completed successfully!</p>
                <p class="text-sm text-green-700 dark:text-green-300 mt-2">The restricted user is ready to use</p>
              </div>
            </div>

            <!-- Manual Mode -->
            <div v-else>
              <h3 class="text-lg font-black text-gray-900 dark:text-white mb-4">Manual Setup</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                We respect your workflow. Review the script below before running it on your server.
              </p>

              <div class="bg-gray-900 rounded-xl p-4 font-mono text-xs text-green-400 overflow-x-auto">
                <pre>{{ sqlScript }}</pre>
              </div>

              <div class="flex gap-3 mt-4">
                <button @click="copySQL" class="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Copy class="w-4 h-4" />
                  Copy SQL
                </button>
                <button class="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Download class="w-4 h-4" />
                  Download .sql
                </button>
              </div>
            </div>
          </div>

          <!-- Step 4: Verification -->
          <div v-if="currentStep === 4" class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div class="text-center">
              <h4 class="text-lg font-black text-gray-900 dark:text-white">Verify & Complete</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {{ isVerifying ? 'Performing safety checks...' : 'Click below to verify permissions' }}
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <span class="text-sm font-bold text-gray-900 dark:text-white">Base Connection</span>
                <span v-if="verificationResults.baseConn === 'pass'" class="text-green-600 dark:text-green-400 font-bold">VALIDATED</span>
                <span v-else class="text-gray-400">PENDING</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <span class="text-sm font-bold text-gray-900 dark:text-white">Schema Permissions</span>
                <span v-if="verificationResults.schemaRead === 'pass'" class="text-green-600 dark:text-green-400 font-bold">VALIDATED</span>
                <span v-else class="text-gray-400">PENDING</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <span class="text-sm font-bold text-gray-900 dark:text-white">Safety Proof (Sandbox Write)</span>
                <span v-if="verificationResults.sandboxTest === 'pass'" class="text-green-600 dark:text-green-400 font-bold">VALIDATED</span>
                <span v-else class="text-gray-400">PENDING</span>
              </div>
            </div>

            <button 
              @click="verify" 
              :disabled="isVerifying || verificationDone"
              class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {{ isVerifying ? 'Verifying...' : verificationDone ? 'Verification Complete' : 'Verify & Complete' }}
            </button>

            <div v-if="verificationDone" class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <CheckCircle2 class="w-16 h-16 mx-auto mb-4" />
              <h4 class="text-lg font-black tracking-tight">Success! Your environment is ready.</h4>
              <p class="text-xs font-medium text-indigo-100 opacity-90 mt-2">
                The the_andb user has been configured with strict security standards. You can start exploring now.
              </p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="bg-gray-50 dark:bg-gray-900/50 px-8 py-6 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
          <button 
            @click="reset"
            class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold transition-colors"
          >
            Reset Demo
          </button>
          <div class="flex gap-3">
            <button 
              v-if="currentStep > 1"
              @click="prevStep"
              class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <button 
              v-if="currentStep < 4"
              @click="nextStep"
              class="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <!-- Info Banner -->
      <div class="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
        <div class="flex items-start gap-3">
          <AlertCircle class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <p class="text-sm font-bold text-yellow-900 dark:text-yellow-100">Interactive Demo Only</p>
            <p class="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
              This is a simulated experience. Download TheAndb Desktop to use this feature with your actual databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom-4 {
  from { transform: translateY(1rem); }
  to { transform: translateY(0); }
}

@keyframes slide-in-from-right-4 {
  from { transform: translateX(1rem); }
  to { transform: translateX(0); }
}

.animate-in {
  animation-fill-mode: both;
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-4 {
  animation-name: slide-in-from-bottom-4;
}

.slide-in-from-right-4 {
  animation-name: slide-in-from-right-4;
}

.duration-500 {
  animation-duration: 500ms;
}
</style>
