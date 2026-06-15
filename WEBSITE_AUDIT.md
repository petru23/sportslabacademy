# SportsLab Academy — Website Audit & Compliance Report

**Date:** 15 June 2026
**Scope:** Full codebase review (Next.js 16 / React 19 / Supabase / Stripe), legal/compliance gap analysis vs. competitors, cookie-consent recommendations.
**Business context:** Australian (Brisbane, QLD), prices in AUD, sells youth sport programs + an international tour, collects **children's personal data**, runs **Meta Pixel** tracking.

---

## 0. TL;DR — Priority Order

| # | Issue | Severity | Effort |
|---|-------|----------|--------|
| 1 | **Price tampering** — server trusts client-submitted cart prices | 🔴 Critical (financial) | Medium |
| 2 | **No cookie consent** — Meta Pixel fires before consent | 🔴 Critical (legal) | Low |
| 3 | **No Privacy Policy** — collecting children's name + DOB | 🔴 Critical (legal) | Low |
| 4 | **No Terms & Conditions / Refund Policy** | 🟠 High (legal + Stripe req.) | Low |
| 5 | **No business identifier (ABN) / contact legal entity** | 🟠 High | Low |
| 6 | 57 lint problems (incl. real React bugs in admin/dashboard) | 🟠 High | Medium |
| 7 | No SEO basics (sitemap, robots, OG tags, per-page metadata) | 🟡 Medium | Low |
| 8 | No analytics consent gating / accessibility gaps | 🟡 Medium | Medium |

The site **builds and deploys fine** — these are correctness, legal, and trust gaps, not "it's broken" gaps.

---

## 1. Technical Health

### Build
- ✅ `npm run build` **succeeds** (Next.js 16, 19 routes, compiles in ~8s).
- ✅ Stripe webhook **correctly verifies signatures** (`stripe.webhooks.constructEvent`) — good.
- ✅ Stripe keys / Supabase service-role key are server-side only — good.

### Lint — 57 problems
`npm run lint` reports **57 issues**. ESLint does **not** block the build, so these are silently shipping. Breakdown:

| Rule | Count | What it means |
|------|-------|---------------|
| `no-explicit-any` | 14 | Loose typing — defeats TypeScript safety |
| `no-img-element` | 12 | Using `<img>` instead of `next/image` → slower load, more bandwidth |
| `no-unused-vars` | 11 | Dead code |
| `no-html-link-for-pages` | 10 | `<a href="/">` instead of `<Link>` → full page reloads, lost SPA nav |
| `react/no-unescaped-entities` | 2 | Raw `'` in JSX |
| **React Hooks errors** | several | **Real bugs** (see below) |

### Real React bugs (not just style)
- `app/admin/page.jsx:31` — `fetchRecords()` called in `useEffect` **before it's declared** (`react-hooks/immutability`). Works today by hoisting luck, but fragile.
- `app/dashboard/page.jsx` — "Cannot create components during render" + "setState synchronously within an effect can trigger cascading renders." Indicates components defined inside render and effect-driven state loops — can cause flicker / perf issues.
- `app/checkout/success/page.js` — same "create components during render" error.
- `hooks/useAuthSetup.ts:14` — setState synchronously in effect (cascading renders).

**Recommendation:** Fix the Hooks errors first (correctness), then convert `<a>`→`<Link>` and `<img>`→`next/image` for performance, then clean `any`/unused vars. Consider adding `eslint` to CI so regressions are caught.

---

## 2. Security Issues

### 🔴 2.1 Price Tampering (Critical — financial loss)
**File:** `app/api/create-checkout-session/route.js`

The cart is stored client-side in `localStorage` (`sportslab_cart`) and POSTed to the server, which then builds the Stripe line items using the **client-supplied price**:

```js
unit_amount: item.id === 'test-payment' ? 50 : Math.round(item.price * 100)
```

A user can open DevTools, edit `localStorage` (e.g. set `price: 0.50`), and check out a $2,400 tour for 50 cents. Stripe will happily charge whatever the server tells it.

**Fix:** Keep an authoritative price list **on the server** (or in Stripe as Products/Prices) keyed by `item.id`. Look up the price server-side; never trust `item.price` or `item.name` from the client. Reject unknown IDs.

### 🟠 2.2 `test-payment` 50¢ bypass in production
The `item.id === 'test-payment' ? 50` branch ships to production. Make sure this ID can't be added to a real cart, or gate it behind an env flag (`NODE_ENV !== 'production'`).

### 🟡 2.3 Admin gating is email-string based
`/admin` is gated to `sportslabacademyau@gmail.com` client-side. Confirm the **Supabase RLS policies** on `parent_dashboard` / `session_notes` also enforce this server-side — otherwise anyone with the anon key can read/write parent + child records directly. (Could not verify RLS from the repo; **verify in the Supabase dashboard**.)

