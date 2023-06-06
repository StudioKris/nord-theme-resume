import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import me from "./src/assets/me.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: me.me.firstname+" "+me.me.lastname,
        },
      },
    }),
  ],
  base: "./",
});
