# GRENN PWOMENNEN — Konsèp / The Working Plan

*One portal. One sky. Everything emanates from the map.*

---

## 1. What this is

Not a website with pages. A **dreaming system** in two spaces:

1. **PÒTAY — the portal.** The Onè/Respè ritual, in darkness, with sound.
   The only door. This is also where the first real assets land
   (ambient night recording, the drum, Grann's photograph and voice).
2. **SYÈL LA — the sky.** The world with Ayiti at its center.
   The only space. There is nothing else to navigate to.
   Films, texts, voices, ancestors, contributed memories — all of it
   is *inside the stars*.

Deleted, deliberately: the scroll journey, the hero, the proverb section,
the manifesto section, the film strip, the ancestors row, the contribute
section. Their contents did not disappear — they moved into the sky:

| was a page section | now lives |
|---|---|
| film strip | each film is a fragment inside its city (Tijuana plays *Dream Deferred*...) |
| proverb / manifesto | text fragments at the core and the sous stars |
| ancestors row | ancestor-stars inside Ayiti's inner constellation |
| "kite yon souvni" | the closing fragment of every chamber |

## 2. The Chanm — what happens when you click a star

The current "static card" dies. A star opens as a **possession sequence**,
four beats, always the same grammar:

1. **APWOCH** — the camera falls toward the star. Its sound signature
   fades up; the sky's hum ducks. (~1s)
2. **VWAL** — the veil: the actual rendered frame is seized and torn —
   canvas slice-displacement with RGB split built from the real pixels
   on screen, not a CSS wipe. Where phytogram scans exist, they are the
   veil texture. (~0.7s)
3. **FRAGMAN YO** — the place's fragment stack plays, full-bleed, one at
   a time. Click / → advances. The stack is ordered on first visit,
   shuffled on return visits: dreams don't repeat in the same order.
4. **BOULE** — closing is a burn-out (film burning in the gate), and the
   sky is still there behind, still turning. You never "went" anywhere.

### The fragment grammar (all content is one of six)

| type | behavior |
|---|---|
| `fim`    | film plays immediately — self-hosted file or Vimeo. Until the file exists: a 16mm **leader** placeholder (countdown, flicker, scratches, projector hum) so the star already *plays* today |
| `vwa`    | voice/sound plays against a reactive visual — scratches and embers driven by the audio's own amplitude (AnalyserNode) |
| `tèks`   | text arrives fragmented — lines type/tear in, Kreyòl first, echo beneath |
| `imaj`   | still image drifting slowly under heavy grain |
| `zansèt` | an ancestor speaks/appears — their branch grows from here |
| `souvni` | contributed memories; every chamber ends with the count and *Kite yon souvni* |

## 3. Material rules — the no-gimmick covenant

- **Every texture comes from the practice.** Scanned 16mm grain, phytograms,
  processed film leader — provided by Ésery. Procedural stand-ins exist only
  until real scans arrive, and imitate the material (grain, flicker, leader),
  never abstract "digital glitch."
- **Glitch only at thresholds.** Tearing happens when crossing (entering or
  leaving a chamber, being refused at the door) — never as idle decoration.
- **Sound is structural, not ambience-on-top.** The typed « Onè » is the user
  gesture that legally unlocks audio — the word literally opens the sound.
  - Pòtay: night bed (real recording when provided; synthesized night until then)
  - Syèl: near-silence; stars whisper their signature as the camera approaches
  - Chanm: the fragment's own sound takes the room; everything else ducks
  - One global mute, small, always present. One AudioContext, ever.
- **No UI chrome.** No menus, no cards, no buttons except: mute, return, and
  *Kite yon souvni*.

## 4. Where assets go (drop files, no code)

    website/assets/
      portal/
        ambians.mp3        night bed loop (lakou at night)
        tanbou.mp3         the drum that answers RESPÈ
        grann.jpg          her photograph (replaces the glow-presence)
        grann-konsey.mp3   her counsel in her voice
      places/<place-id>/
        01-xxx.mp4         fragments, in play order: video
        02-xxx.mp3         audio
        03-xxx.jpg         stills
        (filenames are listed in data/places.js)
      textures/
        gren-16mm.mp4      scanned grain loop (screen-blended over everything)
        fitogram-01.jpg …  phytogram scans (chamber veils)

The engine tries each real path and falls back to its synthesized stand-in,
so assets can be dropped in one at a time and appear immediately.

## 5. The manifest — `data/places.js`

Every star is data, not code:

    { id: 'tijuana', name: 'Tijuana', lat: 32.5149, lon: -117.0382,
      type: 'travay', tone: 174,
      fragments: [
        { type: 'fim', title: 'What Happens to a Dream Deferred',
          year: '2022', src: 'assets/places/tijuana/01-dream.mp4', vimeo: null },
        { type: 'teks', kreyol: '…', echo: '…' },
      ] }

Adding a work to a city = one file + one line. The sky redraws itself.

## 6. Phases

- **A — now:** portal + sky only; chamber engine v1 with material
  placeholders; manifest; assets folders ready; sound engine v1.
- **B — assets:** Ésery drops portal sound, Grann, grain scans, film files /
  Vimeo IDs; placeholders retire one by one.
- **C — reciprocity:** the contribution backend (leave a word/sound at your
  city → moderation → becomes a `souvni` fragment; stars brighten with what
  they hold). Backend: simple store + moderation queue; no accounts.
- **D — presence:** returning visitors are remembered (their star greets
  them); ancestors appear in the sky at thresholds, not only at the door.