### 🟡 2.4 Children's PII to a third party (FormSubmit)
Homepage + Italy Tour enquiry forms POST to `https://formsubmit.co/...`. This sends parent + child details to a third-party relay with no DPA. Acceptable for low volume, but it **must** be disclosed in the Privacy Policy, and ideally replaced with your own Resend-backed endpoint (you already use Resend in the webhook).

---

## 3. Legal / Compliance Gaps

> You are an Australian business collecting **children's personal information** (name + date of birth at checkout) and running **behavioural ad tracking** (Meta Pixel). Three frameworks apply:
> - **Privacy Act 1988 + Australian Privacy Principles (APPs)** — you must have a Privacy Policy (APP 1) and only collect what's needed (APP 3).
> - **Australian Consumer Law (ACL)** — clear terms, refund rights, accurate pricing.
> - **Spam Act 2003** — consent + unsubscribe for marketing email.
> - Because you advertise an **Italy tour** and run **Meta Pixel**, EU/UK visitors are likely → **GDPR + ePrivacy "cookie consent"** best-practice applies, and **Meta's own Business Tools Terms require you to obtain consent** before the Pixel sets cookies.

### Missing pages (all absent today — confirmed)
| Page | Why it's required | Priority |
|------|-------------------|----------|
| **Privacy Policy** | APP 1 — mandatory once you collect PII. Must cover: what you collect (incl. child name/DOB), why, Meta Pixel/Stripe/Supabase/FormSubmit/Resend as recipients, storage, access/correction rights, contact. | 🔴 Now |
| **Cookie / Tracking notice** | Meta Pixel sets cookies. Needed for consent banner + ePrivacy. Can be a section of the Privacy Policy. | 🔴 Now |
| **Terms & Conditions** | Governs the sale, liability, code of conduct, photo/media consent for minors. | 🟠 Now |
| **Refund / Cancellation Policy** | ACL requires clarity; Stripe expects a refund policy. You already state Italy-tour deposit terms inline — formalise site-wide. | 🟠 Now |
| **Booking/Participation terms for minors** | Medical info, emergency contact, photo consent, supervision, waiver. | 🟠 Soon |

### Other legal hygiene
- **No ABN / legal entity name / registered address** shown anywhere. Add to footer + Terms.
- **No consent checkbox** on enquiry/checkout forms ("I agree to the Privacy Policy / I consent to being contacted").
- **Meta Pixel fires `PageView` immediately** in `app/layout.tsx` and `ViewContent`/`InitiateCheckout`/`Lead` on the Italy Tour page — **before any consent**. This is the single biggest compliance exposure. Must be gated behind consent (see §4).
- **Footer has no legal links** on any page (checked — none exist). Add a shared footer with Privacy / Terms / Refund / Contact + ABN.

---

## 4. Cookie Consent — Recommendations (free / third-party OK)

You need a banner that **blocks Meta Pixel until the user consents**, and re-enables it on accept. Options, best-fit first:

### ⭐ Recommended: **vanilla-cookieconsent** (orestbida) — free, open-source, self-hosted
- **Cost:** Free forever, MIT licence, no account, no external script, no page/visitor limits.
- **Why:** Lightweight (~10KB), GDPR/Australian-friendly, full control, no vendor lock-in. Plays well with Next.js.
- **How it fits here:** Wrap the Meta Pixel so it only initialises after the "analytics/marketing" category is accepted. Concretely:
  1. Move the Pixel init out of `layout.tsx`'s always-on `<Script>`.
  2. Load the banner; on `onConsent` / `onChange`, if marketing is granted, call `fbq('consent','grant')` + `fbq('init', ...)` + `fbq('track','PageView')`.
  3. Use Meta's **Consent Mode**: initialise with `fbq('consent','revoke')` by default, `grant` on accept.
- **Install:** `npm i vanilla-cookieconsent`, add a small client component mounted in `layout.tsx`.

### Easiest no-code alternatives (free tiers)
| Tool | Free tier | Notes |
|------|-----------|-------|
| **CookieYes** | Free up to ~25k pageviews/mo, 1 domain | Hosted banner, auto cookie scan, consent log. Good if you want zero code. |
| **Termly** | Free banner **+ free policy generators** (Privacy/Cookie/T&C) | Best 2-in-1: gives you the banner *and* drafts the legal pages. Great for a small academy. |
| **Cookiebot (Usercentrics)** | Free for **1 domain, ≤50 subpages** | Strong auto-blocking + scanning; you're well under 50 pages. |
| **Osano** | Free tier | Solid, slightly heavier. |
| **Klaro!** | Free, open-source self-hosted | Alternative to vanilla-cookieconsent if you prefer category-based config. |

**My pick for you:** **Termly** if you want the banner *and* auto-generated legal pages quickly with no code; **vanilla-cookieconsent** if you (or I) are happy to wire ~30 lines of code and want it free + fast + no third-party dependency.

### Free legal-document generators (to draft the pages)
- **Termly** (Privacy, Cookie, T&C, Refund — tailored to AU).
- **iubenda** (free tier, AU-aware).
- **Shopify free policy generators** (Privacy/Refund/T&C — generic but a good start).
- ⚠️ Generators are a starting point — for **children's data + international tour with minors**, have a lawyer review the Privacy Policy and the minor-participation waiver.

