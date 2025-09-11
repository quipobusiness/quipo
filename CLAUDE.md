# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for Quibo, a professional services website. The project uses Tailwind CSS for styling and is configured for deployment on both Vercel and GitHub Pages.

## Essential Commands

### Development
```bash
pnpm dev          # Start development server on http://localhost:5173
pnpm preview      # Preview production build locally
```

### Build & Deploy
```bash
pnpm build             # Build for production (default for Vercel)
pnpm build:vercel      # Build specifically for Vercel deployment
pnpm build:gh-pages    # Build for GitHub Pages with /quibo/ base path
pnpm deploy            # Deploy to GitHub Pages (runs predeploy first)
```

### Code Quality
```bash
pnpm lint          # Run ESLint with TypeScript checking
tsc                # Run TypeScript compiler for type checking
```

## Architecture & Structure

### Core Technologies
- **React 18** with TypeScript for component architecture
- **Vite** as build tool with hot module replacement
- **Tailwind CSS** with custom Quibo design system tokens
- **pnpm** as package manager

### Key Directories
- `/src/components/` - React components organized by feature
- `/src/content/` - Content configuration and data
- `/src/types/` - TypeScript type definitions
- `/src/utils/` - Utility functions and helpers
- `/public/` - Static assets served directly

### Path Aliases
- `@/*` maps to `src/*` for cleaner imports

### Design System
Custom Tailwind configuration includes:
- **Font families**: Satoshi (sans), Shipori Mincho (serif)
- **Custom font sizes**: quibo-xl through quibo-xs
- **Brand colors**: quibo-text, quibo-border, quibo-bg, quibo-green variants
- **Custom breakpoints**: Extended to include xl (1500px) and 2xl (1800px)

### Deployment Configuration
- **Vercel**: Uses `vercel.json` with `pnpm build:vercel` command
- **GitHub Pages**: Deploys to `/quibo/` path with `pnpm deploy`
- **Base Path Logic**: Handled in `vite.config.ts` based on build mode

### Component Architecture
The application follows a single-page landing structure:
1. `App.tsx` loads content and renders `LandingPage`
2. `LandingPage` orchestrates all major sections
3. Sections include: Navigation, Hero, Solutions, Services, Clients, Contact
4. Components use TypeScript interfaces for props and content typing