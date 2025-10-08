# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LoveMap is a travel recorder and memory keeper application for couples, built with React, TypeScript, Redux, and Leaflet maps. The application allows users to track their travels, view photo galleries, read blog posts, and visualize their journey on an interactive map with GPS coordinates from images.

## Build Commands

- **Development**: `npm run dev` or `npm start` - Starts webpack-dev-server in development mode with hot reloading
- **Production Build**: `npm run build` - Creates production bundle using webpack
- **Linting**: Configured via `tslint` with pre-commit hooks using husky and lint-staged (runs automatically on commit)

Note: The project expects React and ReactDOM to be available as global variables (externalized in webpack config) rather than bundled.

## Architecture

### Application Structure

The app follows a page-based architecture with Redux for state management:

**Entry Point**: `src/index.tsx` renders the app into `#page` element with Redux Provider wrapper.

**Main App**: `src/app.tsx` sets up routing (HashRouter) with the following pages:
- `/` - Home page
- `/gallery` - Photo gallery
- `/footprints` - Interactive map showing GPS coordinates from photos
- `/blog` - Blog posts
- `/error` - Error page

### State Management

Redux store configuration in `src/global/configureStore.ts`:
- Uses `redux-thunk` middleware for async actions
- Supports Redux DevTools extension
- Root reducer combines:
  - `global`: Global app state (`src/global/reducers.ts`)
  - `homePage`: Home page state (`src/pages/Home/flow/homeReducers.ts`)
  - Additional page reducers as needed

### Page Architecture Pattern

Each page follows a consistent structure:
```
src/pages/{PageName}/
  ├── index.tsx           # Main page component
  ├── types.d.ts          # TypeScript type definitions
  ├── flow/
  │   ├── actions.ts      # Redux actions
  │   ├── constants.ts    # Action type constants
  │   └── {page}Reducers.ts  # Redux reducers
  └── components/         # Page-specific components
```

### Module Resolution

TypeScript is configured with path aliasing:
- `@/*` maps to `src/*` (configured in both `tsconfig.json` and `webpack.config.js`)
- Base URL is set to `src/`

### Map Integration

The FootPrints page uses Leaflet with custom markers:
- Leaflet Awesome Markers for custom icons
- Bounce Marker plugin for animated markers
- Fetches GPS data from backend API at `http://localhost:3000/decorate/getGpsFromAllImages`
- Mapbox tiles (requires access token configured in code)

### Styling

- CSS Modules enabled in webpack (localIdentName: `[local]___[hash:base64:5]`)
- Heavy use of external CSS from wedding theme template
- Images <20KB are inlined as data URLs via url-loader

## Backend API Expectations

The application expects a backend server running on `http://localhost:3000` with endpoints like:
- `GET /decorate/getGpsFromAllImages` - Returns array of GPS coordinates from image metadata
