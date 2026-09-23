---
{
  "id": "dateien-kombinieren",
  "slug": "dateien-kombinieren",
  "titel": "Wiederkehrende Dateien automatisch einlesen – Ordnerimport",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten importieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Einmal verbinden und aufbereiten, künftig nur neue gleich strukturierte Dateien ablegen: Der Ordner-Connector übernimmt passende Dateien bei der nächsten Aktualisierung.",
  "ort": "Power BI Desktop → Start → Daten abrufen → Ordner → Kombinieren und transformieren",
  "tags": [
    "Mehrere Dateien kombinieren",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen",
    "Mehrere Dateien kombinieren",
    "neue datei automatisch",
    "monatliche datei",
    "neue excel datei",
    "ordner power bi",
    "dateien automatisch einlesen",
    "bericht automatisch aktualisieren",
    "immer neue dateien",
    "monatliche dateien kombinieren",
    "dateien in ordner legen",
    "neue datei refresh",
    "folder connector"
  ],
  "verwandteThemen": [
    "anhaengen",
    "pq-fehler",
    "pq-laden",
    "pq-workflow",
    "power-query-m"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/folder",
    "https://learn.microsoft.com/en-us/power-query/combine-files-overview",
    "https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data",
    "https://learn.microsoft.com/en-us/power-query/connectors/sharepoint-folder"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Importdialog – Mehrere Dateien kombinieren",
      "caption": "Geplante Aufnahme: Importdialog – Mehrere Dateien kombinieren",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Importdialog – Mehrere Dateien kombinieren",
        "klickfolge": [
          "Prüfe den Ordner: Dateien müssen denselben fachlichen Aufbau, passende Spaltennamen und ein kompatibles Format besitzen. Entferne keine Originaldateien; schließe unpassende Dateien in der Abfrage aus.",
          "Wähle **Start → Daten abrufen → Ordner** und den Ordner, der die zu kombinierenden Dateien enthält.",
          "Wähle **Daten transformieren**. Filtere die Dateiliste nach Erweiterung, Ordnerpfad und bei Bedarf Namen; schließe temporäre Dateien aus.",
          "Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich."
        ],
        "daten": "Bestand_2026-01.xlsx und Bestand_2026-02.xlsx enthalten jeweils die Tabelle Monatsbestand mit Kundennummer, Produkt, Bestand, Stichtag; je zwei synthetische Zeilen wie im Artikel.",
        "sichtbar": [
          "Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.",
          "Spaltenüberschriften und zugehörige Ausgangswerte"
        ],
        "ausschnitt": "Importdialog – Mehrere Dateien kombinieren mit Passende XLSX-Dateien filtern und die Tabelle Monatsbestand kombinieren., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-dateien-kombinieren.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Du bekommst regelmäßig eine neue Datei mit gleichem Aufbau und möchtest die Power-BI-Datei nicht jeden Monat umbauen. Ein fester Ordner wird zur Quelle. Neue Datei ablegen → Aktualisierung ausführen → passende neue Datei wird verarbeitet. Power BI überwacht den Ordner nicht laufend.

## Voraussetzungen

- Alle Lieferungen haben dasselbe Dateiformat, hier .xlsx, und dieselben relevanten Spalten mit kompatiblen Datentypen.
- Jede Arbeitsmappe enthält die strukturierte Excel-Tabelle **Monatsbestand** mit **Kundennummer | Produkt | Bestand | Stichtag**. Falls du stattdessen ein Arbeitsblatt auswählst, müssen dessen Name und Aufbau ebenfalls konsistent sein.
- Januar und Februar mit Kundennummer/Produkt/Bestand passen zusammen. März mit Kunden-ID/Produktname/Saldo passt nicht zur bisherigen Transformation: erst die Abweichung klären.
- Pro Monat genau eine freigegebene Lieferung. Ersetzungen und Korrekturen bewusst organisieren, damit Original und Kopie nicht doppelt einfließen.
- Der Ordner bleibt erreichbar; Zugriff und fachliche Bedeutung des Stichtags sind geklärt.

## Schritte

1. Lege einen festen Ordner an, beispielsweise **Monatsbestand**, und lege die gleich aufgebauten Monatsdateien hinein. Öffne eine repräsentative Datei und prüfe Tabelle, Spalten und Typen.
2. In Power BI Desktop: **Start → Daten abrufen → Ordner → Ordnerpfad auswählen**. In Excel: **Daten → Daten abrufen → Aus Datei → Aus Ordner**.
3. Prüfe die Dateiliste einschließlich **Extension**, **Name** und **Folder Path**. Sind alle Dateien passend, wähle **Kombinieren und transformieren**. Müssen Dateien ausgeschlossen werden, wähle zuerst **Daten transformieren** und filtere vor dem Kombinieren: Extension = .xlsx, Name beginnt mit Bestand_, nur der gewünschte Folder Path. Temporäre Dateien wie ~$Bestand_2026-01.xlsx, Testdateien und Sicherungskopien ausschließen. Der Präfix allein erkennt keine passend benannte Sicherungskopie.
4. Im Filterweg klicke anschließend auf **Dateien kombinieren** im Kopf der Spalte Content. Wähle die Beispieldatei und darin die Tabelle **Monatsbestand**. Nicht nur einen einzelnen Binary-Wert öffnen: Das navigiert zu einer Datei, statt alle zu kombinieren.
5. Bearbeite **Beispieldatei transformieren / Transform Sample File**: richtige Tabelle beziehungsweise richtiges Arbeitsblatt auswählen, Überschriften kontrollieren, unnötige Spalten entfernen und weitere Bereinigung definieren. Bei einer strukturierten Excel-Tabelle sind Überschriften bereits vorhanden; nicht versehentlich die erste Datenzeile zu Überschriften machen.
6. Setze die Datentypen: Kundennummer und Produkt als Text, Bestand als passende Zahl, Stichtag als Datum. Prüfe auch automatisch erzeugte Typ-Schritte in der finalen Abfrage. Behalte den Quelldateinamen, oft Source.Name, optional zur Nachverfolgung.
7. Prüfe die kombinierte Tabelle: verarbeitete Dateien, Zeilen je Datei, Stichtage, Schlüssel und Fehlerwerte. Lade erst danach: **Power BI → Schließen & übernehmen**; **Excel → Schließen & laden** beziehungsweise **Schließen & laden in…** für das gewünschte Ziel.
8. Lege später die nächste gleich strukturierte Datei in denselben Ordner. Wähle in Power BI Desktop **Start → Aktualisieren**, in Excel **Daten → Alle aktualisieren** oder aktualisiere gezielt die einzelne Abfrage. Prüfe die hinzugekommenen Daten mit denselben Kontrollen. Es sind keine neuen Power-Query-Schritte nötig, solange Schema und Filter passen.

## Beispiel

### Praxisbox: Monatliche Dateien

Ordner **/Monatsbestand/**. Jede Datei enthält die Excel-Tabelle Monatsbestand und genau diese vier Spalten. Alle Werte sind synthetisch.

| Datei | Kundennummer | Produkt | Bestand | Stichtag |
| --- | --- | --- | ---: | --- |
| Bestand_2026-01.xlsx | K001 | A | 100 | 31.01.2026 |
| Bestand_2026-01.xlsx | K002 | B | 200 | 31.01.2026 |
| Bestand_2026-02.xlsx | K001 | A | 110 | 28.02.2026 |
| Bestand_2026-02.xlsx | K002 | B | 210 | 28.02.2026 |
| Bestand_2026-03.xlsx | K001 | A | 120 | 31.03.2026 |
| Bestand_2026-03.xlsx | K002 | B | 220 | 31.03.2026 |

Die Spalte Datei ist hier eine Erläuterung zur Herkunft; in den Quelldaten stehen nur Kundennummer, Produkt, Bestand und Stichtag. Der Import kann den Dateinamen zusätzlich beibehalten.

Zunächst liegen Januar und Februar im Ordner: **2 Dateien, 4 Zeilen**. Nach Ablage von März verändert sich der geladene Bericht zunächst nicht. Erst **Aktualisieren** verarbeitet März: **3 Dateien, 6 Zeilen**, neuer Stichtag 31.03.2026.

Im April kommt **Bestand_2026-04.xlsx** hinzu, mit K001/A/130/30.04.2026 und K002/B/230/30.04.2026. Ablauf: Datei ablegen → Aktualisieren → kontrollieren. Erwartet: **4 Dateien, 8 Zeilen**, davon **2 neue Zeilen**, Stichtag 30.04.2026 und April-Bestand **360**. Keine zusätzliche Abfrage und keine neuen Transformationsschritte nötig. Ein Berichtsfilter muss April natürlich ebenfalls zulassen.

## Ergebnis

Eine kombinierte Tabelle enthält die Monatslieferungen. Januar ergibt 300, Februar 320, März 340 und April 360. **Bestände verschiedener Stichtage nicht zu einem aktuellen Gesamtbestand addieren.** Kundennummer allein ist hier nicht eindeutig: Die Beispielgranularität lautet Kundennummer + Produkt + Stichtag.

## Warum funktioniert das?

Power Query liest bei der Aktualisierung die passende Dateiliste erneut und wendet dieselbe Transformationsfunktion auf jede Datei an. Die Ergebnisse werden untereinander angehängt. Das ist kein dauerhaftes Archiv in Power BI: Wird eine Quelldatei entfernt, können deren Zeilen beim nächsten vollständigen Aktualisieren wieder verschwinden.

## Beispieldatei und Hilfsabfragen verstehen

| Bestandteil | Aufgabe |
| --- | --- |
| Beispieldatei / Sample File | Liefert eine repräsentative Datei als Vorlage. |
| Beispieldatei transformieren / Transform Sample File | Enthält die Aufbereitung für eine einzelne Datei. Hier die gemeinsame Bereinigung bearbeiten. |
| Transformationsfunktion | Nimmt jeweils einen Dateiinhalt entgegen und führt die abgeleiteten Schritte aus. |
| Parameter und weitere Hilfsabfragen | Verbinden Dateiinhalt, Beispieldatei und Funktion. Namen können variieren; nicht unüberlegt löschen. |
| Finale kombinierte Tabelle | Wendet die Funktion auf die gefilterten Dateien an und führt die Ergebnisse zusammen. |

**Änderungen an der Transformation der Beispieldatei wirken sich auf alle kombinierten Dateien aus.** Danach auch Erweiterungs- und Typ-Schritte der finalen Abfrage prüfen. Spaltenänderungen können dort Anpassungen benötigen. Für den Einstieg musst du die erzeugte Funktion nicht selbst in M schreiben.

## Ordnerinhalt und Unterordner

Der Ordner-Connector kann Dateien aus Unterordnern erfassen. Ein Unterordner Archiv ist daher nicht automatisch ausgeschlossen. Prüfe Folder Path und filtere bei Bedarf auf den exakten gewünschten Pfad. Vor dem Kombinieren nach Dateiendung, Namen und Ordnerpfad filtern. Eine feste Regel für zulässige Dateinamen ist zuverlässiger als nachträgliches Entfernen fehlerhafter Datensätze. Fehlerhafte Dateien nicht still mit „Dateien mit Fehlern überspringen“ ausblenden.

## Dateiname als Information

Name, Extension und Folder Path stehen in der Dateiliste zur Verfügung. Der Dateiname kann als Source.Name in der kombinierten Tabelle erhalten bleiben. Bei garantiertem Schema Bestand_2026-01.xlsx lässt sich daraus Januar 2026 ableiten. Ein Dateimonat ist jedoch noch kein fachlicher Stichtag: Monatsende oder andere Gültigkeit erst fachlich festlegen. **Besser ist ein verlässlicher Stichtag direkt in den Quelldaten.** Bei Ausnahmen im Dateinamen nicht ungeprüft ableiten. [Textfunktionen nachschlagen](#/wissen/power-query-m).

## Warum funktioniert eine neue Datei plötzlich nicht?

| Mögliche Ursache | Kurzer Prüfhinweis |
| --- | --- |
| Spaltenname geändert | Überschriften exakt mit der Beispieldatei vergleichen, einschließlich Leerzeichen. |
| Tabellenname geändert | In Excel den Namen der strukturierten Tabelle prüfen; Navigation erwartet hier Monatsbestand. |
| Arbeitsblatt umbenannt | Bei Blattnavigation den ausgewählten Blattnamen mit der neuen Datei vergleichen. |
| Zusätzliche Kopfzeilen | Vorschau vor dem Überschriften-Schritt prüfen: Titel oder Leerzeilen neu hinzugekommen? |
| Andere Datentypen | Ersten fehlerhaften Typ-Schritt und Gebietsschema prüfen, etwa Text statt Zahl. |
| Datei beschädigt | Die einzelne Datei direkt in Excel öffnen und eine intakte Lieferung anfordern. |
| Andere Dateiendung | Extension-Filter und tatsächliches Format prüfen; .csv ist kein austauschbares .xlsx. |
| Spalte fehlt | Pflichtspalten mit der Vorlage vergleichen; auch unerwartete null-Werte kontrollieren. |
| Strukturierter Tabellenbereich fehlt | Ist die Liste eine benannte Excel-Tabelle oder nur ein Zellbereich? Erwartete Tabelle wieder bereitstellen lassen. |
| Temporäre Excel-Datei eingelesen | Dateiliste auf ~$ prüfen und temporäre Dateien vor dem Kombinieren ausschließen. |
| Quellpfad geändert | Quellschritt beziehungsweise Datenquelleneinstellungen prüfen und Pfad aktualisieren. |

## Quellordner verschoben oder umbenannt

Ein alter Pfad findet einen umbenannten Ordner nicht mehr. In Power Query unter **Start → Datenquelleneinstellungen → Quelle ändern** beziehungsweise am **Quellschritt** den neuen Pfad setzen, etwa C:\Daten\Monatsdateien\. Auch einen eventuell gesetzten Folder-Path-Filter anpassen und Zugriffsberechtigungen prüfen. Danach Vorschau und Bericht aktualisieren.

## Lokal, SharePoint und Aktualisierung

Für lokale Arbeit passt der Ordner-Connector. Für gemeinsam bereitgestellte Dateien kann **SharePoint Folder / SharePoint-Ordner** geeigneter sein. Ein lokal synchronisierter OneDrive-Ordner, der über seinen lokalen Pfad verbunden wird, bleibt für die Abfrage eine lokale Ordnerquelle.

**Excel:** Daten → Alle aktualisieren oder einzelne Abfrage aktualisieren; Abschluss im Editor über Schließen & laden beziehungsweise Schließen & laden in….

**Power BI Desktop:** manuell über Start → Aktualisieren. Eine Datei nur abzulegen aktualisiert den geladenen Bericht nicht.

**Power BI Service:** Geplante Aktualisierung muss eingerichtet sein und hängt von Quelle, Berechtigungen und Infrastruktur ab. Für einen lokalen beziehungsweise on-premises Ordner ist bei Online-Aktualisierung in der Regel ein erreichbares Gateway mit Zugriff auf diesen Ordner nötig. Hochladen der PBIX-Datei allein schafft diesen Zugriff nicht. Details: [Microsoft zur Datenaktualisierung](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data).

## Typischer Fehler

Alle Dateien ungefiltert kombinieren oder erwarten, dass eine neu abgelegte Datei sofort im Bericht erscheint. Erst den gewünschten Dateiumfang festlegen, dann kombinieren und nach jeder neuen Lieferung aktualisieren und kontrollieren.

## Plausibilitätscheck

- Wie viele Dateien zeigt die gefilterte Dateiliste? Im April vier. Mit einer Gruppierung nach Quelldatei prüfen, welche tatsächlich Zeilen geliefert haben; eine leere Datei kann sonst unbemerkt bleiben.
- Wie viele Zeilen je Datei und insgesamt? Hier jeweils zwei, im April insgesamt acht und zwei mehr als vorher.
- Ist der neue Stichtag vorhanden und stimmen dessen Werte? April: 30.04.2026 und Bestand 360.
- Fehlen erwartete Spalten oder treten neue Fehlerwerte beziehungsweise unerwartete null-Werte auf? Profiling möglichst auf den gesamten Datensatz anwenden.
- Wurde versehentlich nur eine Beispieldatei statt aller Dateien geladen?
- Gibt es Dubletten auf Kundennummer + Produkt + Stichtag, etwa durch eine Sicherungskopie?
- Sind Berichtsfilter aktuell und Bestände nur innerhalb des gewählten Stichtags summiert?
