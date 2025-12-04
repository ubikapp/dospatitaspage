// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercel from "@astrojs/vercel";   // 👈 OJO: sin /serverless

export default defineConfig({
  adapter: vercel(),                    // 👈 El adapter nuevo de Vercel
  integrations: [
    icon()
  ],
});
