import { defineConfig } from 'astro/config';
import discussionBridge from 'astro-discussion-bridge';
import { bridgeOptions } from './discussionbridge.server.mjs';

export default defineConfig({
  site: 'https://astro.sandbox.discussionbridge.dev',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    discussionBridge(bridgeOptions),
  ],
});
