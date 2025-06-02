import { defineConfig } from "@opennextjs/cloudflare";

export default defineConfig({
  // required
  output: "./.open-next",

  // optional: static assets caching & behavior
  static: {
    maxAge: 3600,
  },
});
