# Ésery Mondésir — Website Design & Implementation Plan

*A window into an artistic practice: story, work, and public connected through an interactive, non-linear interface.*

---

## 1. Vision & Creative Concept

### The core idea
The site is not a portfolio. It is **an extension of the practice itself** — a living archive that behaves like the work: layered, unstable, sensory, and open to the public's hand.

**Working metaphor: "The Living Archive" / "L'Atelier Ouvert."**
Visitors don't browse pages; they wander a space. Films, texts, sounds, and process fragments float in relation to each other. Each visit can begin somewhere different. The archive shifts, drifts, and accumulates traces left by visitors.

### Design principles
1. **Fragmentation with orientation** — experimental, but never lost. Every wander has a thread back (a persistent index, a "where am I" gesture).
2. **Multiple entry points** — text, audio, and video are equal doors into the work (per the brief). No single "correct" path.
3. **Sensory layering** — grain, sound, motion, and texture over clean minimalism. Artisanal, not corporate.
4. **Co-creation** — the public can leave traces: responses, stories, contributions that become part of the site's fabric (Má Sài Gòn's story-sharing, Dada Data's hacktions).
5. **Instability as aesthetic, stability as engineering** — the surface moves and fractures; the underlying code is fast, accessible, and reliable.

### What we take from each reference
| Reference | What we borrow |
|---|---|
| **Má Sài Gòn** (Louis Paquet) | Circular/spatial navigation, WebGL distortion, community stories that change the site's mood/colors |
| **Salomon Ligthelm** (G. Colombel) | Cinematic presentation of film work, film-reel navigation metaphor, buttery Lenis scroll, restrained typography over video |
| **Dada Data** (Akufen) | The anti-museum concept, participatory "hacktions," fragmented typography, the site as a living event rather than a static archive |

---

## 2. Experience Design

### 2.1 The Threshold (landing)
The first screen is a **choice, not a hero banner**. Three doors, presented as drifting fragments:

- **REGARDER / Watch** — enters through the films
- **ÉCOUTER / Listen** — enters through sound: voice, ambient audio from the works
- **LIRE / Read** — enters through writing and research

A fourth, quieter option — **Dérive / Drift** — lets the site choose for you: an aleatory path through fragments (very Dada). Each entry tints the whole visit (color, sound, pacing), like Má Sài Gòn's mood shifts.

### 2.2 Navigation model: The Constellation
Instead of a menu bar, the primary navigation is a **constellation map** — works, texts, exhibitions, and process fragments as nodes in a navigable field (WebGL). Related pieces drift near each other; threads connect a film to the research behind it, to the exhibition it appeared in, to public responses to it.

**Fallback (essential):** a plain, fast, keyboard-accessible **Index** page listing everything chronologically/by type — one keystroke or one click away at all times. This serves curators, academics, and screen-reader users who need to *find* rather than *wander*.

### 2.3 Content types & their presentation
| Content | Presentation |
|---|---|
| **Films / video works** | Cinematic full-bleed pages: Vimeo embeds under a WebGL treatment, film-reel/credit-roll typography, stills that distort on scroll |
| **Exhibitions** (e.g. Choublak at Leonard & Bina Ellen) | Documentary spreads: installation photos, curatorial text, floor-plan-like spatial layouts |
| **Writing / research** | Long-form reading mode — the one place the site calms down: generous serif type (EB Garamond), high contrast, no tricks. Marginalia and footnotes can fragment and drift. |
| **Process / notebook** | Raw fragments: scans, notes, test clips, sketches — deliberately unpolished, collaged, draggable |
| **Sound** | A persistent, unobtrusive audio layer: ambient sound per section, voice fragments as entry points; global mute always visible |
| **Public contributions** | Visitor-left traces (see 2.4) rendered as a growing layer within the constellation |

