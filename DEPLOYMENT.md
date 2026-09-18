# Start und Veröffentlichung

Lokal: Im Projektordner `npm ci`, `npm run build` und `npm run preview` ausführen. Alternativ den vorhandenen lokalen Starthelfer verwenden. Die Vorschau liegt unter http://127.0.0.1:4173/bankbi-kompass/.

## Ziel

- Repository: https://github.com/CedricAichele/bankbi-kompass
- Origin: https://github.com/CedricAichele/bankbi-kompass.git
- Branch: main
- Website: https://cedricaichele.github.io/bankbi-kompass/
- Vite-Basis: /bankbi-kompass/, Navigation über HashRouter.

## Aktueller Qualitätsdurchlauf · 18. September 2026

Anwendungscommit 72f9ac4d222182efd34120813106449e9f36614c erfolgreich auf main gepusht. GitHub Actions meldet den Lauf 35315704904 als erfolgreich abgeschlossen. Die öffentliche Website wurde anschließend geöffnet: neuer Umfang (26 Aufgaben), CSS, Navigation, Suche, XVERWEIS mit sieben Schritten, Bilder, Impressum und Datenschutz funktionieren. Frühere Repository-Zugriffsblocker sind behoben. Dieser Nachtrag ändert ausschließlich Dokumentation.

Der vorhandene Workflow prüft Installation, TypeScript, Tests, strikte Inhalte und Repository-Vertraulichkeit, baut die Website und veröffentlicht main auf GitHub Pages. Pages muss GitHub Actions als Quelle verwenden. Anmeldung, 2FA oder zusätzliche GitHub-Bestätigungen führt ausschließlich der Betreiber aus. Kein Force-Push.

Die noch offenen Betreiberangaben auf Impressum und Datenschutz sind in TODO.md dokumentiert. Aktuelle Prüfergebnisse und Grenzen: docs/QUALITAETSBERICHT.md.

Nachweis: https://github.com/CedricAichele/bankbi-kompass/actions/runs/35315704904
