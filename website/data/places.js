// =====================================================================
// GRENN PWOMENNEN — the manifest. Every star is data, not code.
// Add a work to a city: drop the file in assets/places/<id>/ and add
// one fragment line here. The sky redraws itself.
//
// fragment types: fim | vwa | teks | imaj | zanset | souvni
//   fim:   { type:'fim', title, year, src?, vimeo? }  — src missing → 16mm leader placeholder
//   vwa:   { type:'vwa', label, src? }                — src missing → synthesized signal
//   teks:  { type:'teks', kreyol, echo }
//   imaj:  { type:'imaj', src, caption? }
//   zanset:{ type:'zanset', name, body, src? (their voice) }
//   souvni are appended automatically from `souvni` + `istwa` fields.
// =====================================================================

window.GP = {

  core: {
    id: 'potoprens', name: 'Pòtoprens', kind: 'kè a — the core',
    type: 'core', tone: 98, istwa: 31,
    souvni: '“Mwen pa janm pati. Se mwen ki veye limyè yo.”',
    fragments: [
      { type: 'teks', kreyol: 'Se isit la tout liy yo kòmanse.',
        echo: 'Where every line begins. Every distance on this sky is true — measured from here.' },
      { type: 'teks', kreyol: 'Bwa pi wo di li wè lwen… men grenn pwomennen di li wè pi lwen.',
        echo: 'The tallest tree claims to see far… but the wandering seed asserts it sees farther.' },
    ],
  },

  // ---- AYITI ANDEDAN — the wellsprings (inner constellation) ----
  sous: [
    { id: 'kafou', name: 'Kafou (Carrefour)', lat: 18.5344, lon: -72.4094, size: 13, istwa: 8,
      fragments: [{ type: 'teks', kreyol: 'Vil ki bò vil la.', echo: 'The city beside the city — millions passed through on their way to everywhere.' }] },
    { id: 'baconnois', name: 'Baconnois (Ansavo)', lat: 18.4700, lon: -73.3500, size: 12, istwa: 4,
      fragments: [{ type: 'teks', kreyol: 'Plenn Bakonnwa, Nip.', echo: 'The kind of place the maps forget and the diaspora never does.' }] },
    { id: 'lagonav', name: 'Lagonav (Ansagalè)', lat: 18.8342, lon: -72.8662, size: 12, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Zile ki bò zile a.', echo: 'The island beside the island — whose children know the water first.' }] },
    { id: 'jakmel', name: 'Jakmèl', lat: 18.2341, lon: -72.5345, size: 12, istwa: 5,
      fragments: [{ type: 'teks', kreyol: 'Pòt pent yo.', echo: 'The painters’ port — the first goodbye of the South-East.' }] },
    { id: 'okap', name: 'Okap', lat: 19.7580, lon: -72.2042, size: 13, istwa: 6,
      fragments: [{ type: 'teks', kreyol: 'Vye kapital Nò a — Vètyè la.', echo: 'The old capital of the North — Vertières is here.' }] },
    { id: 'gonayiv', name: 'Gonayiv', lat: 19.4456, lon: -72.6884, size: 12, istwa: 4,
      fragments: [{ type: 'teks', kreyol: '1804.', echo: 'Where independence was declared — and where the kanntè boats later sailed.' }] },
    { id: 'senmak', name: 'Senmak', lat: 19.1080, lon: -72.6939, size: 12, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Kote Jean Baptiste Point du Sable fèt.', echo: 'Birthplace of the wanderer who founded Chicago.' }] },
    { id: 'jeremi', name: 'Jeremi', lat: 18.6500, lon: -74.1167, size: 12, istwa: 4,
      fragments: [{ type: 'teks', kreyol: 'Vil powèt yo.', echo: 'The city of poets — the beginning of many departures.' }] },
    { id: 'okay', name: 'Okay', lat: 18.1933, lon: -73.7460, size: 12, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Gran Sid la.', echo: 'The great South, sender of generations.' }] },
    { id: 'miragwan', name: 'Miragwàn', lat: 18.4411, lon: -73.0883, size: 12, istwa: 4,
      fragments: [{ type: 'teks', kreyol: 'Bato yo te soti nan bè sa a.', echo: 'For decades the boats to Nassau and Florida left from this bay.' }] },
    { id: 'wanament', name: 'Wanament', lat: 19.5497, lon: -71.7264, size: 12, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Pas dlo a.', echo: 'The river crossing — the eastward road.' }] },
  ],

  // ---- ZANSÈT YO — ancestor stars, inside the inner sky ----
  zanset: [
    { id: 'grann', name: 'Grann', lat: 18.47, lon: -73.42, size: 20, istwa: 0,
      fragments: [
        { type: 'zanset', name: 'Grann', src: 'assets/portal/grann-konsey.mp3',
          body: 'She was the one who taught that a door is never just a door. You announce yourself; honor is asked; respect is granted; only then do you cross. Her branch grows from here — photographs, voice, proverbs, the towns she lived in, the people she raised.' },
      ] },
    { id: 'manman', name: 'Manman', lat: 18.66, lon: -72.12, size: 18, istwa: 0,
      fragments: [
        { type: 'zanset', name: 'Manman', body: '[Her story, her voice, her branch of the tree — assets to come.]' },
      ] },
    { id: 'papa', name: 'Papa', lat: 18.30, lon: -72.85, size: 18, istwa: 0,
      fragments: [
        { type: 'zanset', name: 'Papa', body: '[His story, his voice, his branch of the tree — assets to come.]' },
      ] },
  ],

  // ---- LÒT BÒ DLO — the diaspora ----
  places: [
    { id: 'tijuana', name: 'Tijuana', lat: 32.5149, lon: -117.0382, type: 'travay', size: 16, tone: 174, istwa: 6,
      fragments: [
        { type: 'fim', title: 'What Happens to a Dream Deferred', year: '2022',
          src: 'assets/places/tijuana/01-dream-deferred.mp4', vimeo: null },
        { type: 'vwa', label: 'nòt vokal WhatsApp — voice notes across a wall',
          src: 'assets/places/tijuana/02-whatsapp.mp3' },
        { type: 'teks', kreyol: 'Fontyè a se yon sal datant.', echo: 'The border is a waiting room.' },
      ] },

    { id: 'havana', name: 'La Havane', lat: 23.1136, lon: -82.3666, type: 'travay', size: 16, tone: 130, istwa: 5,
      fragments: [
        { type: 'fim', title: 'Una Sola Sangre', year: '2022',
          src: 'assets/places/havana/01-una-sola-sangre.mp4', vimeo: null },
        { type: 'teks', kreyol: 'Yon sèl san.', echo: 'One blood — familial memory across generations of cane.' },
      ] },

    { id: 'miami', name: 'Miami — Little Haiti', lat: 25.7617, lon: -80.1918, type: 'toude', size: 22, tone: 146, istwa: 18,
      souvni: '“Krome se te premye adrès anpil moun nan Miami.”',
      fragments: [
        { type: 'teks', kreyol: 'Ti Ayiti. Krome. Twazyèm Orizon.', echo: 'A community and a stage — and a wound (WelKrome).' },
        { type: 'fim', title: 'WelKrome — fragments (Third Horizon)', year: '2025',
          src: 'assets/places/miami/01-welkrome.mp4', vimeo: null },
      ] },

    { id: 'montreal', name: 'Montréal — Montréal-Nord', lat: 45.5017, lon: -73.5673, type: 'toude', size: 20, tone: 164, istwa: 12,
      fragments: [
        { type: 'fim', title: 'Choublak — exhibition documentation', year: '2024–25',
          src: 'assets/places/montreal/01-choublak.mp4', vimeo: null },
        { type: 'teks', kreyol: 'Monreyal-Nò, Sen-Michel.', echo: 'The francophone north of the diaspora — and Choublak at Leonard & Bina Ellen.' },
      ] },

    { id: 'toronto', name: 'Toronto', lat: 43.6532, lon: -79.3832, type: 'toude', size: 18, tone: 220, istwa: 6,
      fragments: [
        { type: 'fim', title: 'Kale Kann Kale', year: '2023', src: 'assets/places/toronto/01-kale-kann-kale.mp4', vimeo: null },
        { type: 'fim', title: 'The Marks Remember', year: '2023', src: 'assets/places/toronto/02-marks-remember.mp4', vimeo: null },
        { type: 'fim', title: 'Katherine', year: '2020', src: 'assets/places/toronto/03-katherine.mp4', vimeo: null },
        { type: 'teks', kreyol: 'Kote atis la ap anseye, ap travay.', echo: 'Where the artist teaches and works — where this sky is being dreamed.' },
      ] },

    { id: 'flatbush', name: 'Flatbush, Brooklyn', lat: 40.6526, lon: -73.9590, type: 'kominote', size: 24, tone: 110, istwa: 23,
      souvni: '“Sou Church Avenue, sant lakay mwen pa t janm lwen.”',
      fragments: [
        { type: 'teks', kreyol: 'Kè Ayisyen Nouyòk la.', echo: 'Flatbush and East Flatbush — the largest Haitian community in the U.S. Church Avenue, the botanikas, the radio.' },
        { type: 'vwa', label: 'radyo Flatbush — the dial between stations', src: 'assets/places/flatbush/01-radyo.mp3' },
      ] },

    { id: 'springfield', name: 'Springfield Gardens, Queens', lat: 40.6642, lon: -73.7590, type: 'kominote', size: 14, istwa: 6,
      fragments: [{ type: 'teks', kreyol: 'Koulwa Queens la.', echo: 'Springfield Gardens, Cambria Heights, Queens Village.' }] },
    { id: 'elmont', name: 'Elmont, NY', lat: 40.7009, lon: -73.7126, type: 'kominote', size: 14, istwa: 4,
      fragments: [{ type: 'teks', kreyol: 'Long Island.', echo: 'Where Brooklyn’s children bought houses and stayed.' }] },
    { id: 'springvalley', name: 'Spring Valley, NY', lat: 41.1132, lon: -74.0438, type: 'kominote', size: 14, istwa: 5,
      fragments: [{ type: 'teks', kreyol: 'Rockland.', echo: 'One of the densest Haitian communities in America — a lakou north of the city.' }] },
    { id: 'northmiami', name: 'North Miami', lat: 25.8901, lon: -80.1867, type: 'kominote', size: 15, istwa: 7,
      fragments: [{ type: 'teks', kreyol: 'Ti Ayiti k ap grandi monte nò.', echo: 'Little Haiti extended northward.' }] },

    { id: 'neworleans', name: 'New Orleans', lat: 29.9511, lon: -90.0715, type: 'kominote', size: 17, tone: 87, istwa: 9,
      souvni: '“My family has been here since the boats from Cuba. We never called it immigration.”',
      fragments: [
        { type: 'teks', kreyol: '1809 — dis mil moun rive nan bato.', echo: 'Ten thousand Saint-Domingue refugees doubled the city. The music, the food, the speech — the seed is two centuries deep in this soil.' },
      ] },
    { id: 'chicago', name: 'Chicago', lat: 41.8781, lon: -87.6298, type: 'kominote', size: 14, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Yon Ayisyen fonde vil sa a.', echo: 'Jean Baptiste Point du Sable, born in Saint-Marc — the wandering seed planted a metropolis.' }] },
    { id: 'boston', name: 'Boston — Mattapan', lat: 42.2771, lon: -71.0914, type: 'kominote', size: 16, istwa: 8,
      fragments: [{ type: 'teks', kreyol: 'Mattapan, Brockton.', echo: 'New England’s lakou.' }] },

    { id: 'santodomingo', name: 'Santo Domingo', lat: 18.4861, lon: -69.9312, type: 'kominote', size: 16, istwa: 10,
      fragments: [{ type: 'teks', kreyol: 'Lòt bò a ki pi pre a.', echo: 'The island shared and divided. The bateyes hold the oldest stories.' }] },
    { id: 'santiagocuba', name: 'Santiago de Cuba', lat: 20.0247, lon: -75.8219, type: 'kominote', size: 13, istwa: 4,
      fragments: [{ type: 'teks', kreyol: 'Pitit pitit koupè kann yo.', echo: 'Descendants of cane-cutters — tumba francesa still drums here.' }] },
    { id: 'nassau', name: 'Nassau', lat: 25.0443, lon: -77.3504, type: 'kominote', size: 14, tone: 196, istwa: 7,
      souvni: '“Papa m te janbe an 1979 sou yon vwalye.”',
      fragments: [{ type: 'teks', kreyol: 'Pas ki pi kout la, bato ki pi ansyen yo.', echo: 'The closest crossing, the oldest boats. One in ten residents has Haitian roots.' }] },
    { id: 'abaco', name: 'Marsh Harbour, Abaco', lat: 26.5412, lon: -77.0636, type: 'kominote', size: 11, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'The Mudd. Pigeon Peas.', echo: 'Built by Haitian hands, erased by Dorian in 2019. The stars remember what the storm took.' }] },
    { id: 'provo', name: 'Providenciales', lat: 21.7738, lon: -72.2719, type: 'kominote', size: 11, istwa: 2,
      fragments: [{ type: 'teks', kreyol: 'Prèske envizib.', echo: 'The islands’ largest minority, mostly unseen, holding up the whole economy.' }] },
    { id: 'guadeloupe', name: 'Pointe-à-Pitre', lat: 16.2415, lon: -61.5328, type: 'kominote', size: 11, istwa: 2,
      fragments: [{ type: 'teks', kreyol: 'Fanmi sou ak zile yo.', echo: 'Kin across the arc of islands.' }] },
    { id: 'cayenne', name: 'Cayenne', lat: 4.9224, lon: -52.3134, type: 'kominote', size: 12, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Gwiyàn.', echo: 'A newer route of the seed, through the forest’s edge.' }] },
    { id: 'santiagochile', name: 'Santiago (Chile)', lat: -33.4489, lon: -70.6693, type: 'kominote', size: 13, istwa: 5,
      fragments: [{ type: 'teks', kreyol: 'Quilicura — Ti Ayiti sid la.', echo: 'The long southern road after 2010.' }] },
    { id: 'saopaulo', name: 'São Paulo', lat: -23.5505, lon: -46.6333, type: 'kominote', size: 13, istwa: 4,
      fragments: [{ type: 'teks', kreyol: 'Yon kanpe ki te vin yon kay.', echo: 'A waystation that became a home, then a departure again — northward through the Darién.' }] },
    { id: 'tapachula', name: 'Tapachula', lat: 14.9059, lon: -92.2577, type: 'kominote', size: 12, istwa: 3,
      fragments: [{ type: 'teks', kreyol: 'Sal datant fontyè sid la.', echo: 'Mexico’s southern border — the waiting room of the northward road.' }] },
    { id: 'paris', name: 'Paris', lat: 48.8566, lon: 2.3522, type: 'kominote', size: 15, istwa: 6,
      fragments: [{ type: 'teks', kreyol: 'Sen-Deni, 18tèm.', echo: 'The old metropole; the community across the water.' }] },
  ],
};