### 2.4 Co-creation features (phased)
- **v1 — Traces:** visitors can leave a short written/audio response tied to a work. Moderated, then woven into that work's page and the constellation.
- **v2 — Calls:** time-limited participatory prompts (à la Dada Data's hacktions) tied to new projects — e.g. "send a memory of home in one sentence."
- **v3 — Co-created works:** contributions become raw material for actual pieces, with the site as both collection instrument and exhibition venue.

---

## 3. Information Architecture

```
Threshold (/)             — the three doors + drift
├── Constellation (/map)  — spatial nav of everything
├── Index (/index)        — accessible flat list of everything
├── Works (/work/[slug])  — films & video works
├── Exhibitions (/exhibitions/[slug]) — Choublak, future shows
├── Writing (/writing/[slug]) — essays, research, publications
├── Process (/process)    — notebook fragments
├── Listen (/listen)      — audio works & voice index
├── Contribute (/traces)  — public co-creation
├── About (/about)        — bio, statement, CV, contact
└── Colophon (/colophon)  — credits, tech, acknowledgments
```

Non-linearity lives in the *linking*, not the URL structure: every work page cross-links to its research, exhibition, sounds, and public traces. URLs stay clean and shareable (critical for curators and press).

---

## 4. Design System

### Typography
- **Space Grotesk** — structural voice: navigation, titles, data, credits (the "print/documentary" voice)
- **EB Garamond** — literary voice: long-form writing, quotations, poetic fragments (italic for Kreyòl/French passages)
- Scale is deliberately unstable in experimental zones (sizes shift on scroll/hover) but locked and comfortable in reading mode

### Color
- **Ink** `#0a0a0a` — the dark ground (site defaults to dark: cinema)
- **Bone** `#f0ece4` — paper white, used for reading mode
- **Choublak red** `#c4402f` — the accent; hibiscus (choublak) as the signature mark
- Section moods tint the ground subtly (Má Sài Gòn pattern): each entry door and each work can carry its own atmospheric tint

### Texture & motion language
- Film grain overlay (already in prototype), halftone/print artifacts on stills
- **Rest states are never fully still** — elements breathe, drift ±2px, flicker occasionally
- Cursor is a soft circle that magnetizes to interactive elements; native cursor in reading mode
- Scroll: Lenis smooth scroll; images distort/ripple on velocity (WebGL shader, already prototyped)
- Transitions between pages: fragmentation — the page breaks apart and reassembles
- **`prefers-reduced-motion` fully honored**: all drift/distortion collapses to clean fades

---

## 5. Technical Architecture

### Recommendation: **Astro + vanilla creative-code layer**

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Content-driven, ships zero JS by default (fast reading pages), lets the WebGL layer be added surgically only where needed. Simpler than Nuxt for a mostly-content site. |
| Creative code | **Three.js** (WebGL scenes, constellation, distortion shaders) | Same stack as Má Sài Gòn / Ligthelm |
| Animation | **GSAP + ScrollTrigger** | Industry standard for scroll choreography |
| Scroll | **Lenis** | The smooth-scroll feel of the references |
| Content | **Markdown/MDX content collections** in the repo, editable via **Decap CMS** (free, git-based) | Ésery can add works/texts without touching code; everything versioned in git |
| Video | **Vimeo** (already in use) — player API for custom-skinned embeds | No re-hosting; existing links carry over |
| Audio | Self-hosted MP3/OGG + Web Audio API for the ambient layer | Full control over the sound design |
| Contributions | **Netlify Forms** (v1) → serverless + small DB (v2) with a moderation queue | Simple start, room to grow |
| Hosting | **Netlify** — site `esery-mondesir` already created; connect to the GitHub repo for auto-deploys | Free tier is sufficient for launch |

### Why not plain HTML files (like the current prototype)?
The prototype proves the feel. But 20+ works, bilingual text, and recurring content updates need templating and a CMS, or every update becomes a code edit. Astro keeps the hand-built feel with maintainability.

### Performance guardrails (non-negotiable)
- WebGL loads lazily and only on pages that use it; static-image fallback for weak devices/WebGL failures
- Images: AVIF/WebP, responsive sizes, lazy loading; target LCP < 2.5s on 4G
- Reading pages ship near-zero JS
- Budget: initial payload < 300KB before media on the Threshold

### Accessibility guardrails
- The Index is the accessible mirror of the constellation — full keyboard + screen-reader parity of *content*, not of *spectacle*
- Captions/transcripts for video and audio works
- Global sound off toggle, motion-reduced mode, focus-visible states everywhere
- Bilingual structure ready (EN/FR — and room for Kreyòl) via Astro i18n

---

## 6. Implementation Roadmap

### Phase 0 — Research & first prototype ✅ *done*
Reference analysis, creative direction, working landing prototype (`website/index.html`).

### Phase 1 — Design language lock (1–2 weeks of iteration)
- 2–3 variations of the Threshold (different fragmentation intensities)
- Motion tests: distortion shader tuning, drift parameters, cursor feel
- Type & color specimens applied to real content (one film, one text)
- **Decision gate:** Ésery + Zoma sign off on the language

### Phase 2 — Foundation build (2–3 weeks)
- Astro scaffold, content collections schema (works, writings, exhibitions, sounds)
- Netlify Git-connected auto-deploys (live URL from day one)
- Threshold + Index + About pages functional
- Lenis/GSAP/Three.js integration pattern established
- Decap CMS wired so content entry can start immediately

### Phase 3 — The works (2–3 weeks)
- Film/work page template with Vimeo integration and WebGL still treatment
- Exhibition template (Choublak as the pilot)
- Reading mode for writing/research
- Content migration from Google Drive / Vimeo / Ellen gallery site

### Phase 4 — The constellation & sound (2–3 weeks)
- WebGL constellation navigation with the Index as fallback
- Ambient audio layer + Listen section
- Drift mode (aleatory navigation)
- Page-transition fragmentation system

### Phase 5 — Co-creation v1 (1–2 weeks)
- "Traces" — moderated public responses per work
- Moderation dashboard (simple: Netlify Forms notifications → approve via CMS)

### Phase 6 — Polish & launch (1–2 weeks)
- Accessibility audit (keyboard, screen reader, reduced motion)
- Performance pass (Lighthouse ≥ 90 performance on content pages)
- Cross-device QA (the experimental layer must degrade gracefully on mobile)
- SEO/meta/social cards, analytics (privacy-respecting, e.g. Plausible)
- Domain connection & launch

### Ongoing — The living archive
- New works/texts via CMS (no developer needed)
- Periodic "calls" (hacktions) as new co-creation events
- The constellation grows as the archive grows

---

## 7. What Ésery needs to gather (content checklist)
- [ ] Filmography: titles, years, durations, synopses, credits, Vimeo links/files
- [ ] High-res stills (3–6 per work)
- [ ] Choublak exhibition documentation (photos, curatorial text, press)
- [ ] Written works: essays, research texts, publications (with rights cleared)
- [ ] Audio: voice recordings, ambient sound from works, anything usable for the sound layer
- [ ] Bio (short + long), artist statement, CV, press mentions
- [ ] Preferred domain name(s)
- [ ] Which languages at launch (EN only? EN/FR?)

---

## 8. Risks & mitigations
| Risk | Mitigation |
|---|---|
| Experimental UI alienates curators/academics who just need info | The Index + clean URLs + fast reading mode serve them fully |
| WebGL performance on older devices | Lazy load, capability detection, static fallbacks |
| Co-creation invites spam/abuse | Moderation queue before anything is public, rate limiting |
| Scope creep (this brief could absorb a year) | Phased roadmap with a launchable site after Phase 3; constellation and co-creation layer on top |
| Content bottleneck | CMS wired in Phase 2 so content entry parallels development |
