# Start und Veröffentlichung

## Adressen und Konfiguration

- [Live-Version](https://cedricaichele.github.io/bankbi-kompass/)
- [Repository](https://github.com/CedricAichele/bankbi-kompass)
- Branch: main; Vite-Basis: /bankbi-kompass/; Direktlinks verwenden Hash-Routen.
- GitHub Pages verwendet GitHub Actions als Veröffentlichungsquelle.

GitHub Pages ist eingerichtet. Ein erfolgreiches Deployment ist durch [diesen Actions-Lauf vom 18. September 2026](https://github.com/CedricAichele/bankbi-kompass/actions/runs/35315704904) dokumentiert. Der öffentliche Stand entspricht dem zuletzt erfolgreich veröffentlichten Commit, nicht automatisch dem lokalen Arbeitsverzeichnis.

## Lokal prüfen

Im Projektordner npm ci, npm run build und npm run preview ausführen. Die Vorschau ist normalerweise unter http://127.0.0.1:4173/bankbi-kompass/ erreichbar. Für die Entwicklung npm run dev verwenden.

## Veröffentlichung auslösen

Ein Push auf main startet den vorhandenen Workflow. Er prüft TypeScript, Tests, strikte Inhalte und Repository-Vertraulichkeit, baut die Website und veröffentlicht ausschließlich den Build aus dist/. Pull Requests werden geprüft, aber nicht veröffentlicht. Der Workflow kann außerdem manuell gestartet werden.

Vor einem beauftragten Push Arbeitsverzeichnis und Origin prüfen. Anschließend den zugehörigen Lauf unter [GitHub Actions](https://github.com/CedricAichele/bankbi-kompass/actions) bis zum Ergebnis verfolgen und Startseite, CSS, Bilder und Navigation der Live-Version prüfen. Kein Force-Push; erforderliche Anmeldung oder 2FA führt der Betreiber aus.

## Offene Betreiberangaben

Impressum und Datenschutz enthalten noch ausdrücklich markierte Angaben, die der Betreiber vervollständigen muss. Die [offenen Punkte](TODO.md) sind getrennt vom technischen Deploymentstatus dokumentiert.
