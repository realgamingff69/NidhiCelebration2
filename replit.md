# Happy Birthday Nidhi - Digital Birthday Card

## Overview

This is a personalized digital birthday card application built for Nidhi. The application creates an interactive, animated birthday card experience with photo galleries, background music, and special effects. It's designed as a full-stack web application with a React frontend and Express backend, though currently focused primarily on the frontend experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Animations**: Framer Motion for smooth card animations and effects
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session storage (connect-pg-simple)
- **Development**: Hot module replacement via Vite middleware

### Build System
- **Development**: Vite dev server with Express backend
- **Production**: Static build output served by Express
- **Bundling**: esbuild for server bundling, Vite for client bundling

## Key Components

### 1. Interactive Birthday Card
- **CardFront**: Initial card view with Nidhi's photo and birthday message
- **CardBack**: Reveals photo gallery, personal message, and interactive elements
- **Animation System**: Smooth card flip animation using CSS transforms and Framer Motion

### 2. Photo Gallery
- **Auto-advancing slideshow** with manual navigation controls
- **Responsive design** adapting to mobile and desktop
- **Image optimization** with proper aspect ratios and loading states

### 3. Audio Integration
- **Background music** using custom useAudio hook
- **User-controlled playback** with visual indicators
- **Audio autoplay handling** for modern browser compatibility

### 4. Special Effects System
- **Sparkles animation** triggered on card opening
- **Confetti effects** for celebration moments
- **Starry background** with CSS animations
- **Responsive particle systems**

### 5. Database Schema
```typescript
// User model for future authentication features
users: {
  id: serial primary key
  username: text unique not null
  password: text not null
}
```

## Data Flow

1. **Initial Load**: Client loads static assets and card front view
2. **User Interaction**: Click triggers card opening animation
3. **Audio Activation**: User gesture enables background music playback
4. **Gallery Display**: Photo slideshow begins with auto-advance functionality
5. **Effects Rendering**: Sparkles and particle effects activate on card open
6. **Responsive Updates**: Layout adapts based on viewport size

## External Dependencies

### Production Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **Database**: Drizzle ORM, @neondatabase/serverless, PostgreSQL
- **Utilities**: date-fns, clsx, class-variance-authority
- **Animation**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form, Hookform Resolvers
- **Development**: Vite, esbuild, PostCSS

### Font Integration
- **Google Fonts**: Dancing Script, Montserrat, Playfair Display
- **Custom Typography**: Optimized for birthday card aesthetics

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20, PostgreSQL 16, Web hosting
- **Auto-scaling**: Enabled for production deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Build Process**: npm run build → npm run start

### Development Workflow
```bash
npm run dev     # Development with hot reload
npm run build   # Production build
npm run start   # Production server
npm run check   # TypeScript validation
npm run db:push # Database schema updates
```

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment specification (development/production)

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Technical Notes

- The application uses a memory-based storage implementation for development, with PostgreSQL schema ready for production use
- Photo assets are served statically from the public directory
- The card animation system uses CSS 3D transforms for smooth performance
- Audio playback requires user interaction due to browser autoplay policies
- The design is mobile-first with responsive breakpoints for optimal viewing on all devices
- All animations and effects are optimized for performance across different device capabilities