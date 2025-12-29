# Savor & Sage - Restaurant Website

## Overview

A full-stack restaurant website for "Savor & Sage," featuring a modern landing page with menu display, reservation system, and contact functionality. Built with React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom design system (rustic/elegant theme using CSS variables)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll animations and transitions
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for input validation (integrated via drizzle-zod)

### Data Storage
- **Database**: PostgreSQL (requires `DATABASE_URL` environment variable)
- **Schema Location**: `shared/schema.ts` defines three tables:
  - `menu_items`: Restaurant menu with name, description, price (cents), category, image, availability
  - `reservations`: Customer reservations with name, email, phone, date, time, guests
  - `contact_messages`: Contact form submissions
- **Migrations**: Drizzle Kit with output to `./migrations` directory

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (shadcn + custom)
    pages/        # Route pages
    hooks/        # Custom React hooks
    lib/          # Utilities (queryClient, cn helper)
    data/         # Static menu data fallback
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API route contracts with Zod
```

### Key Design Decisions
1. **Shared Types**: Schema and route definitions in `shared/` directory ensure type safety across frontend and backend
2. **Storage Pattern**: `IStorage` interface in `storage.ts` abstracts database operations, making testing/mocking easier
3. **Static Menu Fallback**: `client/src/data/menu.ts` contains hardcoded menu items for frontend display without API calls
4. **CSS Variables**: Theme colors defined as HSL values in `index.css` for easy customization

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Connection pool managed through `pg` package

### Key NPM Packages
- **UI**: Full shadcn/ui component set (@radix-ui/*)
- **Data Fetching**: @tanstack/react-query
- **Forms**: react-hook-form with @hookform/resolvers
- **Dates**: date-fns
- **Animations**: framer-motion, embla-carousel-react

### Development Tools
- Vite dev server with Replit-specific plugins
- TypeScript with strict mode
- Drizzle Kit for database migrations (`npm run db:push`)

### Build & Deploy
- Build script in `script/build.ts` bundles server with esbuild
- Vercel configuration in `vercel.json` for static SPA deployment
- Production build outputs to `dist/` directory