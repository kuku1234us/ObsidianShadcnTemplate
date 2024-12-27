# Obsidian React Tailwind Plugin Starter

A starter template for creating an [Obsidian](https://obsidian.md/) plugin with [ReactJS](https://reactjs.org/), Typescript, and [TailwindCSS](https://tailwindcss.com/). This template includes [shadcn/ui](https://ui.shadcn.com/) components and styling utilities.

## Features

This project comes preconfigured with:
- [Typescript](https://www.typescriptlang.org/) for type safety
- [React 18](https://reactjs.org/) for UI components
- [TailwindCSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
- [Rollup.js](https://www.rollupjs.org) for bundling
- [Babel](https://babeljs.io/) for transpilation
- Path aliases with `@/*` for cleaner imports

## Project Structure

## Getting Started

Click "use this template" to create your own fork of this repo. Make sure to reference [the official sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin) for information about how to get started with the Obsidian API and how to submit your plugin to the Community Plugin Gallery.

```bash
# for local development
npm install
npm run dev

# for a production bundle
npm install
npm run build
```

### Styling
- TailwindCSS is configured with dark mode support using the `class` strategy
- Global styles are in `src/main.css`
- shadcn/ui components are pre-styled and customizable

### Build Process
The build process uses Rollup with the following configuration:
- Babel for TypeScript and React transpilation
- PostCSS for TailwindCSS processing
- CSS extraction to separate `styles.css` file
- Development builds include source maps
- Production builds include minification

### Obsidian Integration
Make sure to reference [the official sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin) for:
- Obsidian API usage
- Plugin submission guidelines
- Community plugin gallery requirements