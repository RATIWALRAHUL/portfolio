# Geeta — UI/UX Designer Portfolio

A modern, high-craft portfolio website for **Geeta**, a UI/UX Designer based in India. Built with Next.js (App Router), TypeScript, CSS Modules, and Framer Motion.

## 🚀 Features

- **Hero & Micro-animations**: Staggered letter-by-letter headline entrance and dynamic floating portrait backdrop.
- **Specialties Grid**: Asymmetrical 3-column bento layout with rotating accent tokens (`orange`, `teal`, `lavender`, `coral`) and a 2-column bio card.
- **Milestone Stats**: Real-time exponential count-up numbers triggered on scroll into view with interactive dashboard mockup.
- **Recent Work**: Asymmetric bento grid pulling data statically from `src/lib/data.ts`.
- **Project Case Studies**: Dedicated `/projects/[slug]` route with a `52vh` full-bleed banner, sticky overview sidebar, long-form typography, and next project navigator.
- **About Page**: Hero intro, design philosophy, animated stat grid, 3-stage agile workflow card, and interactive tool stack strip.
- **Contact Page**: Split-screen with underline-style validated form, client-side submission state, and oversized bleeding outlined wordmark.
- **Mobile Navigation**: Full-screen slide-in overlay menu with body scroll locking and keyboard navigation.
- **Theme Support**: Smooth spring sliding toggle between Light and Dark mode with persistence via `next-themes`.
- **Zero Backend Required**: Fully static HTML export ready for instant deployment to any CDN or static host.

---

## 🛠️ Getting Started

First, install dependencies and run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 📦 Static Build & Export

To build the static site for production:

```bash
npm run build
# or
npm run export
```

Next.js will statically generate all HTML, CSS, JavaScript, and SVG assets into the **`out/`** directory.

---

## 🌐 Deployment

Because `next.config.ts` is configured with `output: "export"` and `images: { unoptimized: true }`, you can deploy the generated **`out/`** directory to any static hosting service with zero runtime server dependencies.

### 1. Vercel (Recommended)
- Connect your GitHub / GitLab repository to Vercel.
- Vercel automatically detects Next.js and builds the project with zero configuration required.

### 2. Netlify
- Connect your Git repository in Netlify.
- Set **Build command**: `npm run build`
- Set **Publish directory**: `out`

### 3. GitHub Pages
- Build the project using `npm run build`.
- Deploy the `out/` folder using the `gh-pages` branch or a GitHub Actions workflow.
- **Note on Subpaths**: If your repository is hosted at a subpath (e.g. `username.github.io/repo-name`), configure `basePath` in `next.config.ts`:
  ```ts
  const nextConfig: NextConfig = {
    output: "export",
    basePath: "/repo-name",
    images: { unoptimized: true },
  };
  ```

---

## 📄 License

MIT © [Geeta](https://geeta.com)
