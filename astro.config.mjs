// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),          // 👈 Vercel se encarga del modo (server/edge)
  integrations: [
    icon()
  ],
});
