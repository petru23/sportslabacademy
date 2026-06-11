# SportsLab Academy

A Next.js 16 / React 19 web application for SportsLab Academy's coaching and training programs.

## Quick Start

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Documentation

For detailed information about the architecture, data flow, database schema, API routes, and development patterns, see [CLAUDE.md](CLAUDE.md).

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **Tailwind CSS v4** for styling
- **Supabase** for authentication and database
- **Stripe** for payment processing

## Project Structure

- `app/` — Next.js pages and API routes
- `components/` — Reusable React components
- `context/` — React Context for state management (Cart)
- `lib/` — Utility functions and client instances
- `public/` — Static assets

## Environment Setup

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Stripe keys are configured server-side.

## Contributing

When adding new pages, follow the existing patterns documented in [CLAUDE.md](CLAUDE.md).
