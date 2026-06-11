# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

> Note: `next.config.ts` whitelists `192.168.0.216` as an allowed dev origin for local network access.

## Architecture

This is a **Next.js 16 / React 19** app (App Router) with **Tailwind CSS v4**, **Supabase** for auth and database, and **Stripe** for payments.

There is a `sportslab/` subdirectory that is an older copy of the project — the root is the active codebase.

### Data flow

- **Auth**: Supabase email/password auth. The `supabase` client is a singleton in `lib/supabase.js`. Pages import it dynamically (`await import('@/lib/supabase')`) on some pages to avoid SSR issues, and statically on others — both patterns exist.
- **Cart**: Client-side only, persisted to `localStorage` under the key `sportslab_cart`. Managed by `context/CartContext.jsx` which wraps the whole app via `app/layout.tsx`. `CartDrawer` is always mounted in the layout and toggled via `cartOpen` state from the context.
- **Checkout**: `/checkout` collects registration details, then POSTs to `/api/create-checkout-session` (a Stripe API route, not present in this repo's visible files) which returns a Stripe checkout URL.
- **Dashboard**: `/dashboard` fetches from the `parent_dashboard` Supabase table keyed by `parent_email`. If `dashboard_type === 'package'`, additional features are shown (session timeline, coach notes, progress bar). The `SessionTimeline` component fetches from the `session_notes` table.
- **Admin**: `/admin` is gated to `sportslabacademyau@gmail.com`. Allows creating/editing `parent_dashboard` records and adding `session_notes` entries. Adding a session note auto-updates `sessions_left`, `coach_notes`, and `focus_areas` on the parent dashboard.

### Supabase tables

| Table | Key columns |
|---|---|
| `parent_dashboard` | `parent_email`, `parent_name`, `child_name`, `active_package`, `sessions_total`, `sessions_left`, `next_session`, `coach_notes`, `focus_areas` (array), `dashboard_type` |
| `session_notes` | `parent_email`, `session_date`, `title`, `notes`, `focus_areas` (array or comma-string) |
| `profiles` | `email`, `full_name`, `created_at` |

### Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, programs grid, testimonials, enquiry form (FormSubmit) |
| `/camp` | Multisport holiday camp |
| `/coaching` | Private 1-on-1 coaching |
| `/junior-program` | Junior development program |
| `/elite-soccer-clinic` | Elite soccer clinic with date/week selection |
| `/multisport-camp` | Multisport camp landing |
| `/team` | Meet the coaches |
| `/tap-test` | Tap test tool |
| `/checkout` | Registration form + Stripe redirect |
| `/dashboard` | Parent portal (auth-gated) |
| `/admin` | Admin panel (email-gated) |
| `/login` | Login page |

### Navbar / Auth pattern

The navbar is **duplicated inline** in most page components — it is not a shared component. Each page manages its own `loggedIn`, `menuOpen` state and calls `supabase.auth.getSession()` in a `useEffect`. When adding a new page, follow this same pattern. The `AuthModal` component handles sign-up and sign-in.

### Cart product IDs

Product IDs used in cart logic (checked in `/checkout` to conditionally show form fields):

- `camp-full-week`, `camp-single-day`, `camp-two-weeks`
- `elite-soccer-clinic-3-day-block`, `elite-soccer-clinic-single-day`, `elite-soccer-clinic-full-program`

### Environment variables

Required in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Stripe keys are used server-side in `/api/create-checkout-session` (not in this repo's visible files).

### Tracking

Facebook Pixel (ID `1073628958427807`) is initialised in `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`.
