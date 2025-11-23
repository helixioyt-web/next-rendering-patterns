# Next.js 16 Web Rendering Patterns

- **Client-Side Rendering:** fully renders JS bundle on the user's browser, needs `'use client'` on top. Otherwise is a server component by default.
- **Static Site Generation:** the default, fetch and return static files populated at build time.
- **Server-Side Rendering:** must disable cache on fetch options or force dynamic. Renders at request time.
- **Incremental Static Regeneration:** when exporting `const revalidate` or using `next.revalidate` on fetch options.

### Demo: https://thiagoow-web-rendering-patterns.vercel.app

## 🚀 Setup guide

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```
