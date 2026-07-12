# ASSETS — drop files here; the site picks them up, no code changes

Every path below is *attempted* by the engine. If the file is missing, a
material placeholder plays instead (16mm leader, synthesized night, glow
presence). Drop a real file in and reload — the placeholder retires itself.

## portal/  — the door (start here)

| file | what it is |
|---|---|
| `ambians.mp3` | the night bed — lakou at night, loops under the ritual |
| `tanbou.mp3` | the drum that answers RESPÈ |
| `grann.jpg` | her photograph — replaces the glow-presence at the door |
| `grann-konsey.mp3` | her counsel, in her voice — plays when she appears |

## places/<place-id>/  — fragments per star

Place ids are defined in `../data/places.js` (tijuana, havana, miami,
montreal, toronto, flatbush, …). File paths are listed per fragment in the
manifest — the convention is numbered play order:

    places/tijuana/01-dream-deferred.mp4
    places/tijuana/02-whatsapp.mp3

Adding a new fragment = drop the file + add one line in `data/places.js`.
Vimeo instead of a file: set `vimeo: '123456789'` on the fragment.

## textures/  — the material layer

| file | what it is |
|---|---|
| `gren-16mm.mp4` | scanned 16mm grain loop — screen-blended over everything (replaces procedural grain) |
| `fitogram-01.jpg`, … | phytogram scans — chamber veils (phase B) |

**The covenant:** every texture comes from the practice — scans of the
films, the phytograms, the leaders. Nothing stock.
