---
{
  "id": "excel-csv-spalten",
  "slug": "excel-csv-spalten",
  "titel": "CSV in Excel: alles in einer Spalte – richtig trennen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten prüfen & bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Steht eine CSV komplett in Spalte A, wurde meist das Trennzeichen falsch erkannt. Importiere die Originaldatei über Aus Text/CSV oder trenne vorhandene Zeilen mit Text in Spalten.",
  "ort": "Excel für Windows → Daten → Aus Text/CSV oder Text in Spalten",
  "tags": [
    "CSV",
    "Export",
    "Reporting"
  ],
  "synonyme": [
    "csv alles in einer spalte",
    "csv in spalten trennen",
    "csv datei excel öffnen",
    "power bi csv excel",
    "komma semikolon",
    "text in spalten",
    "csv richtige tabelle"
  ],
  "verwandteThemen": [
    "power-bi-csv-export",
    "csv-import",
    "excel-zahl-text",
    "excel-datum"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files",
    "https://support.microsoft.com/en-us/excel/text-import-wizard"
  ],
  "screenshots": [],
  "praxis": true,
  "zuletztGeprueft": "2026-09-23"
}
---

## Wann brauche ich das?

Du öffnest einen CSV-Export aus Power BI oder einer anderen Auswertung und siehst statt mehrerer Spalten nur lange Zeilen in Spalte A. Das ist häufig ein Importproblem: CSV enthält Trennzeichen; Excel hat ein anderes Zeichen erwartet. Auch ein korrekt exportierter Bericht kann so aussehen.

## Voraussetzungen

Bewahre die Originaldatei unverändert auf und arbeite in einer neuen Arbeitsmappe. Der Klickweg gilt für Excel Desktop unter Windows; Menübezeichnungen können je Version abweichen. Nutze die Vorschau, um das tatsächliche Trennzeichen und Zahlenformat zu erkennen. Die Beispieldaten sind vollständig synthetisch.

## Schritte

