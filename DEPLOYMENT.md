# Deployment

- Repository-Ziel: https://github.com/CedricAichele/bankbi-kompass
- Website-Ziel: https://cedricaichele.github.io/bankbi-kompass/
- Stand: 17. September 2026
- Status: lokal geprüft; nicht gepusht und nicht veröffentlicht.
- Branch: main. Commit wird nach Abschluss aller lokalen Prüfungen eingetragen.

## Konkreter Blocker

Der GitHub-Connector ist als CedricAichele verbunden, liefert für das Zielrepository aber 404. Auch Git ls-remote meldet Repository not found. Der tatsächliche Browseraufruf zeigt GitHubs 404-Seite und einen Sign-in-Link. Aus 404 lässt sich nicht unterscheiden, ob das Repository fehlt oder für die vorhandene Autorisierung nicht freigegeben ist. Es wurde keine Anmeldung, 2FA oder Sicherheitsbestätigung automatisiert.

## Vom Betreiber zu erledigen

1. Bei GitHub anmelden und gegebenenfalls 2FA selbst abschließen.
2. CedricAichele/bankbi-kompass anlegen, falls es noch nicht existiert, oder dem verwendeten Git-/Connector-Zugang dieses Repository freigeben. Keine vorhandenen Inhalte überschreiben.
3. Öffentliche Betreiber- und Hostingangaben vervollständigen.
4. In den Repository-Einstellungen Pages als GitHub-Actions-Deployment konfigurieren. Änderungen auf main pushen, nachdem ein bestehendes Remote geprüft und gegebenenfalls abgeglichen wurde.
5. Den Workflow bis zum erfolgreichen Pages-Deployment verfolgen und anschließend die Website tatsächlich im Browser prüfen.

## Technische Vorbereitung

Vite-Basis /bankbi-kompass/, HashRouter, statischer dist-Build. Der vorhandene Workflow prüft TypeScript, Tests, strikte Inhalte und Repository-Vertraulichkeit; danach baut er und deployt main über die offiziellen Pages-Actions. Pull Requests werden geprüft, aber nicht veröffentlicht.

Lokale Prüfungen und bekannte Grenzen: [docs/QUALITAETSBERICHT.md](docs/QUALITAETSBERICHT.md). Eine erfolgreiche lokale Vorschau ist kein Nachweis eines erfolgreichen öffentlichen Deployments. Die Online-Anwendung wurde nicht als veröffentlichter Build geprüft.
