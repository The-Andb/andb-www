import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // allows vue inside markdown
    }),
    Markdown({
      wrapperClasses: 'prose prose-zinc dark:prose-invert max-w-none',
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }) as any,
  ],
})