1. Öffne eine **leere Excel-Arbeitsmappe**. Wähle **Daten → Aus Text/CSV**, gegebenenfalls **Daten → Daten abrufen → Aus Datei → Aus Text/CSV**. Wähle die ursprüngliche CSV, nicht eine bereits falsch gespeicherte Kopie.
2. Wähle in der Vorschau das passende **Trennzeichen**: beim Beispiel unten **Semikolon**; bei einer kommagetrennten Datei **Komma**. Es gibt keine für alle Exporte richtige Einstellung. Erst fortfahren, wenn jede Überschrift in einer eigenen Spalte steht. Nicht gleichzeitig wahllos mehrere Trennzeichen aktivieren.
3. Prüfe den **Dateiursprung / die Codierung**. UTF-8 passt, wenn die Quelle UTF-8 verwendet. Kontrolliere Umlaute. **Datentyperkennung → Datentypen nicht erkennen** wählen, sofern angeboten, anschließend **Daten transformieren**.
4. Im Power Query Editor die Kopfzeile prüfen und nur bei Bedarf **Erste Zeile als Überschriften verwenden**. Eine automatisch erzeugte **Geänderter Typ**-Umwandlung entfernen, wenn sie Kennungen bereits zu Zahlen gemacht hat. **Kundennummer zuerst als Text** festlegen. Dasselbe gilt für Kontonummern und andere Kennungen, auch wenn sie nur Ziffern enthalten.
5. **Produkt → Text**, **Bestand → Dezimalzahl**, **Stichtag → Datum** setzen. Bei Bestand und Stichtag über **Datentyp → Mit Gebietsschema…** für dieses Beispiel **Deutsch (Deutschland)** verwenden. Bei Punkt als Dezimalzeichen oder anderer Datumsreihenfolge das tatsächlich passende Gebietsschema wählen.
6. **Start → Schließen & laden → Schließen & laden in… → Tabelle → Neues Arbeitsblatt**. Kontrolliere Spalten, Kennungen und Summe wie unten beschrieben. Speichere die Arbeitsmappe als **.xlsx**, damit Tabelle, Abfrage und Formatierungen erhalten bleiben.
7. Bei später geänderter Quelldatei **Daten → Alle aktualisieren** und die Kontrollen wiederholen. Die bloße Dateiablage aktualisiert die Tabelle nicht. Für laufend neue Dateinamen nutze den [Ordnerimport](#/wissen/dateien-kombinieren).

## Beispiel

Vorher: Jede der folgenden Zeilen steht vollständig in einer Zelle der Spalte A. Das Beispiel verwendet bewusst Semikolon und deutsche Dezimalwerte; dein Power-BI-Export kann andere Trennzeichen verwenden.

~~~text
Kundennummer;Produkt;Bestand;Stichtag
00123;Giro;1250,50;31.01.2026
00124;Sparen;750,00;31.01.2026
~~~

Nachher: vier Spalten, zwei Datenzeilen und eine eigene Kopfzeile.

| Kundennummer (Text) | Produkt (Text) | Bestand (Zahl) | Stichtag (Datum) |
| --- | --- | ---: | --- |
| 00123 | Giro | 1.250,50 | 31.01.2026 |
| 00124 | Sparen | 750,00 | 31.01.2026 |

## Ergebnis

Die geladene Excel-Tabelle hat getrennte Felder und Filter in der Kopfzeile. Beide Kundennummern sind fünfstellig als Text erhalten; Bestand ist numerisch. In einer freien Zelle außerhalb der Tabelle ergibt **=SUMME(C2:C3)** **2.000,50**. **=ISTTEXT(A2)** und **=ISTZAHL(C2)** liefern jeweils **WAHR**.

## Alternative: bereits geöffnete CSV mit Text in Spalten trennen

Für eine einmalige Reparatur funktioniert auch **Daten → Text in Spalten**. Für wiederkehrende Lieferungen ist der Importweg oben besser geeignet, weil die Transformation gespeichert wird.

1. Lege ein separates Arbeitsblatt für die Reparatur an. Im Beispiel stehen Überschrift und beide Datenzeilen in **A1:A3**. Markiere diesen Bereich. Halte rechts davon genügend Zellen frei; vorhandene Inhalte dürfen nicht überschrieben werden.
2. **Daten → Text in Spalten → Getrennt → Weiter** wählen, nicht „Feste Breite“.
3. Nur das passende Trennzeichen aktivieren, hier **Semikolon**. Den **Textqualifizierer** auf doppelte Anführungszeichen setzen, wenn die CSV diese verwendet. Die Vorschau muss vier Spalten zeigen. „Aufeinanderfolgende Trennzeichen als ein Zeichen behandeln“ bei CSV mit möglichen leeren Feldern **nicht aktivieren**: zwei Semikolons können eine leere Spalte markieren.
4. **Weiter**: In der Vorschau die Kundennummer-Spalte anklicken und **Spaltendatenformat → Text** setzen, ebenso alle weiteren Kennungen. Produkt als Text, Stichtag als **Datum → TMJ** für dieses Beispiel. Bestand als **Standard**; unter **Weitere…** Dezimaltrennzeichen **Komma**, Tausendertrennzeichen **Punkt** passend zum Beispiel einstellen. Diese Zeichen bei anders formatierten Quellen anpassen.
5. Als **Zielbereich D1** wählen. D:G müssen leer sein. **Fertig stellen**. Jetzt stehen Kundennummer, Produkt, Bestand und Stichtag in D:G; A bleibt als Vergleich erhalten.
6. **D1:G3** markieren → **Einfügen → Tabelle** → **Tabelle hat Überschriften** aktivieren. Außerhalb der Tabelle mit **=SUMME(F2:F3)** die **2.000,50** prüfen. Danach als **.xlsx** speichern. Dieser Weg erzeugt keine automatische Verbindung zur ursprünglichen CSV.

Wenn Nullen oder lange Kennungen bereits beim Öffnen verloren beziehungsweise gerundet wurden, stellt nachträgliches Textformat die Originalwerte nicht wieder her. Dann die ursprüngliche CSV erneut mit festgelegtem Texttyp importieren.

## Warum funktioniert das?

Trennzeichen bestimmen die Spaltengrenzen; Datentypen bestimmen anschließend, wie die Werte interpretiert werden. Ein Dezimalkomma ist nicht automatisch ein Spaltentrenner. Bei kommagetrennten CSVs können Werte mit Kommas in Anführungszeichen stehen, etwa **"Muster, Nord"**. Der CSV-Import berücksichtigt diese Einfassung. Ersetze deshalb nicht pauschal alle Kommas durch Semikolons.

## Typischer Fehler

Die Datei per Doppelklick öffnen, alle Spalten als Standard übernehmen und nur die Optik korrigieren. So können Kundennummern ihre führenden Nullen verlieren oder Beträge Text bleiben. **Strg+T allein trennt keine CSV**: Zuerst Spalten korrekt importieren beziehungsweise aufteilen, dann die Tabelle anlegen. Das Umbenennen von .csv in .xlsx konvertiert ebenfalls keine Daten.

## Plausibilitätscheck

- Genau **4 Spalten und 2 Datenzeilen**; die Kopfzeile zählt nicht als Datenzeile.
- Kennungen **00123 und 00124**, keine gekürzten Zahlen 123 und 124.
- Bestand **1.250,50 + 750,00 = 2.000,50**; Datum in beiden Zeilen **31.01.2026**.
- Gegen den Power-BI-Export dieselbe Filterauswahl, denselben Stichtag und dieselbe Zeilenebene vergleichen. Ein anderes Aggregationsniveau ist kein Trennzeichenfehler.
- Bei Abweichungen: [Zahlen als Text prüfen](#/wissen/excel-zahl-text), [Datum korrigieren](#/wissen/excel-datum) oder [Exportabweichung eingrenzen](#/wissen/problem-export).