---

## 5. Competitor Benchmark — "Bare Minimum" Functionality

Typical competitors (youth football academies / sports camp providers, e.g. local Brisbane academies, national multi-sport camp brands, club-run academies) almost always have the following. Items you're **missing** are flagged.

### Trust & legal (what every credible competitor has)
- ✗ Privacy Policy, Terms, Refund/Cancellation policy (footer links) — **missing**
- ✗ ABN / business details / physical address — **missing**
- ✗ Cookie consent banner — **missing**
- ✗ Visible insurance / Working With Children (Blue Card, QLD) / coach accreditation statements — **missing** (big trust factor for parents of minors)
- ✓ Contact details (phone, email) — present
- ✓ WhatsApp contact — present (good)

### Functionality / UX
- ✓ Online booking + card payment (Stripe) — present and modern (ahead of many competitors still using "email to enquire")
- ✓ Parent dashboard / session tracking — present (a genuine differentiator vs. competitors)
- ✗ **FAQ page** — competitors use these to reduce enquiries (what to bring, ages, refunds, weather policy) — **missing**
- ✗ **About / credentials page** depth — you have `/team`; ensure coach qualifications + Blue Card are stated — **verify**
- ✗ **Testimonials with names/photos / Google reviews** — homepage has testimonials; competitors lean on Google rating embeds for credibility — **enhance**
- ✗ **Newsletter signup with consent** (Spam Act compliant) — **missing**
- ✗ **Photo/media gallery** of past camps — strong conversion driver for parents — **partial**

### SEO / discoverability (competitors rank locally)
- ✗ `sitemap.xml` + `robots.txt` — **missing** (add `app/sitemap.ts` + `app/robots.ts`)
- ✗ Per-page `metadata` (title/description/OpenGraph) — only a global title in `layout.tsx`; every program page should have its own — **missing**
- ✗ Open Graph / Twitter cards (link previews when shared on WhatsApp/FB) — **missing**
- ✗ `manifest` / favicon set / app icons — partial (`icon.png` exists)
- ✗ Structured data (LocalBusiness / Event schema for camps & the Italy tour) — **missing** (helps Google show dates/prices)
- ✗ Google Business Profile link / local SEO signals — **verify off-site**

### Accessibility (legal-adjacent under the Disability Discrimination Act)
- ⚠️ 12 `<img>` without guaranteed alt text; many background-image divs with no text alternative.
- ⚠️ Color contrast on light-grey-on-cream text should be checked (e.g. `text-zinc-500` on `#F5F0E6`).
- ⚠️ Forms rely on placeholders instead of `<label>`s — screen-reader and autofill unfriendly.

---

## 6. Recommended Action Plan

### Phase 1 — Stop the bleeding (this week)
1. **Fix price tampering** — server-side price lookup by product ID. *(security/financial)*
2. **Add cookie consent + gate Meta Pixel** behind it (vanilla-cookieconsent or Termly). *(legal)*
3. **Publish Privacy Policy + Cookie notice** (Termly draft → lawyer review for the children's-data parts). *(legal)*
4. **Add a shared Footer** with Privacy / Terms / Refund / Contact + ABN + business name across all pages.

### Phase 2 — Compliance & trust (next 2 weeks)
5. Publish **Terms & Conditions** + **Refund/Cancellation Policy** + **minor participation waiver/media consent**.
6. Add **consent checkbox** to enquiry + checkout forms.
7. State **Blue Card / Working With Children + insurance + coach accreditation** prominently. *(parent trust)*
8. Fix the **React Hooks errors** in admin/dashboard/checkout-success + add ESLint to CI.

### Phase 3 — Growth (this month)
9. SEO: `app/sitemap.ts`, `app/robots.ts`, per-page `metadata` + OpenGraph, Event/LocalBusiness structured data.
10. Performance: `<a>`→`<Link>`, `<img>`→`next/image`.
11. Add **FAQ page**, Google reviews embed, photo gallery, Spam-Act-compliant newsletter.
12. Accessibility pass: real `<label>`s, alt text, contrast.

---

## 7. What I Verified vs. What You Should Confirm Manually

**Verified from code:**
- Build passes; lint = 57 problems; routes list; Meta Pixel fires unconditionally; no legal/SEO files exist; checkout collects child name + DOB; server uses client cart price; webhook verifies Stripe signature.

**Confirm yourself (couldn't from repo):**
- Supabase **RLS policies** on `parent_dashboard` / `session_notes` (critical — children's data).
- That `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY` are set in the production (Vercel) env, not just `.env.local`.
- Whether Meta Pixel use is disclosed in Meta Business settings / your ad account is in good standing.
- ABN registration + insurance + Blue Card status to cite on the site.

---
*Generated by an automated codebase + compliance review. Legal items are guidance, not legal advice — have the Privacy Policy and minor-participation documents reviewed by an Australian lawyer given children's data is involved.*
