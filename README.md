# Haus des Kiosks

Statische Website für den Kiosk in der Ungsteiner Str. 3, München (Giesing/Ramersdorf). Bewusst nur HTML, CSS und ein kleines JavaScript für die mobile Navigation – schnell, günstig und leicht zu pflegen.

## Veröffentlichung

Ein Push auf `main` startet `.github/workflows/pages.yml` und veröffentlicht die Website über GitHub Pages.

## Vor dem öffentlichen Start

- [x] Impressum mit echten Angaben (Zekeriya Karatas, Ungsteiner Str. 3, 81539 München, Telefon, E-Mail) ausgefüllt.
- [ ] Umsatzsteuer-ID / Gewerbeanmeldung im Impressum ergänzen, falls vorhanden bzw. erforderlich.
- [ ] DNS für `haus-des-kiosks.de` (und optional `www`) auf GitHub Pages umstellen – bisher zeigt die Domain auf Google Sites. Solange die DNS-Umstellung nicht erfolgt ist, bleibt die alte Seite live und diese hier ist nur über die `github.io`-URL erreichbar.
- [ ] In den Repo-Einstellungen unter **Settings → Pages** die Custom Domain `haus-des-kiosks.de` eintragen und "Enforce HTTPS" aktivieren, sobald das DNS-Zertifikat ausgestellt ist.

## Instagram

Der Instagram-Follow-Button und die Verlinkungen sind live und zeigen auf [@haus_des_kiosks](https://www.instagram.com/haus_des_kiosks/). Der "Instagram"-Abschnitt auf der Startseite (`#instagram`) enthält aktuell eine gestaltete Platzhalter-Kachel-Grafik statt echter Postings, da ein Live-Feed ohne Instagram-Login/API-Zugang (Meta Graph API) technisch nicht direkt in eine statische Seite eingebettet werden kann.

Um echte, sich automatisch aktualisierende Posts einzubinden, gibt es zwei Optionen:

1. **Kostenloser Embed-Dienst** (empfohlen, kein Programmieraufwand): z. B. [SnapWidget](https://snapwidget.com/) oder [Behold](https://behold.so/) – dort mit dem Instagram-Konto verbinden, Widget gestalten und den bereitgestellten `<iframe>`- bzw. `<script>`-Code in `index.html` an Stelle des `.insta-tiles`-Blocks einfügen.
2. **Manuell**: Screenshots der Lieblingsposts als Bilder in den `.insta-tiles`-Block einfügen und von Zeit zu Zeit aktualisieren.

## Karte

Die Kontaktkarte nutzt einen einbettbaren OpenStreetMap-Ausschnitt (kein API-Key nötig). Der "Route planen"-Button verlinkt auf Google Maps.
