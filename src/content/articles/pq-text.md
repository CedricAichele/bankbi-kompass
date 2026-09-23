---
{
  "id": "pq-text",
  "slug": "pq-text",
  "titel": "Text bereinigen, ersetzen und teilen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vereinheitliche Schreibweisen vor Gruppierung und Zuordnung. Zerlege zusammengesetzte Felder nur anhand einer klaren Trennregel.",
  "ort": "Power Query → Transformieren → Format",
  "tags": [
    "Text in Power Query bereinigen"
  ],
  "synonyme": [
    "Text bereinigen",
    "Werte ersetzen",
    "Spalten teilen",
    "Trim",
    "Clean",
    "Text vor Trennzeichen",
    "Text nach Trennzeichen",
    "text bereinigen power query",
    "Text in Power Query bereinigen"
  ],
  "verwandteThemen": [
    "nullwerte",
    "zusammenfuehren",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/replace-values",
    "https://learn.microsoft.com/en-us/power-query/split-columns-delimiter",
    "https://learn.microsoft.com/en-us/powerquery-m/text-functions"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Text in Power Query bereinigen",
      "caption": "Geplante Aufnahme: Power Query-Editor – Text in Power Query bereinigen",
      "schritt": 5,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Text bereinigen, ersetzen und teilen",
        "klickfolge": [
          "Originalspalte bei Bedarf in einer Prüf-Abfrage behalten. Betroffene Textspalte auswählen und **Transformieren → Format → Kürzen/Trim** für führende und nachgestellte Leerzeichen verwenden.",
          "**Bereinigen/Clean** entfernt nicht druckbare Zeichen. Es ersetzt nicht jede Form von Leerzeichen; geschützte Leerzeichen gesondert prüfen.",
          "Für Vergleichsschlüssel eine vereinbarte Groß-/Kleinschreibung anwenden, etwa **GROSSBUCHSTABEN** für Ortswerte. Schreibweisen nur vereinheitlichen, wenn sie fachlich gleichbedeutend sind.",
          "**Werte ersetzen** für bestätigte Varianten verwenden. Achte auf ganzen Zellinhalt statt unbeabsichtigtem Teiltext-Ersatz. Bei Platzhalter n/a für fehlende Daten echtes null statt Text \"null\" erzeugen.",
          "Enthält ein Feld mehrere Merkmale, **Spalte teilen → Nach Trennzeichen** verwenden. Festlegen, ob am ersten, letzten oder jedem Vorkommen geteilt wird. Für nur einen Teil **Extrahieren → Text vor/nach Trennzeichen** nutzen.",
          "Teile nur bei Bedarf mit **Spalten zusammenführen** und eindeutigem Trennzeichen wieder zusammen. Kontrolliere Mehrfachtrennzeichen, fehlende Teile und erhaltene Nullen."
        ],
        "daten": "### Vorher\n| Ort | Standortfeld |\n| --- | --- |\n| \" Mannheim \" | MA-01 |\n| \"MANNHEIM\" | MA-02 |\n| \"mannheim\" | MA-03 |\n\n### Aktion\nOrt trimmen, bereinigen und großschreiben. Standortfeld am Bindestrich in Ortcode und Standortnummer teilen; beide Teile als Text behalten.\n\n### Nachher\n| Ort | Ortcode | Standortnummer |\n| --- | --- | --- |\n| MANNHEIM | MA | 01 |\n| MANNHEIM | MA | 02 |\n| MANNHEIM | MA | 03 |\n\n**Bestätigter Platzhalter:** Table.ReplaceValue(Quelle, \"n/a\", null, Replacer.ReplaceValue, {\"Wert\"}) ersetzt ausschließlich den gesamten Textwert n/a durch echtes null. Erst danach den Zahlentyp setzen.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-pq-text.webp",
        "zweck": "Vereinheitliche Schreibweisen vor Gruppierung und Zuordnung. Zerlege zusammengesetzte Felder nur anhand einer klaren Trennregel.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    },
    {
      "src": "images/power-bi/pbi-text-bereinigen.webp",
      "alt": "Das Format-Menü enthält Kürzen und Bereinigen.",
      "caption": "Das Format-Menü enthält Kürzen und Bereinigen.",
      "schritt": 5,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen.",
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Vereinheitliche Schreibweisen vor Gruppierung und Zuordnung. Zerlege zusammengesetzte Felder nur anhand einer klaren Trennregel.

## Grundverständnis

Power Query speichert **Transformationsregeln für Spalten oder Tabellen**. Wählst du die Spalte Ort und wendest Trimmen und Großschreibung an, werden ihre Werte über die Zeilen des aktuellen Schritts verarbeitet: „ Mannheim “, „Mannheim“ und „mannheim“ werden zu dreimal MANNHEIM. Zeilenfilter und Gruppierungen verändern dagegen die Tabelle beziehungsweise deren Zeilenumfang.

Bei **Aktualisierung** werden die Regeln auf die dann eingelesenen Quelldaten angewendet. Die Vorschau ist keine manuell gepflegte Excel-Zellliste; die Quelldatei wird dadurch nicht direkt überschrieben. **Profiling der ersten 1000 Zeilen** begrenzt die statistische Vorschau, nicht automatisch die Transformation auf diese 1000 Zeilen.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Originalspalte bei Bedarf in einer Prüf-Abfrage behalten. Betroffene Textspalte auswählen und **Transformieren → Format → Kürzen/Trim** für führende und nachgestellte Leerzeichen verwenden.
2. **Bereinigen/Clean** entfernt nicht druckbare Zeichen. Es ersetzt nicht jede Form von Leerzeichen; geschützte Leerzeichen gesondert prüfen.
3. Für Vergleichsschlüssel eine vereinbarte Groß-/Kleinschreibung anwenden, etwa **GROSSBUCHSTABEN** für Ortswerte. Schreibweisen nur vereinheitlichen, wenn sie fachlich gleichbedeutend sind.
4. **Werte ersetzen** für bestätigte Varianten verwenden. Achte auf ganzen Zellinhalt statt unbeabsichtigtem Teiltext-Ersatz. Bei Platzhalter n/a für fehlende Daten echtes null statt Text "null" erzeugen.
5. Enthält ein Feld mehrere Merkmale, **Spalte teilen → Nach Trennzeichen** verwenden. Festlegen, ob am ersten, letzten oder jedem Vorkommen geteilt wird. Für nur einen Teil **Extrahieren → Text vor/nach Trennzeichen** nutzen.
6. Teile nur bei Bedarf mit **Spalten zusammenführen** und eindeutigem Trennzeichen wieder zusammen. Kontrolliere Mehrfachtrennzeichen, fehlende Teile und erhaltene Nullen.

## Beispiel

### Vorher
| Ort | Standortfeld |
| --- | --- |
| " Mannheim " | MA-01 |
| "MANNHEIM" | MA-02 |
| "mannheim" | MA-03 |

### Aktion
Ort trimmen, bereinigen und großschreiben. Standortfeld am Bindestrich in Ortcode und Standortnummer teilen; beide Teile als Text behalten.

### Nachher
| Ort | Ortcode | Standortnummer |
| --- | --- | --- |
| MANNHEIM | MA | 01 |
| MANNHEIM | MA | 02 |
| MANNHEIM | MA | 03 |

**Bestätigter Platzhalter:** Table.ReplaceValue(Quelle, "n/a", null, Replacer.ReplaceValue, {"Wert"}) ersetzt ausschließlich den gesamten Textwert n/a durch echtes null. Erst danach den Zahlentyp setzen.

## Ergebnis

Einheitliche Ortswerte ermöglichen konsistente Vergleiche. Ortcode und Standortnummer stehen als getrennte Textfelder bereit.

## Warum funktioniert das?

Unterschiedliche Schreibweisen können getrennte Gruppen oder fehlende Join-Treffer erzeugen. Trim und Clean lösen unterschiedliche Probleme; keine der beiden Funktionen versteht automatisch fachliche Synonyme.

## Typischer Fehler

Teiltext ersetzen und dadurch gültige Namen verändern; nach einer Aufteilung Kennungen automatisch in Zahlen umwandeln.

## Plausibilitätscheck

Drei Zeilen bleiben drei Zeilen, Ort hat einen verschiedenen Wert, Standortnummer behält zwei Zeichen. Jede ersetzte Variante ist fachlich bestätigt.

## Passender M-Code

[Text.Trim, Text.Clean und Text.Upper: Beispiel, Ergebnis und Anpassung](#/wissen/power-query-m?gruppe=Text) in der praktischen M-Referenz.
