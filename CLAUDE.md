# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing/landing page website for "Math Trainer", an iOS math practice app. The site is built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Run production build
pnpm lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router (all pages in `app/` directory)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Package Manager**: pnpm

### Key Files

- `app/layout.tsx` - Root layout with nav, footer, Google Analytics, and SEO metadata
- `app/page.tsx` - Homepage with feature showcase and app screenshots
- `app/privacy/page.tsx` - Privacy policy page
- `app/sitemap.ts` - Dynamic sitemap generation
- `app/robots.ts` - Robots.txt configuration
- `next.config.ts` - Redirects non-www to www subdomain

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`).
