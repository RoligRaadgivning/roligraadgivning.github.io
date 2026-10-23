# Chris Roliggaard – hjemmeside v10.1

Denne udgave strammer personlig brand, performance og konvertering. Fokus er klarere value proposition, optimerede billeder (WebP + JPEG), bedre typografisk hierarki og mobil sticky CTA.

## Hvad er nyt i v10.0
- **Performance**: Alle billeder er resizet og konverteret til WebP (med JPEG-fallback). Samlet billedvægt er reduceret dramatisk.
- **Typografi**: Inter er genindført med tydeligt hierarki (større display-overskrifter).
- **Hero**: Skarpere formulering af, hvem Chris hjælper, og hvad man får.
- **Mobil**: Sticky CTA-bar i bunden, så “Tag en snak” altid er tilgængelig.
- **Cases**: Beholdt stærk struktur, optimerede billeder og klarere resultater.
- **Konsistens**: Ens versionering, font-loading og meta-tags på alle sider.

## Filer
- `index.html` – forside med anbefalinger, sparring-preview, fire eksempelkort, Om Chris-intro og bookingwidget.
- `sparring.html` – kort, klar præsentation af sparring.
- `eksempler.html` – CV-Rystetur (feature), GreenSpeak/GRØN KBH, ByBanzai og Aarhus Universitet.
- `om-chris.html` – tilgang og værdier.
- `styles.css` og `script.js` – fælles styling, mobilmenu, karrusel, bookingfaner og kontaktformular.
- Billeder: `.webp` (primær) + `.jpg` (fallback), med gennemsigtig PNG til portrættet på forsiden. `chris-social-share.jpg` til deling.

## Kalender og kontakt
- “Tag en snak” / “Book en samtale” fører til Google Kalender-widgetten.
- “Skriv til Chris” åbner forespørgselsfanen med kontaktformularen.
- Formularen åbner brugerens e-mail-app; hjemmesiden gemmer ikke data.

## Publicering
1. Upload **alle** filer fra denne mappe til roden af `roligraadgivning.github.io`.
2. Erstat eksisterende filer (inkl. de nye `.webp`-filer).
3. Behold `chris-social-share.jpg` til Open Graph.
4. Tjek forsiden, sparring, eksempler og om-chris på både computer og mobil efter publicering.
5. Verificér, at WebP-billeder loader (moderne browsere) og at JPEG-fallback fungerer.

## Tekniske noter
- CSS: ~18 KB (ren, uden unødvendige rester).
- JS: uændret logik, version bumpet.
- Billeder: hero ~50–75 KB WebP, øvrige typisk under 150 KB.
