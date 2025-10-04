# Portfolio Web Application

## Overview

This is a personal portfolio website for Sher Ali Khattak, a Senior Flutter Developer. The application is built as a single-page application (SPA) showcasing professional experience, skills, projects, education, and contact information. The site features a modern, responsive design with smooth scrolling navigation and a dark theme optimized for developer portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (instead of React Router)

**UI Framework & Styling**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom theming
- **CSS Variables** for dynamic theming support (dark mode optimized)
- **Custom fonts**: Inter (sans-serif) and JetBrains Mono (monospace) via Google Fonts

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local component state using React hooks

**Design Patterns**
- Component-based architecture with separation of concerns
- Page components in `/client/src/pages/`
- Reusable UI components in `/client/src/components/`
- Shared utilities in `/client/src/lib/`
- Custom hooks in `/client/src/hooks/`
- Static data storage in `/client/src/data/`

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the Node.js backend
- Middleware for JSON parsing, URL encoding, and request/response logging
- Custom logging middleware for API request tracking

**Development Setup**
- **Vite middleware mode** for seamless frontend integration during development
- **tsx** for running TypeScript in development
- **esbuild** for production builds with ESM output format

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as the default data store
- Abstract storage interface (`IStorage`) designed for easy swap to database implementations
- Basic user CRUD operations defined but not actively used by current portfolio features

**Routing Strategy**
- API routes prefixed with `/api` (defined but minimal implementation in current version)
- Static file serving for production builds
- Vite dev server proxy for development

### Data Storage

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL with Neon serverless driver
- Schema defined in `/shared/schema.ts` with Zod validation
- Users table with UUID primary keys and unique username constraints
- Database migrations output to `/migrations` directory
- **Note**: Database features are configured but not actively used in the current portfolio implementation

**Data Management**
- Portfolio data stored as static TypeScript objects in `/client/src/data/portfolio-data.ts`
- No authentication or session management in current implementation
- Type-safe data structures using TypeScript interfaces

### External Dependencies

**Frontend Libraries**
- **@radix-ui/react-*** - Complete suite of accessible UI primitives (accordion, dialog, dropdown, toast, etc.)
- **@tanstack/react-query** - Server state management
- **@hookform/resolvers** - Form validation integration
- **lucide-react** - Icon library
- **wouter** - Client-side routing
- **date-fns** - Date manipulation
- **embla-carousel-react** - Carousel component
- **cmdk** - Command palette component
- **class-variance-authority** & **clsx** - Conditional className utilities

**Backend & Database**
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **drizzle-orm** - TypeScript ORM for SQL databases
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **connect-pg-simple** - PostgreSQL session store (configured but unused)

**Build & Development Tools**
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React plugin for Vite
- **@replit/vite-plugin-*** - Replit-specific development plugins (runtime error overlay, cartographer, dev banner)
- **esbuild** - JavaScript bundler for production builds
- **tsx** - TypeScript execution engine

**Styling & Design**
- **tailwindcss** - Utility-first CSS framework
- **autoprefixer** - PostCSS plugin for vendor prefixes
- **tailwind-merge** - Utility for merging Tailwind classes

**Type Safety**
- **TypeScript** strict mode enabled
- **zod** - Runtime type validation and schema generation

### Architecture Decisions

**Monorepo Structure**
- Organized as a full-stack monorepo with shared types between client and server
- `/client` - Frontend React application
- `/server` - Express backend
- `/shared` - Shared TypeScript types and schemas
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Static vs Dynamic Content**
- Portfolio content is currently static (hardcoded in TypeScript)
- This provides fast performance and eliminates database dependencies for simple use cases
- Infrastructure is in place to transition to database-backed content if needed

**Component Organization**
- shadcn/ui components kept separate in `/client/src/components/ui/`
- Feature components in `/client/src/components/`
- Single-page application with section-based navigation
- All sections rendered on one page for smooth scrolling UX

**Development vs Production**
- Development uses Vite middleware mode for fast HMR
- Production builds frontend to `/dist/public` and backend to `/dist`
- Environment-aware configurations for optimal DX and production performance