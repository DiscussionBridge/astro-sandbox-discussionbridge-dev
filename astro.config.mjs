// @ts-check
import { defineConfig } from "astro/config";
import discussionBridge from "astro-discussion-bridge";

export default defineConfig({
  site: "https://astro.sandbox.discussionbridge.dev",
  integrations: [
    discussionBridge({
      discourseUrl: "https://sandbox-forum.discussionbridge.dev",
      siteUrl: "https://astro.sandbox.discussionbridge.dev",
      comments: {
        enabled: true,
        display: "fullInteractive",
        credit: { enabled: true },
      },
      publishOnBuild: {
        enabled: true,
      },
    }),
  ],
});