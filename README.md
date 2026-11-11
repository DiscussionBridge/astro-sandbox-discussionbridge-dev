# DiscussionBridge Astro Sandbox

Source for the [sandbox](https://astro.sandbox.discussionbridge.dev/). Use this environment for native Astro publishing and discussion tests.

The source manifest pins the adapter at `v0.2.0-alpha.21`. V4 sandbox builds can be
deployed separately. Verify the installed adapter for the build you test.

## Local commands

```sh
npm ci
npm run dev
npm run build
npm run deploy:dry-run
```

Cloudflare Workers serves the generated site. Keep connection secrets in
protected configuration. Record the package and commit used by a test build.

[Sandbox chooser](https://sandbox.discussionbridge.dev/) · [Astro adapter](https://github.com/DiscussionBridge/astro-discussion-bridge)
