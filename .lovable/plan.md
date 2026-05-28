A full mobile-first rebuild of Bag N' Bros as a cinematic Himalayan expedition experience — with refined typography pairing and disciplined UX/UI principles applied across every section.

## Typography — upgraded pairing

Replacing the earlier DM Serif Display pick with a more cinematic, editorial trio that scales beautifully on mobile and carries the A24-doc / Leica-journal tone you referenced:

- **Display / headlines** — `Fraunces` (variable serif, optical-size aware)
  - Heavy optical weight at hero scale, softer at mid scale, elegant ligatures, slightly literary feel — far more cinematic than DM Serif at large sizes
- **Body / UI** — `Inter` (variable, 14–18 px range)
  - Razor-clear at small sizes, neutral so it never competes with the serif
- **Micro / labels / coordinates** — `JetBrains Mono` (300 weight, wide tracking)
  - Replaces over-used "TRANSMISSION" mono with something more refined; reserved for meta data only (altitude, dates, coords)

Type scale (mobile-first, fluid via `clamp()`):

```
display-xl  clamp(3.25rem, 13vw, 7.5rem)   Fraunces 500, -0.03em, leading 0.92
display-lg  clamp(2.5rem, 9vw, 5rem)        Fraunces 500
display-md  clamp(1.75rem, 5.5vw, 3rem)     Fraunces 500
body-lg     clamp(1.0625rem, 2.4vw, 1.25rem) Inter 400, leading 1.55
body        1rem Inter 400, leading 1.6
label       0.6875rem JetBrains Mono 300, tracking 0.22em, uppercase
```

## UX/UI principles applied throughout

1. **One purpose per screen** — each fullscreen section has a single hierarchy: hero image, one headline, one CTA cluster. No competing CTAs.
2. **Thumb-zone first** — primary actions (WhatsApp, Book) live in the bottom 40% of mobile viewport. Sticky WhatsApp FAB sits at safe-area-inset-bottom.
3. **8-pt spacing rhythm** — all gaps from a `0.5rem` base scale (4 · 8 · 16 · 24 · 40 · 64 · 96). No arbitrary values.
4. **Generous touch targets** — every tap target ≥ 44×44 px (Apple HIG).
5. **Progressive disclosure** — itinerary collapses to day headers on mobile, expands on tap. Secret-spot stays teased, not revealed.
6. **Contrast & legibility** — body text against image always sits on a gradient scrim (≥ 4.5:1). Test with WCAG AA in mind.
7. **Reduced motion respect** — wrap parallax and reveals in `@media (prefers-reduced-motion: reduce)` to disable transforms.
8. **Scannable hierarchy** — every section opens with: tiny mono label → serif headline → one sentence of body. Same rhythm everywhere, predictable scroll.
9. **One accent, used sparingly** — ember-gold (`#D69155`) only on: active state, primary CTA, the single underline accent in the logo, the live "next departure" dot. Never decorative.
10. **Loading & feedback** — images use `loading="lazy"` + a subtle blur-up placeholder. Video reels show a static poster until in view. Buttons have a 120 ms press state.
11. **Safe areas** — `env(safe-area-inset-*)` on Nav and sticky FAB so iOS notch/home-indicator are respected.
12. **No dead ends** — every section ends with either a next-section visual lead-in or a clear CTA back to WhatsApp / Munsiyari.

## Design tokens (locked from your picks)

- **Palette — Noir & Ember Gold**
  - `--background` #050505 · `--surface` #14110D · `--surface-warm` #1F1814
  - `--foreground` #F2EAD8 (warm ivory) · `--muted` #8A8175
  - `--ember` #D69155 (brass-gold accent) · `--ember-glow` #F2B271
  - `--haze` #6A6258 (warm mist)
