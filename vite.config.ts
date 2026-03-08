export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  base: '/health-survey/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
