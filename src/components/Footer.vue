<template>
  <footer class="py-12 border-t border-white/5 bg-andb-panel">
    <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="col-span-2 md:col-span-1">
        <a href="https://theandb.xyz" class="hover:opacity-80 transition-opacity">
          <h3 class="font-bold text-lg mb-4 text-white">The Andb</h3>
        </a>
        <p class="text-gray-400 text-sm">
          Intelligent Database Orchestrator. <br />
          Built by <a href="https://github.com/ph4n4n" class="text-blue-400 hover:underline">@PhanAn</a>.
        </p>
      </div>

      <div>
        <h4 class="font-semibold text-gray-300 mb-4 text-sm uppercase tracking-wider">Product</h4>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="#" class="hover:text-blue-400 transition-colors">Download</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">Changelog</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">Features</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-gray-300 mb-4 text-sm uppercase tracking-wider">Resources</h4>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="#" class="hover:text-blue-400 transition-colors">Documentation</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">GitHub Issues</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">Roadmap</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-gray-300 mb-4 text-sm uppercase tracking-wider">Legal</h4>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="#" class="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} The Andb. Made with ❤️ and lots of coffee.
    </div>
  </footer>
</template>
