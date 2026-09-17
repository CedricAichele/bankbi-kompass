# Start und Veröffentlichung

## Lokal starten

Im Projektordner `start-bankbi-kompass.bat` doppelklicken und das Fenster offen lassen. Anschließend [BankBI Kompass](http://127.0.0.1:4173/bankbi-kompass/) öffnen. Voraussetzung: Node.js 22.18 oder neuer. Fehlende Abhängigkeiten und ein fehlender Build werden automatisch erstellt.

Der lokale Server wurde gestartet. Startseite, Power BI, Excel, IDA, typische Aufgaben, Suche sowie ein vorhandenes Beispielbild mit Vergrößerung wurden im Browser geprüft. Es wurden keine neuen Anwendungsinhalte oder Funktionen ergänzt.

## Veröffentlichungsstatus

- Origin: https://github.com/CedricAichele/bankbi-kompass.git
- Repository-Ziel: https://github.com/CedricAichele/bankbi-kompass
- Website-Ziel: https://cedricaichele.github.io/bankbi-kompass/
- Nicht gepusht, nicht veröffentlicht; öffentliche Website nicht als Deployment geprüft.
- Der verfügbare Browser ist bei GitHub abgemeldet und zeigt für das Repository 404. Ob es fehlt oder privat ist, lässt sich so nicht feststellen. Bei dieser Anmeldegrenze wurde gestoppt.
- Vorhandene Anwendungs- und Dokumentationscommits bleiben erhalten.

## Hier muss Cedric manuell übernehmen

1. [Bei GitHub anmelden](https://github.com/login), Konto **CedricAichele** verwenden und gegebenenfalls 2FA selbst abschließen.
2. Falls das Repository noch fehlt: [New repository](https://github.com/new) öffnen. Owner **CedricAichele**, Name **bankbi-kompass**, Sichtbarkeit **Public**. Kein README, keine Lizenz und keine .gitignore hinzufügen. **Create repository** anklicken. Ein bereits vorhandenes Repository nicht erneut anlegen.
3. Den lokalen Projektordner im Explorer öffnen und **Im Terminal öffnen** wählen. In PowerShell ausführen:

   ```powershell
   git -c safe.directory="$($PWD.Path.Replace('\','/'))" push -u origin main
   ```

   Falls Git eine Anmeldung öffnet, diese selbst abschließen. Bei einer Ablehnung wegen vorhandener Remote-Commits nicht mit Force-Push überschreiben.
4. Im Repository **Settings → Pages → Build and deployment → Source → GitHub Actions** auswählen.
5. **Actions → Prüfen und auf GitHub Pages veröffentlichen → Run workflow → Branch: main → Run workflow** anklicken. Auf erfolgreiche Jobs **build** und **deploy** warten. Der vorhandene Workflow erledigt die Prüfungen und Veröffentlichung.
6. [Die veröffentlichte Website](https://cedricaichele.github.io/bankbi-kompass/) öffnen und Startseite, Navigation sowie ein Beispielbild prüfen.

Technisch vorbereitet: Vite-Basis `/bankbi-kompass/`, HashRouter, statischer Build und Pages-Workflow. Frühere umfassende Prüfergebnisse stehen im [Qualitätsbericht](docs/QUALITAETSBERICHT.md); sie wurden für diese reine Start- und Übergabeänderung nicht erneut ausgeführt.