- **Layout** — Asymmetric 60/40, off-grid overlapping photography, left-bleed serif headlines with right-side mono meta column. Mobile collapses to single column with same off-grid energy via negative margins on key images.
- **Motion** — CSS + IntersectionObserver reveals, parallax via existing `useParallax` hook. No GSAP/Lenis dependency (keeps bundle lean; can add later for heavier choreography).

## Brand assets

- Copy both uploaded logos into `src/assets/`:
  - `logo-bnb-dark.png` → nav + footer (on dark surface)
  - `logo-bnb-light.png` → reserved
- Logo replaces text wordmark in `Nav`. Height: 28 px mobile / 36 px desktop, centered on mobile.

## Page architecture (`src/routes/index.tsx`)

```
Nav             floating, blur-on-scroll, logo-centered on mobile, safe-area aware
Hero            fullscreen, fog parallax, floating Munsiyari dossier card (mobile: stacked below fold)
Manifesto       editorial pull-quote — "The Himalayas don't wait. Neither do we."
NextExpedition  Munsiyari dossier — the conversion section (details below)
ReelsRail       vertical 9:16 autoplay-muted reel strip, horizontal swipe on mobile
StackedChapters retoned to new palette (other hidden destinations)
QuoteMoments    cinematic testimonial quotes layered over imagery
Journal         field-notes editorial entries, simplified
Footer          logo, contact, IG @bag.n.bros, +91 8865848737
StickyWhatsApp  floating bottom-right FAB, ember-gold, safe-area-inset-bottom
```

## Munsiyari dossier (from your PDF)

- Title: **Munsiyari**
- Sub: "The last village before the trail becomes unnamed."
- Meta strip: 4N / 5D · Moderate · 2,200 m → Khaliya Top · ₹6,999 onward
- 4-day timeline (collapsed-by-default accordion on mobile):
  - Day 0 — Delhi → Munsiyari (overnight, 633 km)
  - Day 1 — Birthi Waterfall · arrive Munsiyari
  - Day 2 — Nanda Devi Temple · Khaliya Top trek · camp under stars
  - Day 3 — Darkot Village · **Secret Spot** · return drive
  - Day 4 — Delhi arrival
- Two-column Inclusions / Exclusions (stacked on mobile)
- Secret Spot teaser block — blurred image, the line "The exact location? That's our secret." with ember-gold dot
- Primary CTA: WhatsApp · Secondary: "View full dossier"

## Reels rail

- 9:16 tiles, horizontal swipe on mobile (snap), parallel scroll on desktop
- Autoplay muted on viewport intersection (`<video muted playsInline loop autoPlay preload="metadata" poster=...>`)
- Static poster image until in view (prevents jank, respects data)
- End-of-rail card: "DM your dates" → WhatsApp

## Sticky WhatsApp CTA

- Round 56 px FAB, ember-gold, Lucide `MessageCircle`
- `wa.me/918865848737?text=Hi%20Bag%20N%20Bros...`
- Subtle pulse ring, hidden when Nav CTA is in view (no duplicate primary actions)
- Bottom inset = `calc(1rem + env(safe-area-inset-bottom))`

## Files

- **New** — `Nav.tsx`, `Hero.tsx`, `MunsiyariDossier.tsx`, `ReelsRail.tsx`, `QuoteMoments.tsx`, `StickyWhatsApp.tsx`, `Footer.tsx`
- **Updated** — `src/routes/index.tsx`, `src/components/StackedChapters.tsx` (retone), `src/styles.css` (fonts, tokens, type scale, motion-safe utilities)
- **Assets** — copy 2 logos to `src/assets/`

## What I intentionally won't do

- No GSAP/Lenis install — current hooks give the cinematic feel without bundle weight.
- No backend / Lovable Cloud — WhatsApp is a direct `wa.me` link.
- No real reel videos yet — placeholder muted MP4s; swap in when you share clips.
- No image-gen this round — existing photography retoned via overlays is enough; we can add new shots once layout lands.

After approval I'll build mobile-first, then verify on the 390×844 viewport.

Used the redesign skill.