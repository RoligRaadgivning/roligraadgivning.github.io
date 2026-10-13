# Chris Roliggaard – hjemmeside v6.2

Denne version samler den seneste Google Kalender-booking og det valgte portræt med den opdaterede positionering med fokus på jobsøgende og selvstændige og en mere fokuseret struktur. Den bevarer den eksisterende blå, mørke og limegrønne visuelle identitet.

## Filer
- `index.html` – kortere forside med det centrale budskab, målgrupper, CV-Rystetur som hovedcase og Google Kalender-booking.
- `sparring.html` – sparring for jobsøgende (førsteprioritet) og selvstændige (sekundær målgruppe).
- `eksempler.html` – CV-Rystetur som hovedcase, samt GRØN KBH og Folkekirkens Nødhjælp.
- `om-chris.html` – personlig tilgang, værdier og “Get shit done”-attitude.
- `styles.css` og `script.js` – fælles design og mobilnavigation.
- `chris-hero.png` – det valgte portræt til hero og Om Chris.
- `chris-social-share.jpg` – delingsbillede til LinkedIn/Open Graph, 1200 × 627 px.
- `chris-about.jpg` – beholdt som fil fra den forrige version; den nye Om-side bruger det valgte `chris-hero.png`.

## Publicering på GitHub Pages
1. Pak ZIP-filen ud.
2. Upload alle filer direkte til roden af repository `roligraadgivning.github.io`.
3. Erstat de eksisterende filer, herunder `index.html`, `styles.css` og `script.js`.
4. Sørg for, at alle tre nye undersider (`sparring.html`, `eksempler.html`, `om-chris.html`) også ligger i repository-roden.
5. Vent på GitHub Pages og test hjemmesiden på computer og mobil.

## Booking
- Google Calendar Appointment Scheduling er indlejret på forsiden.
- Booking-knapper fra undersider fører til `index.html#booking`.
- Bookingbeskrivelse før samtalen er frivillig; der er ikke tilføjet et ekstra obligatorisk felt på hjemmesiden.
- Google styrer indholdet inde i kalenderens iframe. På brede skærme beskæres den øverste del visuelt for at prioritere kalenderen; under 900 px vises hele kalenderen for at undgå at skære tider væk.
- Hvis kalenderen ikke vises korrekt, kan besøgende åbne bookingplanen direkte hos Google via fallback-linket.

## Deling på LinkedIn
- Forsiden bruger Open Graph-metadata for titel, beskrivelse, URL og `chris-social-share.jpg`.
- Efter publicering kan URL'en testes i LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- LinkedIn kan cache ældre metadata; kør URL'en gennem værktøjet igen efter ændringer.

## Indholdsmæssige principper
- Primær målgruppe: jobsøgende.
- Sekundær målgruppe: selvstændige.
- CV-Rystetur er et selvstændigt koncept og skal være gratis for deltagerne.
- Første samtale er gratis og afklarende; der loves ikke en færdig løsning på 30 minutter.
- Ingen priser eller endnu ikke definerede produktpakker er opfundet.
- Chris positioneres som personlig sparringspartner, ikke tekstforfatter, SEO-specialist eller traditionelt marketingbureau.


## Version 6.1
- Corrected the GRØN KBH case text to address the visitor directly and remove the internal-note phrasing.
- Simplified typography: one readable system font (Arial/Helvetica), one body-copy size, and one shared heading size.
- Preserved the Google Calendar embed, selected portrait, sharing image, Open Graph metadata, and all site pages.
